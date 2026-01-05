//hex code
chcodm = 0;
function gencolofu() {
//for showing color
document.getElementById("colorgen").style.backgroundColor = chcodm;
//for showing hex code
document.getElementById("shcolorcod").innerHTML = chcodm;
//math random
chcodm = ("#") + Math.floor(111111 + Math.random() * (999999 - 111111 + 1)); 
console.log(chcodm)  }