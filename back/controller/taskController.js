import Task from "../models/taskModel.js";

const createTask = async (req, res) => {
    const { title, description, priority, dueDate, category } = req.body;

    try {
        const newTask = new Task({
            title,
            description,
            priority,
            dueDate,
            category
        });

        const savedTask = await newTask.save();

        res.status(201).json(savedTask);
    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ error: 'Could not create task' });
    }
};


const getAllTask = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks)
    } catch (error) {
        console.error('Error getting all task:', error);
        res.status(500).json({ error: 'Could not get all the tasks' });
    }
}


const getTaskById = async (req, res) => {
    const taskId = req.params.id;
    try {
        const task = await Task.findById(taskId)

        if (task) {
            res.status(200).json(task)
        }
        else {
            res.status(404).json({ error: 'Task not found' })
        }
    } catch (error) {
        console.error('Error getting task:', error);
        res.status(500).json({ error: 'Could not get the task' });
    }
}

const deleteTaskById = async (req, res) => {
    const taskId = req.params.id;
    try {
        const deletedTask = await Task.findByIdAndDelete(taskId);
        if (deletedTask) {
            res.status(200).json({ message: 'Task deleted successfully', deletedTask })
        }
        else {
            res.status(404).json({ error: 'Task not found' })
        }
    } catch (error) {
        console.error('Error deleting task:', error);
        res.status(500).json({ error: 'Could not delete the task' });
    }
}

const updateTaskById = async (req, res) => {
    const taskId = req.params.id;
    const updateData = req.body;

    try {
        const updatedTask = await Task.findByIdAndUpdate(taskId, updateData, { new: true });

        if (updatedTask) {
            res.status(200).json(updatedTask);
        } else {
            res.status(404).json({ error: 'Task not found' });
        }
    } catch (error) {
        console.error('Error updating task:', error);
        res.status(500).json({ error: 'Could not update the task' });
    }
}

export {
    createTask,
    getAllTask,
    getTaskById,
    deleteTaskById,
    updateTaskById
}