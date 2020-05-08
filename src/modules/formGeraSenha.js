import geraSenha from './geradores'

const senhaGerada = document.querySelector('.senha-gerada span')
const qtdCaracteres = document.querySelector('.qtd-caracteres')
const chkMaiusculas = document.querySelector('.chk-maiusculas')
const chkMinusculas = document.querySelector('.chk-minusculas')
const chkNumeros = document.querySelector('.chk-numeros')
const chkSimbolos = document.querySelector('.chk-simbolos')
const btnGerarSenha = document.querySelector('.gerar-senha')
const btnCopiar = document.querySelector('i.fa-copy')

export default () => {
    btnGerarSenha.addEventListener('click', () => {
        const senha = gera()
        if (senha){
            senhaGerada.innerHTML = senha
            btnCopiar.style.display = 'inline'
        } else {
            senhaGerada.innerHTML = "Nenhuma opção selecionada"
            btnCopiar.style.display = 'none'
        }
        
    })
    btnCopiar.addEventListener('click', () => {
        senhaGerada.select()
        document.execCommand('copy')
        alert('Senha copiada para a área de transferência!')
    })
}

function gera() {
    const senha = geraSenha(
        qtdCaracteres.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked
    )
    return senha
}