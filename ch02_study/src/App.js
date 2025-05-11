import { useState } from 'react';
import './App.css';
import CreateForm from './components/CreateForm';
import SelectForm from './components/SelectForm';

function App() {
  const [mode, setMode] = useState('HOME');

  return (
    <div className="App">
      <header>
        <div className="student-app">
          <h1>Student Info System</h1>
            <div className="menu-buttons">
              <button onClick={() => { setMode('CREATE');}}>CREATE</button>
              <button onClick={() => { setMode('SELECT');}}>SELECT</button>
            </div>
        </div>
      </header>
      <main>
        {mode === 'CREATE' && <CreateForm />}
        {mode === 'SELECT' && <SelectForm />}
      </main>
    </div>
  );
}

export default App;
