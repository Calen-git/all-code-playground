function buttonscript() {
  console.log("button clicked!");
  var x = document.getElementById("button-image");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
