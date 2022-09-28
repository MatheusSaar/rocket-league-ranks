function verifique() {
  let rankButton = document.getElementById("button");
  let msgRank = document.getElementById("msg");

  let bronze = document.getElementById("bronze");
  let prata = document.getElementById("prata");
  let ouro = document.getElementById("ouro");
  let platina = document.getElementById("platina");
  let diamante = document.getElementById("diamante");
  let campeao = document.getElementById("campeao");
  let grandeCampeao = document.getElementById("grande-campeao");
  let lenda = document.getElementById("lenda");

  let ranNum = Math.random() * 100;

  //   Adicionando boas práticas no projeto de acordo com dry - dont repeat yourself
  if (ranNum < 5) {
    displayScreen(bronze);
    msgRank.innerHTML = "BRONZE";
  } else if (ranNum < 27) {
    displayScreen(prata);
    msgRank.innerHTML = "PRATA";
  } else if (ranNum < 50) {
    displayScreen(ouro);
    msgRank.innerHTML = "OURO";
  } else if (ranNum < 61) {
    displayScreen(platina);
    msgRank.innerHTML = "PLATINA";
  } else if (ranNum < 77) {
    displayScreen(diamante);
    msgRank.innerHTML = "DIAMANTE";
  } else if (ranNum < 83) {
    displayScreen(campeao);
    msgRank.innerHTML = "CAMPEAO";
  } else if (ranNum < 98) {
    displayScreen(grandeCampeao);
    msgRank.innerHTML = "GRANDE CAMPEAO";
  } else if (ranNum < 99) {
    displayScreen(platina);
    msgRank.innerHTML = "SUPERSONIC LEGEND";
  }
}

function displayScreen(rank) {
  rank.style.display = "block";
  rank.style.transition = "all 0.4s";
  rankButton.onclick = "#";
}
