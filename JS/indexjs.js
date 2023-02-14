document.getElementById("obj1").style.display = "none"

document.getElementById('boton').onclick = function () {var x = document.getElementById("obj1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    } 