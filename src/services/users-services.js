import httpClient from './http-service'


export const getUsers = async () => httpClient.get('https://jsonplaceholder.typicode.com/users')

export const checkLoggedInUser = async (loggedInUser) => {
    getUsers()
        .then(res => {
            const users = res.data
            const userFound = users.find(user => user.email === loggedInUser.email)
            if (userFound) {
                localStorage.setItem('user', JSON.stringify(userFound))
                return userFound
            } else {
                return null
            }
        }).catch()
}


