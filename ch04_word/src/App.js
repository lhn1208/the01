import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import EmtyPage from './component/EmtyPage';
import CreateDay from './component/CreateDay';

function App() {
  return (
    <BrowserRouter>
       <div className="App">
        <Header />
        <Routes>
          <Route path = "/" element={<DayList />} />
          <Route path = "/day/:day" element={<Day />} />
          <Route path = "/create_day" element={<CreateDay />} />
          <Route path = "*" element={<EmtyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
