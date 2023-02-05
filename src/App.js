import logo from './logo.svg';
import './App.css';
import Front from './Front';
import {User} from './User';
import {Seconduser} from './User';
import Alertfun from './Alertdfun';
import Checkclasscomponent from './Classcomponent';


function App() {
  return (
    <div className="App">
      {/* <h3>Hello world</h3> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Front />
      <User />
      <Seconduser />
      <Testsamefile />
      <Checkclasscomponent />
      <Alertfun />
    </div>
  );
}

function Testsamefile(){
  return(
  <div>
    <ul class='Header-menu'>
      <li>Home</li>
      <li>Menu</li>
      <li>About</li>
      </ul>
  </div>
  )
}

export default App;
