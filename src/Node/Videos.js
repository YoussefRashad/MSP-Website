
import axios from 'axios'
import { BE_URL } from '../utils/URL'


const getVideosFromBE = async ()=>{
    const response = await axios.get(`${BE_URL}/video`)
    return response
}

const submitVideoComment = async ({ name, image, title, comment, rate, date, id }) => {
    const response = await axios.patch(`${BE_URL}/video/comment-form/${id}`, {
        'comments': {
            name, image, title, comment, rate, date
        }
    })
    return response;
}


export {
    getVideosFromBE,
    submitVideoComment
}