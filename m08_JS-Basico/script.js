// alert("Hello, World");

// console.log("Hello, JavaScript");
// var a = 30;
// var b = --a;
// console.log("a = " + a);
// console.log("b = " + b);

//

var nomes = ["Igor", "José", "Maria", "Pedro"];
var notas1 = [7.0, 6.5, 9.5, 5.0];
var notas2 = [8.0, 3.0, 8.5, 2.0];

function media(n1, n2) {
  return (n1 + n2) / 2;
}

function aprovacao(media) {
  var resultado = "Aprovado(a)";
  if (media < 5) {
    resultado = "Reprovado(a)";
  }
  return resultado;
}

for (var i in nomes) {
  let nome = nomes[i];
  let nota1 = notas1[i];
  let nota2 = notas2[i];
  let mediaFinal = media(nota1, nota2);
  let resultado = aprovacao(mediaFinal);

  console.log(
    nome +
      "   |   " +
      nota1 +
      "   |   " +
      nota2 +
      "   |   " +
      mediaFinal +
      "   |   " +
      resultado
  );
}
