import axios from 'axios';
import { api } from '../../utils/urls';

export const sendData = async(empresa, date) => {
    let result = null;
    await axios.post(api.check,
        {
            empresa: empresa,
            start_date: date.start,
            end_date: date.end
        }
    ).then(res => result = res
    ).catch(res => result = res)
    return result
}