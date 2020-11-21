import { useState,useEffect } from 'react';
import {Button,FormControl,Input,InputLabel} from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from "firebase";

function App() {

  const [todos,setTodo]= useState([]);
  const [input, setInput] = useState("");


  // LIsting to cloud database from firebase to fetch the initial sotored data..
useEffect(() => {
  // fires when app reloads.
  db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
    setTodo(snapshot.docs.map(doc=>( {id:doc.id,todo: doc.data().todo})))
  })
}, [])


  const addTodo=(event)=>{
    event.preventDefault();   //Prevents refreshing the page after submiting.
    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    });
    setTodo([...todos,input]);
    setInput("");
    }
    
  return (
    <div className="App">
    <h1>My todo app</h1>

<FormControl >
  <InputLabel >Write a todo</InputLabel>
  <Input value={input} onChange={event=> setInput(event.target.value)} />

</FormControl >
  <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">ADD TODO</Button> 
    <ul>
    {todos.map(todo=>  (<Todo todo={todo}></Todo>))}
    </ul>
    </div>
  );
}

export default App;
