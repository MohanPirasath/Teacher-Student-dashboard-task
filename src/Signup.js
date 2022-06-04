import * as React from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Fab from "@mui/material/Fab";

export function Signup() {
  const navigate = useNavigate();
  return (
    <div className="sign">
      <div className="Signup">
        <h3>Signup</h3>
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="First Name"
          sx={{ minWidth: "350px", marginBottom: "30px" }}
          variant="outlined" />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="Last Name"
          sx={{ minWidth: "350px", marginBottom: "30px" }}
          variant="outlined" />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="Roll Number"
          sx={{ minWidth: "350px", marginBottom: "30px" }}
          variant="outlined" />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="Phone Number"
          sx={{ minWidth: "350px", marginBottom: "30px" }}
          variant="outlined" />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="Address"
          sx={{ minWidth: "350px", marginBottom: "30px" }}
          variant="outlined" />
      </div>
      <div className="radiobtn">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <div className="radio">
              <div>
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Male" />
              </div>
              <div>
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Female" />
              </div>
              <div>
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other" />
              </div>
            </div>
          </RadioGroup>
        </FormControl>
      </div>
      <div>
        <div className="radiobtn">
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Category</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Teacher"
              name="radio-buttons-group"
            >
              <div className="radio">
                <div>
                  <FormControlLabel
                    value="Student"
                    control={<Radio />}
                    label="Student" />
                </div>
                <div>
                  <FormControlLabel
                    value="Teacher"
                    control={<Radio />}
                    label="Teacher" />
                </div>
              </div>
            </RadioGroup>
          </FormControl>
        </div>
        <div>
          <Fab
            color="primary"
            variant="extended"
            sx={{ minWidth: "350px", marginTop: "30px", marginBottom: "25px" }}
            onClick={() => {
              navigate("/");
            }}
          >
            SignUp
          </Fab>
        </div>
      </div>
    </div>
  );
}
