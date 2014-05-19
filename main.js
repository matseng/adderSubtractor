window.onload = function() {

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

  document.getElementById('addButton').addEventListener('click', addButtonClicked);
  function addButtonClicked() {
    var z = getX() + getY();
    setZ(z);
  };

  document.getElementById('subtractButton').addEventListener('click', subtractButtonClicked);
  function subtractButtonClicked() {
    var z = getX() - getY();
    setZ(z);
  };

  document.getElementById('inputX').addEventListener('keyup', function() {
    var myNum = getX();
    console.log(myNum);
    if(!Number.isInteger(getX())){
      console.log(getX());
      console.log('please enter an integer');
    }
  });

  function checkInt(val) {
    return Number.isInteger(val);
  }

};
