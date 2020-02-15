
/*PRIMER PUNTO*/
function calcular(){
  document.getElementById('formulario');
  var raiz=formulario.valor.value;
  var cuadrado=formulario.valor.value;
  var cubo=formulario.valor.value;
  raiz=(Math.sqrt(raiz));
  cuadrado=cuadrado*cuadrado;
  cubo=cubo*cubo*cubo;
  alert("El cuadrado es: " + cuadrado + "\nEl cubo es: " + cubo + "\nLa raiz es: "+raiz);
}

/*SEGUNDO PUNTO*/
function Mayor(){
  document.getElementById('formulario');
  var num1=formulario.num1.value;
  var num2=formulario.num2.value;
  var num3=formulario.num3.value;

  if (num1>num2)
  {
    if (num1>num3)
    {
      alert("El numero mayor es "+num1);
    }
  }
  else {
    if (num2>num1)
    {
      if (num2>num3)
      {
        alert("El numero mayor es "+num2);
      }
      else {
        alert("El numero mayor es "+num3);
      }
    }
  }
}

/*TERCER PUNTO*/
function apellidos(){
  document.getElementById('formulario');
  var cadena1=formulario.nombre_1.value;
  var cadena2=formulario.apellido_1.value;
  var resultado= cadena1 + " " + cadena2;

  document.getElementById('total_1').value= resultado;

}



