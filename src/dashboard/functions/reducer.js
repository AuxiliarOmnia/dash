export const Reducer = (state, action) => {
    switch (action.type){
        case 'changeEmpresa':
            return{
                empresa: action.value,
                periodo: state.periodo,
                ano: state.ano,
                mes: state.mes
            }
        case 'changeAno':
            return{
                empresa: state.empresa,
                periodo: state.periodo,
                ano: parseInt(action.value),
                mes: state.mes
            }
        case 'changePeriodo':
            return{
                empresa: state.empresa,
                periodo: action.value,
                ano: state.ano,
                mes: 1
            }
        case 'changeMes':
            return{
                empresa: state.empresa,
                periodo: state.periodo,
                ano: state.ano,
                mes: parseInt(action.value) + 1
            }
        default:
            throw new Error();
    }
}