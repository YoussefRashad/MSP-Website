
import Axios from 'axios'

export const getGithubOrgs = async ()=>{
    const response = await Axios.get('https://api.github.com/orgs/Microsoft-Student-Partner-HU')
    return response.data
}

export const getGithubRepos = async ()=>{
    const response = await Axios.get('https://api.github.com/orgs/Microsoft-Student-Partner-HU/repos')
    return response.data
}

export const getGithubMember = async ()=>{
    const response = await Axios.get('https://api.github.com/orgs/Microsoft-Student-Partner-HU/members')
    return response.data
}

export const getGithubRepo = async (name)=>{
    const response = await Axios.get(`https://api.github.com/repos/Microsoft-Student-Partner-HU/${name}`)
    return response.data
}