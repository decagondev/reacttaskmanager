# Task Manager API

## Testing
- **Create the user** `curl -X POST -H "Content-Type: application/json" -d '{"username": "tom", "password": "asdfasdf", "roleId": "1"}' http://localhost:3000/api/users`
- **Login with the user** `curl -X POST -H "Content-Type: application/json" -d '{"username": "tom", "password": "asdfasdf"}' http://localhost:3000/api/users/login`
- **Create Task** `curl -X POST http://localhost:3000/api/tasks -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcxMjAwNTc2OX0.2pPv0xutWA4egsT_2OQ-0CJf6S1TDjzxoAEvcSUpo9c" -d '{"title": "Complete Project Proposal", "description": "Write a detailed project proposal document", "status": "Todo", "deadline": "2024-04-10"}'`
- **Get Tasks By User** `curl -X GET http://localhost:3000/api/tasks -H "Authorization: Bearer yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcxMjAwNTc2OX0.2pPv0xutWA4egsT_2OQ-0CJf6S1TDjzxoAEvcSUpo9c"`