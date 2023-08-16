
function validarMensagem() {

    const nome = document.getElementById('nome').value
    const mensagem = document.getElementById('mensagem').value
    const nomeComErro = document.getElementById('nomeVazio')
    const mensagemComErro = document.getElementById('mensagemErro')

    nomeComErro.innerHTML = '';
    mensagemComErro.innerHTML = '';

    //const mensagemCaracteres = mensagem.length
    //const nomeCaracteres = nome.length

    //console.log(`Campo nome tem: ${nomeCaracteres} caracteres`)
    //console.log(`Campo mensagem tem: ${mensagemCaracteres} caracteres`)

    

    if (nome.trim() === '') {
        nomeComErro.innerHTML = 'O campo nome não pode estar vazio!';
        return;
    }

    if (nome.length > 40) {
        nomeComErro.innerHTML = 'O campo nome deve ter no máximo 40 caracteres!'
        return;
    }
    if (nome.length <= 2) {
        nomeComErro.innerHTML = 'O campo nome não pode ter apenas 2 caracteres!'
        return
    }
    
    if (mensagem.trim() === '') {
        nomeComErro.innerHTML = 'O campo mensagem não pode estar vazio!';
        return;
    }

    if (mensagem.length > 120) {
        
        nomeComErro.innerHTML = 'O Campo mensagem deve ter no máximo 120 caracteres!'
        return;
    }
    
    alert('Mensagem enviada com sucesso');
    document.getElementById('formularioContato').reset();
    window.location.href = '/index.html'

    
}


