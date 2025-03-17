function ejecutar(Dato) {
  let entrada = "";
  let codigo = 0;
  let binario = "";
  
  if(Dato=="Caracter"){
      entrada = document.getElementById("Caracter").value;
      codigo = entrada.charCodeAt(0);
      let num = codigo;
      for (let i = 7; i >= 0; i--) {
      if (2 ** i <= codigo) {
          binario = binario + "1";
          codigo = codigo - 2 ** i;
      } else {
          binario = binario + "0";
      }
      }
      document.getElementById("parrafo1").textContent =
      "Del caracter '" + entrada + "´ su respectivo decimal es " + num +
      " y su binario es " + binario;
  }else if(Dato=="Binario"){   
      entrada=document.getElementById("Binario").value;
      let caracter="";
      let suma=0;
       for (let i = 7; i >= 0; i--) {
      if(entrada[7-i]==1){
          suma=suma+2**i;
      } 
      }
      caracter=String.fromCharCode(suma);
      document.getElementById("parrafo").textContent="El binario es igual al decimal; "+suma+" el cual en codigo ASCII es: "+caracter;

  }
}
function borrar() {
    // Limpiar los campos de entrada
    document.getElementById("Caracter").value = "";
    document.getElementById("Binario").value = "";
    
    // Limpiar los párrafos de salida
    document.getElementById("parrafo1").textContent = "";
    document.getElementById("parrafo").textContent = "";
    }
