const campoEmail = document.getElementById('email');
const campoSenha = document.getElementById('senha');
const formulario = document.querySelector('[data-formulario]')

const mensagemErroNoEmail = document.getElementById('emailError')
const mensagemErroNaSenha = document.getElementById('senhaError')



campoEmail.addEventListener ('blur', () => verificarEmail());
campoSenha.addEventListener ('blur', () => verificarSenha());

formulario.addEventListener ('submit', function(evento) {
    evento.preventDefault();
    if (emailValidado.length === 0) {
        alert("O campo EMAIL não deve ficar em branco ou vazio")
    } else if (senhaValidada.length === 0) {
        alert("O campo SENHA não pode estar vazio!")
        } else {
            fazerLogin();
        }
    
    })

const emailValidado = []
const senhaValidada = []

function verificarEmail(email) {
    email = campoEmail.value;

    if (email === "") {
        mensagemErroNoEmail.innerHTML = "O campo não deve ficar em branco ou vazio!";
        return;
    } 

    if (validarEmail(email)) {
        mensagemErroNoEmail.innerHTML = "";
    //    console.log(`email validado é ${email}`);
        emailValidado.push(email)
        
    } else {
        mensagemErroNoEmail.innerHTML = "O Email digitado não é válido";
    }

    function validarEmail (email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
//    console.log(emailValidado.length)   
}

function verificarSenha(senha) {
    senha = campoSenha.value;

    if (senha.trim() === "") {
        mensagemErroNaSenha.innerHTML = "O campo senha não pode estar em branco ou vazio!"       
    } else {
        mensagemErroNaSenha.innerHTML = ""
      //  console.log(`senha validada é ${senha}`)
        senhaValidada.push(senha)
    }   
//    console.log(senhaValidada.length)  
}

function fazerLogin() {
  //  console.log("LOGIN REALIZADO")
    alert("LOGIN REALIZADO COM SUCESSO!")
    window.location.href = "/assets/pages/produtos-home.html"

}