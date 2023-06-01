import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <meta name="referrer" content="no-referrer" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <MyButton/>
        </div>
        <div>
          <AboutPage/>
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
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
      <img className="avatar" src= "https://img-blog.csdnimg.cn/65e98a7f165544aeb48e5a6915e0286e.png" alt='图片'/>
    </>
  )
}


export default App;
