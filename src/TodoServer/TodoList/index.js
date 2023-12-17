import './todolist.style.css';

const TodoListSection = ({items, taskHandle, handleDelete}) => {
    return (
        <div className="todo-list-wrapper">
            <div className="addedCol">
                {
                    items.map((item) => {
                        return (
                            <div className="addedColList" key={item.id} style={{ display: "flex" }}>
                                <div className="addedColClick" onClick={() => { taskHandle(item.id) }}>
                                    <input type="checkbox" checked={item.checked} readOnly />
                                    <label>{item.item}</label>
                                </div>
                                <button type="button" onClick={() => { handleDelete(item.id) }}>Del</button>
                            </div>
                        )
                    })
                }
            </div>

            {
                items.length <= 0 ?
                    <div>
                        No Items
                    </div>
                    :
                    ""
            }
        </div>
    )
}
export default TodoListSection;