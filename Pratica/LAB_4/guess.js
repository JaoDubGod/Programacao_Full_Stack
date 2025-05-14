let rNum = null;

function adNum(event) {
    event.preventDefault();

    let boxResultado = document.getElementById("resultado")
    let usNum = parseInt(document.getElementById("ipNum").value);

    if (rNum === null) {
        rNum = Math.floor(Math.random() * 100);
        console.log("Número gerado: " + rNum);
    }

    if (usNum == rNum) {
        boxResultado.innerHTML = "Parabéns, você acertou!"
        boxResultado.style.setProperty("background-color", "green");
    }

    else if (usNum > rNum) {
        boxResultado.innerHTML = "O número digitado foi maior, tente novamente!"
        boxResultado.style.setProperty("background-color", "red");
    }

    else if (usNum < rNum) {
        boxResultado.innerHTML = "O número digitado foi menor, tente novamente!"
        boxResultado.style.setProperty("background-color", "red");
    }
}