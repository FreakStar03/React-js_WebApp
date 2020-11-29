import React , {useState} from 'react';
import {Button} from '@material-ui/core';
import {db , storage } from './firebase';
import firebase from 'firebase';
import './Post.css';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));



function Imgupload({username}) {

	const classes = useStyles();

	const [image, setImage] = useState(null);
	const [caption, setCaption] = useState('');
	const [progress, setProgress] = useState(0);

	const handleChange = (e) => {
		if (e.target.files[0]){
			setImage(e.target.files[0]);
		}
	};


	const handleUpload = () => {
		const uploadTask = storage.ref(`images/${image.name}`).put(image)
		uploadTask.on(
				"state_changed",
				(snapshot) => {
					//progress function;
					const progress = Math.round(
							(snapshot.bytesTransferred / snapshot.totalBytes) * 100
						);
					setProgress(progress);
				},
				(error) => {
					console.log(error);
					alert(error.message);
				},
				() => {
					//complete function ...
					storage
						.ref('images')
						.child(image.name)
						.getDownloadURL()
						.then(url => {
							//post image in db
							db.collection('posts').add({
								timestamp: firebase.firestore.FieldValue.serverTimestamp(),
								caption: caption,
								imageurl: url,
								username: username
							});
							setProgress(0);
							setCaption("");
							setImage('')
						} )
				}
			)
	}

 	return (
		<div className='upload__form upload__imgForm ' >
			<progress value={progress} max='100' className='upload__imgPB' />
			<input type="text" placeholder="enter a caption!" className='upload__imgIP' value={caption} onChange={(event) => setCaption(event.target.value)} />
			
			<input accept="image/*"  onChange={handleChange} className={classes.input} id="icon-button-file" type="file" />
			
			<center>
			<label htmlFor="icon-button-file">
			  <IconButton color="primary" aria-label="upload picture" component="span">
			    <PhotoCamera />
			  </IconButton>
			</label>
			</center>

			<Button onClick={handleUpload} startIcon={<CloudUploadIcon />} variant="contained" color="primary" className='upload__imgBut' > Upload </Button>
		</div>
	)
}

export default Imgupload