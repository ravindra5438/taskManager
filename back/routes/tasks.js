import express from "express";
import { createTask, deleteTaskById, getAllTask, getTaskById, updateTaskById } from "../controller/taskController.js";
const router = express.Router();


router.get('/', getAllTask);

router.post('/', createTask);

router.get('/:id', getTaskById);

router.patch('/:id', updateTaskById);

router.delete('/:id', deleteTaskById);




export default router;