const rand = (min, max) => Math.floor(Math.random()*(max-min)+min)
const simbolos = `'"!@#$%¨&*()_+-=´[]{}~^:;.,/?°ºª§£¢¬|`

const geradores = [
    () => String.fromCharCode(rand(65, 91)),
    () => String.fromCharCode(rand(97, 123)),
    () => String.fromCharCode(rand(48, 58)),
    () => simbolos[rand(0, simbolos.length)]
]


export default function geraSenha(qtd, mai, min, num, sim) {
    const senhaArray = []
    qtd = Number(qtd)
    for(let i=0;i<qtd;i++) {
        const caract = rand(0,5)
        const podeGerar = arguments[(caract+1)] ? true : false
        if (podeGerar) senhaArray.push(geradores[caract])
    }
    return senhaArray.join('')
}