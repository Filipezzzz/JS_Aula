const botão = document.getElementById("botão");
const nomeBeneficiario = document.getElementById("Nome-Beneficiario");
const conta = document.getElementById("Número-conta");
const valor = document.getElementById("Valor-depositado");
const form =document.querySelector("form");
let formValido = false;



function validaNome (nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(" ");

    return nomeComoArray.length >= 2 ;

}


form.addEventListener("submit", function(e){
    e.preventDefault();

    const mensagemSucesso = `Montante de : <b>${valor.value}</b> para o cliente: <b>${nomeBeneficiario.value}</b> na conta <b>${conta.value}</b>`;

    formValido = validaNome(nomeBeneficiario.value)
    if (formValido){
        const MensagemSucesso = document.querySelector(" .Mensagem-sucesso")
        MensagemSucesso.innerHTML = mensagemSucesso;
        MensagemSucesso.style.display = "block";

        nomeBeneficiario.value = " ";
        conta.value = " ";
        valor.value = " ";
    } else{
        nomeBeneficiario.style.border = "2px solid red";
        document.querySelector(".error-menssage").style.display = "block";
    }

})



nomeBeneficiario.addEventListener("keyup", function(e){
    console.log(e.target.value);
    formValido = validaNome(e.target.value);

    if (!formValido) {
        nomeBeneficiario.classList.add ("error");
        document.querySelector(".error-menssage").style.display = "block";
    } else {
        nomeBeneficiario.classList.remove ("error");
        document.querySelector(".error-menssage").style.display = "none";
    }


})













console.log(form);
