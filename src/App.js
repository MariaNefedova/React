import { useEffect, useState } from "react";
import './App.css';
import { Item } from './components/item'
import { Messages } from "./components/messages";
import { constants } from "./constants";

function App() {
  const [messageList, setMessageList] = useState([]);                                                

  const addMessage = (newMessage) => {
      setMessageList((prevMessages) => ([...prevMessages, newMessage]));
  }

  useEffect(() => {
     if(messageList.length > 0 
          && messageList[messageList.length-1].author !== constants.bot) {
       const timeout = setTimeout(() => addMessage({
          author: constants.bot, 
          text: 'Im bot'}), 1500); 

          return () => clearTimeout(timeout);
     }
  }, [messageList]);

  return <>
    <Messages messageList = {messageList}/>
    <Item addMessage = {addMessage}/>
  </> ;
}
export default App;
