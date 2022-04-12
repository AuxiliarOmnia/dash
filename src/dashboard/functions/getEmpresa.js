import axios from 'axios';
import { api } from '../utils/urls';

export const getEmpresa = async() => {
    let empresa = null;
    const token = sessionStorage.getItem('token')
    await axios.get(api.getEmpresa,
    {
        headers:{
            Authorization: `acess_user ${token}` 
        }
    }).then(res => empresa = res.data.empresa)
    return empresa
}