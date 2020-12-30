import Axios from 'axios'
import { BE_URL } from '../utils/URL'


const sumbitFormRecruitment = async (answered) => {
    const response = await Axios.post(`${BE_URL}/form-recruitment`, {
        "questions": answered
    })

    return response;
}

export default sumbitFormRecruitment;