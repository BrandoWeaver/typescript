import logo from './logo.svg';
import './App.css';
import Child1 from './component/Child1';

function App() {
  // const childInfo = {
  //   name: "John Doe",
  //   age: 8,
  //   gender: "Male",
  // };
  return (
    <div className="App">
      <h1> React With No Typscript</h1>
      <Child1 />
    </div>
  );
}

export default App;
