// Get references to page elements
var $appointmentYourName = $("#inputEmail4")
var $appointmentPetName = $("#inputEmal5");
var $appointmentPetBreed = $("#inputAddress");
var $appointmentPetAge = $("#inputAddress2");
var $appointmentPetWeight = $("#inputCity");
var $appointmentRabiesVaccination = $("#inputZip");
// var $appointment14StepSpaw = $("#14_step_spaw");
// var $appointmentDeShedding= $("#de_shedding");
// var $appointmentPadTreatment= $("#apad_treatment");
// var $appointmentShaveDown= $("#shave_down");
// var $appointmentClips= $("#clips");
// var $appointmentFleeTick= $("#flee_tick");
// var $appointmentTeethBrush= $("#teeth_brush");
// var $appointmentPawdicure= $("#pawdicure");
// var $appointmentHairColor= $("#hair_color");
// var $submitBtn = $("#submit");
// var $appointmentList = $("#appointment-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveAppointment: function(appointment) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/appointments",
      data: JSON.stringify(appointment)
    });
  },
  getAppointments: function() {
    return $.ajax({
      url: "api/appointments",
      type: "GET"
    });
  },
  deleteAppointment: function(id) {
    return $.ajax({
      url: "api/appointments/" + id,
      type: "DELETE"
    });
  }
};

// refreshAppointments gets new appointments from the db and repopulates the list
var refreshAppointments = function() {
  API.getAppointments().then(function(data) {
    var $appointments = data.map(function(appointment) {
      var $a = $("<a>")
        .text(appointment.text)
        .attr("href", "/appointment/" + appointment.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": appointment.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $appointmentList.empty();
    $appointmentList.append($appointments);
  });
};

// handleFormSubmit is called whenever we submit a new appointment
// Save the new appointment to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var appointment = {
    // Get references to page elements
    petname: $appointmentPetName.val().trim(),
    petbreed: $appointmentPetBreed.val().trim(),
    petage: $appointmentPetAge.val().trim(),
    petweight: $appointmentPetWeight.val().trim(),
    rabiesvaccination: $appointmentRabiesVaccination.val().trim(),
    // 14stepspaw: $appointment14StepSpaw.val().trim(),
    // desheeding: $appointmentDeShedding.val().trim(),
    // padtreatment: $appointmentPadTreatment.val().trim(),
    // shavedown: $appointmentShaveDown.val().trim(),
    // clips: $appointmentClips.val().trim(),
    // fleeandtick: $appointmentFleeTick.val().trim(),
    // teethbrushing: $appointmentTeethBrush.val().trim(),
    // pawdicure: $appointmentPawdicure.val().trim(),
    // haircolor: $appointmentHairColor.val().trim()
  };

  if (!(appointment.petname && appointment.petbreed)) {
    alert("You must enter details about your pet.");
    return;
  }

  API.saveAppointment(appointment).then(function() {
    refreshAppointments();
  });
    $appointmentPetName.val("");
    $appointmentPetBreed.val("");
    $appointmentPetAge.val("");
    $appointmentPetWeight.val("");
    $appointmentRabiesVaccination.val("");
    // $appointment14StepSpaw.val("");
    // $appointmentDeShedding.val("");
    // $appointmentPadTreatment.val("");
    // $appointmentShaveDown.val("");
    // $appointmentClips.val("");
    // $appointmentFleeTick.val("");
    // $appointmentTeethBrush.val("");
    // $appointmentPawdicure.val("");
    // $appointmentHairColor.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the appointment from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteAppointment(idToDelete).then(function() {
    refreshAppointments();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$appointmentList.on("click", ".delete", handleDeleteBtnClick);
