function getX() {
  var xStr = document.getElementById('inputX').value;
  return parseInt(xStr);
};

function getY() {
  var yStr = document.getElementById('inputY').value;
  return parseInt(yStr);
};

function setZ(val) {
  document.getElementById('valueZ').textContent = val;
};

function addButtonClicked() {
  var z = getX() + getY();
  setZ(z);
};

function subtractButtonClicked() {
  var z = getX() - getY();
  setZ(z);
};
