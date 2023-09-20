import React, { useState } from "react";
import TodoItem from "./TodoItem";
const Todos = () => {
  let list = [
    "wash clothes",
    "clean house",
    "do homework",
    "charge phone",
    "go to gym",
    "boil eggs",
  ];
  const addNewTodo = ()=>{
    if(newTodo.length===0)
    alert('bhai kuch to likh le')
  else
    setTodo([...todo, newTodo ])
  }

  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState('')
  return (
    <div className="container my-4 flex " style={{ minHeight: "75vh" }}>
      <div>
        <h4>Add your todo</h4>
        <textarea
          type="textarea"
          name="addTodo"
          id="addTodo"
          rows="2"
          cols="150"
          value={newTodo}
          onChange={(e)=>setNewTodo(e.target.value)}
        />
        <br />
        <button className="btn btn-success" onClick={addNewTodo}>Add</button>
      </div>
      <h1>My Total todos for today are : {todo.length}</h1>
      <div className="container todo">
        {/* list ek array hai array ke ek ek element ko use krne ke lie map use krte hai
        map ke andr hum list ke har element ko access kr skte hai iske andr i jo hai vo list ka ek element ki trh h
      */}
        <div className="row">
          {todo.map((i) => {
            return (
              <div className="col-4">
                <TodoItem key={i} title={i} setTodo={setTodo} todo={todo} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todos;

{
  // const [mynum, setMynum] = useState(0)
  /* <h1>MyNum is {mynum}</h1>
      <button className="btn btn-primary mx-1" onClick={()=>setMynum(mynum+1)}>Add 1</button>
      <button className="btn btn-success mx-1" onClick={()=>setMynum(mynum-1)}>Minus 1</button>
      <button className="btn btn-secondary mx-1" onClick={()=>setMynum(0)}>Reset</button>
      <button className="btn btn-warning mx-1" onClick={()=>setMynum(mynum*2)}>25 din me paisa double</button>
      <button className="btn btn-secondary mx-1" onClick={()=>setMynum(mynum/2)}>50 rupya kkaat overacting ki vjh se</button> */
}
