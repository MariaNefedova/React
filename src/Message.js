 import React from "react";
 import './Message.css';

// function Message({name}) {
//     return(
//         <div className="Message">
//             <h1>Привет, {name}</h1>
//         </div>     
//     );
// };

// export default Message;

//const name = 'Иван';

export const Message = (props) => {
    return <div className="Message">
                 <h1 style={{backgroundColor : 'green'} }>Привет, {props.name}!</h1>
             </div>;
}