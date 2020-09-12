export const userData = data => {
    return{
        type : 'LOGIN',
        payload : data
    }
}
export const reUserData = data => {
    return{
        type : 'USER',
        payload : data
    }
}

export const logout = () => {
    return{
        type : 'LOGOUT',        
    }
}

export const userDataUpdate = (data) => {
    return{
        type : 'UPDATEDATA',     
        payload: data,   
    }
}