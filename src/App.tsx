import './App.scss';
import Login from './pages/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login/>} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
