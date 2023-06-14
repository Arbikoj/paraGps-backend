import express from "express";
import {
    getEmployee,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
} from "./controller.js";

const router = express.Router();

router.get('/employee', getEmployee);
router.get('/employee/:id', getEmployeeById);
router.post('/employee', createEmployee);
router.put('/employee/:id', updateEmployee);
router.delete('/employee/:id', deleteEmployee);



export default router;