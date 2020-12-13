
import Axios from 'axios'
import URL from '../utils/URL'


const sumbitFeedback = async ({ email, title, description })=>{
    const response = await Axios.post(`${URL}/feedback`,{
        email, title, description
    })

    return response;
}

export default sumbitFeedback;