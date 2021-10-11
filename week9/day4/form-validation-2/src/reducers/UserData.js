const initialState = {
    userData : {}
}


const userInfo = (state = initialState, action) => {

    switch(action.type){

        case "GET_USER":
                return{...state, userData: action.payload} 

        default:
            return state

    }
}

export default userInfo