
/*PRIMER PUNTO*/
function calcular(){
  document.getElementById('formulario');
  var raiz=formulario.valor.value;
  var cuadrado=formulario.valor.value;
  var cubo=formulario.valor.value;
  raiz=(Math.sqrt(raiz));
  cuadrado=cuadrado*cuadrado;
  cubo=cubo*cubo*cubo;
  alert("El cuadrado es: "+cuadrado+" | "+" El cubo es: "+cubo+" | "+" La raiz es: "+raiz);
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
  var resultado= cadena1.concat(cadena2);

  document.getElementById('total_1').value= resultado;

}


/*CUARTO PUNTO*/
function boton1(){
  alert("Usted presiono el 1");
}
function boton2(){
  alert("Usted presiono el 2");
}
function boton3(){
  alert("Usted presiono el 3");
}


/*QUINTO PUNTO*/
function verificar(){
  document.getElementById('formlogin');

  var contra1=formlogin.contra.value;
  var contra2=formlogin.recontra.value;

  if (contra1==contra2)
  {
    alert("Las contraseñas son iguales");
  }
  else
  {
    alert("Las contraseñas no son iguales");
  }
}


/*SEXTO PUNTO*/
function pizza1(){
  var imagen = document.getElementById("informacion1");

  imagen.style.backgroundImage = "url('img/pizza1.jpg')";
  document.getElementById('titulo').innerHTML= "Pizza de Queso y pepperoni";
  document.getElementById('ingredientes').innerHTML= "INGREDIENTES:"+"<br/>*100 gr. de pepperoni"+"<br/>*100 gr. de salami"+"<br/>*200 gr. de queso mozzarella rallado"+"<br/>*1 lata de tomate triturado"+"<br/>*100 gr. de queso parmesano rallado"+"<br/>*1 base de masa para pizza casera"+"<br/>*Sal"+"<br/>*Pimienta"+"<br/>*Oregano"+"<br/>*Albahaca";
  document.getElementById('Precio').innerHTML= "Precio: $65.000";
}

function pizza2(){
  var imagen = document.getElementById("informacion1");

  imagen.style.backgroundImage = "url('img/pizza2.jpg')";
  document.getElementById('titulo').innerHTML= "Pizza de Margarita";
  document.getElementById('ingredientes').innerHTML= "INGREDIENTES:"+"<br/>*220 gr. de masa de pizza italiana"+"<br/>*90 gr. de queso mozzarella"+"<br/>*Hojas de albahaca fresca"+"<br/>*100 gr. de salsa de tomate natural triturado"+"<br/>*Sal y pimienta negra recién molida (al gusto)"+"<br/>*Aceite de oliva virgen extra";
  document.getElementById('Precio').innerHTML= "Precio: $62.500";
}

function pizza3(){
  var imagen = document.getElementById("informacion1");

  imagen.style.backgroundImage = "url('img/pizza3.jpg')";
  document.getElementById('titulo').innerHTML= "Pizza Hawaiana";
  document.getElementById('ingredientes').innerHTML= "INGREDIENTES:"+"<br/>*Piña natural."+"<br/>*Jamón cocido."+"<br/>*Tomate frito o salsa de tomate (si es casero, ya lo bordas)."+"<br/>*Mozzarella fresca."+"<br/>*orégano"+"<br/>*Pimienta";
 document.getElementById('Precio').innerHTML= "Precio: $67.300";
}


function pizza4(){
  var imagen = document.getElementById("informacion1");

  imagen.style.backgroundImage = "url('img/pizza4.jpg')";
  document.getElementById('titulo').innerHTML= "Pizza de Pollo";
  document.getElementById('Precio').innerHTML= "Precio: $70.000";
  document.getElementById('ingredientes').innerHTML= "INGREDIENTES:"+"<br/>*250 g de harina."+"<br/>*140 ml de agua tibia."+"<br/>*15 ml de aceite de oliva."+"<br/>*3 g de levadura de panadería instantanea"+"<br/>*100 g de pollo"+"<br/>*1 cebolla roja pequeña.";
}


function pizza5(){
  var imagen = document.getElementById("informacion1");

  imagen.style.backgroundImage = "url('img/pizza5.jpg')";
  document.getElementById('titulo').innerHTML= "Pizza Napolitana";
  document.getElementById('ingredientes').innerHTML= "INGREDIENTES:"+"<br/>*Masa"+"<br/>*250 gramos de Harina."+"<br/>*1 pizca de Sal."+"<br/>*125 mililitros de Agua."+"<br/>*10 gramos de Levadura fresca."+"<br/>*125 mililitros de Salsa de tomate."+"<br/>*250 gramos de Mozzarella.";
  document.getElementById('Precio').innerHTML= "Precio: $55.000";

}
