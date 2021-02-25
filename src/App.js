import './App.css';

function App() {
  const player = ['Mojnu', 'Ibrahim', 'Ariful'];
  const products = [
    {productsName: 'Photoshop', mrp: '$52'},
    {productsName: 'Illustrator', mrp: '$20'}
  ];
  const profession = ['Web Developer', 'High School Teacher', 'Manager']
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Product product = {products[0]}></Product>
        <Product product = {products[1]}></Product>
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
    width: '700px',
    boxShadow: '5px 5px lightblue'
  }
  return (
    <div>
      <div style={stylePerson}>
        <h2>My Name: {props.name}</h2>
        <h2>Profession: {props.profession}</h2>
      </div>
    </div>
  )
}
function Product(props){
  const styleProduct = {
    border: '1px solid gray',
    color: 'black',
    backgroundColor: 'lightgrey',
    width: '300px',
    height: '300px',
    margin: '10px',
    float: 'left'
  }
  console.log(props);
  return (
    <div style={styleProduct}>
        <h2>{props.product.productsName}</h2>
        <h1>{props.product.mrp}</h1>
        <button>Buy Now</button>
    </div>
  )
}
export default App;
