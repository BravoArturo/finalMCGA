import { Router } from "express";
import * as userController from "./User.controller";
const router = Router(); //This allow to me to use new routes.

router.get('/Users', userController.getUsers);
router.get('/Users/:id', userController.getUser);
router.post('/Users', userController.createUser);
router.put('/Users/:id', userController.updateUsers);
router.delete('/Users/:id', userController.deleteUsers);
export default router; 