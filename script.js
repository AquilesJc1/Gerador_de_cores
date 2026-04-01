let cor;
let cores = 0;

function mudarCor(id) {
    let corFundo = document.getElementById("cor");

    corFundo.style.backgroundColor = 
    `rgb(${document.getElementById('vermelho').value},
         ${document.getElementById('verde').value},
         ${document.getElementById('azul').value})`

    cor = `rgb(${document.getElementById('vermelho').value},${document.getElementById('verde').value},${document.getElementById('azul').value})`
}

function guardarCor() {

    let vermelho = document.getElementById("vermelho");
    let verde = document.getElementById("verde");
    let azul = document.getElementById("azul");

    if (cores >= 10) {
        alert("Maximo de cores!")
    } else {
        let paleta = document.querySelector(".paleta");
        let elemento = document.createElement('div');
        elemento.className = "cor";
        elemento.style.backgroundColor = cor;
        elemento.setAttribute("title", cor);
        elemento.setAttribute("onclick", `ver('${cor}', '${Hexa()}')`);
    
        paleta.appendChild(elemento)
        cores++;
    }

}

function Hexa() {
    let vermelho = parseInt(document.getElementById("vermelho").value);
    let verde = parseInt(document.getElementById("verde").value);
    let azul = parseInt(document.getElementById("azul").value);

    let hex = "#" + 
        vermelho.toString(16).padStart(2, '0') +
        verde.toString(16).padStart(2, '0') +
        azul.toString(16).padStart(2, '0');

    return hex.toUpperCase();
}

function ver(cor, Hexa) {
    let view = document.querySelector(".ver");
    view.style.display = "flex";
    view.innerHTML = `${cor} <br> ${Hexa}`;
}