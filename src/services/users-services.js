import httpClient from './http-service'


export const getUsers = async () => httpClient.get('https://jsonplaceholder.typicode.com/users')

export const checkLoggedInUser = async (loggedInUser) => {
    let user = null
    await getUsers()
        .then(res => {

            const users = res.data
            const userFound = users.find(user => user.email === loggedInUser.email)
            if (userFound) {
                localStorage.setItem('user', JSON.stringify(userFound))
                user = userFound
            }
        }).catch((error) => console.log(error))
    return user
}


