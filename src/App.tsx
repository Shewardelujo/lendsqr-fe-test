import './App.scss';
import WithLayout from './components/HOC/HOC';
import Login from './pages/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login />} />
          {/* <Route path='/users' element={<WithLayout component={Users}/>} /> */}
          
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
