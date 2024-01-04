
import './App.css';
import SideBar from './dashboard/SideBar.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserDashboard from './dashboard/UserDashboard.jsx';
import SignIn from './pages/SignIn.jsx'
import { AdminSideBar } from './dashboard/AdminSideBar.jsx';
import { UserSideBar } from './dashboard/UserSideBar.jsx';
import { ManagerSideBar } from './dashboard/ManagerSideBar.jsx';
import AdminDashboard from './dashboard/AdminDashboard.jsx'
import ManagerDashboard from './dashboard/ManagerDashboard.jsx'
import AdminCalender from './admin/AdminCalender.jsx'

// import Regularised from './pages/user/Regularised';

function App() {
  return (
    <Router>
      {/* <Sidebar/>  */}
     <Routes>
  
      <Route path='/' element={<SignIn />} />


      
    <Route path='/UserDashboard' exact element={< UserDashboard/>}/>

<Route path='/AdminDashboard' exact element={<AdminDashboard />}/>
<Route path='/AdminCalender' exact element={<AdminCalender />}/>

<Route path='/ManagerDashboard' exact element={<ManagerDashboard/>}/>
       


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



