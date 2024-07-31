// import { useState } from 'react';
import Register from './Components/Register';
import Login from './Components/Login';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';

function App() {
  // const [page, setPage] = useState(true)
 
//  const navigate = useNavigate()
  return (

    
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Login/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path = "/dashboard" element = {<Dashboard/>} />
        </Routes>
      </BrowserRouter>
       

  );
}

export default App;

