import Todo from "./Todo"


const TodoList = ({ filteredTodos, todos, settodos}) => {

  
    return (
        <div className="todo-container">
            <ul className="todo-list">
               {filteredTodos.map(todo =>  <Todo key={todo.id} todos={todos} todo={todo} settodos={settodos}  text={todo.text} />)}
            </ul>
            
        </div>
    )
}

export default TodoList
