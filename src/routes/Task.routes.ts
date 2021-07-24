import { Router } from "express";
import * as taskController from "./Tasks.controller";
const router = Router(); //This allow to me to use new routes.

router.get('/Tasks', taskController.getTasks);
router.get('/Tasks/:id', taskController.getTask);
router.post('/Tasks', taskController.createTask);
router.put('/Tasks/:id', taskController.updateTasks);
router.delete('/Tasks/:id', taskController.deleteTasks);
export default router;