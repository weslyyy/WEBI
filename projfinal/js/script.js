var prevScrollpos = window.pageYOffset;
window.onscroll = function menuScrool() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("menu").style.top = "0";
  } else {
    document.getElementById("menu").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}

function mostrarSenha1() {
  var senha1 = document.getElementById("senha1");
  if (senha1.type === "password") {
    senha1.type = "text";
  } else {
    senha1.type = "password";
  }
}

function mostrarSenha2() {
  var senha2 = document.getElementById("senha2");
  if (senha2.type === "password") {
    senha2.type = "text";
  } else {
    senha2.type = "password";
  }
}
