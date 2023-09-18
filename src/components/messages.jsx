export const Messages = ({messageList}) => {
    return <>
    {messageList.map((el, index)=> (
      <ul key={index} className="message">    
        <p className="author">{el.author}</p>
        <p>{el.author}: {el.text}</p>
      </ul>
    ))}
    </> ;
}