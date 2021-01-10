
import axios from 'axios'
import { BE_URL } from '../utils/URL'

const loginUser = async (data) => {
    try {
        const response = await axios.post(`${BE_URL}/user/login`, data)
        return response;
    } catch (error) {
        return { status: 500, error: error.response.data }
    }
}

export default loginUser