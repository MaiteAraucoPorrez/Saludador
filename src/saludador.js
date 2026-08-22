function saludar(nombre, hora) {
  if (hora >= 5 && hora < 12) {
    return "Buenos días " + nombre + "!";
  } else if (hora >= 12 && hora < 19) {
    return "Buenas tardes " + nombre + "!";
  } else {
    return "Buenas noches " + nombre + "!";
  }
}
export default saludar;