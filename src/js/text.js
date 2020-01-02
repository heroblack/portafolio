function text() {
  console.log("testing");
  var el = document.createElement("p");
  el.innerText = "is my list item number ";
  document.body.innerHTML = "this list item number";
}

export default text;
