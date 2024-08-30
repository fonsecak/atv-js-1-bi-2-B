const btnEnviar = document.getElementById('addBotao');
const formInputNome = document.getElementById('nome');
const formInputEmail = document.getElementById('email');

function sendTaks () {
    if (formInputNome.value.length === 0 || formInputEmail.value.length === 0 ){
        alert ("Preencha todos os campos");
    }
        
}

btnEnviar.setAttribute('onclick', 'sendTaks()');
