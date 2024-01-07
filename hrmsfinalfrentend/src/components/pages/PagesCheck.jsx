import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import config from '../slices/config';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

const SignUp = () => {
  // get user inputs
  const [Name, setName] = useState('');
  const [Last_Name, setLast_Name] = useState('');
  const [Address, setAddress] = useState('');
  const [Contact, setmobileNo] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [Role, setSelected] = useState('');
  const [optionList, setOptionList] = useState([]);

  // this function is used to navigate from one component to another programmatically
  // userNavigate() returns a function reference
  const navigate = useNavigate();
  useEffect(() => {
    getuserdetails();
  }, []);

  const signup = () => {
    // check if user has really entered any value
    if (Name.length === 0) {
      toast.error('please enter first name');
    } else if (Last_Name.length === 0) {
      toast.error('please enter last name');
    } else if (Address.length === 0) {
      toast.error('please enter Address');
    } else if (Contact.length === 0) {
      toast.error('please enter phone number');
    } else if (Password.length === 0) {
      toast.error('please enter Password');
    } else if (confirmPassword.length === 0) {
      toast.error('please confirm Password');
    } else if (Password !== confirmPassword) {
      toast.error('Password does not match');
    } else {
      // make the API call to check if user exists
      axios
        .post(config.serverURL + '/user/signup', {
          Name,
          Last_Name,
          Address,
          Contact,
          Email,
          Password,
        })
        .then((response) => {
          // get the data returned by server
          const result = response.data;

          // check if user's authentication is successful
          if (result['status'] === 'error') {
            toast.error('invalid Email or Password');
          } else {
            toast.success('successfully registered a new user');

            // navigate to the singin page
            navigate('/signin');
          }
        })
        .catch((error) => {
          console.log('error');
          console.log(error);
        });
    }
  };




  const getuserdetails = () => {
    axios
      .get(config.serverURL + '/use/Role/', {
        headers: { token: sessionStorage['token'] },
      })
      .then((response) => {
        const result = response.data;

        if (result['status'] === 'success') {
          console.log(result);
          // set the homes to the state member
          setOptionList(result['data']);
        } else {
          toast.error(result['error']);
        }
      });
  };



  return (
    <>
      <div style={{ background: '', marginTop: '10%', height: '900px', width: '100%' }}>
        <div style={styles.container}>
          <h1 style={styles1.h2}>Sign Up</h1>
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







            <Grid item xs={12}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="input-with-icon-adornment">TO Request</InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  className="form-control"
                  type="email"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="input-with-icon-adornment">Address</InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  onChange={(event) => {
                    setAddress(event.target.value);
                  }}
                  className="form-control"
                  type="text"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="input-with-icon-adornment">Contact</InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  onChange={(event) => {
                    setmobileNo(event.target.value);
                  }}
                  className="form-control"
                  type="tel"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="input-with-icon-adornment">Password</InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  className="form-control"
                  type="password"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="input-with-icon-adornment">Confirm Password</InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  onChange={(event) => {
                    setConfirmPassword(event.target.value);
                  }}
                  className="form-control"
                  type="password"
                />
              </FormControl>
            </Grid>
          </Grid>

          <div className="mb-3" style={{ marginTop: 40 }}>
            <div>
              Do you have an account? <Link to="/">Sign In</Link>
            </div>
            <Button
              name="signinbutton"
              id="id_signinbutton"
              onClick={signup}
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
    width: 400,
    height: 700,
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
