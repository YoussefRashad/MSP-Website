
import Axios from 'axios'
import { BE_URL } from '../utils/URL'

const submitFormEvent = async (answered) => {
    const response = await Axios.post(`${BE_URL}/form-event`, {
        "questions": answered
    })

    return response;
}

const submitFormRecruitment = async (answered) => {
    const response = await Axios.post(`${BE_URL}/form-recruitment`, {
        "questions": answered
    })

    return response;
}

const submitFeedback = async ({ email, userName, title, description }) => {
    const response = await Axios.post(`${BE_URL}/feedback`, {
        email, userName, title, description
    })

    return response;
}

export {
    submitFormEvent,
    submitFormRecruitment,
    submitFeedback
}