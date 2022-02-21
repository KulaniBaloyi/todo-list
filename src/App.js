import React,{useState,useEffect} from "react";
import './App.css';
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {
  const [inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filteredTodos,setFilteredTodos] = useState([]);

  useEffect(()=>{
    filterHandler();
    
  },[todos,status]);

  const filterHandler=()=>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

   return(
    <div className="App">
    <header>
    <h1>To Do:</h1>
  </header>
  <Form todos={todos} 
        inputText={inputText}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}    
        />
  <TodoList todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}/>
  </div>
 );
}

export default App;