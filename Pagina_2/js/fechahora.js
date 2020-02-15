function mueveReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours();
    minuto = momentoActual.getMinutes();
    segundo = momentoActual.getSeconds();

    day = momentoActual.getDate();
    month = momentoActual.getMonth();
    year = momentoActual.getFullYear();

    document.getElementById("textoreloj").innerHTML = hora + " : " + minuto + " : " + segundo;
    document.getElementById("fecha_actual").innerHTML = day + "/" + month + "/" + year;

    setTimeout("mueveReloj()",1000);
}
