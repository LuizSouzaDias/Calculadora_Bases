function habilitarConversor(){
    var base = document.querySelector('#baseInicial');

    if(base.value == ''){
        document.getElementById("conversor").disabled = true;
        document.getElementById("conversor").value = '';
        document.getElementById("btn_converter").disabled = true;
    }else{
        document.getElementById("conversor").disabled = false;

        if(base.value == 'bi'){
            document.getElementById("conversor_bi").disabled = true;
            document.getElementById("conversor_dec").disabled = false;
            document.getElementById("conversor_hexa").disabled = false;
        }else if (base.value == 'dec'){
            document.getElementById("conversor_bi").disabled = false;
            document.getElementById("conversor_dec").disabled = true;
            document.getElementById("conversor_hexa").disabled = false;
        }else if (base.value == 'hexa'){
            document.getElementById("conversor_bi").disabled = false;
            document.getElementById("conversor_dec").disabled = false;
            document.getElementById("conversor_hexa").disabled = true;
        }
    }

}

function habilitarBtn(){

    var conversor = document.querySelector('#conversor').value,numero = document.querySelector('#numero').value;

    if(conversor && numero) document.getElementById("btn_converter").disabled = false;
    else document.getElementById("btn_converter").disabled = true;

}


//conversao 
function converter(){
    
    var numero = document.getElementById("numero").value;
    var baseInicial = document.getElementById("baseInicial").value;
    var conversor = document.getElementById("conversor").value;

    if(baseInicial == 'dec' && conversor == 'bi')ConverterDecBi(numero);
    else if(baseInicial == 'dec' && conversor == 'hexa')ConverterDecHexa(numero);
    else if(baseInicial == 'bi' && conversor == 'dec')ConverterBiDec(numero);
    else if(baseInicial == 'bi' && conversor == 'hexa')ConverterBiHexa(numero);
    else if(baseInicial == 'hexa' && conversor == 'dec')ConverterHexaDec(numero.toLowerCase());
    else if(baseInicial == 'hexa' && conversor == 'bi')ConverterHexaBi(numero);

}

function ConverterDecBi(numero){

    var i = 0, quociente, resto = [], text = "";

    while(quociente != 0){
        resto[i] = numero % 2;
        quociente = Math.floor(numero/2)
        text = text + numero +" / 2 = "+quociente+", resto = "+resto[i]+" <br> ";
        numero = quociente;
        i++;
    }

    resultado = resto.reverse(); //inverte array
    resultado = resultado.toString(); //transformando array em string
    document.getElementById('resultado').innerHTML = "Resultado: "+resultado.replace(/,/g, ""); //tirando virgula da array e colocando no h4     
    document.getElementById('explicacao').innerHTML = text; //colocando explicacao

}

function ConverterDecHexa(numero){
    var i = 0, quociente, resto = [], text = "";

    while(quociente != 0){
        resto[i] = numero % 16;
        quociente = Math.floor(numero/16)
        text = text + numero +" / 16 = "+quociente+", resto = "+resto[i]+" <br> ";
        numero = quociente;
        i++;
    }

    resultado = resto.reverse(); 
    resultado = resultado.toString(); 
    resultado= resultado.replace(/10/g, "A"); 
    resultado= resultado.replace(/11/g, "B"); 
    resultado= resultado.replace(/12/g, "C"); 
    resultado= resultado.replace(/13/g, "D"); 
    resultado= resultado.replace(/14/g, "E"); 
    resultado= resultado.replace(/15/g, "F"); 
    resultado= resultado.replace(/,/g, ""); 
    document.getElementById('resultado').innerHTML = "Resultado: "+resultado; 
    document.getElementById('explicacao').innerHTML = text; 

}

