import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import config from "../../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import PasswordStrengthBar from "react-password-strength-bar";
import PasswordStrengthMeter from '../slices/PasswordStrengthMeter'
import { Grid } from "@mui/material";

import {
  Card,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";
import NavBar from "../dashboard/NavBar";
import SideBar from "../dashboard/SideBar";

const Addemployee = () => {










  const [Emp_No, setEmp_No] = useState('')
  const [Name, setName] = useState('')
  const [Last_Name, setLast_Name] = useState('')
  const [Country, setCountry] = useState('')
  const [Email, setEmail] = useState('')

  const [Address, setAddress] = useState('')
  const [City, setCity] = useState('')
  const [Department, setDepartment] = useState('')
  const [Blood_Group, setBlood_Group] = useState('')
  const [Hire_Date, setHire_Date] = useState('')
  const [Birth_Date, setBirth_Date] = useState('')
  const [ManagerId, setManagerId] = useState('')
  const [Contact, setmobileNo] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [optionList, setOptionList] = useState([])//just adding 
  const [manageroptions, setManageroptions] = useState([])



  // Rid, Name, Last_Name, Address, Contact, Role,
  //  Image, Email, Password, CreationDate, Emp_No, Country, City,
  //  Department, Blood_Group, Hire_Date, Birth_Date, ManagerId, M_Name


  const options = ["A+", "B+", "AB+"];
  const options1 = ["India", "Japan", "Chaina", "Italy", "Japan", 
  "Nepal", "Brazil", "Afghanistan", "Canada", "Indonesia", "Thailand"];
  const [Role, setSelected] = useState('')
  const optionss = ["Admin", "User", "Manager"];

  const [registration, setRegistration] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [basicModal, setBasicModal] = useState(false);
  const handleClose1 = () => setBasicModal(false);


  // const [optionList, setOptionList] = useState([]);
  // const [options] = useState(["A+", "B+", "AB+"]);
  // const [options1] = useState([
  //   "India",
  //   "Japan",
  //   "China",
  //   "Italy",
  //   "Japan",
  //   "Nepal",
  //   "Brazil",
  //   "Afghanistan",
  //   "Canada",
  //   "Indonesia",
  //   "Thailand",
  // ]);
  // const [optionss] = useState(["Admin", "User", "Manager"]);
  // const [registration, setRegistration] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getempdetails();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  const addemp = () => {

  };


  useEffect(() => {
    // getmanagerdetails()
    getuserdetails()
    // getempdetails()
    // getmanagernames()
  }, [basicModal, show])

  const getuserdetails = () => {
    axios
      .get(config.serverURL + '/use/manager', {
        headers: { token: sessionStorage['token'] },
      })
      .then((response) => {
        const result = response.data

        if (result['status'] === 'success') {
          console.log(result)
          // set the homes to the state member
          setRegistration(result['data'])
        } else {
          toast.error(result['error'])
        }
      })
  }









  const getempdetails = () => {
    axios
      .get(config.serverURL + "/department/", {
        headers: { token: sessionStorage["token"] },
      })
      .then((response) => {
        const result = response.data;

        if (result["status"] === "success") {
          setOptionList(result["data"]);
        } else {
          toast.error(result["error"]);
        }
      });
  };

  return (
    <>
      <NavBar />
      <SideBar />
      <Card
        sx={{
          marginLeft: "10%",
          marginRight: "40%",
          width: "auto",
          padding: "50px",
          height: "800px",
        }}
      >
        <h2 style={{
          padding: "10px",
        }}>Add New Employee</h2>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} className="container-sm">
            {/* ... Your other form fields ... */}

            <Grid item xs={6}>
              <FormControl sx={{ width: "80%" }}>
                {/* <TextField
                  type="text"
                  label="Emp No"
                  placeholder="Emp No"
                  value={empno}
                  onChange={(event) => setEmpno(event.target.value)}
                /> */}

<input type="text" className="form-control" 
name='Emp_No'
 id='id_Emp_No' 
 placeholder="Emp No"
  onChange={(event) => {
                                setEmp_No(event.target.value)
                              }} />
                       

              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl sx={{ width: "80%" }}>
                <InputLabel id="department-label">Department</InputLabel>
                {/* <Select
                  labelId="department-label"
                  id="id_department"
                  value={department}
                  onChange={(event) => setDepartment(event.target.value)}
                >
                  <MenuItem value="">Select department</MenuItem>
                  {optionList?.map((item) => (
                    <MenuItem key={item.deptid} value={item.deptname}>
                      {item.deptname}
                    </MenuItem>
                  ))}
                </Select> */}


                <select className="form-control" name='Department' id='id_Department'
                              disabled={false}
                              value={Department}
                              onChange={(event) => setDepartment(event.target.value)}
                            >
                              <option>select Department</option>

                              {optionList?.map((item) =>
                                <option key={item.deptid} value={item.deptname}>
                                  {item.deptname}
                                </option>
                              )}
                            </select>









              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl sx={{ width: "80%" }}>
                {/* <TextField
                  type="text"
                  label="First Name"
                  placeholder="First Name"
                  value={empno}
                  onChange={(event) => setFirstName(event.target.value)}
                /> */}

<input type="text" className="form-control" name='Name' id='id_Name' placeholder="First Name" onChange={(event) => {
                              setName(event.target.value)
                            }} />

              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl sx={{ width: "80%" }}>
                {/* <TextField
                  type="text"
                  label="Last Name"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)} /> */}



<input type="text" className="form-control" name='Last_Name' id='id_Last_Name' placeholder="Last Name" onChange={(event) => {
                              setLast_Name(event.target.value)
                            }} />








              </FormControl>
            </Grid>

            {/* ... Continue adding rows and form fields as needed ... */}
            {/* Enhance styling for the dropdown */}
            <Grid item xs={6}>
              <FormControl sx={{ width: "80%" }}>
                <InputLabel id="bloodgroup-label">Blood Group</InputLabel>
                {/* <Select
                  labelId="bloodgroup-label"
                  id="id_bloodgroup"
                  value={bloodgroup}
                  onChange={(event) => setBloodgroup(event.target.value)}
                  label="Blood Group"
                >
                  <MenuItem value="">Select Blood group</MenuItem>
                  {options.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select> */}




                <select className="form-control" name='Blood_Group' id='id_Blood_Group'
                              value={Blood_Group}
                              onChange={(event) => setBlood_Group(event.target.value)} >
                              <option>select Blood group</option>
                              {options.map((item) =>
                                <option>
                                  {item}
                                </option>
                              )}
                            </select>








              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl sx={{ width: "80%" }}>
                <InputLabel id="country-label">Country</InputLabel>
                {/* <Select
                  labelId="country-label"
                  id="id_selectCountry"
                  value={country}
                  onChange={(event) => setCountry(event.target.value)}
                  label="Country"
                >
                  <MenuItem value="">Select</MenuItem>
                  {options1.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select> */}


                <select className="form-control" name='selectCountry' id='id_selectCountry'
                              value={Country}
                              onChange={(event) => setCountry(event.target.value)} >
                              <option>Select</option>
                              {options1.map((item) =>
                                <option>
                                  {item}
                                </option>
                              )}
                            </select>




              </FormControl>
            </Grid>
            {/* ... Continue adding rows and form fields as needed ... */}
            <Grid item xs={6}>
              <FormControl sx={{ width: "80%" }}>
                {/* <TextField
                  type="date"
                  label="Date Of Birth"
                  name="Date Of Birth"
                  id="id_birthdate"
                  placeholder="Birth Date"
                  onChange={(event) => setBirthdate(event.target.value)}
                /> */}


<input type="date" className="form-control" name='Hire_Date' id='id_Hire_Date' placeholder="Password" onChange={(event) => {
                              setHire_Date(event.target.value)
                            }} />



              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl sx={{ width: "80%" }}>
                {/* <TextField
                  type="date"
                  label="Date Of Birth"
                  name="Date Of Birth"
                  id="id_birthdate"
                  placeholder="Birth Date"
                  onChange={(event) => setBirthdate(event.target.value)}
                /> */}


<input type="date" className="form-control" name='Birth_Date' id='id_Birth_Date' placeholder="Birth Date" onChange={(event) => {
                              setBirth_Date(event.target.value)
                            }} />



              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl sx={{ width: "80%" }}>
                {/* <TextField
                  type="email"
                  label="Email"
                  name="newemail"
                  id="id_newemail"
                  placeholder="name@meg-nxt.com"
                  onChange={(event) => setEmail(event.target.value)}
                /> */}


<input type="Email" className="form-control" name='newEmail' id='id_newEmail' placeholder="name@meg-nxt.com" onChange={(event) => {
                              setEmail(event.target.value)
                            }} />

              </FormControl>
            </Grid>
            {/* ... Continue adding rows and form fields as needed ... */}
            <Grid item xs={6}>
              <FormControl sx={{ width: "80%" }}>
                {/* <TextField
                  type="number"
                  label="Mobile Number"
                  name="mobileno"
                  id="id_mobileno"
                  placeholder="Mobile No"
                  onChange={(event) => setmobileNo(event.target.value)}
                /> */}

<input type="number" className="form-control" name='mobileno' id='id_mobileno' placeholder="Mobile No" onChange={(event) => {
                              setmobileNo(event.target.value)
                            }} />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl sx={{ width: "80%" }}>
                {/* <Select
                  label=" Select User Role"
                  labelId="role"
                  id="id_role"
                  value={role}
                  onChange={(event) => setSelected(event.target.value)}

                >
                  <MenuItem value="">Select role</MenuItem>
                  {optionss.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select> */}


                <select className="form-control" name='Role' id='id_Role'
                              value={Role}
                              onChange={(event) => setSelected(event.target.value)} >
                              <option>select Role</option>
                              {optionss.map((item) =>
                                <option>
                                  {item}
                                </option>
                              )}
                            </select>








              </FormControl>
            </Grid>
            {/* ... Continue adding rows and form fields as needed ... */}
            <Grid item xs={6}>
              <FormControl sx={{ width: "80%" }}>
                {/* <TextField
                  type="text"
                  label="City"
                  name="city"
                  id="id_city"
                  placeholder="City"
                  onChange={(event) => setCity(event.target.value)}
                /> */}
    
    <input type="text" className="form-control" name='City' id='id_City' placeholder="City" onChange={(event) => {
                              setCity(event.target.value)
                            }} />
    
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl sx={{ width: "80%" }}>
                {/* <TextField
                  type="text"
                  label="Address"
                  name="address"
                  id="id_address"
                  placeholder="Address"
                  onChange={(event) => setaddress(event.target.value)}
                /> */}

                 <input type="text" className="form-control" name='Address' id='id_Address' placeholder="Address" onChange={(event) => {
                              setAddress(event.target.value)
                            }} />

              </FormControl>
            </Grid>
            {/* ... Continue adding rows and form fields as needed ... */}
            <Grid item xs={6}>
              <FormControl sx={{ width: "80%" }}>
                <TextField
                  type="password"
                  label="Password"
                  name="confirmpassword"
                  id="id_confirmpassword"
                  placeholder="Password"
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />



<input type="password" className="form-control" name='password2' id='id_password2' placeholder="Password" onChange={(event) => {
                              setPassword(event.target.value)
                            }} />
 <PasswordStrengthMeter password={password} />



              </FormControl>
            </Grid>



   








            <Grid item xs={6}>
              <FormControl sx={{ width: "80%" }}>
                {/* <TextField
                  type="password"
                  label="Password"
                  name="password2"
                  id="id_password2"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                /> */}
    
    <input type="password" className="form-control" name='confirmpassword' id='id_confirmpassword' placeholder="Password" onChange={(event) => {
                              setConfirmPassword(event.target.value)
                            }} />
     <label for="floatingPassword">Confirm Password</label>
    
              </FormControl>
            </Grid>





            <Grid item xs={6}>
              <FormControl sx={{ width: "80%" }}>
                {/* <span>Select Manager</span> */}
                {/* <Select
                  labelId="manager-label"
                  label="Select Manager"
                  id="id_manager"
                  disabled={false}
                  value={managerid}
                  onChange={(event) => setManagerId(event.target.value)}
                // label="Manager"
                >
                  <MenuItem value="">Select Manager</MenuItem>
                  {registration
                    .filter((emps) => emps.role === "Manager")
                    .map((emps) => (
                      <MenuItem
                        key={emps.rid}
                        value={`${emps.rid}`}
                      >
                        {emps.rid} <br />
                        <span>{emps.firstName}</span>
                      </MenuItem>
                    ))}
                </Select> */}
     
     
     <select
                              className="form-control"
                              name='Department'
                              id='id_Department'
                              disabled={false}
                              value={ManagerId}
                              onChange={(event) => setManagerId(event.target.value)}
                            >
                              <option value="">Select Manager</option>

                              {registration
                                .filter((emps) => emps.Role === 'manager') // Assuming 'Role' is the key for the Role information
                                .map((emps) => (
                                  <option key={emps.Rid} value={`${emps.Rid} 
      `}>
                                    {emps.Rid} <br /><br />
                                    <span>{emps.Name}</span>
                                    {/* - {emps.Name} */}
                                  </option>
                                ))}
                            </select>

     
     
     
     
     
     
     
     
     
              </FormControl>
            </Grid>
            {/* ... Continue adding rows and form fields as needed ... */}
            <Grid container item justifyContent="center">
              <Grid item>
                {/* <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={styles.signinButton}
                >
                  Submit
                </Button> */}
                   <Button variant="success" name='addemp' id='id_addemp' onClick={addemp}>
                      Add
                    </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Card>
    </>
  );
};

// export default Addemployee;

const styles = {
  // container: {
  //     margin:"auto",
  //   width: 'auto',
  //  // height: 620,
  //  height:'50px',
  //   padding: 20,
  //   position: 'relative',
  //   top: 0,
  //   left: 0,
  //   right: 50,
  //   bottom: 0,
  //   margin: 'auto',

  //   marginTop:500,
  //   borderColor: '#8275a5',
  //   borderRadius: 10,
  //   broderWidth: 1,
  //   borderStyle: 'solid',
  //   boxShadow: '1px 1px 20px 5px #C9C9C9',
  //   display: 'flex',
  //   justifycontent: 'center',
  // },
  signinButton: {
    position: "relative",
    width: "30%",
    height: 40,
    backgroundColor: "primary",
    color: "white",
    borderRadius: 5,
    border: "none",
    marginTop: 10,
  },
};

export default Addemployee;
