import { useState } from 'react';
import './App.css';

function App() {
  const [newtodo, updatenew] = useState()
const [todolist, updatelist] = useState(JSON.parse(localStorage.getItem('todolist')) || [
    {
      id: 1,
      task: "React js"
    }
  ])
const todo = (id) => {
  // console.log(id)
  if (newtodo === "") {
    alert("Enter some task")
  }

  else {
    // get the last id from the list
    const lastId = todolist.length ? todolist[todolist.length - 1].id : 0;
    let newid = lastId + 1;
    let a = [...todolist, {
      id: newid,
      task: newtodo
    }]
    updatelist(a)
    localStorage.setItem('todolist', JSON.stringify(a))
  }
}
  const deleteTodo=(id)=>{
    let filteredTodos=todolist.filter(todo=>todo.id!==id);
    updatelist(filteredTodos);
  }
  const updateTodo=(id)=>{
    let updatedTodos=todolist.map(todo=>{
      if(todo.id===id){
        todo.task=newtodo;
      }
      return todo;
    });
    updatelist(updatedTodos);
    localStorage.setItem('todolist', JSON.stringify(updatedTodos));
    
  }

  return (
    <div className='container mt-5 w-50'>
      <h2 className='text-center'>Todo List with functional components</h2>
      <div className='input-group'>
        <input className='form-control' type='text' onChange={(e) => {

          let task = e.target.value;
          updatenew(task)
        }} value={newtodo}></input>
        <button className='btn btn-primary' onClick={(e)=>{
          let id = e.target.id;
           todo(id)}}>Add</button>

      </div>
      <ul className='list-group'>
        {todolist.map(
          (todo) => (
          <li className='list-group-item d-flex style mt-2'>
            <p className='width'>{todo.id}-{todo.task}</p>
            <button className='btn btn-primary update' onClick={()=>updateTodo(todo.id)}>Update</button>
            <button className='btn btn-danger' onClick={()=>deleteTodo(todo.id)}>X</button>
          </li>))
        }
      </ul>
    </div>

  );
}

export default App;