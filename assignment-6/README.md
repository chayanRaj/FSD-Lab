# Assignment 6 — MERN Stack Student Portfolio (CRUD)

## Folder Structure
```
assignment-6/
└── portfolio/
    ├── backend/
    │   ├── models/Student.js
    │   ├── routes/studentRoutes.js
    │   ├── server.js
    │   └── package.json
    └── frontend/
        ├── public/index.html
        ├── src/
        │   ├── components/
        │   │   ├── AddStudent.js
        │   │   ├── ViewStudents.js
        │   │   └── EditStudent.js
        │   ├── App.js
        │   ├── App.css
        │   ├── index.js
        │   └── index.css
        └── package.json
```

## How to Run

### Terminal 1 — MongoDB
```bash
brew services start mongodb-community
```

### Terminal 2 — Backend
```bash
cd assignment-6/portfolio/backend
npm install
node server.js
```

### Terminal 3 — Frontend
```bash
cd assignment-6/portfolio/frontend
npm install
npm start
```

Open http://localhost:3000

## Tech Stack
MongoDB · Express.js · React · Node.js (MERN)
