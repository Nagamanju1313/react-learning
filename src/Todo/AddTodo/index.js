import "./todo.style.css";

const AddTodo = (props) => {
    return (
        <div className="addColWrapper">
            <div className="addCol">
                <input type="text" onChange={(e) => { props.handleChange(e) }} value={props.message} 
                 placeholder="Add Todo"/>
                <button type="button" onClick={props.handleClick}>Add +</button>
            </div>
        </div>
    )
}

export default AddTodo;