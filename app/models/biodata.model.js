const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("biodata", "root", "123", {
  host: "localhost",
  dialect: "mysql",
});

const Biodata = sequelize.define("biodata", {
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tempat_lahir: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tanggal_lahir: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  alamat: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Biodata;
