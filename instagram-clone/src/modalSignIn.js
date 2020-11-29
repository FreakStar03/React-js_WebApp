import React , { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { Button , Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { db , auth } from './firebase';

import './App.css';

//Modal materail UI styling
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));



function modalSignIn(trigger){
	const classes = useStyles();  //modal class for style
	const [modalStyle] = useState(getModalStyle);  //modal class for style
	
	 const [openSignIn, setOpenSignIn] = useState({trigger}); 

	 const [username , setUsername] = useState(""); //username var
	 const [password , setPassword] = useState(""); //pass var
	 const [email , setEmail] = useState(""); // email var


	 const signIn = (event) => {
	   event.preventDefault();

	   auth.signInWithEmailAndPassword(email , password)
	     .catch((error) => alert(error.message));
	 
	   setOpenSignIn(false);
	 }

	return (
		<Modal
		  open={openSignIn}
		  onClose={() => setOpenSignIn(false)}
		  >
		  <div style={modalStyle} className={classes.paper}>
		  <div className="app__header" >
		    <center>
		      <img className="app__headerimg" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" />
		    </center>
		  </div>
		  <form className='app__signup'>
		    <Input 
		    type="text"
		    placeholder="Email"
		    value={email}
		    onChange={(e) => setEmail(e.target.value)} 
		    />
		    <Input 
		    type="password"
		    placeholder="Password"
		    value={password}
		    onChange={(e) => setPassword(e.target.value)} 
		    />
		    <Button type="submit"  onClick={signIn} >SignIn</Button>
		  </form>

		  </div>
		</Modal>
		)
}

export default modalSignIn;