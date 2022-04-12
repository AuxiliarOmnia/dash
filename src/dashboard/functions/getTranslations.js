import axios from "axios";
import { api } from "../utils/urls";

export const getTranslations = async() => {
    const token = JSON.parse(sessionStorage.getItem('token'));
    let translations;
    await axios.get(api.translateDep,{
        headers:{
            Authorization: `acess_user ${token}` 
        }
    }).then(res => translations=res.data);
    return translations
}