import logo from './logo.svg';
import './App.css';

function App() {
  const student1 = {
    name: 'Sarmin',
    roll: 1,
    color: 'Shemla'
  }
  const student2 = {
    name: 'Bithy',
    roll: 5,
    color: 'Uzzol Shemla'
  }
  const style = {
    color: 'red',
    backgroundColor: 'yellow',
    width: '200px', 
    textAlign: 'center'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done <code>src/App.js</code> and save to reload.
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
      <h1>My Heading</h1>
      <p>My first react app</p>
      <p style={{color: 'red', backgroundColor: 'black', width: '200px', textAlign: 'center'}}>Student1: {student1.name + ' ' + student1.roll}</p>
      <h2 style={style}>Student2: {student2.name + ' ' + student2.color}</h2>
    </div>
  );
}

export default App;
