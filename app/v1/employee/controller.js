import Employee from "./model.js";

import argon2 from "argon2";

export const getEmployee = async(req, res) => {
    try {
        const response = await Employee.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const getEmployeeById = async(req, res) => {
    try {
        const response = await Employee.findOne({
            where: {
                id: req.params.id,
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const createEmployee = async(req, res) => {
    const { uid, nama, gender, tgl_lahir, tgl_masuk } = req.body;
    // if (password !== confPassword) return res.status(400).json({ msg: "password dan confirm tidak cocok" });
    // const hashPassword = await argon2.hash(password);

    try {
        await Employee.create({
            uid: uid,
            nama: nama,
            gender: gender,
            tgl_lahir: tgl_lahir,
            tgl_masuk: tgl_masuk,
        });
        res.status(201).json({ msg: "register Berhasil" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

export const updateEmployee = async(req, res) => {
    const { uid, nama, gender, tgl_lahir, tgl_masuk } = req.body;
    try {
        await Employee.update({
            uid: uid,
            nama: nama,
            gender: gender,
            tgl_lahir: tgl_lahir,
            tgl_masuk: tgl_masuk
        }, {
            where: {
                id: req.params.id,
            }
        });
        res.status(200).json({ msg: "Berhasil diupdate" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const deleteEmployee = async(req, res) => {
    try {
        await Employee.destroy({
            where: {
                id: req.params.id,
            }
        });
        res.status(200).json({ msg: "Berhasil dihapus" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}