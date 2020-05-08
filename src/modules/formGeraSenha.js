import geraSenha from './geradores'

const senhaGerada = document.querySelector('.senha-gerada')
const qtdCaracteres = document.querySelector('.qtd-caracteres')
const chkMaiusculas = document.querySelector('.chk-maiusculas')
const chkMinusculas = document.querySelector('.chk-minusculas')
const chkNumeros = document.querySelector('.chk-numeros')
const chkSimbolos = document.querySelector('.chk-simbolos')
const btnGerarSenha = document.querySelector('.gerar-senha')
const btnCopiar = document.querySelector('i.fa-copy')

export default () => {
    btnGerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera()
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
    return senha || "Nenhuma opção selecionada"
}