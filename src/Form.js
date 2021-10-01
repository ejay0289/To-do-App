const Form = ({ setstatus, todos, settodos,inputText, setinputText}) => {

    function handleSubmit(){

        setinputText('')
        settodos([...todos, {text: inputText, completed: false, id: Math.random() * 1000}])
      

    }


    function handleStatus(e){
  setstatus(e.target.value)
    }

    return (
       <form onSubmit={(e) => e.preventDefault()} action="">
        <div className="form-container">
            
        </div>

        <div className="form-container">
        <input  
           autoFocus 
           value={inputText}
           onChange={(e) => setinputText(e.target.value)} 
           type="text"
            className="todo-text" 
            />


           <button 
           disabled={inputText<1}
           onClick={handleSubmit}
            type="submit"
             className="add-todo">
                 <i className="fa fa-plus-square" aria-hidden="true"></i>
             </button>

        </div>
      
            <div className="select">
                <select onChange={handleStatus} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Incomplete</option>
                </select>
            </div>
      
       </form>
    )
}

export default Form
