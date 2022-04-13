import { converter } from "./converter"

export const parserData = (data, translate) => {
    const lancamento = converter(data.lancamento, translate)
    const receita = converter(data.pagamento.receita, translate)
    const custo = converter(data.pagamento.custo, translate)

    const lista = ['lancamento_debito','estorno_debito']

    const debito = Object.keys(data.meio).reduce((filtered, keys)=>{
        if (lista.includes(keys)){
            filtered[keys] = data.meio[keys]
        }
        return filtered
    },{})

    const credito = Object.keys(data.meio).reduce((filtered, keys)=>{
        if (!(lista.includes(keys))){
            filtered[keys] = data.meio[keys]
        }
        return filtered
    },{})

    const credit = converter(credito, translate)
    const debit = converter(debito, translate)

    return {
        lancamento:{
            label: lancamento.label,
            value: lancamento.value.map(element => parseFloat(element.toFixed(2)))
        },
        receita:{
            label: receita.label,
            value: receita.value.map(element => parseFloat(element.toFixed(2)))
        },
        custo:{
            label: custo.label,
            value: custo.value.map(element => parseFloat(element.toFixed(2)))
        },
        credito:{
            label: credit.label,
            value: credit.value.map(element => parseFloat(element.toFixed(2)))
        },
        debito:{
            label: debit.label,
            value: debit.value.map(element => parseFloat(element.toFixed(2)))
        },
        datas: data.datas,
        entrada: data.departamento.entrada,
        saida: data.departamento.saida, 
        lucro: data.departamento.lucro
    }
}