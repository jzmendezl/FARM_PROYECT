import axios from 'axios'

export const getUsersRequest = async () => axios.get('http://localhost:8000/users')
export const getUserRequest = async (id) => axios.get(`http://localhost:8000/users/${id}`)
export const loginUserRequest = async (user) => axios.post('http://localhost:8000/login', user)
export const createUsersRequest = async (newUser) => axios.post('http://localhost:8000/register', newUser)