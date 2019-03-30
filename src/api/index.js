import axios from 'axios'

function api(fetchFunction) {
    return async (url, body) => await fetchFunction(url, body)
}

const getApi = api(axios.get)
const postApi = api(axios.post)

export async function getQuestions() {
    return await getApi(`${process.env.REACT_APP_API_ROOT_URL}/questions`)
}
export async function getQuestionById(id) {
    return await getApi(`${process.env.REACT_APP_API_ROOT_URL}/questions/${id}`)
}
export async function postChoice(url) {
    return await postApi(`${process.env.REACT_APP_API_ROOT_URL}${url}`)
}

export async function postQuestion(body) {
    return await postApi(`${process.env.REACT_APP_API_ROOT_URL}/questions`, body)
} 