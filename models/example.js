module.exports = function(sequelize, DataTypes) {
  var Appointment = sequelize.define("Appointment", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
    pet name: DataTypes.TEXT,
    pet breed: DataTypes.TEXT,
    pet age: DataTypes.TEXT,
    pet weight: DataTypes.TEXT,
    rabies vaccination: DataTypes.TEXT,
    14 step spaw: DataTypes.TEXT,
    desheeding: DataTypes.TEXT,
    pad treatment: DataTypes.TEXT,
    shave down: DataTypes.TEXT,
    clips: DataTypes.TEXT,
    flee and tick: DataTypes.TEXT,
    teeth brushing: DataTypes.TEXT,
    pawdicure: DataTypes.TEXT,
    hair color: DataTypes.TEXT
  });
  return Appointment;
};
