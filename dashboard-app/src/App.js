import './App.css';
import Team from './scenes/team/';
import Project from './scenes/project/';
import {Routes, Route} from 'react-router-dom';
import Dashboard from './scenes/dashboard';
import Userform from './scenes/userform';
import Task from './scenes/taskboard';
import Calendar from './scenes/calendar';
import Login from './components/Login';
import SignUp from './components/Signup';
import Banner from './scenes/Banner';

function App() {
  return (
    <div className="app">
     <main className='content'>
      <Routes>
        <Route exact path='/' element={<Banner/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
        <Route exact path='/dashboard' element={<Dashboard/>}/>
        <Route exact path='/project' element={<Project/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/userform' element={<Userform/>}/>
        <Route path='/task' element={<Task/>}/>
        <Route path='/calendar' element={<Calendar/>}/> 
      </Routes>
     </main>
    </div>
  );
}

export default App;
