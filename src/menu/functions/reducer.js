export const ReducerField = (state, action) => {
    switch(action.type){
        case 'changeEmail':
            return {
                email: action.value,
                senha: state.senha
            }
        case 'changeSenha':
            return {
                email: state.email,
                senha: action.value
            }
        default:
            throw new Error()
    }
}

export const ReducerErro = (state, action) => {
    switch(action.type){
        case 'Add':
            let buff = state.list_erros;
            buff[action.field] = action.erros;
            return {
                list_erros: buff,
                is_valid: false
            }
        case 'Clear':
            let buff2 = state.list_erros;
            let valid = true;
            buff2[action.field] = [];
            for (let err of Object.keys(buff2)){
                if (!(buff2[err].length === 0)){
                    valid = false;
                }
            }
            return {
                list_erros: buff2,
                is_valid: valid
            }
        default:
            throw new Error()
    }
}