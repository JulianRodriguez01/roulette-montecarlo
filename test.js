function realizarApuesta() {
  var resultado = confirm("¿Estás seguro de hacer la apuesta?");

  if (resultado) {
    alert("Has confirmado la acción.");
  } else {
    alert("Has cancelado la apuesta.");
  }
}