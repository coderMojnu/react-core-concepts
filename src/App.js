import './App.css';

function App() {
  const player = ['Mojnu', 'Ibrahim', 'Ariful'];
  const profession = ['Web Developer', 'High School Teacher', 'Manager']
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Person name={player[0]} profession={profession[0]}></Person>
        <Person name={player[1]} profession={profession[1]}></Person>
        <Person name={player[2]} profession={profession[2]}></Person>
      </header>
    </div>
  );
}
function Person(props) {
  const stylePerson = {
    border: '1px solid yellow',
    margin: '10px',
    boxShadow: '5px 5px lightblue'
  }
  return (
    <div style = {stylePerson}>
      <h2>My Name: {props.name}</h2>
      <h2>My Profession: {props.profession}</h2>
    </div>
  )
}
export default App;
