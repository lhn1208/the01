import './App.css';
import { useState } from 'react'; 

const MyComponent = () => {
  // let count = 0;
  const [count, setCount] = useState(0);
  const increment = () =>{
    // count = count + 1;
    setCount(count + 1);
    // console.log(count);
  }
  return (
    <div className="App">
        <p>Count:{count}</p>
        <button onClick={increment}>increment</button>
    </div>
  );

}

function App() {
  return (
    <MyComponent></MyComponent>
  );
}

export default App;
