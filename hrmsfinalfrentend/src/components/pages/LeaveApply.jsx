import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import config from '../slices/config';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import { Grid } from '@mui/material';

const SignUp = () => {
 
    const [Name, setName] = useState("");
    const [Last_Name, setLast_Name] = useState("");
    const [Rid, setRid] = useState("");
    const [StartDate, setStartDate] = useState("");
    const [EndDate, setEndDate] = useState("");
    const [Reason, setReason] = useState("");
    const [LDays, setLDays] = useState("");
    const [LType, setLType] = useState("");
    const [ApplyFor, setApplyFor] = useState([]);
    const appoptions = ["Full Day", "Half Day"];
    const [ApplyLeave, setApplyleave] = useState([]);
    const [ApplyLeave1, setApplyleave1] = useState([]);
    const [reportstatus, setreportstatus] = useState([]);
    const [expandedIndex, setExpandedIndex] = useState(-1);
    const [appid, setRegid] = useState();
    const USER_ID = sessionStorage.getItem("useRid");
    const navigate = useNavigate();
    // const [value, setValue] = React.useState("1");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const [applystatus, setApplyStatus] = useState([]);
    
    const [pendingApplications, setPendingApplications] = useState([]);
    const [rejectedApplications, setRejectedApplications] = useState([]);
    const [approvedApplications, setApprovedApplications] = useState([]);
    
    const [registration, setRegistration] = useState([]);
    const [manageRid, setManageRid] = useState("");
    // const [Rid,setRid]=useState('')
    
    // const handleChange = (event, newValue) => {
    //   setValue(newValue);
    // };
    
    const optionss = [
      "Earned Leave",
      "Casual Leave",
      "Special Sick Leave",
      "Maternity Leave",
      "Comp Off",
      "Loss Of Pay",
      "Outdoor Duty",
    ];
    
    const handleAccordionChange = (index) => {
      setExpandedIndex(index === expandedIndex ? -1 : index);
    };
    
    const handleDelete = (emps) => {
      deletereport(emps.reportid);
    
      console.log("Delete button clicked. emps:", emps);
    
      handleShow(emps);
    };
    
    const handleDelete1 = (emps) => {
      deleteleave(emps.leaveid);
    
      console.log("Delete button clicked. emps:", emps);
    
      handleShow1(emps);
    };
    
    useEffect(() => {
      getuserdetails(USER_ID); //user details get
    
    
    
      getreportingdetails(USER_ID);
    
      // getApplyDetails1(USER_ID); //approved details get
    }, []);
    
    // **********************************************************************************
    //  Manager api use here
    // **********************************************************************************
    
    useEffect(() => {
      user(USER_ID); //user details get
    
      leaves(USER_ID); //pending details get
    
      reporting(USER_ID);
    
      // ApplyData(USER_ID);
    }, []);
    
    const user = () => {
      axios
        .get(config.serverURL + "/use", {
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
    
    // const user = (USER_ID) => {
    //   axios
    //     .get(config.serverURL + "/use/" + USER_ID, {
    //       headers: { token: sessionStorage["token"] },
    //     })
    
    //     .then((response) => {
    //       const result = response.data;
    
    //       if (result["status"] === "success") {
    //         console.log("UserDetails Response from UseRid: ");
    
    //         console.log("then response ", result);
    
    //         // setempno(response.data.data[0].empno) //backend  Rid
    
    //         setName(response.data.data[0].Name);
    
    //         setRid(response.data.data[0].department); //backend  department name
    
    //         setLast_Name(response.data.data[0].Last_Name);
    
    //         setRegid(response.data.data[0].Rid);
    
    //         // console.log("reid    :",response.data.data[0].Rid)
    
    //         // set the homes to the state member
    
    //         //  setRegistration(result['data'])
    //       } else {
    //         toast.error(result["error"]);
    //       }
    //     });
    // };
    
    const leaves = (USER_ID) => {
      axios
    
        .get(config.serverURL + "/applyLeave/" + USER_ID, {
          headers: { token: sessionStorage["token"] },
        })
    
        .then((response) => {
          const result = response.data;
    
          if (result["status"] === "success") {
            console.log("get specific details from applyleave table ");
    
            console.log("then response ", result);
    
            // setapplystatus(response.data.data)
    
            console.log("getapply pending", response.data.data);
    
            // set the homes to the state member
    
            setApplyleave(result["data"]);
          } else {
            toast.error(result["error"]);
          }
        });
    };
    
    // const ApplyData = (USER_ID) => {
    //   axios
    //     .get(config.serverURL + "/applyLeave/approved/" + USER_ID, {
    //       headers: { token: sessionStorage["token"] },
    //     })
    //     .then((response) => {
    //       const result = response.data;
    
    //       if (result["status"] === "success") {
    //         console.log("Get specific details from applyleave table");
    //         console.log("Then response", result);
    
    //         const enddate = moment(result.data.EndDate).format("YYYY-MM-DD");
    //         console.log("EndDate:", enddate);
    
    //         const curdate = moment(new Date()).format("YYYY-MM-DD");
    //         console.log("Current Date:", curdate);
    
    //         console.log("Comparison Result:", enddate <= curdate);
    
    //         // Check if applyStatus is 'approved'
    //         if (result.data.applyStatus === "approved") {
    //           setApplyStatus("approved");
    //         } else if (result.data.applyStatus === "pending") {
    //           setApplyStatus("pending");
    //         } else if (result.data.applyStatus === "rejected") {
    //           setApplyStatus("rejected");
    //         }
    //       } else {
    //         toast.error(result["error"]);
    //       }
    //     });
    // };
    
    // Usage:
    // Assuming you have a state variable `applyStatus` to store the status.
    // You can use it to display the status in your UI.
    
    //get specific recored from reporting
    
    const reporting = (USER_ID) => {
      console.log("Manager's USER_ID: ", USER_ID);
    
      axios
        .get(
          config.serverURL + "/reporting/manage/" + USER_ID,
    
          {
            headers: { token: sessionStorage["token"] },
          }
        )
    .then((response) => {
      const result = response.data;
  
          if (result["status"] === "success") {
            console.log("Get users reporting to manager:");
  
            console.log("Response: ", result);
  
            // Handle the data as needed
            const usersReportingToManager = result["data"];
            console.log("Users reporting to manager:", usersReportingToManager);
          } else {
            toast.error(result["error"]);
          }
        })
        .catch((error) => {
          console.error("Error fetching reporting data: ", error);
        });
    };
  
    // // Usage: Pass the manager's USER_ID as an argument to the function
    // reporting(managerUseRid);
  
    // // Usage: Pass the USER_ID of the manager you want to retrieve reporting data for.
    // const managerUseRid = 123; // Replace with the actual manager's USER_ID.
    // reporting(managerUseRid);
  
    // **********************************************************************************
    //  Manager Api End Here
    // **********************************************************************************
  
    const getuserdetails = (USER_ID) => {
      axios
        .get(config.serverURL + "/use/" + USER_ID, {
          headers: { token: sessionStorage["token"] },
        })
  
        .then((response) => {
          const result = response.data;
  
          if (result["status"] === "success") {
            console.log("UserDetails Response from UseRid: ");
  
            console.log("then response ", result);
  
            // setempno(response.data.data[0].empno) //backend  Rid
  
            setName(response.data.data[0].Name);
  
            setRid(response.data.data[0].department); //backend  department name
  
            setLast_Name(response.data.data[0].Last_Name);
  
            setRegid(response.data.data[0].Rid);
  
            // console.log("reid    :",response.data.data[0].Rid)
  
            // set the homes to the state member
  
            //  setRegistration(result['data'])
          } else {
            toast.error(result["error"]);
          }
        });
    };
  
    const apply = () => {
      // check if user has really entered any value
  
      if (StartDate.length === 0) {
        toast.error("please select Date ");
      } else if (EndDate.length === 0) {
        toast.error("please select date");
      } else if (EndDate < StartDate) {
        toast.error("End Date cannot be before Start Date");
      } else if (ApplyFor === 0) {
        toast.error("please select apply for");
      } else if (Reason.length === 0) {
        toast.error("please mention Reason");
      } else if (LType.length === 0) {
        toast.error("please select leave type");
      } else {
        const start = new Date(StartDate);
  
        const end = new Date(EndDate);
  
        const timeDifference = end - start;
  
        const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24)) + 1;
  
        setLDays(daysDifference);
  
        console.log(LDays);
  
        const body = {
          StartDate,
  
          EndDate,
  
          Reason,
  
          appid,
  
          ApplyFor,
  
          LDays: daysDifference,
  
          LType,
  
          Rid,
        };
  
        console.log("Apply for : ", ApplyFor);
  
        console.log("leave days : ", LDays);
  
        console.log("body : ", body);
  
        axios
  
          .post(config.serverURL + "/applyLeave/leave", body, {
            headers: { token: sessionStorage["token"] },
          })
  
          .then((response) => {
            // get the data returned by server
  
            const result = response.data;
  
            console.log(response.data);
  
            // sessionStorage.setItem("time",TimeIn);
  
            // const v=sessionStorage.getItem("time")
  
            // console.log(v)
  
            // check if user's authentication is successfull
  
            if (result["status"] === "error") {
              toast.error("not insertd");
            } else {
              toast.success("successfully applied leave");
  
              // navigate to the singin page
  
              navigate("/home");
            }
          })
  
          .catch((error) => {
            console.log("error");
  
            console.log(error);
          });
      }
    };
  
    const handleStartDateChange = (event) => {
      const newStartDate = event.target.value;
  
      setStartDate(newStartDate);
  
      // Calculate and set leave days if both Start Date and End Date are selected
  
      if (newStartDate && EndDate) {
        calculateAndSetLDays(newStartDate, EndDate);
      }
    };
  
    const handleEndDateChange = (event) => {
      const newEndDate = event.target.value;
  
      setEndDate(newEndDate);
  
      if (StartDate && newEndDate) {
        if (new Date(newEndDate) < new Date(StartDate)) {
          toast.error("End Date cannot be before Start Date");
        }
      }
  
      // Calculate and set leave days if both Start Date and End Date are selected
  
      if (StartDate && newEndDate) {
        calculateAndSetLDays(StartDate, newEndDate);
      }
    };
  
    const calculateAndSetLDays = (startDate, endDate) => {
      const start = new Date(startDate);
  
      const end = new Date(endDate);
  
      const timeDifference = end - start;
  
      const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24)) + 1;
  
      setLDays(daysDifference);
    };
  
  
    
    const deleteleave = (leaveid) => {
      console.log("delete idddddddddddd : ", leaveid);
  
      axios
  
        .delete(config.serverURL + "/applyLeave/deleteleave/" + leaveid, {
          headers: { token: sessionStorage["token"] },
        })
  
        .then((response) => {
          const result = response.data;
  
          if (result["status"] === "success") {
            // reload the screen
  
            // setdeleteleave()
  
            getapplydetails();
  
            // getApplyDetails1(USER_ID);
  
            toast.success("successfully deleted....!!");
  
            handleClose1();
          } else {
            toast.error(result["error"]);
          }
        });
    };
  
    //delete report id from reporting table
  
    const deletereport = (reportid) => {
      console.log("delete idddddddddddd : ", reportid);
  
      axios
  
        .delete(config.serverURL + "/reporting/deletreport/" + reportid, {
          headers: { token: sessionStorage["token"] },
        })
  
        .then((response) => {
          const result = response.data;
  
          if (result["status"] === "success") {
            // reload the screen
  
            // setdeleteleave()
  
            toast.success("successfully deleted....!!");
  
            getreportingdetails(USER_ID);
  
            handleClose();
          } else {
            toast.error(result["error"]);
          }
        });
    };
  
  
    // ****************************************************************************
    //get leave details from applyleave table
    // get details of the leave application approve or not here  
    // ****************************************************************************
    const getapplydetails = () => {
      axios
        .get(config.serverURL + "/applyLeave/", {
          headers: { token: sessionStorage["token"] },
        })
        .then((response) => {
          const result = response.data;
  
          if (result["status"] === "success") {
            console.log("get specific details from applyleave table ");
            console.log("then response ", result);
  
            const approvedApplications = result["data"].filter(
              (emps) => emps.applyStatus === "approved"
            );
            const rejectedApplications = result["data"].filter(
              (emps) => emps.applyStatus === "rejected"
            );
            const pendingApplications = result["data"].filter(
              (emps) => emps.applyStatus === "pending"
            );
  
            // Set the filtered data to state members
            setApprovedApplications(approvedApplications);
            setRejectedApplications(rejectedApplications);
            setPendingApplications(pendingApplications);
          } else {
            toast.error(result["error"]);
          }
        });
    };
    // ****************************************************************************
    //get leave details from applyleave table
    // get details of the leave application approve or not here  
      //     END HERE 
    // ****************************************************************************
  
    // const getApplyDetails1 = (USER_ID) => {
    //   axios
    //     .get(config.serverURL + "/applyLeave/approved/" + USER_ID, {
    //       headers: { token: sessionStorage["token"] },
    //     })
    //     .then((response) => {
    //       const result = response.data;
  
    //       if (result["status"] === "success") {
    //         console.log("Get specific details from applyleave table");
    //         console.log("Then response", result);
  
    //         const enddate = moment(result.data.EndDate).format("YYYY-MM-DD");
    //         console.log("EndDate:", enddate);
  
    //         const curdate = moment(new Date()).format("YYYY-MM-DD");
    //         console.log("Current Date:", curdate);
  
    //         console.log("Comparison Result:", enddate <= curdate);
  
    //         // Check if applyStatus is 'approved'
    //         if (result.data.applyStatus === "approved") {
    //           setApplyStatus("approved");
    //         } else if (result.data.applyStatus === "pending") {
    //           setApplyStatus("pending");
    //         } else if (result.data.applyStatus === "rejected") {
    //           setApplyStatus("rejected");
    //         }
    //       } else {
    //         toast.error(result["error"]);
    //       }
    //     });
    // };
  
    // Usage:
    // Assuming you have a state variable `applyStatus` to store the status.
    // You can use it to display the status in your UI.
  
    //get specific recored from reporting
  
    const getreportingdetails = (USER_ID) => {
      console.log("reporting id : ", USER_ID);
  
      axios
        .get(config.serverURL + "/reporting/" + USER_ID, {
          headers: { token: sessionStorage["token"] },
        })
  
        .then((response) => {
          const result = response.data;
  
          if (result["status"] === "success") {
            console.log("get specific details from reporting table ");
  
            console.log("then response ", result);
  
            // setapplystatus(response.data.data)
  
            //  console.log("Reporting details from  ppppppppppp",response.data.data)
  
            setreportstatus(result["data"]);
          } else {
            toast.error(result["error"]);
          }
        });
    };
  
    // *********************************************************************************************************
    const [currentDate, setCurrentDate] = useState("");
  
    useEffect(() => {
      // Function to get the current date in "YYYY-MM-DD" format
      const getCurrentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
      };
  
      setCurrentDate(getCurrentDate());
    }, []);

  return (
    <>
      <div style={{ background: '', marginTop: '10%', height: '900px', width: '100%' }}>
        <div style={styles.container}>
          <h1 style={styles1.h2}>Leave Apply</h1>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="input-with-icon-adornment">Name</InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  className="form-control"
                  type="text"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="input-with-icon-adornment">Last Name</InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  onChange={(event) => {
                    setLast_Name(event.target.value);
                  }}
                  className="form-control"
                  type="text"
                />
              </FormControl>
            </Grid>


            <Grid item xs={12} sm={6}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="input-with-icon-adornment">Leave Type</InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  className="form-control"
                  type="text"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="input-with-icon-adornment"> Leave Balance</InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  onChange={(event) => {
                    setLast_Name(event.target.value);
                  }}
                  className="form-control"
                  type="text"
                />
              </FormControl>
            </Grid>



            <Grid item xs={12} sm={6}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="input-with-icon-adornment">Select Leave Date</InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  className="form-control"
                  type="text"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="input-with-icon-adornment">Select Leave End Date</InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  onChange={(event) => {
                    setLast_Name(event.target.value);
                  }}
                  className="form-control"
                  type="text"
                />
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="input-with-icon-adornment">Select Session 1st</InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  className="form-control"
                  type="text"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="input-with-icon-adornment">Select Session 2nd</InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  onChange={(event) => {
                    setLast_Name(event.target.value);
                  }}
                  className="form-control"
                  type="text"
                />
              </FormControl>
            </Grid>


            <Grid item xs={12} sm={6}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="input-with-icon-adornment">To Leave Request</InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  className="form-control"
                  type="text"
                />
              </FormControl>
            </Grid>












            <Grid item xs={12} sm={6}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="input-with-icon-adornment" > Leave Days </InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  disabled
                  onChange={(event) => {
                    setLast_Name(event.target.value);
                  }}
                  className="form-control"
                  type="text"
                />
              </FormControl>
            </Grid>







           
          
          </Grid>

          <div className="mb-3" style={{ marginTop: 40 }}>
           
            <Button
              name="signinbutton"
              id="id_signinbutton"
            //   onClick={signup}
              style={styles.signinButton}
              sx={{ color: 'blue' }}
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    width: 500,
    height: 600,
    padding: 20,
    top: 20,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
    fontsize: '120',
    marginTop: '20',
    borderColor: '#4d94ff',
    borderRadius: 30,
    border: 'solid',
    boxShadow: ' #C9C9C9',
  },

  signinButton: {
    position: 'relative',
    width: '100%',
    height: 40,
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: 5,
    border: 'none',
    marginTop: 10,
  },
};

const styles1 = {
  h2: {
    textAlign: 'center',
    position: 'relative',
    top: 10,
    padding: 20,
    color: 'black',
  },
};

export default SignUp;
