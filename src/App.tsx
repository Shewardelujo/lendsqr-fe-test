import './App.scss';
import WithLayout from './components/HOC/HOC';
import NotFound from './components/NotFound/NotFound';
import Login from './pages/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login />} />
          {/* <Route path='/users' element={<WithLayout component={Users}/>} /> */}
          <Route path='*' element={<WithLayout component={NotFound}/>} />
          
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
