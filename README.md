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

Open the local address
