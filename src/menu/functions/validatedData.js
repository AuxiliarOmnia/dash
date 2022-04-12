export const validatedData = (empresa, date) => {
    if (empresa === '') { return("Insira o nome de uma empresa") }
    else {
        if (!date.start && !date.end) { return("Insira um período de análise válido") }
        if (!date.start && date.end) { return("Insira uma data inicial válida") }
        if (date.start && !date.end) { return("Insira um data final válida") }
        if (new Date(date.end) - new Date(date.start) < 0) { return('Insira um período de análise válido!') }
    }
}