function hideOrShow() {
    var x = document.getElementById("showtoggle");
    if (x.style.display === "none") {
      x.style.display = "inline-block";
    } else {
      x.style.display = "none";
    }
  }