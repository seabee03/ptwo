module.exports = function(sequelize, DataTypes) {
  var Appointment = sequelize.define("Appointment", {
    your_name: DataTypes.TEXT,
    pet_name: DataTypes.TEXT,
    pet_breed: DataTypes.TEXT,
    pet_age: DataTypes.TEXT,
    pet_weight: DataTypes.TEXT,
    rabies_vaccination: DataTypes.TEXT,
    // 14stepspaw: DataTypes.TEXT,
    // desheeding: DataTypes.TEXT,
    // padtreatment: DataTypes.TEXT,
    // shavedown: DataTypes.TEXT,
    // clips: DataTypes.TEXT,
    // fleeandtick: DataTypes.TEXT,
    // teethbrushing: DataTypes.TEXT,
    // pawdicure: DataTypes.TEXT,
    // haircolor: DataTypes.TEXT
  });
  return Appointment;
};
