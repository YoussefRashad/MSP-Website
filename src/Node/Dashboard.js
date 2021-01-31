
import axios from 'axios'
import { BE_URL } from '../utils/URL'

const ADD = async ({ data, path }) => {
    const response = await axios.post(`${BE_URL}/${path}`, {
        ...data
    })
    return response
}

const UPDATE = async ({ data, path, id }) => {
    const response = await axios.patch(`${BE_URL}/${path}/${id}`, {
        ...data
    })
    console.log(response);
    return response
}

const DELETE = async ({ id, path }) => {
    const response = await axios.delete(`${BE_URL}/${path}/${id}`)
    console.log(response);
    return response
}

export {
    ADD,
    UPDATE,
    DELETE
}

