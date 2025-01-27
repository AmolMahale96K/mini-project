import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import AddStudent from './Components/AddStudent';

function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}

function MainApp() {
  let navigate = useNavigate();

  return (
    <div>
      <Routes>
        <Route path="/" element={<AddStudent />} />
      </Routes>
    </div>
  );
}

export default App;
