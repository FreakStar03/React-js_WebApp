import React , { useState }  from 'react';
import Modal from '@material-ui/core/Modal';
import { Button , Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { db , auth } from './firebase';

import './App.css';


import Imgupload from './Imgupload';

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
	
	 const [openUpload, setOpenUpload] = useState({trigger}); 

	 const [username , setUsername] = useState(""); //username var
	 const [password , setPassword] = useState(""); //pass var
	 const [email , setEmail] = useState(""); // email var

	return (
		<Modal
		  open={openUpload}
		  onClose={() => setOpenUpload(false)}
		  >
		  <div style={modalStyle} className={classes.paper}>
		  <div className="app__header" >
		    <center>
		      <img className="app__headerimg" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" />
		    </center>
		  </div>

		  {user?.displayName ? (<Imgupload username={user.displayName} />) : (<h3>Need To login!</h3>)}


		  </div>
		</Modal>
		)
}

export default modalSignIn;