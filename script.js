function buttonscript1() {
  console.log("button 1 clicked!");
  var x = document.getElementById("button-gif");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function buttonscript2() {
  console.log("button 2 clicked!");
  var x = document.getElementById("button-image");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function buttonscript3() {
  console.log("button 3 clicked!");
  document.body.style.backgroundColor = "red";
}

function buttonscript4() {
  console.log("button 4 clicked!");
  document.body.style.backgroundColor = "orange";
}

function buttonscript5() {
  console.log("button 5 clicked!");
  document.body.style.backgroundColor = "yellow";
}

function buttonscript6() {
  console.log("button 6 clicked!");
  document.body.style.backgroundColor = "green";
}

function buttonscript7() {
  console.log("button 7 clicked!");
  document.body.style.backgroundColor = "blue";
}

function buttonscript8() {
  console.log("button 8 clicked!");
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
}

function logavatarstats(avatar) {
  if (!avatar.stats) {}
}
