import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import axios from "axios";

import config from "../slices/config";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ReactRoundedImage from "react-rounded-image";
import moment from "moment";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { FaUpload } from "react-icons/fa";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PasswordStrengthMeter from "../slices/PasswordStrengthMeter";
import { AiFillPlusCircle } from "react-icons/ai";

import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import MenuItem from '@mui/material/MenuItem';

import Select from '@mui/material/Select';
// import NavBar from '../dashboard/NavBar'
import SideBar from "../dashboard/SideBar";
import { MDBModalFooter } from "mdb-react-ui-kit";

export default function SimpleContainer() {
  const [Emp_No, setEmp_No] = useState("");
  const [Name, setName] = useState("");
  const [Last_Name, setLast_Name] = useState("");
  const [Country, setCountry] = useState("");
  const [Email, setEmail] = useState("");

  const [Address, setAddress] = useState("");
  const [City, setCity] = useState("");
  const [Department, setDepartment] = useState("");
  const [Blood_Group, setBlood_Group] = useState("");
  const [Hire_Date, setHire_Date] = useState("");
  const [Birth_Date, setBirth_Date] = useState("");
  const [ManagerId, setManagerId] = useState("");
  const [Contact, setmobileNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [optionList, setOptionList] = useState([]); //just adding
  const [manageroptions, setManageroptions] = useState([]);

  // Rid, Name, Last_Name, Address, Contact, Role,
  //  Image, Email, Password, CreationDate, Emp_No, Country, City,
  //  Department, Blood_Group, Hire_Date, Birth_Date, ManagerId, M_Name

  const options = ["A+", "B+", "AB+"];
  const options1 = [
    "India",
    "Japan",
    "Chaina",
    "Italy",
    "Japan",
    "Nepal",
    "Brazil",
    "Afghanistan",
    "Canada",
    "Indonesia",
    "Thailand",
  ];
  const [Role, setSelected] = useState("");
  const optionss = ["Admin", "User", "Manager"];

  const [registration, setRegistration] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [basicModal, setBasicModal] = useState(false);
  const handleClose1 = () => setBasicModal(false);
  const handleShow1 = () => {
    setBasicModal(true); // Show the modal
  };
  const handleDelete = (emps) => {
    console.log("Delete button clicked. emps:", emps);
    handleShow(emps);
    console.log("console log ");
    deleteHome(emps.rid);
  };
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Upload Image
    </Tooltip>
  );
  const renderTooltip1 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Edit
    </Tooltip>
  );
  const renderTooltip2 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Delete
    </Tooltip>
  );

  const navigate = useNavigate();

  useEffect(() => {
    // getmanagerdetails()
    getuserdetails();
    getempdetails();
    getmanagernames();
  }, [basicModal, show]);

  const getuserdetails = () => {
    axios
      .get(config.serverURL + "/use/manager", {
        headers: { token: sessionStorage["token"] },
      })
      .then((response) => {
        const result = response.data;

        if (result["status"] === "success") {
          console.log(result);
          // set the homes to the state member
          setRegistration(result["data"]);
        } else {
          toast.error(result["error"]);
        }
      });
  };

  // const getmanagerdetails = () => {
  //   axios
  //     .get(config.serverURL + '/use/Role', {
  //       headers: { token: sessionStorage['token'] },
  //     })
  //     .then((response) => {
  //       const result = response.data

  //       if (result['status'] === 'success') {
  //         console.log(result)
  //         // set the homes to the state member
  //         setRegistration(result['data'])
  //       } else {
  //         toast.error(result['error'])
  //       }
  //     })
  // }

  const deleteHome = (rid) => {
    console.log("inside deleteHome Method", rid);
    axios
      .delete(config.serverURL + "/use/" + rid, {
        headers: { token: sessionStorage["token"] },
      })
      .then((response) => {
        const result = response.data;
        if (result["status"] === "success") {
          console.log("successfully deleted");
          toast.success("successfully deleted");

          // getuserdetails()
          handleClose();
        } else {
          toast.warning("record present into another table ");
          console.log(
            "Can't delete record because present into another table "
          );
          toast.error(result["error"]);
        }
      });
  };

  const editHome = (rid) => {
    navigate("/edit-emp", { state: { rid: rid } });
  };

  const uploadImage = (ridd) => {
    navigate("/upload-image", { state: { rId: ridd } });
  };

  const getempdetails = () => {
    axios
      .get(config.serverURL + "/Department/", {
        headers: { token: sessionStorage["token"] },
      })
      .then((response) => {
        const result = response.data;

        if (result["status"] === "success") {
          console.log(result);
          // set the homes to the state member
          setOptionList(result["data"]);
        } else {
          toast.error(result["error"]);
        }
      });
  };

  const getmanagernames = () => {
    axios
      .get(config.serverURL + "/use/manager/", {
        headers: { token: sessionStorage["token"] },
      })
      .then((response) => {
        const result = response.data;

        if (result["status"] === "success") {
          console.log("manager details ..", result);

          setManageroptions(result["data"]);
        } else {
          toast.error(result["error"]);
        }
      });
  };


  const resetForm = () => {
    setEmp_No("");
    setName("");
    setLast_Name("");
    setCountry("");
    setEmail("");
    setAddress("");
    setCity("");
    setDepartment("");
    setBlood_Group("");
    setHire_Date("");
    setBirth_Date("");
    setmobileNo("");
    setPassword("");
    setConfirmPassword("");
    setManagerId("");
  };

  const addemp = () => {
    // check if user has really entered any value
    if (Emp_No.length === 0) {
      toast.error("please enter EmpNumber ");
    } else if (Name.length === 0) {
      toast.error("please enter first name");
    } else if (Last_Name.length === 0) {
      toast.error("please enter last name");
    } else if (Country.length === 0) {
      toast.error("please enter Country name");
    } else if (Email.length === 0) {
      toast.error("please enter Email");
    } else if (Address.length === 0) {
      toast.error("please enter Address");
    } else if (City.length === 0) {
      toast.error("please enter City");
    } else if (Department.length === 0) {
      toast.error("please enter Department");
    } else if (Blood_Group.length === 0) {
      toast.error("please enter Blood_Group");
    } else if (Role.length === 0) {
      toast.error("please select Role");
    } else if (Hire_Date.length === 0) {
      toast.error("please select Hire_Date");
    } else if (Birth_Date.length === 0) {
      toast.error("please select Birth_Date");
    } else if (Contact.length === 0) {
      toast.error("please enter phone number");
    } else if (password.length === 0) {
      toast.error("please enter password");
    } else if (confirmPassword.length === 0) {
      toast.error("please confirm password");
    } else if (password !== confirmPassword) {
      toast.error("password does not match");
    } else if (confirmPassword.length === 0) {
      toast.error("please confirm password");
    }
    //  else if (ManagerId.length === 0) {
    //   toast.error("please select manager");
    // } 
    else {
      const body = {
        Emp_No,
        Name,
        Last_Name,
        Country,
        Email,
        Address,
        City,
        Department,
        Blood_Group,
        Hire_Date,
        Birth_Date,
        Contact,
        password,
        Role,
        ManagerId,
      };
      console.log(body);
      // make the API call to check if user exists
      axios
        .post(config.serverURL + "/user/signup", body, {
          headers: { token: sessionStorage["token"] },
        })
        .then((response) => {
          // get the data returned by server
          const result = response.data;
          // console.log("succesfyllu added employee details ", result);

          // check if user's authentication is successfull
          if (result["status"] === "error") {
            toast.error("Error while upload Employee Details");
          } else {
            toast.success("  Employee Details Added Successfully ");

            // navigate to the singin page
            
            setEmp_No("");
            setName("");
            setLast_Name("");
            setCountry("");
            setEmail("");

            setAddress("");
            setCity("");
            setDepartment("");
            setBlood_Group("");
            setHire_Date("");
            setBirth_Date("");
            setmobileNo("");
            setPassword("");
            setConfirmPassword("");
            setManagerId("");


            resetForm();
            navigate("/AddEmployee");
            // getuserdetails()
            // handleClose1();

          }
        })
        .catch((error) => {
          console.log("error");
          console.log(error);
        });
    }
  };

  return (
    <>
      <div
        style={{
          background: "",
          marginTop: "10%",
          height: "900px",
          width: "100%",
        }}
      >
        <div style={styles.container}>
          <h1 style={styles1.h2}>Add Employee</h1>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="input-with-icon-adornment">
                  Emp Number
                </InputLabel>
                <Input
                 type="text"
                 className="form-control"
                 name="Emp_No"
                 id="id_Emp_No"
                 placeholder="Emp No"
                 onChange={(event) => {
                   setEmp_No(event.target.value);
                 }}
                />
              </FormControl>
            </Grid>


            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="standard">
                <InputLabel htmlFor="department-dropdown">Department</InputLabel>
                <Select
                  label="Department"
                  id="department-dropdown"
                  value={Department}
                  onChange={(event) => setDepartment(event.target.value)}
                >
                  <MenuItem value="">Select Department</MenuItem>
                  {optionList?.map((item) => (
                    <MenuItem key={item.deptid} value={item.deptname}>
                      {item.deptname}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>









{/* 
            <Grid item xs={12} sm={6}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="input-with-icon-adornment">
                Department
                </InputLabel>
                <select
                      className="form-control"
                      name="Department"
                      id="id_Department"
                      disabled={false}
                      value={Department}
                      onChange={(event) => setDepartment(event.target.value)}
                    >
                      <option>select Department</option>

                      {optionList?.map((item) => (
                        <option key={item.deptid} value={item.deptname}>
                          {item.deptname}
                        </option>
                      ))}
                    </select>
              </FormControl>
            </Grid> */}

            <Grid item xs={12} sm={6}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="input-with-icon-adornment">
                  Name
                </InputLabel>
                <Input
                   type="text"
                   className="form-control"
                   name="Name"
                   id="id_Name"
                   placeholder="First Name"
                   onChange={(event) => {
                     setName(event.target.value);
                   }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="input-with-icon-adornment">
                  Last Name
                </InputLabel>
                <Input
                 type="text"
                 className="form-control"
                 name="Last_Name"
                 id="id_Last_Name"
                 placeholder="Last Name"
                 onChange={(event) => {
                   setLast_Name(event.target.value);
                 }}
                />
              </FormControl>
            </Grid>


            <Grid item xs={12} sm={6}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="input-with-icon-adornment">
                  Email
                </InputLabel>
                <Input
                  type="Email"
                  className="form-control"
                  name="newEmail"
                  id="id_newEmail"
                  placeholder="name@meg-nxt.com"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="input-with-icon-adornment">
                Contact
                </InputLabel>
                <Input
                 type="number"
                 className="form-control"
                 name="mobileno"
                 id="id_mobileno"
                 placeholder="Mobile No"
                 onChange={(event) => {
                   setmobileNo(event.target.value);
                 }}
                />
              </FormControl>
            </Grid>





            <Grid item xs={12} sm={6}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="input-with-icon-adornment">
                  Date Of Birth
                </InputLabel>
                <Input
                  type="date"
                  className="form-control"
                  name="Birth_Date"
                  id="id_Birth_Date"
                  placeholder="Birth Date"
                  onChange={(event) => {
                    setBirth_Date(event.target.value);
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="input-with-icon-adornment">
                  Date Of Joining
                </InputLabel>
                <Input
                   type="date"
                   className="form-control"
                   name="Hire_Date"
                   id="id_Hire_Date"
                   placeholder="Password"
                   onChange={(event) => {
                     setHire_Date(event.target.value);
                   }}
                />
              </FormControl>
            </Grid>


            <Grid item xs={12} sm={6}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="input-with-icon-adornment">Blood Group</InputLabel>
                <Select
                  label="Blood Group"
                  value={Blood_Group}
                  onChange={(event) => setBlood_Group(event.target.value)}
                >
                  <MenuItem value="" disabled>
                    Select Blood group
                  </MenuItem>
                  {options.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
        
<Grid item xs={12} sm={6}>
  <FormControl variant="standard" fullWidth>
    <InputLabel htmlFor="input-with-icon-adornment">Role</InputLabel>
    <Select
      label="Role"
      value={Role}
      onChange={(event) => setSelected(event.target.value)}
    >
      <MenuItem value="" disabled>Select Role</MenuItem>
      {optionss.map((item) => (
        <MenuItem key={item} value={item}>{item}</MenuItem>
      ))}
    </Select>
  </FormControl>
</Grid>


            <Grid item xs={12} sm={6}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="input-with-icon-adornment">
                Address
                </InputLabel>
                <Input
                   type="text"
                   className="form-control"
                   name="Address"
                   id="id_Address"
                   placeholder="Address"
                   onChange={(event) => {
                     setAddress(event.target.value);
                   }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="input-with-icon-adornment">
                   City
                </InputLabel>
                <Input
                  type="text"
                  className="form-control"
                  name="City"
                  id="id_City"
                  placeholder="City"
                  onChange={(event) => {
                    setCity(event.target.value);
                  }}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
      <FormControl variant="standard" fullWidth>
        <InputLabel htmlFor="select-country">Country</InputLabel>
        <Select
          value={Country}
          onChange={(event) => setCountry(event.target.value)}
          label="Country"
          inputProps={{
            name: 'selectCountry',
            id: 'select-country',
          }}
        >
          <MenuItem value="">Select</MenuItem>
          {options1.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>





            <Grid item xs={12} sm={6}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="manager-dropdown">Assign Team</InputLabel>
                <Select
                  value={ManagerId}
                  onChange={(event) => setManagerId(event.target.value)}
                  label="Assign Team"
                  id="manager-dropdown"
                >
                  <MenuItem value="">
                    <em>Select Manager</em>
                  </MenuItem>

                  {registration
                    .filter((emps) => emps.Role === 'manager') // Assuming 'Role' is the key for the Role information
                    .map((emps) => (
                      <MenuItem key={emps.Rid} value={emps.Rid}>
                        {emps.Rid} <span>{emps.Name}</span> 
                      </MenuItem>
                      
                    ))}
                </Select>
              </FormControl>
            </Grid>














            {/* <Grid item xs={12} sm={6}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="input-with-icon-adornment">
                    Assign Team
                </InputLabel>
              
              <select
              className="form-control"
              name="Department"
              id="id_Department"
              disabled={false}
              value={ManagerId}
              onChange={(event) => setManagerId(event.target.value)}
            >
              <option value="">Select Manager</option>

              {registration
                .filter((emps) => emps.Role === "manager") // Assuming 'Role' is the key for the Role information
                .map((emps) => (
                  <option
                    key={emps.Rid}
                    value={`${emps.Rid} 
`}
                  >
                    {emps.Rid} <br />
                    <br />
                    <span>{emps.Name}</span>
                    {/* - {emps.Name} 
                  </option>
                ))}
            </select>

              </FormControl>
            </Grid> */}





            <Grid item xs={12} sm={6}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="input-with-icon-adornment">
                  Password
                </InputLabel>
                <Input
                    type="password"
                    className="form-control"
                    name="password2"
                    id="id_password2"
                    placeholder="Password"
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                />
                
               <PasswordStrengthMeter password={password} />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="input-with-icon-adornment">
                  Confirm Password
                </InputLabel>
                <Input
                 type="password"
                 className="form-control"
                 name="confirmpassword"
                 id="id_confirmpassword"
                 placeholder="Password"
                 onChange={(event) => {
                   setConfirmPassword(event.target.value);
                 }}
                />
              </FormControl>
            </Grid>

        
          </Grid>

          <div className="mb-3" style={{ marginTop: 40 }}>
            <div>
              {/* Do you have an account? <Link to="/">Sign In</Link> */}
            </div>
            <Button
              name="signinbutton"
              id="id_signinbutton"
              // onClick={signup}
              style={styles.signinButton}
              sx={{ color: "blue" }}

              // variant="success"
              // name="addemp"
              // id="id_addemp"
              onClick={addemp}
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>

      {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
   
      {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
    </>
  );
}

const styles = {
  container: {
    width: 700,
    height: 880,
    padding: 20,
    top: 20,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    fontsize: "120",
    marginTop: "20",
    borderColor: "#4d94ff",
    borderRadius: 30,
    border: "solid",
    boxShadow: " #C9C9C9",
  },

  signinButton: {
    position: "relative",
    width: "100%",
    height: 40,
    backgroundColor: "blue",
    color: "white",
    borderRadius: 5,
    border: "none",
    marginTop: 10,
  },
};

const styles1 = {
  h2: {
    textAlign: "center",
    position: "relative",
    top: 10,
    padding: 20,
    color: "black",
  },
};
