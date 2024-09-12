import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/sign_up' element={<SignUp />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
