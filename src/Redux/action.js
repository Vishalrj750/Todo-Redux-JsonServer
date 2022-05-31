import { GET_TODOS } from "./actionType";

export const getTodos = (payLoad) => {
    return{
        type: GET_TODOS,
        payLoad
    }
}