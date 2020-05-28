let all = document.getElementsByTagName("*");
let darkEnabled = false;
let btn = document.getElementById("lightSwitch");
function darkMode() {
  if(!darkEnabled){
      for (var i=0, max=all.length; i < max; i++) {
          all[i].classList.add('darkMode');
      }
      darkEnabled = true;
  }
  else {
    for (var i=0, max=all.length; i < max; i++) {
        all[i].classList.remove('darkMode');
    }
    darkEnabled = false;
  }
}
