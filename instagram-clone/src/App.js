//default imports
import React, {useState , useEffect } from 'react';
import './App.css';

//for styling and firebase
import Post from './Post';
import { db , auth } from './firebase';
import { Button , Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Imgupload from './Imgupload';
import { IconButton } from '@material-ui/core';


import WallpaperIcon from '@material-ui/icons/Wallpaper';
import MessageIcon from '@material-ui/icons/Message';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import App2 from './messenger';


import { BrowserRouter as Router,
 Link,
 //Switch ,
  Route } from 'react-router-dom';
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



function App() {
  const classes = useStyles();  //modal class for style
  const [modalStyle] = useState(getModalStyle);  //modal class for style
  
  const [posts , setPosts] = useState([]); //post array with username, caption and imgurl and also id

  const [open , setOpen] = useState(false); //openning modal for sign in
  const [openSignIn, setOpenSignIn] = useState(false); //opening modal for sign up

  const [user , setUser] = useState(null); 

  const [username , setUsername] = useState(""); //username var
  const [password , setPassword] = useState(""); //pass var
  const [email , setEmail] = useState(""); // email var

  const [openUpload, setOpenUpload] = useState(false); //opening modal for sign up


  const signUp = (event) => {
    event.preventDefault();

    auth.createUserWithEmailAndPassword(email , password)
      .then((authUser) => { return authUser.user.updateProfile({displayName: username})})
      .catch((error) => alert(error.message));
    
    setOpen(false);

  }


  const signIn = (event) => {
    event.preventDefault();

    auth.signInWithEmailAndPassword(email , password)
      .catch((error) => alert(error.message));
  
    setOpenSignIn(false);
  }

  useEffect(() => { 
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);
      } else {
        //user has log out
        setUser(null);
      }
    })
    return () => {
      //perform clean up action
      unsubscribe();
    }
  }, [user , username]);



  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    })
  }, [])

  return (
    <div className="app">
    <Router>



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

          <div className="app__header fix__top ">
            <img className="app__headerimg" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" />
          { user ? (
            <Button  onClick={() => auth.signOut()} > Logout </Button>) : ( <div className="app__logincontainer" > 
            <Button  onClick={() => setOpen(true)} > SignUp </Button>
            <Button  onClick={() => setOpenSignIn(true)} > SignIn </Button>
            </div>) }
          </div>
          <div className='app__post'>
          <div>
          <Route path='/home' >

          {
            posts.map(({id ,post}) => (<Post key={id} postId={id} user={user} username= {post.username}  caption= {post.caption} imgurl= {post.imageurl} />))
          }

          </Route>

          <Route path='/messenger' >
            <App2 />
          </Route>
          </div>
          </div>

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


          <div className='fix__bottom app__footer app__footerIcon'>
          <div>
          <IconButton

            onClick={
              () => setOpenUpload(true)
            }
          >
            <WallpaperIcon />
          </IconButton>
          </div>

          <a href="./messenger">
          <div>
          <IconButton
            onClick=''
          >
            <MessageIcon />
          </IconButton>
          </div>
          </a>

          <div>
          <IconButton
            onClick='#'
          >
            <AccountBoxIcon />
          </IconButton>
          </div>
          </div>

      </Router>
    </div>
  );
}

export default App;
