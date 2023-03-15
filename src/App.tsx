import './App.css';
import Home from './components/Home/Home';
import Survey from './components/Survey/Survey';
import {Routes, Route, Navigate} from 'react-router-dom';
import  Validar from './components/ThankYou/ThankYou'; 

function App() {
  return (
    <div className='main'>
    <Routes>
      <Route path="/home" element={<Home />} />
      
      {/* <Route path="/pregunta/:paramIndex/*" element={<Survey />} /> */}
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path='/validar' element={<Validar />}></Route>
    </Routes>
    <Survey />
    </div>
  );
}


export default App;