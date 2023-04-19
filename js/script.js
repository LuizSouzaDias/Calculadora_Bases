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

    if(conversor.value == ''){
        document.getElementById("btn_converter").disabled = true;
    }else{
        document.getElementById("btn_converter").disabled = false;
    }




}