import './App.css';
import Login from "./components/sign in/Index";
import Signup from "./components/sign up/Index";
import { Routes,Route } from 'react-router-dom';
// import Asidebar from "./components/navbar/Sidebar";
import Header from './components/header/Header';
import Dashboard from "./components/dashboard/Index";
import Client from "./components/client/Index";
import Agent from "./components/agent/Index";
import Calender from "./components/calender/Index";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Header/>}>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/addClients' element={<Client/>} />
        <Route path='/agent' element ={<Agent/>}  />
        <Route path='/calender' element ={<Calender />} />
      </Route>
        <Route path = '/Signup' element = {<Signup/>}/>
        <Route path = '/Login' element = {<Login/>}/>
    </Routes>
  );
}

export default App;
