import React from 'react';

function UpdateTaskStatus({ task }) {
  const handleStatusChange = async (newStatus) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`http://localhost:3000/api/tasks/${task.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus }),
      });
      if (response.ok) {
        console.log('Task status updated successfully');
      } else {
        console.error('Failed to update task status');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <button onClick={() => handleStatusChange('Todo')}>Todo</button>
      <button onClick={() => handleStatusChange('In Progress')}>In Progress</button>
      <button onClick={() => handleStatusChange('Completed')}>Completed</button>
    </div>
  );
}

export default UpdateTaskStatus;
