let nomeUsuario = "";
let elemento = document.querySelector("#nome-usuario");

while(nomeUsuario ==="" || nomeUsuario === null){
    nomeUsuario = prompt("Qual o seu nome?");
}

if(nomeUsuario === null || nomeUsuario === ""){
    elemento.textContent = "seja muito bem vindo";
}else{
    elemento.textContent = nomeUsuario
}