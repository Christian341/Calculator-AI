import "./static/scss/main.scss";

window.insert = insert;
window.clean = clean;
window.back = back;
window.somar = somar;

function insert(num) {
  let number = (document.getElementById("resultado").innerHTML += num);
  document.getElementById("resultado").innerHTML = number;
}

function clean() {
  document.getElementById("resultado").innerHTML = "";
}

function back() {
  let screen = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = screen.substring(
    0,
    screen.length - 1
  );
}

export function somar() {
  let screen = document.getElementById("resultado").innerHTML;
  if (screen) {
    document.getElementById("resultado").innerHTML = eval(screen);
  } else {
    document.getElementById("resultado").innerHTML = "Nenhum comando feito";
  }
}

const changeColor = document.getElementById("theme");

changeColor.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

// const changeLogo = document.getElementById("theme");

// const imgLogo = document.getElementById("logoDark");

// changeLogo.addEventListener("click", function () {
//   imgLogo.setAttribute("src", "img/logo/loo-light.svg");
// });

// var imgLight = "img/logo-body-light.png";
// var imgDark = "img/logo-body.png";

// function change() {
//   document.getElementById("img-dark").scr = imgLight;
//   let aux = imgLight;
//   imgLight = imgDark;
//   imgDark = aux;
// }
//   // console.log("botão clicado");
// });

// const changeColor = document.getElementById("theme");

// changeColor.addEventListener("change", () => {
//   if (checkbox.checked) {
//     document.body.classList.add(".dark");
//   } else {
//     document.body.classList.remove(".dark");
//   }
// });
// Dessa forma, quando o usuário clicar no ca classe dark será adicionada ao elemento body, mudando as cores do seu tema para o tema escuro. Quando o usuário clicar novamente no checkbox, a classe será removida e o tema voltará para o claro.
