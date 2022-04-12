import axios from 'axios';
import { api } from '../../utils/urls';

export const get_data = async(input) => {
    let result = null
    await axios.post(api.empresas,
        {
            empresa: input,
        }
    ).then(res => {
        result=res.data.empresas
    })

    return result;
}