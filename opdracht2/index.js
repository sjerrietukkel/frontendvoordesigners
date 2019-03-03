var slider = document.getElementById("slider")
var res = document.getElementById("result")
var settingsIcon = document.getElementById('settingsIcons')
var main = document.getElementById('main')
var p = document.querySelectorAll("p")

p.style.color = "red"
console.log(p)

slider.addEventListener("input", sliderValue)

function sliderValue() {
    res.innerHTML = "font-size " + slider.value
}

// p.forEach(function sizeChange(){
//     p.style.fontSize = slider.value
// })

function toggleNightMode() {
    var color = document.getElementById('darkmode').style.color;
      
    var backgroundColor = document.getElementById('darkmode').style.backgroundColor;
    
      
    if (color == "black" && backgroundColor == "white") {
          document.getElementById('darkmode').style.color="white";
          document.getElementById('darkmode').style.backgroundColor="black";      
      } else {
          document.getElementById('darkmode').style.color="black";
          document.getElementById('darkmode').style.backgroundColor="white";
      }
  }

  

  settingsIcon.addEventListener('click', settingOn)
  main.addEventListener('click', settingOff)

  function settingOn() {
    document.getElementById("settings").style.display = "block";
  }
  
  function settingOff() {
    document.getElementById("settings").style.display = "none";
  }
  