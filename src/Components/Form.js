import React from "react";
import { FaPlus } from "react-icons/fa";




const Form = ({setInputText,todos,setTodos,inputText,setStatus}) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {text: inputText,completed:false,id: Math.random()*1000},
        ]);
        setInputText("");
        document.getElementById('myInput').value = '';
        document.getElementById('myInput').focus();

    };

    const statusHandler = (e) => {
        console.log(e.target.value);
        setStatus(e.target.value);
    }

    return(
        <form> 
            <div>
            <input placeholder="enter a todo..." onChange={inputTextHandler} id="myInput" className="todo-input"/>
            <i onClick={submitTodoHandler} className="todo-btn" type="submit" ><FaPlus/></i>  
            </div>  <br/>         
    
            <div className="select">
                <select className="filter-todo" name="todos" onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>

    )
}

export default Form;