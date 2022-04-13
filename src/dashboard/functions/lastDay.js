export const last = (data) => {
    const soma = (array) => (
        array.reduce((a,b)=>{
            return a + b
        },0)
    )
    const size = data.datas.length
    const somaEntrada = soma(data.entrada)
    const somaSaida= soma(data.saida)
    return {
        entrada: `R$ ${somaEntrada.toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`,
        saida: `R$ ${somaSaida.toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`,
        lucro: `R$ ${data.lucro[size - 1].toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`
    }
}