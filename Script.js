//signup and login 
var modal1 = document.getElementById('id01');
var modal2 = document.getElementById('id02');

window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

function saveData(e) {
  e.preventDefault();

  var email = document.getElementById("email").value;
  var psw = document.getElementById("psw").value;
  var pswRepeat = document.getElementById("psw-repeat").value;

  if (psw !== pswRepeat) {
    alert("Passwords do not match!");
    return;
  }

  var userData = {
    email: email,
    password: psw
  };

  localStorage.setItem("userData", JSON.stringify(userData));
  alert("Signup successful! Data saved.");

  document.getElementById('id01').style.display = "none";
}

function loginUser(e) {
  e.preventDefault();

  var email = document.getElementById("login-email").value;
  var psw = document.getElementById("login-psw").value;

  var savedData = JSON.parse(localStorage.getItem("userData"));

  if (savedData && email === savedData.email && psw === savedData.password) {
    alert("Login successful!");
    document.getElementById('id02').style.display = "none";
  } else {
    alert("Invalid email or password!");
  }
}

