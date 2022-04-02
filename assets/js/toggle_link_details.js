function toggleDetails(className) {
  let showToggleE = document.getElementsByClassName("showToggle")[0].children;
  console.log(showToggleE);
  for (let i = 0; i < showToggleE.length; i++) {
    showToggleE[i].removeAttribute("style");
    showToggleE[i].setAttribute("style", "display:none");
  }
  let switchOn = document.getElementsByClassName(className);
  switchOn[0].setAttribute("style", "display:initial");
}
