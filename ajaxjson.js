function concept1() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('concept1').innerHTML = this.responseText;
    }
  };
  xhttp.open('GET', 'Divjot.txt', true);
  xhttp.send();
}

function concept2() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('concept2').innerHTML = this.responseText;
    }
  };
  xhttp.open('GET', 'Divjot.json', true);
  xhttp.send();
}
