
import axios from 'axios'
import { BE_URL } from '../utils/URL'

const registerUser = async (data) => {
    try {
        const response = await axios.post(`${BE_URL}/user/signup`, data)
        return response
    } catch (error) {
        return { status: 500, error: error.response.data }
    }
}

export default registerUser