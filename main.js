window.onload = function() {

  function getX() {
    var xStr = document.getElementById('inputX').value;
    var xNum = +xStr;
    if(Number.isInteger(xNum)) {
      return xNum;
    } else {
      return false;
    }
  };

  function getY() {
    return document.getElementById('inputY').value;
    // return parseInt(yStr);
  };

  function setZ(val) {
    document.getElementById('valueZ').textContent = val;
  };

  document.getElementById('addButton').addEventListener('click', addButtonClicked);
  function addButtonClicked() {
    var z = parseInt(getX()) + parseInt(getY());
    setZ(z);
  };

  document.getElementById('subtractButton').addEventListener('click', subtractButtonClicked);
  function subtractButtonClicked() {
    var z = getX() - getY();
    setZ(z);
  };

  document.getElementById('inputX').addEventListener('keyup', function() {
    var myNum = parseInt(getX());
    console.log(myNum);
    if(!getX()) {
      
    }
  });

  function checkInt(val) {
    return Number.isInteger(val);
  }

};
