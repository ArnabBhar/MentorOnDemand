function search_result() {
    var x = document.forms["searchForm"]["search-result"].value;
    if (x == "Spring" || x == "spring") {
        var y = document.getElementById("search-result");
        y.style.display = "block";
    }
    return false;
}

function validateLogIn() {
    var x = document.forms["logInForm"]["account-type"].value;
    if (x == "Trainer") {
        window.location.href = "mentor.html";
        return false;
    } else if (x == "Trainee") {
        window.location.href = "user.html";
        return false;
    } else if (x == "Admin") {
        window.location.href = "admin.html";
        return false;
    }
    return false;
}

function training_result() {
    var x = document.forms["trainingForm"]["trainingTechnology"].value;
    if (x == "spring") {
        var y = document.getElementById("training-result");
        y.style.display = "block";
    }
    return false;
}

function addskill(res) {
    var id = "#" + res;
    $(id).appendTo('#mentor-skills');
    document.getElementById(res).disabled = true;
    return false;
}

function action(button) {
    if (document.getElementById(button).classList.contains('btn-success')) {
        document.getElementById(button).className = "btn btn-danger";
        document.getElementById(button).value = "Block";
    } else if (document.getElementById(button).classList.contains('btn-danger')) {
        document.getElementById(button).className = "btn btn-success";
        document.getElementById(button).value = "Unblock";
    }
}

function validFormTrainee() {
    var fullName = document.forms["formTrainee"]["full_name"].value;
    if (fullName == "") {
      alert("Name must be filled out");
      return false;
    }
  }
function validFormTrainer() {
    var fullName = document.forms["formTrainer"]["full_name"].value;
    if (fullName == "") {
      alert("Name must be filled out");
      return false;
    }
  }