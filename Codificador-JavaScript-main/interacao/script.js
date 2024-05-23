var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");


function criptografar(){

  var texto = textInput.value;

  var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")
  .replace(/1/g, "0001").replace(/2/g, "0010").replace(/3/g, "0011").replace(/4/g, "0100")
  .replace(/5/g, "0101").replace(/6/g, "0110").replace(/7/g, "0111").replace(/8/g, "1000")
  .replace(/9/g, "1001").replace(/10/g, "1010").replace(/@/g, "*@#").replace(/#/g, "@$%")

  
  document.getElementById('output').innerHTML = '<textarea readonly id="texto">' + resultCripto + 
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar(){

    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  
    document.getElementById('output').innerHTML = '<textarea readonly id="texto">' + resultDescripto + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
    var textoCop = document.getElementById('texto');
  
    textoCop.select();
    document.execCommand('copy');
    alert("A mensagem foi copiada.");
}  