import axios from "axios";
import React from "react";
import {v4 as uuid} from 'uuid';
import { useDispatch } from 'react-redux';
import { getTodos } from "../Redux/action";

function Todo() {
    const [input, setInput] = React.useState("");
    const dispatch = useDispatch();

    const getData = () => {
        axios.get('http://localhost:3000/posts')
        .then((res)=>dispatch( getTodos(res.data) ))
        .catch((err)=>console.log(err));
    }

    const handleClick = () => {
        const payLoad = {
            todo: input,
            status: false,
            id: uuid()
        }
        axios.post('http://localhost:3000/posts', payLoad)
        .then((res)=>getData())
        .catch((err)=>console.log(err));
    }


    return(
        <div>
            <h1>Todo App</h1>
            <input type="text" placeholder="Enter Todos" value={input} onChange={(e)=>setInput(e.target.value)} />
            <input type="submit" value="Submit" onClick={handleClick} />
        </div>
    )
}

export default Todo;