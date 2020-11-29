import React , { useEffect , useState } from 'react';
import { db } from './firebase'
import './Admin.css';
function AdminPanel() {
    const [messages , setMessages] = useState([])

    useEffect(() => {
      db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
        //console.log(snapshot.docs.map(doc => doc.data().todo))
        setMessages(snapshot.docs.map(doc => ({  username:doc.data().username , text: doc.data().text , email:doc.data().email}))) //created a ray of obj to get id
      })
    }, [])

return(
        <div >
            <h1>AdminPanel</h1>
            <hr/>
            <div className='messages__admin'>
         {
          messages.map(message => (
            <>

            <p>name: <strong>{message.username}</strong>  <spam> |</spam>    email: <strong>{message.email}</strong></p>

            <p>message: {message.text}</p>
            <hr/>
            </>

          ))
        }
        </div>
        </div>
);
}

export default AdminPanel