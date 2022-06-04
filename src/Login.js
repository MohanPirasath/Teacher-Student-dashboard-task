import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from "react-router-dom";
import Fab from '@mui/material/Fab';

export function Login({ setuser ,setids }) {

  const navigate = useNavigate();

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


  const [temuser, settemuser] = useState();

 
  return (
    <div className='login'>
      <div>
        <h1>WElCOME</h1>
        <div><TextField id="outlined-basic" label="Log-In" onChange={(event) => { settemuser(event.target.value); }} sx={{ minWidth: "350px" }} variant="outlined" /></div>
        <div><TextField id="outlined-basic" label="Password" sx={{ minWidth: "350px", marginTop: "30px" }} variant="outlined" /></div>
        <div className='checkbox'><Checkbox {...label} /> Remember Me</div>
        <Fab color="primary" variant="extended" onClick={() => {
            const user1={
              id:100,
              name:temuser
            }
            
           fetch(`https://627e2f98b75a25d3f3b31113.mockapi.io/Username/1`,{method:"PUT",body:JSON.stringify(user1),
           headers:{
             "Content-type":"application/json"
           }
 
         })
         .then(()=>navigate("/Dashboard"));
         setids("1")

         
            // fetch (`https://627e2f98b75a25d3f3b31113.mockapi.io/Username/1`).then((data)=>data.json()).then((data)=>setuser(data))
         
            
          // setuser(temuser);
          // navigate("/Dashboard");
        }} sx={{ minWidth: "350px", marginTop: "30px", marginBottom: "25px" }}>LOG-IN</Fab>

        <hr></hr>
        <div>
          <Fab color="primary" variant="extended" onClick={() => navigate("/Sign")}
            sx={{ minWidth: "350px", marginTop: "30px" }}>Sign-Up</Fab>
        </div>
        <div><Button variant="outlined"
          onClick={() => navigate("/Sign")}
          sx={{ minWidth: "350px", marginTop: "30px" }}>Log-In with Google</Button></div>
        <div><Button variant="outlined"
          onClick={() => navigate("/Sign")}
          sx={{ minWidth: "350px", marginTop: "30px" }}>Log-In with Facebook</Button></div>


      </div>
    </div>
  );
}
