var fondos = ["imagenes/fondo.jpg","imagenes/fondo5.jpg","imagenes/fondo3.jpg","imagenes/fondo4.jpg","imagenes/fondo6.jpg"]

function FondoPantalla()
{
 var image = fondos[Math.floor(Math.random()*fondos.length)]
 document.body.style.backgroundImage="url("+image+")";
}
