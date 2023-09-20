import React from "react";

const TodoItem = ({ title, setTodo, todo}) => {
  const deleteTodo=()=>{
    setTodo(todo.filter((i)=>{return i!==title}))
  }
  return (  
    <div className="flex border p-2 my-1" style={{maxWidth:'20vw'}}>
      <div >
       <h4>{title}</h4>
       <button className="btn btn-danger" onClick={deleteTodo}>delete</button>
      </div>
    </div>
  );
};

export default TodoItem;