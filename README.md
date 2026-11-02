# Node.js Assignment — Weeks 1–4

## Overview

This repository contains three projects developed as part of the Node.js assignment. These projects demonstrate Node.js fundamentals, command-line arguments, the built-in HTTP module, Express.js, and REST API development.

## Project Structure

```text
node.js-assignment/
│
├── README.md
│
├── my-cli/
│   └── app.js
│
├── http-server/
│   └── server.js
│
└── express-tasks-api/
    ├── server.js
    ├── package.json
    └── package-lock.json
```

## Part A: Node.js CLI Tool

**Folder:** `my-cli`

This project demonstrates how to accept a task title through a command-line argument and print it to the terminal using Node.js.

### How to Run

Open a terminal and execute:

```bash
cd my-cli
node app.js "Complete my assignment"
```

**Expected Output:**

```text
Complete my assignment
```

## Part B: Core HTTP Server

**Folder:** `http-server`

This project uses Node.js's built-in `http` module to create a server and handle routes manually without Express.js.

### Routes

| Route | Description |
|---|---|
| `/` | Home route |
| `/about` | About route |
| `/contact` | Contact route |
| Any undefined route | Returns a 404 response |

### How to Run

```bash
cd http-server
node server.js
```

Open the local address shown in the terminal in your browser. Check `server.js` for the configured port.

## Part C: Express Task Manager API

**Folder:** `express-tasks-api`

This project implements a Task Manager REST API using Express.js. Task data is stored in an in-memory array, so no database is required.

### Features

- Retrieve all tasks.
- Create a new task.
- Update an existing task using its ID.
- Delete a task using its ID.
- Validate incoming request data.
- Return JSON responses.
- Handle invalid input and tasks that do not exist.
- Use appropriate HTTP status codes.

### Installation and Setup

Navigate to the Express API folder:

```bash
cd express-tasks-api
```

Install the required dependencies:

```bash
npm install
```

Start the server:

```bash
node server.js
```

The server address and port are displayed in the terminal when the server starts.

### API Endpoints

Base route: `/api/v1/tasks`

| HTTP Method | Endpoint | Description | Success Status |
|---|---|---|---|
| GET | `/api/v1/tasks` | Retrieve all tasks | 200 OK |
| POST | `/api/v1/tasks` | Create a new task | 201 Created |
| PUT | `/api/v1/tasks/:id` | Update a task by ID | 200 OK |
| DELETE | `/api/v1/tasks/:id` | Delete a task by ID | 200 OK |

### Example: Create a Task

Send a `POST` request to:

`/api/v1/tasks`

Select **Body → raw → JSON** in Postman and provide:

```json
{
  "title": "Complete Node.js assignment"
}
```

A successful request returns status `201 Created` and the newly created task in a JSON response.

### Example: Update a Task

Send a `PUT` request to `/api/v1/tasks/1` with a JSON body:

```json
{
  "title": "Learn Express.js",
  "completed": true
}
```

The task ID in the URL identifies the task to update.

### Example: Delete a Task

Send a `DELETE` request to:

`/api/v1/tasks/1`

The API deletes the task with ID `1` if it exists.

### HTTP Status Codes

| Status Code | Meaning | Usage |
|---|---|---|
| 200 OK | Request successful | Retrieving, updating, or deleting a task |
| 201 Created | Resource created | Successfully creating a task |
| 400 Bad Request | Invalid request data | Missing or invalid task information |
| 404 Not Found | Resource not found | Requesting an unknown task ID or route |

## Part D: REST API Design

The Express API follows REST principles by using HTTP methods to perform operations on the `/api/v1/tasks` resource.

- `GET` retrieves tasks.
- `POST` creates a task.
- `PUT` updates a task.
- `DELETE` removes a task.
- JSON is used for request and response data.
- Appropriate HTTP status codes indicate the result of a request.

## Part E: API Testing

The Express API can be tested using Postman.

Test the following operations:

1. Retrieve all tasks using `GET`.
2. Create a task using `POST`.
3. Update an existing task using `PUT`.
4. Delete an existing task using `DELETE`.
5. Submit a request with missing or invalid data and verify the error response.
6. Request a task ID that does not exist and verify the `404 Not Found` response.

Capture screenshots of the requests and their responses for submission.

## Technologies Used

- JavaScript
- Node.js
- Node.js built-in HTTP module
- Express.js
- REST API
- Postman
- Git and GitHub

## Important Notes

- Task data is stored in memory and resets whenever the Express server restarts.
- No database is used.
- The Express API uses JSON request bodies.
- Run each server from its respective project folder.
