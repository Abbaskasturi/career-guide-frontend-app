import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import SignupClass from './components/Signup'; 


const Signup = (props) => {
  const navigate = useNavigate();
  return <SignupClass {...props} navigate={navigate} />;
};

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  </BrowserRouter>
);

export default App;
