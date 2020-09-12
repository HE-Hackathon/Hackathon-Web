const initialState = {
    user : [],
};
  
  
const loginReducer = (state= initialState,action) => {
    switch(action.type){
        case 'LOGIN':
            localStorage.setItem("isLogin",1);                      
            localStorage.setItem('email',action.payload.data.email)            
            localStorage.setItem('isRecruiter',action.payload.isRecruiter)           
            return {...state, user : action.payload}
        case 'USER':        
             return {...state, user : action.payload}
        case 'LOGOUT':
            console.log('sd')
                localStorage.removeItem('email');                
                localStorage.removeItem('isRecruiter')
                return {...state, user : [] }
        case 'UPDATEDATA':
            return {...state, user : action.payload }
        default:
            return state;
    }
}


export default loginReducer;