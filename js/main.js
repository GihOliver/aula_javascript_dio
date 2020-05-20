function clicar(){
    //alert("Obrigado")
    document.getElementById("agradecimento").innerHTML = "Obrigada";//innerHtml é injetar um html
}

function redirecionar(){
 //   window.open("https://www.icloud.com.br/4511/o-que-e-dom-em-uma-pagina-da-web");//abre em uma aba diferente
    window.location.href = "https://www.google.com/";//href vai abrir na mesma aba
}
/*function soma (n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

function validadaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }

    return validar;
}

var idade = prompt("Informe sua idade: ");
console.log(validadaIdade(idade));
alert(soma(5 , 10));

alert(setReplace("O nome dela é Giseli", "Giseli", "Jennifer"));



/*var data = new Date();
//alert(data);
alert(data.getMonth()+1);

/*var count;
for(count = 1; count <= 5; count++){
    alert(count);
}*/

/*var count = 0;
while(count <= 5){ // estrututura de repetição
    console.log(count);
    count = count ++;

};*/


//var idade = 12;
/*var idade = prompt("Informe a sua idade: ");//coloca uma pergunta para o usuario
if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};*/

/*var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"vermelha"}]//lista de dicionario
console.log(frutas.nome);
alert(frutas[1].nome);*/

/*var fruta = {nome:"maça", cor:"vermelha"}//dicionario
console.log(fruta);

var lista = ["maça", "perâ", "laranja"]
lista.push("uva"); //colocar
lista.pop();//tira um item
console.log(lista[1]);
console.log(lista.length); //quantidade de elementos que tenho na minha lista
console.log(lista.reverse());//trás os elementos ao contrário
console.log(lista.toString);//altera o array de lista para string
console.log(lista.join( - ""));*///transforma em String e pode ser add o que quiser, por exemplo - para separar


//var nome = "Giseli Oliveira";
//var idade = 29;
//var frase = "Japão melhor time do mundo"
//alert( nome + " tem " + idade + " anos");

//console.log(frase.replace("Japão", "Brasil"));
//console.log(frase.toLocaleLowerCase());
//console.log(nome.toLocaleUpperCase());
//alert(frase.replace("Japão", "China"));