function ConverterBiHexa(numero){
    var text = "",numeros = numero.split(""), qtd_4,agrupamentos = [],
    x = numeros.length - 1,resultado = [],resposta;

    qtd_4 = Math.floor(numeros.length/4); //saber quantas vezes posso agrupar por 4
    resto = numeros.length % 4;  //saber o tamanho do ultimo agrupamento


    for(var i = 0;i < qtd_4; i++){
        agrupamentos[i] = numeros[x-3] + numeros[x-2] + numeros[x-1] + numeros[x];  //agrupando de 4 em 4
        resposta = "0b" + agrupamentos[i];
        text = text + "Agrupamento "+ (i+1) +": "+agrupamentos[i]+" = "+Number(resposta).toString(16)+" <br> ";
        x-=4;
    }

    if(resto == 3) agrupamentos[qtd_4] = "0" + numeros[0] + numeros[1] + numeros[2];
    else if(resto == 2) agrupamentos[qtd_4] = "00" + numeros[0] + numeros[1];
    else if(resto == 1) agrupamentos[qtd_4] = "000" + numeros[0];

    resposta = "0b" + agrupamentos[qtd_4];
    if(resto != 0)text = text + "Agrupamento "+ (qtd_4 + 1) +": "+agrupamentos[qtd_4]+" = "+Number(resposta).toString(16)+" <br> ";


    //0x, 0b e 0 fazem a engine interpretar a string como base diferente de 10
    for(var c = (agrupamentos.length - 1); c > -1; c--){
        console.log(agrupamentos[c]);
        resultado[c] = '0b' + agrupamentos[c];
        resultado[c] = Number(resultado[c]).toString(16);
    }

    text = text + "<br>*da esquerda para a direita ( completando com 0 a <br> esquerda os agrupamentos menores que 4)";

    resultado = resultado.reverse(); 
    resultado = resultado.toString(); 
    resultado = resultado.replace(/,/g, "");
    resultado = resultado.replace(/NaN/g, "");
    document.getElementById('resultado').innerHTML = "Resultado: "+resultado.toUpperCase() ;
    document.getElementById('explicacao').innerHTML = text; 

}

function ConverterBiDec(numero){
    var text = "",numeros = numero.split(""),resultado = [],tamanho, numeros_int = [], soma = 0; 

    tamanho = numeros.length - 1;

    for(var i = 0;i < numeros.length; i++){
        resultado[i] = numeros[i] * Math.pow(2,tamanho);
        text = text + numeros[i]+" * 2 ^ "+tamanho+" = "+resultado[i]+" <br> ";
        tamanho--;
    }

    for (var i = 0; i < numeros.length; i++){numeros_int.push(parseInt(resultado[i]));} //transformando array string em array int

    for (var i = 0; i < numeros_int.length; i++){soma = soma + numeros_int[i]}  //somar

    text = text + "Soma = "+soma+" <br> ";

    document.getElementById('resultado').innerHTML = "Resultado: "+soma;
    document.getElementById('explicacao').innerHTML = text; 
}

function ConverterHexaBi(numero){
    var text = "",numeros = numero.split(""),resultado = [],resposta;

    for(var i = 0;i < numeros.length; i++){
        resposta = '0x' + numeros[i];
        resultado[i] = Number(resposta).toString(2);

        if(resultado[i].length == 1) resultado[i] = "000" + resultado[i];
        else if(resultado[i].length == 2) resultado[i] = "00" + resultado[i];
        else if(resultado[i].length == 3) resultado[i] = "0" + resultado[i];
        text = text + "Agrupamento "+ (i+1) +": "+numeros[i]+" = "+resultado[i]+" <br> ";
    }


    resultado = resultado.toString(); 
    resultado = resultado.replace(/,/g, "");
    resultado = resultado.replace(/NaN/g, "");
    document.getElementById('resultado').innerHTML = "Resultado: "+resultado;
    document.getElementById('explicacao').innerHTML = text; 
}

function ConverterHexaDec(numero){

    var text = "",numeros = numero.split(""),resultado = [],tamanho, numeros_int = [], soma = 0;

    for(var i = 0; i < numeros.length; i++){
        if(numeros[i]= numeros[i].replace(/a/g, "10")  );
        if(numeros[i]= numeros[i].replace(/b/g, "11")  );
        if(numeros[i]= numeros[i].replace(/c/g, "12")  );
        if(numeros[i]= numeros[i].replace(/d/g, "13")  );
        if(numeros[i]= numeros[i].replace(/e/g, "14")  );
        if(numeros[i]= numeros[i].replace(/f/g, "15")  );
    } 

    tamanho = numeros.length - 1;

    for(var i = 0;i < numeros.length; i++){
        resultado[i] = numeros[i] * Math.pow(16,tamanho);
        text = text + numeros[i]+" * 16 ^ "+tamanho+" = "+resultado[i]+" <br> ";
        tamanho--;
    }

    for (var i = 0; i < numeros.length; i++){numeros_int.push(parseInt(resultado[i]));} //transformando array string em array int

    for (var i = 0; i < numeros_int.length; i++){soma = soma + numeros_int[i]}  //somar

    text = text + "Soma = "+soma+" <br> ";

    document.getElementById('resultado').innerHTML = "Resultado: "+soma;
    document.getElementById('explicacao').innerHTML = text; 
}

function limparCampos(){
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('explicacao').innerHTML = "";
    document.getElementById('conversor').value = ""; 
    document.getElementById('baseInicial').value = ""; 
    document.getElementById('numero').value = ""; 
    document.getElementById('btn_converter').disabled = true;
}