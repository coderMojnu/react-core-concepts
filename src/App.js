import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const nayok = ['Arefin Shuvo', 'Bapparaz', 'Manna', 'Dipjol', 'Mojnu']
  const persons = ['Mojnu', 'Ibrahim', 'Ariful'];
  const products = [
    { productsName: 'Photoshop', mrp: '$52' },
    { productsName: 'Illustrator', mrp: '$20' },
    { productsName: 'MS Word', mrp: '$10' }
  ];
  const profession = ['Web Developer', 'High School Teacher', 'Manager']
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Users></Users>
        <Counter></Counter>
        <ul>
          {
            nayok.map(newNayok => <li>{newNayok}</li>)
          }
          {
            products.map(newProduct => <li>{newProduct.productsName}</li>)
          }
        </ul>
        {
          products.map(addProduct => <Product product={addProduct}></Product>)
        }
        {
          persons.map(newPerson => <Person person={newPerson}></Person>)
        }
        {/* <Product product = {products[0]}></Product>
        <Product product = {products[1]}></Product> */}
        {/* <Person name={player[0]} profession={profession[0]}></Person>
        <Person name={player[1]} profession={profession[1]}></Person>
        <Person name={player[2]} profession={profession[2]}></Person> */}
      </header>
    </div>
  );
}
function Person(props) {
  const stylePerson = {
    border: '1px solid yellow',
    margin: '10px',
    width: '700px',
    boxShadow: '5px 5px lightblue'
  }
  return (
    <div>
      <div style={stylePerson}>
        <h2>My Name: </h2>
        <h2>Profession: </h2>
      </div>
    </div>
  )
}
function Product(props) {
  const styleProduct = {
    border: '1px solid gray',
    color: 'black',
    backgroundColor: 'lightgrey',
    width: '300px',
    height: '300px',
    margin: '10px',
    float: 'left'
  }
  const { productsName, mrp } = props.product;
  return (
    <div style={styleProduct}>
      <h2>{productsName}</h2>
      <h1>{mrp}</h1>
      <button>Buy Now</button>
    </div>
  )
}
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  //const handleDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onMouseMove = {() => setCount(count - 1)}>-</button>
      <button onClick={handleIncrease}>+</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h3>Dynamic User: {users.length}</h3>
    <ul>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </ul>
    </div>
  )
}
export default App;
