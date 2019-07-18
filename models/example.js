module.exports = function(sequelize, DataTypes) {
  var Appointment = sequelize.define("Appointment", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Appointment;
};
