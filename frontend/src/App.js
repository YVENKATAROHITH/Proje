

import Nav from './components/Nav';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {HashRouter,Routes,Route} from 'react-router-dom'
import StudentList from './components/StudentList';
import CreateStudent from './components/CreateStudent';
import Home from './components/Home';
import Loginp from './components/Loginp';
import Finalresults from './components/Finalresults';
import PollResults from './components/PollResults';
import Inside from './components/Inside';
import Poll from './components/Poll';
import SignupAdmin from './components/SignupAdmin';
import Adminlist from './components/Adminlist';
import Adinside from './components/Adinside';
import AdminlistRow from './components/AdmionlistRow';
import Loginad from './components/Loginad';
import Loginadli from './components/Loginadli';
import Loginadre from './components/Loginadre';
import Userinside from './components/Userinside';
import Loginaduli from './components/Loginaduli';
import Contact from './components/Contact';
import Feedback from './components/Feedback';
import Insidead from './components/Insidead';
import EditStudent from './components/EditStudent';
function App() {
  return (
    <div>
      <HashRouter>
     <Nav/>
    
    
        <Routes>
          <Route path="/" element={<CreateStudent/>}/>
          <Route path="/create-student" element={<CreateStudent/>}/>
          <Route path="/student-list" element={<StudentList/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/login" element={<Loginp/>}/>
          <Route path="/inside" element={<Inside/>}/>
          <Route path="/poll" element={<Poll/>}/>
          <Route path="/results" element={<PollResults/>}/>
          <Route path="/final-results" element={<Finalresults/>}/>
          <Route path="/Admin" element={<SignupAdmin/>}/>
          <Route path="/AdminList" element={<Adminlist/>}/>
          <Route path="/Admininside" element={<Adinside/>}/>
          <Route path="/Admin-list-row" element={<AdminlistRow/>}/>
          <Route path="/loginad" element={<Loginad/>}/>
          <Route path="/loginadli" element={<Loginadli/>}/>
          <Route path="/loginadre" element={<Loginadre/>}/>
          <Route path="/user-inside" element={<Userinside/>}/>
         <Route path="/login-user-list" element={<Loginaduli/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/feedback" element={<Feedback/>}/>
         <Route path="/inside-ad" element={<Insidead/>}/>
         <Route path="/edit-student/:id" element={<EditStudent/>}/>
          </Routes>
       

      </HashRouter>


    </div>
    
  );
}

export default App;




