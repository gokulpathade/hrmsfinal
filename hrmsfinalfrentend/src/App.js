
import './App.css';
import SideBar from './components/dashboard/SideBar.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserDashboard from './components/dashboard/UserDashboard.jsx';
import SignIn from './components/pages/SignIn.jsx'
import { AdminSideBar } from './components/dashboard/AdminSideBar.jsx';
import { UserSideBar } from './components/dashboard/UserSideBar.jsx';
import { ManagerSideBar } from './components/dashboard/ManagerSideBar.jsx';
import AdminDashboard from './components/dashboard/AdminDashboard.jsx'
import ManagerDashboard from './components/dashboard/ManagerDashboard.jsx'
import AdminCalender from './components/admin/AdminCalender.jsx'
import AddEmployee from './components/admin/AddEmployee.jsx'
import SignUp from './components/pages/SignUp.jsx';

// import Regularised from './pages/user/Regularised';
import PagesCheck from './components/pages/PagesCheck.jsx'
import LeaveApply from './components/pages/LeaveApply.jsx'
import TeamDetails from './components/manager/TeamDetails.jsx'
import TeamStatus from './components/manager/TeamStatus.jsx'
import TeamLeave from './components/manager/TeamLeave.jsx'
function App() {
  return (
    <Router>
      {/* <Sidebar/>  */}
     <Routes>
  
      <Route path='/' element={<SignIn />} />
      <Route path='/PagesCheck' element={<PagesCheck />} />
      <Route path='/SignUp' element={<SignUp />} />


      
    <Route path='/UserDashboard' exact element={< UserDashboard/>}/>

<Route path='/AdminDashboard' exact element={<AdminDashboard />}/>
<Route path='/AdminCalender' exact element={<AdminCalender />}/>
<Route path='/AddEmployee' exact element={<AddEmployee/>}/>

<Route path='/ManagerDashboard' exact element={<ManagerDashboard/>}/>
<Route path='/LeaveApply' exact element={<LeaveApply/>}/>
<Route path='/TeamLeave' exact element={<TeamLeave/>}/>
<Route path='/TeamStatus' exact element={<TeamStatus/>}/>
<Route path='/TeamDetails' exact element={<TeamDetails/>}/>
<Route path='/TeamLeave' exact element={<TeamLeave/>}/>




       


     {/* <Route path='/home' element={<Home/>} />
        <Route path='/addemployee' element={<Addemployee/>} />
        <Route path='/userdetails' element={<EmployeeDetails/>}/>
     
        <Route path='/signin' element={<Signin />} /> 
        <Route path='/signup' element={<Signup />} />
        <Route path='/upload-image' element={<UploadImage/>}/>
        <Route path='cal' element={<Calender1/>}/>
      */}
  
      <Route path='/SideBar' element={<SideBar />} />


      {/* <Route path='/empdetails' element={< EmployeeDetails/>}/>
      <Route path='/adddepartment' element={<Adddepatment/>}/>
      <Route path='/manage' element={<Managedept/>}/>
      <Route path='/editDept' element={<EditDepartment/>}/>
      <Route path='/editemp' element={<EditEmployee/>}/>
      <Route path='/edit-emp' element={<EditEmp/>} />
      <Route path='/manageemp' element={<Manageemp/>}/>
      <Route path='/uploadempimg' element={<UploadImageEmp/>}/>
      <Route path="/timer" element={<Timereg/>}/>
      <Route path="/timedetails" element={<AttendanceDetails/>}/>
      <Route path="/inout" element={<TimeInOutDetails/>}/>
       <Route path="/admindashboard" element={<Admindashboard/>}/> 
       <Route path="/reporting" element={<Reporting/>}/>
       <Route path="/applyleave" element={<ApplyLeave/>}/>
       <Route path='/status' element={<EditStatus/>}/>
       <Route path='/calender' element={<Calender/>}/>
       <Route path='/samplecalender' element={<Calendersample/>}/>
       <Route path='/employeeStatus' element={<Sample/>}/>
       <Route path='/leavecalender' element={<LeaveCalender/>}/>
       <Route path='/holidaycalender' element={<HolidayCalender/>}/>

       <Route path='/managerdashboard' element={<ManagerDashboard/>}/>
       <Route path='/Details' element={<Details/>}/>
       {/* <Route path='/sidebar1' element={<Sidebar1 />} /> */}

       <Route path='/userdashboard' element={<UserDashboard/>}/>
       {/* <Route path='/Regularised' element={<Regularised/>}/> */}
       {/* <Route path='/sidebar2' element={<Regu />} /> */}





     

      </Routes>
     <ToastContainer position='top-center' autoClose={1000} />
    </Router>
  );
}

export default App;



