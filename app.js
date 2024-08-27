

function encriptarTexto() {
  
  let textoEncriptar = document.getElementById("txt-encriptar").value;

  if (textoEncriptar == "") {
    swal({
      title: "!! Algo esta Mal !!",
      text: "Ingresa el texto que deseas encriptar",
      icon: "info",
    });
    return;
  }

  if (/^[abcdefghijklmnñopqrstuvwxyz\s]+$/.test(textoEncriptar) == false) {
    swal({
      title: "!! Algo esta Mal !!",
      text: "Solo se aceptan letras minúsculas y sin Tildes",
      icon: "error",
    });
    return;
  }

   let textoEncriptado = textoEncriptar
    .replace(/a/g, "ai")
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")    
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  ocultarElemento(".contenido__desencriptar__imagen");
  ocultarElemento(".contenido__desencriptar__mensaje");
  ocultarElemento(".contenido__desencriptar__mensaje--parrafo");

  asignarTextoElemento("#txt-desencriptar", textoEncriptado);
  mostrarElemento(".contenido__desencriptar__texto");
  mostrarElemento(".contenido__desencriptar__boton--copiar");
}

function desencriptarTexto() {
  
  let textoDesencriptar = document.getElementById("txt-encriptar").value;

  if (textoDesencriptar == "") {
    swal({
      title: "!! Algo esta Mal !!",
      text: "Ingresa el texto que deseas desencriptar",
      icon: "info",
    });
    return;
  }

  if (/^[abcdefghijklmnñopqrstuvwxyz\s]+$/.test(textoDesencriptar) == false) {
    swal({
      title: "!! Algo esta Mal !!",
      text: "Solo se aceptan letras minúsculas y sin Tildes",
      icon: "error",
    });
    return;
  }

  let textoDesencriptado = textoDesencriptar
    .replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")    
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  asignarTextoElemento("#txt-desencriptar", textoDesencriptado);
  mostrarElemento(".contenido__desencriptar__texto");
  mostrarElemento(".contenido__desencriptar__boton--copiar");

  ocultarElemento(".contenido__desencriptar__imagen");
  ocultarElemento(".contenido__desencriptar__mensaje");
  ocultarElemento(".contenido__desencriptar__mensaje--parrafo");
}

function copiarTexto() {

  let textoCopiar = document.getElementById("txt-desencriptar").value;
  navigator.clipboard.writeText(textoCopiar);
  swal({
    title: "Copiado!",
    text: "Se ha copiado el texto al portapapeles",
    icon: "success",
  });
  return;
}

ocultarElemento("#txt-desencriptar");
ocultarElemento(".contenido__desencriptar__boton--copiar");

function asignarTextoElemento(elemento, texto) {

  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function ocultarElemento(elemento) {

  let elementoHTML = document.querySelector(elemento);
  elementoHTML.style.display = "none";
  return;
}

function mostrarElemento(elemento) {

  let elementoHTML = document.querySelector(elemento);
  elementoHTML.style.display = "flex";
  return;
}


