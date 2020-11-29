import React , { forwardRef } from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';
import './message.css';

const Messagesfunc = forwardRef(( { message , username } , ref) =>{
	const isUser = username === message.username;

	return (
		<div ref={ref} className={`message ${isUser && 'message__user' }`} >
		<Card className={isUser ? "message__usercard" : "message__guestcard"} >
			<CardContent >
				<Typography
					color= 'grey'
					variant= 'h5'
					component='h2'
				>
					{!isUser && `${message.username}: `} {message.text}
				</Typography>
			</CardContent>
		</Card>
		</div>
	)
})

export default Messagesfunc;