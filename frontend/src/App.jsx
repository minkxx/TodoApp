import { useState, useEffect } from "react";

import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

import { FaRegSave } from "react-icons/fa";
import { MdOutlineCancel, MdEdit, MdDelete } from "react-icons/md";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const backend_url = "http://localhost:3000/api";

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [DbEditTrigger, setDbEditTrigger] = useState(false)
  const [editTodoId, setEditTodoId] = useState(null);
  const [editTodoText, setEditTodoText] = useState("");

  // Loads todos from database 
  useEffect(() => {
    fetchTodos();
  }, [DbEditTrigger])

  // gets all todos from database
  const fetchTodos = async () => {
    let res = await axios.get(`${backend_url}/getTodos`)
    setTodos(res.data)
  }

  // adds a todo to database
  const addTodo = async () => {
    try {
      const newTodo = {
        id: uuidv4(),
        todo: todo,
        isCompleted: false
      };
      const response = await axios.post(`${backend_url}/addtodo`, newTodo);
      setDbEditTrigger(prev => !prev)
      setTodo("")
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  // delete a todo
  const delTodo = async (id) => {
    try {
      const response = await axios.delete(`${backend_url}/deleteTodo/${id}`);
      setDbEditTrigger(prev => !prev)
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  }

  // delete a todo
  const updateTodo = async (id) => {
    try {
      const updated = { todo: editTodoText };
      await axios.put(`${backend_url}/updateTodo/${id}`, updated);
      setEditTodoId(null);
      setEditTodoText("");
      setDbEditTrigger(prev => !prev);
    } catch (err) {
      console.error("Update failed", err);
    }
  }

  // handle checkbox function
  const toggleCheckbox = async (id) => {
    try {
      const res = await axios.get(`${backend_url}/getTodo/${id}`)
      const targetTodo = res.data
      const updated = { isCompleted: (!targetTodo.isCompleted) };
      await axios.put(`${backend_url}/updateTodo/${id}`, updated);
      setDbEditTrigger(prev => !prev);
    } catch (err) {
      console.error("Update failed", err);
    }
  }

  // handle enter key event
  const handleEnterEventonInput = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  }

  const handleEnterEventonEdit = (e, id) => {
    if (e.key === "Enter") {
      updateTodo(id)
    }
  }

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="container bg-[#1C2541] mx-auto my-10 min-h-[520px] w-3/4 p-8 rounded-2xl">
          <div className="title font-semibold text-2xl text-center">Add your todo now</div>
          <div className="add-todo flex mx-auto items-center justify-center gap-5 my-12">
            <input type="text" name="" id="" className="w-3/4 bg-[#565f6a9f] py-1 px-3 rounded-sm" value={todo} onChange={(e) => { setTodo(e.target.value) }} onKeyDown={handleEnterEventonInput} />
            <button className="bg-[#3A506B] py-1 px-3 rounded-sm" onClick={addTodo} disabled={todo.length <= 3}>Add</button>
          </div>
          {todos.length === 0 && <div className="text-center">Nothing to show here!</div> }
          <div className="flex flex-col gap-3">
            {todos.map(item => {

              return (
                editTodoId === item.id ? (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="flex gap-2 w-full">
                      <input type="text" value={editTodoText} onChange={(e) => setEditTodoText(e.target.value)} onKeyDown={(e) => handleEnterEventonEdit(e, item.id)} className="bg-[#565f6a9f] py-1 px-2 rounded-sm flex-1 mr-3" />
                    </div>
                    <div className="btns flex gap-2">
                      <button className="bg-green-600 px-1 py-1 rounded-sm" onClick={() => updateTodo(item.id)}><FaRegSave /></button>
                      <button className="bg-red-500 px-1 py-1 rounded-sm" onClick={() => setEditTodoId(null)}><MdOutlineCancel /></button>
                    </div>
                  </div>
                ) : (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <input type="checkbox" name="" id={item.id} checked={item.isCompleted} onChange={() => { toggleCheckbox(item.id) }} />
                      <label htmlFor={item.id} className={item.isCompleted ? "line-through" : ""}>{item.todo}</label>
                    </div>
                    <div className="btns flex gap-2">
                      <button className="bg-[#3A506B] px-1 py-1 rounded-sm" onClick={() => { setEditTodoId(item.id); setEditTodoText(item.todo); }}><MdEdit /></button>
                      <button className="bg-[#3A506B] px-1 py-1 rounded-sm" onClick={() => { delTodo(item.id) }}><MdDelete /></button>
                    </div>
                  </div>
                )
              )
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
