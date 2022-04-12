const emailRegex = /[a-z0-9.]+@[a-z0-9]+[.]+[a-z0-9]+[.[a-z]+[\S]]?/;
const maiusculaRegex = /[A-Z]/;
const minusculaRegex = /[a-z]/;
const numRegex = /[0-9]/;

export const validEmail = (value) => {
    if (!(value.match(emailRegex))){
        return ['Email inválido']
    }
}

export const validSenha = (value) => {
    let erro = []
    if (!(value.match(maiusculaRegex))){
        erro.push('Insira uma letra Maiúscula')
    }
    if (!(value.match(minusculaRegex))){
        erro.push('Insira uma letra Minúscula')
    }
    if (!(value.match(numRegex))){
        erro.push('Insira um Número')
    }
    if (value.length <= 8){
        erro.push('Insira no mínimo 8 caracteres')
    }
    if (erro.length > 0){
        return erro
    }
}