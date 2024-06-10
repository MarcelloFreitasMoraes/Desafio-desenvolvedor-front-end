export const authenticateUser = async (username: string, pass: string) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'teste@teste.com.br' && pass === '123456') {
                localStorage.setItem('Logged', 'isLogged')
                localStorage.setItem('nameUser', 'Marcelo Moraes')
                resolve(true)
            } else {
                reject(new Error('Usuário não cadastrado'))
            }
        }, 1000)
    })
}
