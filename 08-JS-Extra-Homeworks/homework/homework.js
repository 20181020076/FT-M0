// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let array = [];
  for (let key in objeto) {
    array.push([key,objeto[key]]);
  }
  return array;
}


function numberOfCharacters(str) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let array = str.split("");
  let objeto ={};
  array.forEach(e => {
    if(e === undefined){
      objeto[e] = 1 ;
    }else{ 
      objeto[e] = objeto[e] + 1;
    }
  })
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if(s[i] === s[i].toUpperCase()){
      str = str+s[i];
    }
  }
  for (let i = 0; i < s.length; i++) {
    if(s[i] === s[i].toLowerCase()){
      str = str+s[i];
    }
  }
  return str;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let array = str.split(" ");
  let array2 = [];

  for (e in array) {
    const palabra = array[e].split("").reverse();
    let palabraNueva = palabra.join("");
    array2.push(palabraNueva);
    
  }
  let arrayInvertido = array2.join(" ")
  
  return arrayInvertido ;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let strNumero = numero.toString();
  let array = strNumero.split("");
  let arrayReverse = array.reverse().join("");


  
  if(strNumero === arrayReverse){
    return "Es capicua";
  }return "No es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let str = "";
  for (let i in cadena) {
    if(cadena[i] == "a" || cadena[i] =="b" || cadena[i] =="c"){
      
    }else{
      str = str+cadena[i];
    }
    
  }
  return str;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort((a,b) => {
    if(a.length < b.length){
      return -1;
    }
   if(a.length >b.length){
      return 1;
    }
    return 0;
  }) 
//   arr.sort((a,B) => {
//     return a - b;
//   })
   return arr;
}


function buscoInterseccion(arreglo1, arreglo2){ 
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let arrayNuevo = [];
  arreglo1.forEach(e => {
    arreglo2.forEach(el =>{
      if(e === el){
        arrayNuevo.push(e);
      }
    })
  });
  return arrayNuevo;

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

