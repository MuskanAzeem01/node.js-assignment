const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = [
    { id: 1, title: 'Learn Node.js', completed: false },
    { id: 2, title: 'Build Express API', completed: false }
];

// GET: Get all tasks
app.get('/api/v1/tasks', (req, res) => {
    res.status(200).json({
        success: true,
        data: tasks
    });
});

// POST: Create a new task
app.post('/api/v1/tasks', (req, res) => {
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({
            success: false,
            message: 'Task title is required'
        });
    }

    const newTask = {
        id: tasks.length
            ? Math.max(...tasks.map(task => task.id)) + 1
            : 1,
        title: title,
        completed: false
    };

    tasks.push(newTask);

    res.status(201).json({
        success: true,
        data: newTask
    });
});

// PUT: Update a task by ID
app.put('/api/v1/tasks/:id', (req, res) => {
    const id = Number(req.params.id);
    const task = tasks.find(task => task.id === id);

    if (!task) {
        return res.status(404).json({
            success: false,
            message: 'Task not found'
        });
    }

    const { title, completed } = req.body;

    if (title !== undefined) {
        if (typeof title !== 'string' || !title.trim()) {
            return res.status(400).json({
                success: false,
                message: 'Title must be a non-empty string'
            });
        }

        task.title = title;
    }

    if (completed !== undefined) {
        if (typeof completed !== 'boolean') {
            return res.status(400).json({
                success: false,
                message: 'Completed must be true or false'
            });
        }

        task.completed = completed;
    }

    res.status(200).json({
        success: true,
        data: task
    });
});

// DELETE: Delete a task by ID
app.delete('/api/v1/tasks/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = tasks.findIndex(task => task.id === id);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: 'Task not found'
        });
    }

    const deletedTask = tasks.splice(index, 1)[0];

    res.status(200).json({
        success: true,
        message: 'Task deleted successfully',
        data: deletedTask
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});