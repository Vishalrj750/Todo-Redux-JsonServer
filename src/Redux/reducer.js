import { GET_TODOS } from "./actionType";

const initState = {
    todos: []
}
const reducer = (state=initState, {type, payLoad}) => {
    switch(type){
        case GET_TODOS: {
            return {
                ...state,
                todos: payLoad
            }
        }
        default: return state;
    }
}

export default reducer;