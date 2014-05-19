window.onload = function() {

  function getInteger(inputElement) {
    var xStr = inputElement.value;
    var xNum = +xStr;
    if(!Number.isInteger(xNum) || whiteSpace(xStr)) {
      return false;
    } else {
      return xNum;
    }
  };

  function getX() {
    return getInteger(document.getElementById('inputX'));
  };

  function getY() {
    return getInteger(document.getElementById('inputY'));
  };

  function whiteSpace(str) {
    //if str contains 1 or more non-white space chars, then return false
    //if str is empty, then return false
    //Example: "  " --> returns true
    if (/\S+/.test(str) || str.length === 0) {
      return false;
    } 
    return true;
  };

  function setZ(val) {
    document.getElementById('valueZ').textContent = val;
  };

  document.getElementById('addButton').addEventListener('click', addButtonClicked);
  function addButtonClicked() {
    if(Number.isInteger(getX()) && Number.isInteger(getY())) {
      var z = getX() + getY();
      setZ(z);
    }
  };

  document.getElementById('subtractButton').addEventListener('click', subtractButtonClicked);
  function subtractButtonClicked() {
    if(Number.isInteger(getX()) && Number.isInteger(getY())) {
      var z = getX() - getY();
      setZ(z);
    }
  };

  function checkInputForInteger(inputElement) {
    inputElement.addEventListener('input', function() {
      var myInt = getInteger(inputElement);
      if(Number.isInteger(myInt)) {
        inputElement.parentElement.getElementsByClassName('feedback')[0].textContent = '';
      } else {
        inputElement.parentElement.getElementsByClassName('feedback')[0].textContent = 'Please enter a valid integer';
      }
    });
  };
  checkInputForInteger(document.getElementById('inputX'));
  checkInputForInteger(document.getElementById('inputY'));

};
