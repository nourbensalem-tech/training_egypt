const express = require("express");

const router = express.Router();

let tasks = [];

// GET les tâches
router.get("/", (req, res) => {
    res.status(200).json(tasks);
});

// POST créer une nouvelle tâche
router.post("/", (req, res) => {

    const task = {
        id: tasks.length + 1,
        ...req.body
    };

    tasks.push(task);

    res.status(201).json(task);
});

// GET une tâche par son ID
router.get("/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const task = tasks.find((t) => t.id === id);

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    res.status(200).json(task);
});


// PUT mettre à jour une tâche
router.put("/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const task = tasks.find((t) => t.id === id);

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    task.title = req.body.title;
    task.description = req.body.description;
    task.completed = req.body.completed;

    res.status(200).json(task);
});


// DELETE supprimer une tâche
router.delete("/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const index = tasks.findIndex((t) => t.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    tasks.splice(index, 1);

    res.status(200).json({
        message: "Task deleted successfully"
    });
});


module.exports = router;