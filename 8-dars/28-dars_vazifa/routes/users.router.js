import Router from "express";
const router = new Router();
import object from "../controllers/users.controller.js";

router.get('/', object.getAllUsers);
router.get('/:id',object.getUserById);
router.post('/', object.createUser);
router.put('/:id', object.updateUser);
router.delete('/:id', object.deleteUser);

export default{ router };