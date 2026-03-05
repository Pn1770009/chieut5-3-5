const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let dataRole = [
  {
    "id": "r1",
    "name": "Quản trị viên",
    "description": "Toàn quyền quản lý hệ thống",
    "creationAt": "2026-03-04T08:00:00.000Z",
    "updatedAt": "2026-03-04T08:00:00.000Z"
  },
  {
    "id": "r2",
    "name": "Biên tập viên",
    "description": "Quản lý nội dung và dữ liệu",
    "creationAt": "2026-03-04T08:00:00.000Z",
    "updatedAt": "2026-03-04T08:00:00.000Z"
  },
  {
    "id": "r3",
    "name": "Người dùng",
    "description": "Tài khoản người dùng thông thường",
    "creationAt": "2026-03-04T08:00:00.000Z",
    "updatedAt": "2026-03-04T08:00:00.000Z"
  }
];

let dataUser = [
  {
    "username": "nguyenvana",
    "password": "123456",
    "email": "vana@gmail.com",
    "fullName": "Nguyễn Văn A",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 15,
    "role": {
      "id": "r1",
      "name": "Quản trị viên",
      "description": "Toàn quyền quản lý hệ thống"
    },
    "creationAt": "2026-03-04T08:10:00.000Z",
    "updatedAt": "2026-03-04T08:10:00.000Z"
  },
  {
    "username": "tranthib",
    "password": "123456",
    "email": "thib@gmail.com",
    "fullName": "Trần Thị B",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 7,
    "role": {
      "id": "r2",
      "name": "Biên tập viên",
      "description": "Quản lý nội dung và dữ liệu"
    },
    "creationAt": "2026-03-04T08:11:00.000Z",
    "updatedAt": "2026-03-04T08:11:00.000Z"
  },
  {
    "username": "levanc",
    "password": "123456",
    "email": "vanc@gmail.com",
    "fullName": "Lê Văn C",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 3,
    "role": {
      "id": "r3",
      "name": "Người dùng",
      "description": "Tài khoản người dùng thông thường"
    },
    "creationAt": "2026-03-04T08:12:00.000Z",
    "updatedAt": "2026-03-04T08:12:00.000Z"
  },
  {
    "username": "phamthid",
    "password": "123456",
    "email": "thid@gmail.com",
    "fullName": "Phạm Thị D",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": false,
    "loginCount": 0,
    "role": {
      "id": "r3",
      "name": "Người dùng",
      "description": "Tài khoản người dùng thông thường"
    },
    "creationAt": "2026-03-04T08:13:00.000Z",
    "updatedAt": "2026-03-04T08:13:00.000Z"
  },
  {
    "username": "hoanganh",
    "password": "123456",
    "email": "anh@gmail.com",
    "fullName": "Hoàng Anh",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 2,
    "role": {
      "id": "r3",
      "name": "Người dùng",
      "description": "Tài khoản người dùng thông thường"
    },
    "creationAt": "2026-03-04T08:14:00.000Z",
    "updatedAt": "2026-03-04T08:14:00.000Z"
  },
  {
    "username": "dangminh",
    "password": "123456",
    "email": "minh@gmail.com",
    "fullName": "Đặng Minh",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 9,
    "role": {
      "id": "r2",
      "name": "Biên tập viên",
      "description": "Quản lý nội dung và dữ liệu"
    },
    "creationAt": "2026-03-04T08:15:00.000Z",
    "updatedAt": "2026-03-04T08:15:00.000Z"
  },
  {
    "username": "phamkhoa",
    "password": "123456",
    "email": "khoa@gmail.com",
    "fullName": "Phạm Quốc Khoa",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 1,
    "role": {
      "id": "r3",
      "name": "Người dùng",
      "description": "Tài khoản người dùng thông thường"
    },
    "creationAt": "2026-03-04T08:16:00.000Z",
    "updatedAt": "2026-03-04T08:16:00.000Z"
  },
  {
    "username": "truonglinh",
    "password": "123456",
    "email": "linh@gmail.com",
    "fullName": "Trương Linh",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": false,
    "loginCount": 0,
    "role": {
      "id": "r3",
      "name": "Người dùng",
      "description": "Tài khoản người dùng thông thường"
    },
    "creationAt": "2026-03-04T08:17:00.000Z",
    "updatedAt": "2026-03-04T08:17:00.000Z"
  },
  {
    "username": "doquang",
    "password": "123456",
    "email": "quang@gmail.com",
    "fullName": "Đỗ Quang",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 4,
    "role": {
      "id": "r2",
      "name": "Biên tập viên",
      "description": "Quản lý nội dung và dữ liệu"
    },
    "creationAt": "2026-03-04T08:18:00.000Z",
    "updatedAt": "2026-03-04T08:18:00.000Z"
  },
  {
    "username": "ngocanh",
    "password": "123456",
    "email": "ngocanh@gmail.com",
    "fullName": "Ngọc Anh",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 6,
    "role": {
      "id": "r1",
      "name": "Quản trị viên",
      "description": "Toàn quyền quản lý hệ thống"
    },
    "creationAt": "2026-03-04T08:19:00.000Z",
    "updatedAt": "2026-03-04T08:19:00.000Z"
  }
];

// CRUD for roles
app.get('/roles', (req, res) => {
  res.json(dataRole);
});

app.get('/roles/:id', (req, res) => {
  const role = dataRole.find(r => r.id === req.params.id);
  if (!role) return res.status(404).json({ message: 'Role not found' });
  res.json(role);
});

app.post('/roles', (req, res) => {
  const newRole = req.body;
  newRole.id = 'r' + (dataRole.length + 1);
  newRole.creationAt = new Date().toISOString();
  newRole.updatedAt = new Date().toISOString();
  dataRole.push(newRole);
  res.status(201).json(newRole);
});

app.put('/roles/:id', (req, res) => {
  const role = dataRole.find(r => r.id === req.params.id);
  if (!role) return res.status(404).json({ message: 'Role not found' });
  Object.assign(role, req.body);
  role.updatedAt = new Date().toISOString();
  res.json(role);
});

app.delete('/roles/:id', (req, res) => {
  const index = dataRole.findIndex(r => r.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Role not found' });
  dataRole.splice(index, 1);
  res.status(204).send();
});

// CRUD for users
app.get('/users', (req, res) => {
  res.json(dataUser);
});

app.get('/users/:username', (req, res) => {
  const user = dataUser.find(u => u.username === req.params.username);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
});

app.post('/users', (req, res) => {
  const newUser = req.body;
  newUser.creationAt = new Date().toISOString();
  newUser.updatedAt = new Date().toISOString();
  dataUser.push(newUser);
  res.status(201).json(newUser);
});

app.put('/users/:username', (req, res) => {
  const user = dataUser.find(u => u.username === req.params.username);
  if (!user) return res.status(404).json({ message: 'User not found' });
  Object.assign(user, req.body);
  user.updatedAt = new Date().toISOString();
  res.json(user);
});

app.delete('/users/:username', (req, res) => {
  const index = dataUser.findIndex(u => u.username === req.params.username);
  if (index === -1) return res.status(404).json({ message: 'User not found' });
  dataUser.splice(index, 1);
  res.status(204).send();
});

// Get users by role
app.get('/roles/:id/users', (req, res) => {
  const roleId = req.params.id;
  const users = dataUser.filter(u => u.role.id === roleId);
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});