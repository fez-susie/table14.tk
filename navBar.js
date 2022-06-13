function navi() {
    var x = document.getElementById("myNavi");
    if (x.className === "navi") {
      x.className += " responsive";
    } else {
      x.className = "navi";
    }
  }