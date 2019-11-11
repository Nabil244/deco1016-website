function validateForm() {
    var n = document.forms["myForm"]["username"].value;
    var e = document.forms["myForm"]["contact"].value;
    var p = document.forms["myForm"]["password"].value;
    var y = document.forms["myForm"]["cpassword"].value;
    if (n == "") {
      alert("Tell us your name!");
      return false;
  } if (e == "") {
    alert("Give us an E-mail to contact you");
    return false;
  } if (p == "") {
    alert("You'll need a password!");
    return false;
  } if (y == "") {
    alert("Make sure you're password is correct!");
    return false;
  }
  function myFunction(x) {
    x.classList.toggle("change");
  }
}
function BAlidateForm() {
var f = document.forms["theForm"]["fname"].value;
var l = document.forms["theForm"]["lname"].value;
var m = document.forms["theForm"]["month"].value;
var a = document.forms["theForm"]["address1"].value;
var c = document.forms["theForm"]["category"].value;
var z = document.forms["theForm"]["zip"].value;
if (f == "") {
  alert("first name");
  return false;
} if (l == "") {
  alert("last name");
  return false;
} if (m == "") {
    alert("What your birthday?");
    return false;
} if (a == "") {
    alert("Address Please!");
    return false;
} if (c == "") {
    alert("Tell us where you're from!");
    return false;
} if (z == "") {
    alert("Zipe code please");
    return false;
}
}