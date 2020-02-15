var v1;
function abre()
{
  v1=window.open("Subpaginas/Publicidad.html","v","status=yes","resizable=yes");
  v1.status="Ventana creada para publicidad";
  status="Ventana Estandar del Navegador";
}

function cierra()
{
  if (confirm("Seguro que quieres salir?"))
  {
    window.close();
  }
}
