import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import styledComponents from "styled-components";
import { getTodos } from "../Redux/action";

const CardWrapper = styledComponents.div`
.card{
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #cecece;
    box-shadow: 5px 5px 5px aliceblue;
    margin-top: 25px;
    margin-bottom: 25px;
}
h2{
    display: inline;
}
`

function Card({ todo, status, id }) {
    const dispatch = useDispatch();
    const getData = () => {
        axios.get('http://localhost:3000/posts')
        .then((res)=>dispatch( getTodos(res.data) ))
        .catch((err)=>console.log(err))
    }

    function handleClick(key) {
        axios.patch(`http://localhost:3000/posts/${key}`, {status: !status})
        .then((res)=>getData())
        .catch((err)=>console.log(err))
    }
    return(
        <CardWrapper>
            <div className="card">
                <h2>{todo + " - " + status}</h2>
                <button onClick={()=>handleClick(id)}>{status ? "Complete" : "Pending"}</button>
            </div>
        </CardWrapper>
    )
}

export {Card};