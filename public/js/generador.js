function generarCodigo() {
  let letra = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // genera una letra aleatoria
  let numeros = Math.floor(Math.random() * 100); // genera tres números aleatorios
  let codigo = letra + numeros.toString().padStart(3, "0"); // une la letra y los números con ceros a la izquierda si es necesario
  return codigo;
}

document.getElementById("inputCodigo").value = generarCodigo();