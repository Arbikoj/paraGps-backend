import express from "express";
import {
    getData,
    getDataById,
    createData,
    updateData,
    deleteData
} from "./controller.js";

const router = express.Router();

router.get('/data', getData);
router.get('/data/:id', getDataById);
router.post('/data', createData);
router.put('/data/:id', updateData);
router.delete('/data/:id', deleteData);



export default router;