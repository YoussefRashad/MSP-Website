import Axios from 'axios'
import { BE_URL } from '../utils/URL'

const sumbitFormEvent = async (answered) => {
    const response = await Axios.post(`${BE_URL}/form-event`, {
        "questions": answered
    })

    return response;
}

export default sumbitFormEvent;