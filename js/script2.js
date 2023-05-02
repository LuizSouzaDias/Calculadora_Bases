function habilitarOperacao(){
    var operacao = document.getElementById('operacao').value, base = document.getElementById('base').value,
    numero1 = document.getElementById('numero1').value, numero2 = document.getElementById('numero2').value;

    if(operacao && base && numero1 && numero2 ) document.getElementById("btn_operar").disabled = false;
    else document.getElementById("btn_operar").disabled = true;
}

function operar(){
    var operacao = document.getElementById('operacao').value, base = document.getElementById('base').value,
    numero1 = document.getElementById('numero1').value, numero2 = document.getElementById('numero2').value;

    if(base == 'bi') binario(operacao,numero1,numero2);

}

function binario(op, n1, n2) {
    const numero1 = parseInt(n1, 2);
    const numero2 = parseInt(n2, 2);
    var result = 0;
    switch (op) {
    case '+':
        result = numero1 + numero2;
        break;
    case '-':
        result = numero1 - numero2;
        break;
    case '*':
        result = numero1 * numero2;
        break;
    }
    console.log(result.toString(2));
}

function limparCampos(){
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('explicacao').innerHTML = "";
    document.getElementById('numero1').value = ""; 
    document.getElementById('numero2').value = ""; 
    document.getElementById('operacao').value = ""; 
    document.getElementById("btn_operar").disabled = true;
}