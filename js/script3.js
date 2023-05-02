function habilitarOperacao(){
    var numero1 = document.getElementById('numero1').value, numero2 = document.getElementById('numero2').value;

    if(numero1 && numero2 ) document.getElementById("btn_operar").disabled = false;
    else document.getElementById("btn_operar").disabled = true;
}

function operar() {
    var numero1 = document.getElementById('numero1').value, numero2 = document.getElementById('numero2').value;

    var result = 0, resto, text="";
    var dividendo = numero1, divisor = numero2;

    while(resto != 0){
        resto = dividendo % divisor;
        quociente = Math.floor(dividendo/divisor);
        text = text + dividendo +" = "+divisor+" * "+quociente+" + "+resto+" <br> ";

        if(resto!=0){
            dividendo = divisor;
            divisor = resto;
        }

    }

    text = text + "Quando resto foi nulo, o divisor era: "+divisor+" <br> ";

    document.getElementById('resultado').innerHTML = "MDC("+numero1+","+numero2+") = "+divisor;
    document.getElementById('explicacao').innerHTML = text; 
}

function limparCampos(){
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('explicacao').innerHTML = "";
    document.getElementById('numero1').value = ""; 
    document.getElementById('numero2').value = ""; 
    document.getElementById("btn_operar").disabled = true;
}