//default imports
import React, { useState } from 'react';
import './App.css';

//for styling and firebase
import { db , auth } from './firebase';
import { Button , Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

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

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}







function modalSignUp(trigger){
	const classes = useStyles();  //modal class for style
	const [modalStyle] = useState(getModalStyle);  //modal class for style
		
	const [open, setOpen] = useState({trigger}); 

	const [username , setUsername] = useState(""); //username var
	const [password , setPassword] = useState(""); //pass var
	const [email , setEmail] = useState(""); // email var


	const signUp = (event) => {
	    event.preventDefault();

	    auth.createUserWithEmailAndPassword(email , password)
	      .then((authUser) => { return authUser.user.updateProfile({displayName: username})})
	      .catch((error) => alert(error.message));
	    
	    setOpen(false);

	  }

	return (
		<Modal
		  open={open}
		  onClose={() => setOpen(false)}
		  >
		  <div style={modalStyle} className={classes.paper}>
		  <center>
		    <div className="app__header" >
		      <img className="app__headerimg" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" />
		    </div>
		  </center>
		  <form className='app__signup'>

		    <Input 
		    type="text"
		    placeholder="username"
		    value={username}
		    onChange={(e) => setUsername(e.target.value)}
		     />
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
		    <Button type="submit"  onClick={signUp} >Sign Up</Button>
		  </form>

		  </div>
		</Modal>
		)
}

export default modalSignUp;