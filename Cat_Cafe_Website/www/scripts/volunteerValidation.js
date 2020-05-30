$(document).ready(function() {

  $("#volunteerForm").on("submit", function() {
    // this variable is true when the form is valid
    var formValid = true;

    var nameIsValid = $("#userName").prop("validity").valid;
    if (nameIsValid) {
      $("#userNameError").addClass("hidden");
    } else {
      formValid = false;
      $("#finalError").removeClass("hidden");
      $("#userNameError").removeClass("hidden");
    }

    var emailIsValid = $("#userEmail").prop("validity").valid;
    if (emailIsValid) {
      $("#EmailError").addClass("hidden");
    } else {
      formValid = false;
      $("#finalError").removeClass("hidden");
      $("#EmailError").removeClass("hidden");
    }

    var ageIsValid = $("#userAge").prop("validity").valid;
    if (ageIsValid) {
      $("#userAgeError").addClass("hidden");
    } else {
      formValid = false;
      $("#finalError").removeClass("hidden");
      $("#userAgeError").removeClass("hidden");
    }

    return formValid;
  });
});
