var output = "<table>";
for(var r = 0; r < 4; r++){
  output += "<tr>";
  for(var c = 0; c < 4; c++){
    output += "<td id='" + r + "_" + c + "' onclick='run(this)'>" + r + "_" + c + "some text" + "</td>"
  }
  output += "</tr>";
}
output += "</table>";
document.getElementById("output").innerHTML += output;
function run(e){
  e.style.backgroundColor = "red";
  alert(e.id + " in run text is: " + e.innerHTML);
}