function botao() {
  //  alert("obrigado por clickar")
    document.getElementById("agradecimento").innerHTML = "obrigado por clickar";    
}
function redirecionar(){
    window.open("https://twitter.com/home")
}

function trocar(elemento) {
   // document.getElementById("passar").innerHTML = "obrigado por passar o mouse";
   // alert("passou");
   elemento.innerHTML = "obrigado por passar o mouse";
}


function voltar(elemento){
    document.getElementById("passar").innerHTML ="passe o mouse aqui";
    elemento.innerHTML = "passe o mouse aqui";
}
function funcaoChange(elemento){
    console.log(elemento.value);
}




/*
function  soma (n1,n2){
    return n1 +n2;
}

alert(soma(5,10))

function valida(idade){
    var validar;
    if (idade >=18){
        validar=true;
    }else{
        validar=false;
    }
    return validar
}
var idade=prompt("Qual a sua idade");
console.log(valida(idade));

/*
var d = new Date();
alert(d.getDate() + "/"+ (d.getMonth()+1));
*/
/*
var count;
for(count=0;count < 5 ; count ++) {
    alert(count);
};
*/

/*
var idade = prompt("qual a sua idade?");

if (idade >= 18) {
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/
/*
var count =0;
while (count <5){
    console.log(count);
    count++;
}
*/
/*
var frutas =[{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas[1])
*/
/*
var fruta ={nome:"maça", cor:"vermelha"};
console.log(fruta)
*/
/*
var nome = "Marcos Thadeu";
var idade = 20;
var idade2 = 10;
var frase = "Japão e o melhor pais do mundo";
var lista = ["maça","uva","laranja"];
lista.push("manga");

console.log(lista.length)
console.log(lista.toString()); 
console.log(lista.join("  ")); 
//alert( nome + " tem "+ idade +" anos ");
console.log(frase.replace("Japão", "Brasil"));
*/