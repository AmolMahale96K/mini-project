import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddStudent from './Components/AddStudent';

function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}

function MainApp() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<AddStudent />} />
      </Routes>
    </div>
  );
}

export default App;
