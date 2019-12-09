
const logIn = user => {
    return {
        type: 'LOG_IN',
        payload: user
    }
}

const logOut = () => {
    return {
        type: 'LOG_OUT'
    }
}

export { logIn, logOut};