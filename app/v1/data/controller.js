import Data from "./model.js";

import argon2 from "argon2";

export const getData = async(req, res) => {
    try {
        const response = await Data.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const getDataById = async(req, res) => {
    try {
        const response = await Data.findOne({
            where: {
                id: req.params.id,
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const createData = async(req, res) => {
    const { uid, lat, long } = req.body;
    // if (password !== confPassword) return res.status(400).json({ msg: "password dan confirm tidak cocok" });
    // const hashPassword = await argon2.hash(password);

    try {
        await Data.create({
            uid: uid,
            lat: lat,
            long: long,
        });
        res.status(201).json({ msg: "add Berhasil" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

export const updateData = async(req, res) => {
    const { uid, lat, long } = req.body;
    try {
        await Data.update({
            uid: uid,
            lat: lat,
            long: long
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

export const deleteData = async(req, res) => {
    try {
        await Data.destroy({
            where: {
                id: req.params.id,
            }
        });
        res.status(200).json({ msg: "Berhasil dihapus" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}