import { Router } from "express";
import { getTasks } from "./Tasks.controller";
const router = Router(); //This allow to me to use new routes.

router.get('/Tasks', getTasks);

export default router;