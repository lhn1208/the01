import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <h1>Supabase Smoothie</h1>
        <Link to='/'>Home</Link>
        <Link to = '/create'>Create New Smoothie</Link>
      </nav>
      <Routes>
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Update />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
