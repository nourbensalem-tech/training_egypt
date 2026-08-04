## Project Description

This project is a simple **REST API** built with **Node.js** and **Express.js**.

The API allows users to manage a list of tasks by performing the four basic CRUD operations:

- Create a new task
- Read all tasks
- Read a specific task by its ID
- Update an existing task
- Delete a task

This project does **not** use a database. Tasks are stored in a JavaScript array, so all data is lost when the server is restarted.

---

# Technologies Used

- Node.js
- Express.js
- JavaScript
- Postman (API testing)


# Project Structure

```
week3_api/
│
├── routes/
│   └── taskRoutes.js
├── app.js
├── package.json
├── package-lock.json
├── README.md
├── .gitignore
└── node_modules/
```

---


# API Endpoints

## 1. Get All Tasks

**Method**

```
GET /tasks
```

### Description

Returns all tasks.

### Response

```json
[
    {
        "id": 1,
        "title": "Learn Express",
        "description": "Finish CRUD",
        "completed": false
    }
]
```

Status Code:

```
200 OK
```

---

## 2. Get Task by ID

**Method**

```
GET /tasks/:id
```

### Description

Returns one task by its ID.

Example:

```
GET /tasks/1
```

Response:

```json
{
    "id": 1,
    "title": "Learn Express",
    "description": "Finish CRUD",
    "completed": false
}
```

If the task does not exist:

```json
{
    "message": "Task not found"
}
```

Status Codes:

```
200 OK
404 Not Found
```

---

## 3. Create a Task

**Method**

```
POST /tasks
```

### Request Body

```json
{
    "title": "Learn Express",
    "description": "Finish CRUD",
    "completed": false
}
```

### Response

```json
{
    "id": 1,
    "title": "Learn Express",
    "description": "Finish CRUD",
    "completed": false
}
```

Status Code:

```
201 Created
```

---

## 4. Update a Task

**Method**

```
PUT /tasks/:id
```

Example:

```
PUT /tasks/1
```

### Request Body

```json
{
    "title": "Learn Express JS",
    "description": "CRUD Completed",
    "completed": true
}
```

### Response

```json
{
    "id": 1,
    "title": "Learn Express JS",
    "description": "CRUD Completed",
    "completed": true
}
```

Status Codes:

```
200 OK
404 Not Found
```

---

## 5. Delete a Task

**Method**

```
DELETE /tasks/:id
```

Example:

```
DELETE /tasks/1
```

### Response

```json
{
    "message": "Task deleted successfully"
}
```

Status Codes:

```
200 OK
404 Not Found
```

---

# HTTP Status Codes Used

| Code | Meaning |
|------|---------|
| 200 | OK |
| 201 | Created |
| 404 | Not Found |

---

# Author

**Nour elhouda Ben Salem**