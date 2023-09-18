import { useState } from 'react';
import '../App.css';

export const Item = ({addMessage}) => {
    const [inputMessage, setInputMessage] = useState('');
    const [inputAuthor, setInputAuthor] = useState('');

    const handleChahgeMessage = (event) => {  
        event.preventDefault();   
        addMessage({author: inputAuthor, text: inputMessage});
        setInputMessage('');
        setInputAuthor('');
    }

    return <form onSubmit={handleChahgeMessage} className='form'>
        <p>author</p>
        <input 
            type="text" 
            className="inputAuthor" 
            value={inputAuthor}
            onChange={(e) => setInputAuthor(e.target.value)}></input>
        <p>message</p>
        <textarea 
            type="text" 
            className="inputMessage" 
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}></textarea>
        <button type="submit" name="send" className='buttonSend' disabled={!(inputMessage&&inputAuthor)}>SEND</button>
    </form>
}