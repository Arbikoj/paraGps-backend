import express from "express";

import mysql from "mysql";
import cors from 'cors';

// auto sync database
import db from "./config/database.js";

// import route
import EmployeeRoute from "./app/v1/employee/route.js"
import DataRoute from "./app/v1/data/route.js"


const app = express();
const port = 8081;
app.use(cors());
app.use(express.json());

(async() => {
    await db.sync();
})();


app.use(EmployeeRoute);
app.use(DataRoute);

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "bii",
//     password: "password",
//     database: "gps-express"
// })

// app.get('/', (req, res) => {
//     const sql = "SELECT * FROM employee";

//     db.query(sql, (err, result) => {
//         if (err) return res.json({ Message: "Error inside server" });
//         return res.json(result);
//     })
// })

// app.post('/employee', (req, res) => {
//     const sql = "INSERT INTO employee (`uid`, `nama`, `gender`, `tgl_lahir`, `tgl_masuk`) VALUES (?)";
//     const vlaves = [
//         req.body.uid,
//         req.body.nama,
//         req.body.gender,
//         req.body.tgl_lahir,
//         req.body.tgl_masuk,
//     ]
//     db.query(sql, [vlaves], (err, result) => {
//         if (err) return res.json(err);
//         return res.json(result);
//     })
// })

// app.get('/view/:id', (req, res) => {
//     const sql = "SELECT * FROM employee WHERE ID = ?";
//     const id = req.params.id;
//     db.query(sql, [id], (err, result) => {
//         if (err) return res.json({ Message: "Error inside server" });
//         return res.json(result);
//     })
// })

// app.put('/edit/:id', (req, res) => {
//     const sql = "UPDATE employee SET `uid`=?, `nama`=?, `gender`=?, `tgl_lahir`=?, `tgl_masuk`=? WHERE ID = ?";
//     const id = req.params.id;
//     const vlaves = [

//     ]

//     db.query(sql, [
//         req.body.uid,
//         req.body.nama,
//         req.body.gender,
//         req.body.tgl_lahir,
//         req.body.tgl_masuk,
//         id
//     ], (err, result) => {
//         if (err) return res.json({ Message: "Error inside server" });
//         return res.json(result);
//     })
// })

// app.delete('/delete/:id', (req, res) => {
//     const sql = "DELETE FROM employee  WHERE ID = ?";
//     const id = req.params.id;
//     db.query(sql, [id], (err, result) => {
//         if (err) return res.json({ Message: "Error inside server" });
//         return res.json(result);
//     })

// })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})