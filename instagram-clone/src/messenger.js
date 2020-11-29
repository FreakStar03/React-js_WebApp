import React ,{useState , useEffect} from 'react';
import {FormControl ,Input ,InputLabel } from '@material-ui/core';
import './App.css';

//import { db } from './firebase';
//import firebase from 'firebase';
//import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core'
//import freak from './freak.png';

import impotest from './impotest'

function App2() {

  const [input , setInput] = useState('')
  const [username , setUsername] = useState('')
  const [messages , setMessages] = useState([
		{username: 'username', text: 'input'},
  	]);

  const sendbutton = (event) => {
    event.preventDefault();
    setMessages([...messages , {username: username, text: input}]);
    // db.collection('messages').add({
    //   user: username,
    //   message: input,
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp()
    // })
    setInput('');
  }

  useEffect(() => {
    setUsername(prompt('enter your name'));
    //this code fire when app load!
  }, [])

  // useEffect(() => {
  //   db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
  //     //console.log(snapshot.docs.map(doc => doc.data().todo))
  //     setMessages(snapshot.docs.map(doc => ({ id:doc.data().id , username:doc.data().user , text: doc.data().message}))) //created a ray of obj to get id
  //   })
  // }, [])

  return (
    <div className="App">
        <impotest />

            <form className="app__form" >
            <FormControl className="app__formcontrol">
              <InputLabel>Enter Text Here!</InputLabel>
              <Input
              className="app__input" 
                type="text"
                value={input}
                onChange= {event => setInput(event.target.value)}
              />
              <IconButton
                className="app_button" disabled={!input} type="submit" onClick={sendbutton}
              ><SendIcon /></IconButton>
            </FormControl>
            </form>

        {
          messages.map(message => (

            <p>{message.text}</p>
          ))
        }


    </div>
  );
}

export default App2;
