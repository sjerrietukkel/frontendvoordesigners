var slider = document.getElementById("slider")
 res = document.getElementById("result")

slider.addEventListener("input", function() {
    res.innerHTML = "font-size " + slider.value
}, false)

function toggleNightMode() {
    var color = document.getElementById('mydiv').style.color;
      
    var backgroundColor = document.getElementById('mydiv').style.backgroundColor;
    
      
    if (color == "black" && backgroundColor == "white") {
          document.getElementById('mydiv').style.color="white";
          document.getElementById('mydiv').style.backgroundColor="black";
          document.getElementById('mydiv').style.fontFamily="Open Sans";
          
      } else {
          document.getElementById('mydiv').style.color="black";
          document.getElementById('mydiv').style.backgroundColor="white";
          document.getElementById('mydiv').style.fontFamily="Open Sans";
      }
  }
  