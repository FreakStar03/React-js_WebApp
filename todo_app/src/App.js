
import React, {useState , useEffect} from 'react';
import { Button ,Input,FormControl,InputLabel } from '@material-ui/core';
import './App.css';
import Todo from './Todo' ;
import db from './firebase';
import firebase from 'firebase';
import { IconButton } from '@material-ui/core'
//import { AddBoxIcon } from '@material-ui/icons';
import AddBoxIcon from '@material-ui/icons/AddBox';



function App() {
  const [todos ,  setTodos] = useState([]);
  const [input ,  setInput] = useState('');
  const [input2 ,  setInput2] = useState('');

//when app load we must listen to the db
useEffect(()=>{
  //this code fire when app load!
  db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
    //console.log(snapshot.docs.map(doc => doc.data().todo))
    setTodos(snapshot.docs.map(doc => ({ id:doc.id, task:doc.data().todo , subtask: doc.data().subtodo}))) //created a ray of obj to get id
  })
}, [])

  const addTodo = (event) => {
    event.preventDefault();//It stop browser from reloading after submit
    setTodos([...todos, {task: input, subtask: input2}]);
    //the second paarameter is function
    setInput(''); //As after submit the value in text field remains so to makae it blank after reload!!!
    setInput2('');
    db.collection('todos').add({
      todo: input,
      subtodo: input2,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
  }
  return (
    <div className="App">
      <h1>To-Do List</h1>

      <form>
      <FormControl>
      <InputLabel>Type Title Here!</InputLabel>
      <Input 
      value= {input}
      onChange = {event => setInput(event.target.value)}
      />
      </FormControl>

      <FormControl>
      <InputLabel>Type SubTask Here!</InputLabel>
      <Input 
      value= {input2}
      onChange = {event => setInput2(event.target.value)}
      />
      </FormControl>


      <IconButton disabled={!(input && input2)} type='submit' onClick={addTodo} >
        <AddBoxIcon color="primary" />
      </IconButton>
      </form>

      <ul className = "unorderlist">

        {todos.map(todo => (
          <Todo task={todo.task}  subtask={todo.subtask} main={todo.id}/>
        ))}
        
      </ul>
    </div>
  );
}

export default App;
