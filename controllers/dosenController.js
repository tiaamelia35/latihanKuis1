// Mini Project - Pertemuan 6-7: Layer Controller Dosen

const dosenModel = require("../models/dosenModel");

exports.getAll = (req, res) => {
  const data = dosenModel.getAll();

  res.status(200).json(data);
};

exports.getById = (req, res) => {
  const id = parseInt(req.params.id);

  const data = dosenModel.getById(id);

  if (!data) {
    return res.status(404).json({
      message: "Tidak ditemukan"
    });
  }

  res.status(200).json(data);
};

exports.create = (req, res) => {
  const baru = dosenModel.create(req.body);

  res.status(201).json(baru);
};

exports.update = (req, res) => {
  const id = parseInt(req.params.id);

  const data = dosenModel.update(id, req.body);

  if (!data) {
    return res.status(404).json({
      message: "Tidak ditemukan"
    });
  }

  res.status(200).json(data);
};