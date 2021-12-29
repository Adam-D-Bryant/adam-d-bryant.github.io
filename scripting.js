// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's time
  var sec = new Date().getSeconds();

  // Display the result
  var d = "";
  if (sec % 4 == 0) { d = "   "; }
  if (sec % 4 == 1) { d = ".  "; }
  if (sec % 4 == 2) { d = ".. "; }
  if (sec % 4 == 3) { d = "..."; }
  
  document.getElementById("dots").innerHTML = d;
}, 1000);