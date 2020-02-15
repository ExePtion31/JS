function mueveReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    dia = momentoActual.getDate()
    mes = momentoActual.getMonth();
    anis = momentoActual.getFullYear();

    document.getElementById("textoreloj").innerHTML = hora + " : " + minuto + " : " + segundo;
    document.getElementById("fecha_actual").innerHTML = dia + "/" + mes + "/" + anis;

    setTimeout("mueveReloj()",1000)
}
