import { 
    nomePet, 
    portePet, 
    portePequeno, 
    porteMedio, 
    porteGrande, 
    idadePet 
} from './trabalho-final-dados.js'

function geradorDeTagsDeIdentificacao (nomeTag) {
    return nomeTag.toUpperCase()
}

function verificarSePodeSerAdotado (idade, porte) {
    return porte === portePet && idade === idadePet
        ? true : false
}

function calcularConsumoDeRacao (nome, idade, peso) {
    return idade * peso * 300
}

function decidirTipoDeAtividadePorPorte (porte) {
    if (porte == portePequeno) {
        return 'brincar dentro de casa'
    } else if (porte == porteMedio) {
        return 'caminhada no quarteirão'
    } else if (porte == porteGrande) {
        return 'correr no parque'
    } else {
        return console.log('Porte inválido')
    }
}

async function buscarDadoAsync () {
    return nomePet
}

export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}
