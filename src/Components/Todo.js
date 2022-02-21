import React from "react";
import { FaCheck,FaTrash } from "react-icons/fa";


const Todo=({text,todo,todos,setTodos})=>{
    //Events
    const deleteHandler=()=>{
        setTodos(todos.filter((el)=>el.id !== todo.id));
    };

    const completeHandler=()=>{
        setTodos(todos.map((item)=>{
            if(item.id===todo.id){
                return{
                    ...item,
                    completed: !item.completed,
                };
            }
            return item;
        })
        );
    };
    return(

        <div className="todo">
            <input type="checkbox" className="complete-btn" onClick={completeHandler}/>
            <li className={`todo-item ${todo.completed?"completed" : ""}`}>{text}</li>
            <i className="delete-btn" onClick={deleteHandler}><FaTrash/></i>
        </div>
    );
};

export default Todo;