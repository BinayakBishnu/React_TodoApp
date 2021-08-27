import React from 'react';
import full_list from "./full_list.module.css";

// export default function Todo({ todo }) {
//* adding toggleTodo
export default function Todo({ todo, toggleTodo }) {
    function handleTodoChange() {
        //? seperate function made so that id can be passed
        toggleTodo(todo.id)
    }
    return (
        <div>
            {/* {todo} */}

            {/* after making id name attrs */}
            {/* {todo.name} */}
            {/* making checkboxes to show completion */}
            <label>
                {/* <input type="checkbox" checked={todo.complete}></input> */}
                <div className={full_list.todolist_member}>
                    <input type="checkbox" checked={todo.complete} onChange={handleTodoChange}></input>
                    {todo.name}
                </div>
            </label>
        </div>
    )
}
