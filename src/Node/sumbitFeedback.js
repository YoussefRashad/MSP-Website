
import Axios from 'axios'
import { BE_URL } from '../utils/URL'


const sumbitFeedback = async ({ email, title, description })=>{
    const response = await Axios.post(`${BE_URL}/feedback`,{
        email, title, description
    })

    return response;
}

export default sumbitFeedback;