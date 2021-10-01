import './App.css';
import Form from './Form';
import TodoList from './TodoList';
import { useState, useEffect } from 'react'
import Footer from './Footer';

function App() {



const [inputText, setinputText] = useState('')
const [todos, settodos] = useState(JSON.parse(localStorage.getItem('todos'))||[])
const [status, setstatus] = useState('all')
const [filteredTodos, setfilteredTodos] = useState([])

useEffect(() => {
 getlocal()
}, [])

useEffect(() => {
  setLocal()
handleFilter()
},[,todos,status])
 


const handleFilter = () => {
  switch(status){
    case 'completed' : setfilteredTodos(todos.filter(todo => todo.completed === true))
    break
    case 'uncompleted' : setfilteredTodos(todos.filter(todo => todo.completed === false))
    break
    default:
      setfilteredTodos(todos)
      break
  }
  
}

const setLocal = () =>{
    localStorage.setItem('todos',JSON.stringify(todos))
}

function getlocal(){
  if(localStorage.getItem('todos') === null){
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  settodos(JSON.parse(localStorage.getItem('todos')))
}



  return (
    <div className="App">
      <header>
       
        <h1>To-Do List</h1>
      </header>
      <p>{todos.length} {todos.length > 1 ? "items" : "item"}</p>
      <Form 
      inputText={inputText}
      setinputText={setinputText}
      todos={todos}
      settodos={settodos}
      setstatus={setstatus}
      filteredTodos={filteredTodos}
      />
      <TodoList 
      filteredTodos={filteredTodos}
  settodos={settodos}
  todos={todos}

        
      />
      <Footer />
     
    </div>
  );
}

export default App;
