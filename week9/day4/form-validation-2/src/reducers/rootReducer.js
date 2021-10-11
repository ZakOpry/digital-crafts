//reducers contain your default state
import { combineReducers } from "redux";
import userData from "./UserData";
import GraphData from "./graphData";
import loginData from "./loginInfo";
const initalState = {

    userName: "",
    userEmail: "",
    address: "",
    restaurant: "",
    userData: {}
}





//useDispatch() is used to change state. The parameters you enter in the parathasis goes into "action" below. 

// {type: ""}
export const rootReducer = combineReducers({
    userData,
    GraphData,
    loginData
    





})