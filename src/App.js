import './App.css';
import Chil2 from './component/Chil2';
import Child1 from './component/Child1';

function App() {
  return (
    <div className="App">
      <h1> React With No Typscript</h1>
      <Child1 name={{name:"Brando"}} age='20' gender="male"/>
      <Chil2 name={"Rotha"}/>
    </div>
  );
}

export default App;
