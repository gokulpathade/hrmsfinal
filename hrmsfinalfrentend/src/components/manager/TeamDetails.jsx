import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import config from '../slices/config';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const columns = [
  { field: 'id', headerName: 'ID', width: 70, headerClassName: 'custom-header' },
  { field: 'Name', headerName: 'First name', headerClassName: 'custom-header' },
  { field: 'Last_Name', headerName: 'Last name' , headerClassName: 'custom-header' },
  { field: 'Email', headerName: 'Email',  headerClassName: 'custom-header' },
  { field: 'Contact', headerName: 'Last name', headerClassName: 'custom-header' },
  { field: 'City', headerName: 'Last name',  headerClassName: 'custom-header' },

];

export default function TeamDetails() {
  const USER_ID = sessionStorage.getItem('userId');
  const [registration, setRegistration] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getuserdetails(USER_ID);
  }, [USER_ID]);

  const getuserdetails = (USER_ID) => {
    axios
      .get(config.serverURL + `/use/manager/${USER_ID}`, {
        headers: { token: sessionStorage['token'] },
      })
      .then((response) => {
        const result = response.data;

        if (result['status'] === 'success') {
          const managerTeamUsers = result['data'];
          setRegistration(managerTeamUsers.map((user) => ({ ...user, id: user.Rid }))); // Add 'id' property based on 'Rid'
        } else {
          toast.error(result['error']);
        }

        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };



  return (
    <div style={{ height: 400, width: '100%',   }}>
      <h1>Team Details </h1>
      {!loading ? (
        <DataGrid
          rows={registration}
          columns={columns}
          pageSize={5}
          // checkboxSelection
        />
      ) : (
        <p>Loading...</p>
      )}


      <style></style>
    </div>
  );
}
