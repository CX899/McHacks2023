import './App.css';
import Team from './scenes/team/';
import Project from './scenes/project/';
import {Routes, Route} from 'react-router-dom';
import Dashboard from './scenes/dashboard';
import Progress from './scenes/progress';
import Task from './scenes/taskboard';
import Calendar from './scenes/calendar';
import Login from './components/Login';
import SignUp from './components/Signup';

function App() {
  return (
    <div className="app">
     <main className='content'>
      <Routes>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
        <Route exact path='/' element={<Dashboard/>}/>
        <Route exact path='/project' element={<Project/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/progress' element={<Progress/>}/>
        <Route path='/task' element={<Task/>}/>
        <Route path='/calendar' element={<Calendar/>}/>
      </Routes>
     </main>
    </div>
  );
}

export default App;
