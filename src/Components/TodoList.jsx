import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from "./Card";
import axios from 'axios';
import { getTodos } from '../Redux/action';

function TodoList() {
    const todos = useSelector(state=>state.todos);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(!todos.length){
            axios.get('http://localhost:3000/posts')
            .then((res)=>dispatch( getTodos(res.data) ))
            .catch((err)=>console.log(err));
        }
    })

    return(
        <div>
            <h1>My All Todo List</h1>
            {todos.map((item)=><Card key={item.id} id={item.id} todo={item.todo} status={item.status} />)}
        </div>
    )
}

export default TodoList;