const Biodata = require("../models/biodata.model");

exports.create = (req, res) => {
  const { nama, tempatLahir, tanggalLahir, alamat } = req.body;
  if (!nama || !tempatLahir || !tanggalLahir || !alamat) {
    res.status(400).send({
      message: "Data diri tidak lengkap",
    });
  }
  const data = {
    nama,
    tempat_lahir: tempatLahir,
    tanggal_lahir: tanggalLahir,
    alamat,
  };

  Biodata.create(data)
    .then((result) => {
      res.status(200).send(result);
    })
    .then((error) => {
      res.status(500).send(error);
    });
};
exports.findAll = (req, res) => {
  Biodata.findAll()
    .then((result) => {
      res.status(200).send(result);
    })
    .then((error) => {
      res.status(500).send(error);
    });
};
exports.findOne = (req, res) => {
  Biodata.findOne({
    where: { id: req.params.id },
  })
    .then((result) => {
      res.status(200).send(result);
    })
    .then((error) => {
      res.status(500).send(error);
    });
};

exports.update = (req, res) => {
  const { id } = req.params;
  Biodata.update(
    {
      tempat_lahir: req.body.tempatLahir,
      tanggal_lahir: req.body.tanggalLahir,
      ...req.body,
    },
    {
      where: { id },
    }
  )
    .then(async (result) => {
      const user = await Biodata.findOne({ where: { id } })
        .then((data) => {
          return data;
        })
        .catch((err) => res.send(err));
      res.status(200).send({ message: `Data telah di update`, user });
    })
    .then((error) => {
      res.status(500).send(error);
    });
};

exports.delete = (req, res) => {
  const { id } = req.params;
  Biodata.destroy({
    where: { id },
  })
    .then((result) => {
      res.status(200).send({ message: `Data dengan id ${id} telah dihapus` });
    })
    .then((error) => {
      res.status(500).send(error);
    });
};
