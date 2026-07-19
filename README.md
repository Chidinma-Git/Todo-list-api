# Todo List API

## Description

A RESTful API built with Node.js, Express.js, and MySQL.

## Features

- Create Task
- Get All Tasks
- Get Single Task
- Update Task
- Delete Task

## Technologies

- Node.js
- Express.js
- MySQL
- Swagger UI

## Installation

npm install

## Run

npm run dev

## Swagger

http://localhost:3000/api-docs

API ARCHETECTURE
todo-api/
│
├── node_modules/
├── routes/
│   └── task.routes.js
│
├── controllers/
│   └── task.controller.js
│
├── models/
│   └── task.model.js
│
├── config/
│   └── db.js
│
├── middleware/
│   └── validateTask.js
│
├── .env
├── .gitignore
├── app.js
├── package.json
└── README.md
