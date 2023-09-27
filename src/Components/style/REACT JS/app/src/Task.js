import React from 'react';
function Task({value,id,handleDelete}){
    return (
        <div>
            <h1> {value} </h1>
            <button onClick={()=> handleDelete(id)}>Delete</button>
        </div>
    )
}
export default Task