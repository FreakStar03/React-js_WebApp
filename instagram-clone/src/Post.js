import React , {useState , useEffect} from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';
import { db } from './firebase';
import firebase from 'firebase';


function Post({ postId, user, username , caption , imgurl}) {

	const [comments , setComments] = useState([]);
	const [comment , setComment] = useState('');

	const addComment = (event) => {
		event.preventDefault();

		db.collection('posts').doc(postId).collection('comments').add({
			username: user.displayName,
			text: comment,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});

		setComment('')
	} 


	useEffect(() => {
		let unsubscribe;
		if (postId) {
			unsubscribe = db
				.collection('posts')
				.doc(postId)
				.collection('comments')
				.orderBy('timestamp' , 'desc')
				.onSnapshot((snapshot) => {
					setComments(snapshot.docs.map((doc) => doc.data()))
				});		
		}
		return () => {
			unsubscribe();
		}
	}, [postId])

	return (
		<div className='post'>
			<div className='post__header'>
				<Avatar
				className="post__avatar"
				alt= {username}
				src="https://awdfa" 
				/>
				<h3 >{username} </h3>
			</div>

			<img className='post__img' src={imgurl} alt="" />
		
			<h4 className="post__text" ><strong> {username} :</strong> {caption} </h4>
			

			{comments && (

				<div className='post__commments'>
					{comments.map((comment) => (
						<p>
							<strong> {comment.username} </strong> {comment.text}
						</p>
					))
					}
				</div>

				)}


			{user && (
				<form className='post__commentBox'>
					<input placeholder='Type some comments!!!' className='post__input' value={comment} onChange={(e) => setComment(e.target.value)}/>
					<button disabled={!comment} type='submit' className='post__button' onClick={addComment} >Post</button>
				</form>
				)}
			


		</div>
	)
}

export default Post;