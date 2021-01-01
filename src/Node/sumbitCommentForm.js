
import Axios from 'axios'
import { BE_URL } from '../utils/URL'


const sumbitComment = async ({ email, title, description, id }) => {
    const response = await Axios.post(`${BE_URL}/comment-form/${id}`, {
        'comments':{
            
        }
    })

    return response;
}

export default sumbitComment;