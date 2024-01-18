import { Route, Routes } from 'react-router-dom';
import './App.css'
import Carasol from './Components/Carasol'
import PrivateRoute from './Components/PrivateRoute';
import AuthenticatedRoutes from './Components/AuthenticatedRoutes';
import Login from './Components/Login';


function App() {

  return (
    <>
      <Routes>
        <Route element={<PrivateRoute/>}>
          <Route path='/' element={<Carasol/>}></Route>
        </Route>
        <Route element={<AuthenticatedRoutes/>}>
          <Route path='/login' element={<Login/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
