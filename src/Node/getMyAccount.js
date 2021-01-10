
import axios from 'axios'
import { BE_URL } from '../utils/URL'

const getMyAccount = async(token)=>{
    try{
        const response = await axios.get(`${BE_URL}/user/me`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response;
    }catch(error){
        return { status: 500, error: error.response.data }
    }
}

export default getMyAccount;