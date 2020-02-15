function validar()
{
  var d;
  d=document.formulario;

  if(d.nombre.value=="")
  {
    alert("No se ha escrito el nombre.");
    d.nombre.focus();
    return;
  }

  if(d.f_nac.value=="")
  {
    alert("No se ha escrito la fecha de nacimiento.");
    d.f_nac.focus();
    return;
  }

  if(d.nui.value=="")
  {
    alert("No se ha escrito el NUI.");
    d.niu.focus();
    return;
  }

  if(d.apellido.value=="")
  {
    alert("No se ha escrito el Apellido.");
    d.apellido.focus();
    return;
  }

  if(d.direccion.value=="")
  {
    alert("No se ha escrito la Direccion.");
    d.direccion.focus();
    return;
  }

  if(d.cog_postal.value=="")
  {
    alert("No se ha escrito el Código Postal.");
    d.cog_postal.focus();
    return;
  }

  if(d.ciudad.value=="")
  {
    alert("No se ha escrito la Ciudad.");
    d.ciudad.focus();
    return;
  }

  if(d.c_telef.value=="")
  {
    alert("No se ha escrito el Teléfono.");
    d.c_telef.focus();
    return;
  }

  if(d.div_comentarios.value=="")
  {
    alert("No se ha escrito ningun comentario.");
    d.div_comentarios.focus();
    return;
  }



  d.submit();
}
