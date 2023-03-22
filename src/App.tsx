import './App.css';
import Home from './pages/Home/Home';
import Survey from './pages/Survey/Survey';
import {Routes, Route, Navigate} from 'react-router-dom';
import  Validate from './pages/Validate/Validate'; 

function App() {
  return (
    <div className='main'>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/pregunta/:paramIndex/*" element={<Survey />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path='/validar' element={<Validate />}></Route>
      </Routes>
    </div>
  );
}


export default App;