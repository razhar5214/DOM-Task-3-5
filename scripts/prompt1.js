/*document.addEventListener("DOMContentLoaded", Prompt1);


function Prompt1() {
  const button1 = document.getElementById("btn-1");
  const button2 = document.getElementById("btn-2");

  function imRight(){
    document.querySelector("#p").innerHTML = "Im Right"
  }

  button1.addEventListener('click', imRight())
  
  button2.addEventListener('click', function() {

  })
}
*/
function buttonOne(){

  document.getElementById("textButton").textContent = "I'm right!";
}

function buttonTwo(){

  document.getElementById("textButton").textContent = "No I'm right!";
}
