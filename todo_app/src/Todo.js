import React ,{useState} from 'react'
import { List, Button, ListItem,ListItemText } from '@material-ui/core';
import db from './firebase'
import './App.css'
import { IconButton } from '@material-ui/core'
import { Delete ,Edit } from '@material-ui/icons';

function Todo(props) {
	const [newtask ,  setNewtask] = useState(['']);
	const [newsubtask ,  setNewsubtask] = useState(['']);

	const add = (event) => {
		setNewtask(prompt('enter new Task!'));
		setNewsubtask(prompt('enter new SubTask!'));
	}

	const submit = (event) => {
		db.collection('todos').doc(props.main).update({
			todo: newtask,
			subtodo:  newsubtask,
		});
		setNewtask('');
		setNewsubtask('');
	}

	return (
		<List>
			<ListItem className = "listMain">
			
			<ListItemText className = "listItem" primary={props.task} secondary = {props.subtask} />
			
			<IconButton onClick = {event => db.collection('todos').doc(props.main).delete()}>
				<Delete color="primary" />
			</IconButton>
			
			<IconButton onClick = {add}>
			<Edit color="primary" />
			</IconButton>

			<Button disabled={!newtask == ""} variant="contained" color="primary" onClick = {submit}>Submit Edit</Button>
		
			</ListItem>
		</List>
	)
}

export default Todo;