function checkPassword() {
  event.preventDefault();
  let password = document.getElementById("password").value;
  if (password != "12345678") {
    alert("Incorrect password");
  } else {
    document.getElementById("status").textContent = "Successful!";
  }
}
