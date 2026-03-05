Nguyen Tho Phat /2280602310
# chieut5-3-5

## CRUD API for Roles and Users

This is a simple Express.js API providing CRUD operations for roles and users, plus an endpoint to get users by role.

### Installation

1. Install Node.js if not already installed.
2. Run `npm install` to install dependencies.

### Running the Server

Run `npm start` to start the server on port 3000.

### API Endpoints

#### Roles
- GET /roles - Get all roles
- GET /roles/:id - Get role by ID
- POST /roles - Create a new role (body: {name, description})
- PUT /roles/:id - Update role by ID
- DELETE /roles/:id - Delete role by ID

#### Users
- GET /users - Get all users
- GET /users/:username - Get user by username
- POST /users - Create a new user (body: {username, password, email, fullName, avatarUrl, status, loginCount, role: {id, name, description}})
- PUT /users/:username - Update user by username
- DELETE /users/:username - Delete user by username

#### Additional
- GET /roles/:id/users - Get all users in a specific role

### Testing

Use tools like Postman or curl to test the endpoints.

For example, to create a role:
POST http://localhost:3000/roles
Content-Type: application/json

{
  "name": "New Role",
  "description": "Description"
}

To create a user:
POST http://localhost:3000/users
Content-Type: application/json

{
  "username": "newuser",
  "password": "123456",
  "email": "newuser@gmail.com",
  "fullName": "New User",
  "avatarUrl": "https://i.sstatic.net/l60Hf.png",
  "status": true,
  "loginCount": 0,
  "role": {
    "id": "r1",
    "name": "Quản trị viên",
    "description": "Toàn quyền quản lý hệ thống"
  }
}
