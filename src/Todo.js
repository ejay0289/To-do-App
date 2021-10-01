import { useState } from "react"
const Todo = ({text, todo, todos, settodos}) => {

const [active, setactive] = useState(false)

function toggle(){
    setactive(!active)
}
    function handleDelete(){
        settodos(todos.filter(el => el.id !== todo.id))
    }

    function handleComplete() {
        settodos(todos.map(item => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    }


    
    return (
        <div className={`todo `}>
            <li onAnimationEnd={handleDelete} className={`todo-item  ${todo.completed ? "completed": ''} ${active ? 'fall' : ''}  `}>
                {text}
            <div>
            <button onClick={handleComplete} className={` complete-btn `}><i className='fas fa-check'></i></button>
                <button type="button" onClick={handleDelete}  className='trash-btn'><i className='fas fa-trash'></i></button>
            </div>
               
            </li>
        </div>
    )
}

export default Todo
