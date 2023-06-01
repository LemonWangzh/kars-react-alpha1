import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <MyButton/>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          xiaobao 61 快乐！！！
        </a>
      </header>
    </div>
  );
}

function MyButton(){
  return(
    <button>i'am a a button</button>
  )
}

function AboutPage(){
  
}


export default App;
