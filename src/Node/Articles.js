
import axios from 'axios'
import { BE_URL } from '../utils/URL'

const getArticlesFromBE = ()=>{
    const response = axios.get(`${BE_URL}/articles`)
    return response
}

const submitArticleComment = async ({ name, image, title, comment, rate, date, id }) => {
    const response = await axios.patch(`${BE_URL}/articles/comment-form/${id}`, {
        'comments': {
            name, image, title, comment, rate, date
        }
    })
    return response;
}


export {
    getArticlesFromBE,
    submitArticleComment
}