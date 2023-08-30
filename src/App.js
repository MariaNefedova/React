import logo from './logo.svg';
import './App.css';
import {Message} from './Message';
import { Form } from './class-components/Form';

function App() {
  let name = 'Костя';
  return (
    // <div>
    //   {/* <h1>Привет {name}</h1> */}
    //   <Message name={name}/>
    // </div>

    <div>
      <Message name={name}></Message>
      <Form name={name}></Form>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
