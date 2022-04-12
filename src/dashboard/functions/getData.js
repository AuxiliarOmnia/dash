import axios from 'axios';
import { api } from '../utils/urls';

export const getData = async(drop, empresa) => {
    const token = JSON.parse(sessionStorage.getItem('token'));
    let  data;
    await axios.post(api.getRelatorio,
        {
            empresa: empresa,
            periodo: drop.periodo,
            mes: drop.mes,
            ano: drop.ano
        },
        {
            headers:{
                Authorization: `acess_user ${token}` 
            }
        }    
    ).then( res => data = res.data)
    return data
}