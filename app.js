let all = document.getElementsByTagName("*");
let darkEnabled = false;
let btn = document.getElementById("lightSwitch");
btn.onclick = function() {
  if(!darkEnabled){
      for (var i=0, max=all.length; i < max; i++) {
          all[i].classList.add('darkMode');
      }
      btn.innerHTML = "Light Mode";
      darkEnabled = true;
  }
  else {
    for (var i=0, max=all.length; i < max; i++) {
        all[i].classList.remove('darkMode');
    }
    btn.innerHTML = "Dark Mode";
    darkEnabled = false;
  }
}
