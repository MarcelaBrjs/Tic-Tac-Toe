let turno = false;
let victoria = false;
let contador = 0;

window.onload = () => {
    turnoJugador()
}

const turnoJugador = () => {
    const JugadorO = document.getElementById("O");
    const JugadorX = document.getElementById("X");

    if (turno === false && victoria === false) {
        JugadorX.style.border = "1px solid #07c";
        JugadorX.style.boxShadow = "0 0 10px #07c";
        JugadorO.style.border = "0px";
        JugadorO.style.boxShadow = "0 0 0px #07c";
    } else if (turno === true && victoria === false) {
        JugadorO.style.border = "1px solid #07c";
        JugadorO.style.boxShadow = "0 0 10px #07c";
        JugadorX.style.border = "0px";
        JugadorX.style.boxShadow = "0 0 0px #07c";
    } else {
        JugadorO.style.border = "0px";
        JugadorO.style.boxShadow = "0 0 0px #07c";
        JugadorX.style.border = "0px";
        JugadorX.style.boxShadow = "0 0 0px #07c";
    }
}

const handleClick = (event) => {
    const { id } = event.target;
    const div = document.getElementById(id);

    if (div.innerText === "" && victoria === false) {
        div.innerText = turno ? "O" : "X";
        verificarVictoria();
        turno = !turno;
        turnoJugador();
    }
};

const verificarVictoria = () => {
    contador++;

    const div1 = document.getElementById(1);
    const div2 = document.getElementById(2);
    const div3 = document.getElementById(3);
    const div4 = document.getElementById(4);
    const div5 = document.getElementById(5);
    const div6 = document.getElementById(6);
    const div7 = document.getElementById(7);
    const div8 = document.getElementById(8);
    const div9 = document.getElementById(9);

    const forma1 = div1.innerText === div2.innerText && div1.innerText === div3.innerText && div1.innerText !== "";
    const forma2 = div4.innerText === div5.innerText && div4.innerText === div6.innerText && div4.innerText !== "";
    const forma3 = div7.innerText === div8.innerText && div7.innerText === div9.innerText && div7.innerText !== "";
    const forma4 = div1.innerText === div4.innerText && div1.innerText === div7.innerText && div1.innerText !== "";
    const forma5 = div2.innerText === div5.innerText && div2.innerText === div8.innerText && div2.innerText !== "";
    const forma6 = div3.innerText === div6.innerText && div3.innerText === div9.innerText && div3.innerText !== "";
    const forma7 = div1.innerText === div5.innerText && div1.innerText === div9.innerText && div1.innerText !== "";
    const forma8 = div3.innerText === div5.innerText && div3.innerText === div7.innerText && div3.innerText !== "";

    const linea = document.getElementById("linea");
    if (forma1) {
        linea.style.height = "10px";
        linea.style.width = "600px";
        linea.style.top = "90px";
        linea.style.left = "0px";
    } else if (forma2) {
        linea.style.height = "10px";
        linea.style.width = "600px";
        linea.style.top = "290px";
        linea.style.left = "0px";
    } else if (forma3) {
        linea.style.height = "10px";
        linea.style.width = "600px";
        linea.style.top = "495px";
        linea.style.left = "0px";
    } else if (forma4) {
        linea.style.width = "10px";
        linea.style.height = "600px";
        linea.style.top = "0px";
        linea.style.left = "90px";
    } else if (forma5) {
        linea.style.width = "10px";
        linea.style.height = "600px";
        linea.style.top = "0px";
        linea.style.left = "290px";
    } else if (forma6) {
        linea.style.width = "10px";
        linea.style.height = "600px";
        linea.style.top = "0px";
        linea.style.left = "495px";
    } else if (forma7) {
        linea.style.height = "10px";
        linea.style.width = "600px";
        linea.style.top = "290px";
        linea.style.left = "0px";
        linea.style.transform = "rotate(45deg)";
    } else if (forma8) {
        linea.style.height = "10px";
        linea.style.width = "600px";
        linea.style.top = "290px";
        linea.style.left = "0px";
        linea.style.transform = "rotate(-45deg)";
    }

    if (forma1 || forma2 || forma3 || forma4 || forma5 || forma6 || forma7 || forma8) {
        victoria = true;
        alert(`¡Ganó la ${turno ? "O" : "X"}!`);
    } else {
        if (contador === 9) {
            alert("¡Es un empate!")
        }
    }
};

const reload = () => {
    const div1 = document.getElementById(1);
    const div2 = document.getElementById(2);
    const div3 = document.getElementById(3);
    const div4 = document.getElementById(4);
    const div5 = document.getElementById(5);
    const div6 = document.getElementById(6);
    const div7 = document.getElementById(7);
    const div8 = document.getElementById(8);
    const div9 = document.getElementById(9);

    const linea = document.getElementById("linea");
    linea.style.height = "0px";
    linea.style.width = "0px";        
    linea.style.top = "0px";
    linea.style.left = "0px";

    div1.innerText = "";
    div2.innerText = "";
    div3.innerText = "";
    div4.innerText = "";
    div5.innerText = "";
    div6.innerText = "";
    div7.innerText = "";
    div8.innerText = "";
    div9.innerText = "";

    turno = false;
    victoria = false;
    contador = 0;
    turnoJugador()
}