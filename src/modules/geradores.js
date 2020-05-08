const rand = (min, max) => Math.floor(Math.random()*(max-min)+min)
const simbolos = `'"!@#$%¨&*()_+-=´[]{}~^:;.,/?°ºª§£¢¬|`

const geradores = [
    () => String.fromCharCode(rand(65, 91)), //0 - Maiuscula
    () => String.fromCharCode(rand(97, 123)), //1 - Minuscula
    () => String.fromCharCode(rand(48, 58)), //2 - Numero
    () => simbolos[rand(0, simbolos.length)] //3 - Simbolo
]


export default function geraSenha(qtd, max, min, num, sim) {
    if (!max && !min && !num && !sim) return false
    const senhaArray = []
    qtd = Number(qtd)
    while (senhaArray.length<qtd) {
        const caract = rand(0,5)
        console.log(caract)
        const podeGerar = arguments[(caract+1)] ? true : false
        console.log(podeGerar)
        if (podeGerar) senhaArray.push(geradores[caract]())
        console.log(senhaArray)
        console.log(senhaArray.length)
    }
    return senhaArray.join('')
}