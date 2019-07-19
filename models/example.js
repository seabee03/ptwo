module.exports = function(sequelize, DataTypes) {
  var Appointment = sequelize.define("Appointment", {
    petname: DataTypes.TEXT,
    petbreed: DataTypes.TEXT,
    petage: DataTypes.TEXT,
    petweight: DataTypes.TEXT,
    rabiesvaccination: DataTypes.TEXT,
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
