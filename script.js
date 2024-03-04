imprime = (msg) => console.log(msg);

fazerSorteio = () => {
 let num1 = document.getElementById("inicio").value;
 let num2 = document.getElementById("fim").value;
 let sorteio = Math.floor( Math.random(incio, fim+1) * Number(num2) - Number(num1) + 1);

 document.getElementById("resultado").innerHTML = sorteio;
}
