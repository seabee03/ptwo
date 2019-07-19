// Get references to page elements
var $appointmentPetName = $("#appointment-pet_name");
var $appointmentPetBreed = $("#appointment-pet_breed");
var $appointmentPetAge = $("#appointment-pet_age");
var $appointmentPetWeight = $("#appointment-pet_weight");
var $appointmentRabiesVaccination = $("#appointment-rabies_vaccination");
var $appointment14StepSpaw = $("#appointment-14_step_spaw");
var $appointmentDeShedding= $("#appointment-de_shedding");
var $appointmentPadTreatment= $("#appointment-pad_treatment");
var $appointmentShaveDown= $("#appointment-shave_down");
var $appointmentClips= $("#appointment-clips");
var $appointmentFleeTick= $("#appointment-flee_tick");
var $appointmentTeethBrush= $("#appointment-teeth_brush");
var $appointmentPawdicure= $("#appointment-pawdicure");
var $appointmentHairColor= $("#appointment-hair_color");
var $submitBtn = $("#submit");
var $appointmentList = $("#appointment-list");

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
    pet name: $appointmentPetName.val().trim(),
    pet breed: $appointmentPetBreed.val().trim(),
    pet age: $appointmentPetAge.val().trim(),
    pet weight: $appointmentPetWeight.val().trim(),
    rabies vaccination: $appointmentRabiesVaccination.val().trim(),
    14 step spaw: $appointment14StepSpaw.val().trim(),
    desheeding: $appointmentDeShedding.val().trim(),
    pad treatment: $appointmentPadTreatment.val().trim(),
    shave down: $appointmentShaveDown.val().trim(),
    clips: $appointmentClips.val().trim(),
    flee and tick: $appointmentFleeTick.val().trim(),
    teeth brushing: $appointmentTeethBrush.val().trim(),
    pawdicure: $appointmentPawdicure.val().trim(),
    hair color: $appointmentHairColor.val().trim()
  };

  if (!(appointment.petname && appointment.petbreed)) {
    alert("You must enter details about your pet.");
    return;
  }

  API.saveAppointment(appointment).then(function() {
    refreshAppointments();
  });

  $appointmentText.val("");
  $appointmentDescription.val("");
  $appointmentPetName.val("");
  $appointmentPetBreed.val("");
  $appointmentPetAge.val("");
  $appointmentPetWeight.val("");
  $appointmentRabiesVaccination.val("");
  $appointment14StepSpaw.val("");
  $appointmentDeShedding.val("");
  $appointmentPadTreatment.val("");
  $appointmentShaveDown.val("");
  $appointmentClips.val("");
  $appointmentFleeTick.val("");
  $appointmentTeethBrush.val("");
  $appointmentPawdicure.val("");
  $appointmentHairColor.val("");
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
