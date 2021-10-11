const initialState = 0



const CounterData = (state = initialState, action) => {

switch(action.type){

    case "INCREMENT_COUNTER":
        return state + 1
default:
    return state

}

}

export default CounterData