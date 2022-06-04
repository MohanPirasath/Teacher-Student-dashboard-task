import "./App.css";

import * as React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  Navigate,
  useParams,
} from "react-router-dom";

import FormControlLabel from "@mui/material/FormControlLabel";

import { Login } from "./Login";

import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";

import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";

import { Signup } from "./Signup";
import { ResponsiveAppBar } from "./pages";

import { useEffect } from "react";

function App() {
  const [notes, setnote] = useState("No Messages To Display");
  const [fromdate, setfromdate] = useState();
  const [todate, settodate] = useState(0);
  const [reason, setreason] = useState();

  const [abs, setabs] = useState([
    // {
    //   date:"2022-7-8",
    //   Stud:"ragul"
    // },
  ]);
  const [att, setatt] = useState([
    // {
    //   date:"2022-3-5",
    //   Stud:"vijay"
    // },
  ]);
  const [task, settask] = useState([
    {
      date: "2000-5-7",
      Name: "EVS",
    },
    {
      date: "2013-7-9",
      Name: "social",
    },
  ]);

  const [user, setuser] = useState();
  const [ids, setids] = useState();

  useEffect(() => {
    fetch(`https://627e2f98b75a25d3f3b31113.mockapi.io/Username/1`)
      .then((data) => data.json())
      .then((name) => {
        setuser(name.name);
        setids("3");
      });
  }, [ids]);

  return (
    <div className="App">
      {user ? (
        <Routes>
          <Route
            path="/"
            element={<Login setuser={setuser} setids={setids} />}
          />
          {/* <Route path="/dashboard" element={<ResponsiveAppBar user={user}/>} /> */}
          <Route
            path="/DAshbord/Profile"
            element={[
              <ResponsiveAppBar user={user} />,
              <Profile user={user} />,
            ]}
          />
          <Route path="/Sign" element={<Signup />} />
          <Route
            path="/NotesBoard"
            element={[
              <ResponsiveAppBar user={user} />,
              <NotesBoard setnote={setnote} notes={notes} />,
            ]}
          />
          <Route
            path="/Dashbord/Logout"
            element={<Navigate replace to="/" />}
          />
          <Route
            path="/Dashbord/Dashboard"
            element={<Navigate replace to="/Dashboard" />}
          />
          <Route
            path="/LeaveLetter"
            element={[
              <ResponsiveAppBar user={user} />,
              <LeaveLetter
                user={user}
                setfromdate={setfromdate}
                settodate={settodate}
                setreason={setreason}
                fromdate={fromdate}
                todate={todate}
                reason={reason}
              />,
            ]}
          />
          <Route
            path="/Task"
            element={[
              <ResponsiveAppBar user={user} />,
              <Task task={task} settask={settask} />,
            ]}
          />
          <Route
            path="/Attendance"
            element={[
              <ResponsiveAppBar user={user} />,
              <Attendance
                abs={abs}
                att={att}
                setabs={setabs}
                setatt={setatt}
              />,
            ]}
          />
          <Route
            path="/Dashboard"
            element={[
              <ResponsiveAppBar user={user} />,
              <Dashboard
                notes={notes}
                user={user}
                task={task}
                abs={abs}
                att={att}
              />,
            ]}
          />
          <Route path="/Edittask/:id" element={[<EditTask />]} />

          <Route
            path="/Compliants"
            element={[<ResponsiveAppBar user={user} />, <Compliants />]}
          />
        </Routes>
      ) : (
        ""
      )}
      {/* <Footer/> */}
    </div>
  );
}

function Dashboard({ notes, task, att, abs,user }) {
  const [user1, setuser] = useState();

  useEffect(() => {
    fetch(`https://627e2f98b75a25d3f3b31113.mockapi.io/Username/100`)
      .then((data) => data.json())
      .then((name) => {
        setuser(name.name);
      });
  }, []);

  return (
    <div>
      <div className="makecenter">
      <h1>
        Student view Dashbord
      </h1>

      </div>
      <div>
        <DashTask />
      </div>
      <div>
        <Notes notes={notes} user={user} />
      </div>
      <div>
        <Displayattendance att={att} abs={abs} />
      </div>
    </div>
  );
}

// function Frtpage(){
//   return(
//     <div>

//     </div>
//   )
// }

function Task({ task, settask }) {
  const navigate = useNavigate();

  const [Tasktask, settasktask] = useState([]);
  const [temtask, settemtask] = useState();
  const [temdate, settemdate] = useState();

  useEffect(() => {
    fetch(`https://627e2f98b75a25d3f3b31113.mockapi.io/task`)
      .then((data) => data.json())

      .then((data1) => {
        settasktask(data1);
      });
  }, [Tasktask]);
  return (
    <div>
      <div>
        <Button
          variant="contained"
          sx={{ margin: "10px" }}
          onClick={() => {
            navigate("/Dashboard");
          }}
        >
          Back
        </Button>
      </div>
      <div className="makecenter">
        <h2>ADD Task</h2>
        <h6>Curd opertion is working here</h6>
        <div className="makecenter1">
          <TextField
            id="outlined-basic"
            label=""
            type="date"
            variant="outlined"
            onChangeCapture={(e) => {
              settemdate(e.target.value);
            }}
          />

          <TextField
            id="outlined-basic"
            label="Task"
            variant="outlined"
            onChange={(e) => {
              settemtask(e.target.value);
            }}
          />
          <Button
            onClick={() => {
              const bb = {
                date: temdate,
                Task: temtask,
              };
              fetch(`https://627e2f98b75a25d3f3b31113.mockapi.io/task`, {
                method: "POST",
                body: JSON.stringify(bb),
                headers: {
                  "Content-type": "application/json",
                },
              }).then(() => navigate("/dashboard"));

              //  settask([...task,bb])
            }}
          >
            SUBMIT
          </Button>
          <hr></hr>
        </div>
      </div>
      <div>
        <div className="makecenter">
          <h4>Assinged task</h4>
        </div>
        {Tasktask.map((e) => {
          return <Tasktask1 id={e.id} name={e.Task} date={e.date} />;
        })}
      </div>
    </div>
  );
}

function Tasktask1({ name, date, id }) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="displayTask">
        {name && date && id ? (
          <div className="makecenter">
            <p>
              The {name} Task as assigned on {date}.Complete it as soon as
              possible
            </p>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              type="file"
            />
            <Button
              variant="contained"
              onClick={() => {
                fetch(
                  `https://627e2f98b75a25d3f3b31113.mockapi.io/task/${id}`,
                  { method: "DELETE" }
                );
                navigate("/dashboard");
              }}
            >
              Delete task
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                navigate(`/Edittask/${id}`);
              }}
            >
              Edit task
            </Button>
          </div>
        ) : (
          "Loading"
        )}
      </div>
    </div>
  );
}

function EditTask() {
  const { id } = useParams();
  const [temedit, setedit] = useState(null);

  useEffect(() => {
    fetch(
      `https://627e2f98b75a25d3f3b31113.mockapi.io/task/${id}`

      // ,{method:"PUT",body:JSON.stringify()}
    )
      .then((data) => data.json())
      .then((data) => setedit(data));
  }, [id]);
  return (
    <div className="makecenter">
      <h2>Edit Task{id}</h2>
      {temedit ? (
        <Editform temedit={temedit.date} tasvalue={temedit.Task} id={temedit.id} />
      ) : (
        "loading"
      )}
    </div>
  );
}

function Editform({ temedit, tasvalue,id }) {
  const navigate = useNavigate();

  const [datevalue, setdatevalue] = useState([temedit]);
  const [taskvalue, settaskvalue] = useState([tasvalue]);
  return (
    <div>
      <div className="textFiled">
        <TextField
          id="outlined-basic"
          label=""
          type="date"
          value={datevalue}
          variant="outlined"
          onChangeCapture={(e) => {
            setdatevalue(e.target.value);
          }}
        />
        {/* {datevalue}
        {taskvalue} */}

        <div className="textFiled">
          <TextField
            id="outlined-basic"
            label="Task"
            variant="outlined"
            value={taskvalue}
            onChange={(e) => {
              settaskvalue(e.target.value);
            }}
          />
        </div>

        <div className="textFiled">
          <Button variant="contained"
          onClick={
            ()=>{

              // onClick={() => {
              //   const bb = {
              //     date: temdate,
              //     Task: temtask,
              //   };
              //   fetch(`https://627e2f98b75a25d3f3b31113.mockapi.io/task`, {
              //     method: "POST",
              //     body: JSON.stringify(bb),
              //     headers: {
              //       "Content-type": "application/json",
              //     },
              //   }).then(() => navigate("/dashboard"));
  
              //   //  settask([...task,bb])
              // }}

              const update={
                date:datevalue,
                Task:taskvalue
              };
              fetch(`https://627e2f98b75a25d3f3b31113.mockapi.io/task/${id}`,{method:"PUT",
            body:JSON.stringify(update),
            headers:{
              "Content-type":"application/json"
            }
            }).then(()=>navigate("/dashboard"))

            }
          }
          >Update</Button>
        </div>
      </div>
    </div>
  );
}

function Taskbar({ name, date }) {
  const [able, setable] = useState(false);
  return (
    <div>
      <div className="displayTask">
        <p>
          {able ? <h5>Submited</h5> : <h4>Not submited</h4>}
          The {name} Task as assigned on {date}.Complete it as soon as possible{" "}
        </p>
        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          type="file"
        />
        <Button
          variant="contained"
          onClick={() => {
            setable(true);
          }}
        >
          SUBMIT
        </Button>
      </div>
    </div>
  );
}

function DashTask() {
  const [realtask, setrealtask] = useState([]);
  // const [temrun, setrun] = useState([ ]);
  useEffect(() => {
    fetch(`https://627e2f98b75a25d3f3b31113.mockapi.io/task`)
      .then((data) => data.json())

      .then((data1) => {
        setrealtask(data1);
      });
  }, [realtask]);
  return (
    <div>
      <Card
        sx={{
          maxWidth: 645,
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: "30px",
        }}
      >
        {/* <CardActionArea> */}

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Task
          </Typography>
          <h6>curd opertion is working in Task pages</h6>
          {/* <Typography>
            {task.map((e) => {
              return <Taskbar name={e.Name} date={e.date} />;
            })}
          </Typography> */}

          <Typography>
            {realtask.map((e) => {
              return <Taskbar name={e.Task} date={e.date} />;
            })}
          </Typography>
        </CardContent>
        {/* </CardActionArea> */}
      </Card>
    </div>
  );
}

function Attendance({ setatt, setabs, att, abs }) {
  const navigate = useNavigate();
  const [date, setdate] = useState();
  const stu = [
    { name: "Ajith kumar", id: 9 },
    { name: "Ajay Kumar", id: 0 },
    { name: "Arjun", id: 7 },
    { name: "Mustak", id: 5 },
    { name: "Manoj Kumar", id: 4 },
    { name: "Mohan", id: 2 },
    { name: "Ram", id: 3 },
  ];
  return (
    <div>
      <div>
      <Button
          variant="contained"
          sx={{ margin: "10px" }}
          onClick={() => {
            navigate("/Dashboard");
          }}
        >
          Back
        </Button>
      </div>
      <div className="textaline">
        <h1>Attendance Form</h1>
      </div>
      <div className="textaline">
        <TextField
          id="filled-basic"
          type="date"
          label=""
          variant="filled"
          onChangeCapture={(e) => {
            setdate(e.target.value);
          }}
        />
      </div>

      {stu.map((e) => {
        return (
          <div>
            <Attendancebar
              name={e.name}
              setabs={setabs}
              date={date}
              setatt={setatt}
              att={att}
              abs={abs}
            />
          </div>
        );
      })}
      <div className="textaline">
        <Button
          variant="contained"
          sx={{ maxWidth: "auto", margin: "30px" }}
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          SUBMIT
        </Button>
      </div>
    </div>
  );
}

function Attendancebar({ name, setatt, setabs, date, att, abs }) {
  const [able, setable] = useState(false);
  return (
    <div>
      <Card
        sx={{
          maxWidth: 645,
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: "30px",
        }}
      >
        {/* <CardActionArea> */}

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <div className="textaline">{name}</div>
          </Typography>
          <Typography>
            <div className="att_btn">
              <Button
                variant="contained"
                disabled={able}
                onClick={() => {
                  const tematt = {
                    date: { date },
                    Stud: { name },
                  };
                  setatt([...att, tematt]);
                  setable(true);
                }}
              >
                Present
              </Button>
              <Button
                variant="contained"
                color="error"
                disabled={able}
                onClick={() => {
                  const temabs = {
                    date: { date },
                    Stud: { name },
                  };
                  setabs([...abs, temabs]);
                  setable(true);
                }}
              >
                Absent
              </Button>
            </div>
          </Typography>
        </CardContent>
        {/* </CardActionArea> */}
      </Card>

      {/* <div className="att_btn">
      <div>{name}</div>
      <div>
       <Button variant="contained" disabled={able} onClick={()=>{
         setable(true)
       }}>Present</Button>
       <Button variant="contained" color="error" disabled={able} 
       onClick={()=>{
        setable(true)
      }}>Absent</Button>
    </div>
    </div> */}
    </div>
  );
}
function Displayattendance({ att, abs }) {
  return (
    <div>
      <div>
        <Card
          sx={{
            maxWidth: 645,
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: "30px",
          }}
        >
          {/* <CardActionArea> */}

          <CardContent>
            <div className="disatt">
              <div className="left1">
                <Typography gutterBottom variant="h5" component="div">
                  Present:{att.length}
                  {/* <div>
            
             {att.map((e)=>{
               return(
                   <Disatt name={e.Stud} />
               )
             })}
          </div> */}
                </Typography>
              </div>
              <div className="right1">
                <Typography variant="h5">
                  Absent:{abs.length}
                  {/* <div>
             {abs.map((e)=>{
               return(
                   <Disatt name={e.Stud} />
               )
             })}
          </div> */}
                </Typography>
              </div>
            </div>
          </CardContent>
          {/* </CardActionArea> */}
        </Card>
      </div>
      {/* Attendance : 0 */}
    </div>
  );
}
// function Disatt({name}){
//   return(
//     <div>

//       <h6>{name}</h6>
//     </div>
//   )
// }

function Profile({ user }) {
  const navigate = useNavigate();

  return (
    <div className="profile">
      <div className="signup">
        <div>
          <Avatar
            className="profilpic"
            sx={{ width: "160px", height: "160px" }}
            alt={user}
            src="/static/images/avatar/2.jpg"
          />
        </div>

        <h1>{user}</h1>
        <div>
          <Button onClick={() => navigate("/Dashboard")}>Back</Button>
        </div>
      </div>
    </div>
  );
}

function NotesBoard({ setnote, notes }) {
  const navigate = useNavigate();
  const [temnotes, settemnotes] = useState();

  return (
    <div className="notesboard">
      <div>
      <Button
          variant="contained"
          sx={{ margin: "10px" }}
          onClick={() => {
            navigate("/Dashboard");
          }}
        >
          Back
        </Button>
      </div>
      <h2>notesboard</h2>
      <p>
        your Message will display in the Student notesboard , your Messages
        should not contain any irrespected word and plz write the Message only
        which is necessary
      </p>
      <div>
        <TextField
          id="outlined-basic"
          label="Message"
          onChange={(event) => {
            settemnotes(event.target.value);
          }}
          sx={{ width: "1100px", height: "100px" }}
          variant="outlined"
        />
      </div>
      <div>
        <Button
          variant="contained"
          onClick={() => {
            // const bb =
            //   {
            //     notes:temnotes
            //   }

            setnote(temnotes);
            navigate("/Dashboard");
          }}
        >
          SUBMIT
        </Button>
      </div>
    </div>
  );
}

function Notes({ notes, user }) {
  const aa = notes;
  return (
    <Card
      sx={{
        maxWidth: 645,
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: "30px",
      }}
    >
      {/* <CardActionArea> */}

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          NotesBoard
        </Typography>
        {aa === "No Messages To Display" ? (
          <Typography>No Messages To Display</Typography>
        ) : (
          <Typography variant="body2" color="text.secondary">
            {notes} by {user}
          </Typography>
        )}
      </CardContent>
      {/* </CardActionArea> */}
    </Card>
  );
}

function LeaveLetter({
  setfromdate,
  settodate,
  setreason,
  fromdate,
  todate,
  user,
  reason,
}) {
  const navigate = useNavigate();

  const [date1, setdate1] = useState();
  const [date2, setdate2] = useState();
  const [reason1, setreason1] = useState();
  return (
    <div className="LeaveLetter">
      <div>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Go to Dashboard
        </Button>
      </div>
      <div>
        <Letter
          fromdate={fromdate}
          todate={todate}
          user={user}
          reason={reason}
        />
      </div>
      <h2>LeaveLetter Form</h2>
      <div className="leavetext">
        <TextField
          id="standard-basic"
          label="staff Name"
          sx={{ width: "600px" }}
          variant="standard"
        />
      </div>
      <div className="leavetext">
        <TextField
          id="standard-basic"
          label="Staff ID"
          sx={{ width: "600px" }}
          variant="standard"
        />
      </div>
      <div className="leavetext">
        <TextField
          id="standard-basic"
          label="Reason"
          onChange={(e) => {
            setreason1(e.target.value);
          }}
          sx={{ width: "600px" }}
          variant="standard"
        />
      </div>
      <div className="leavedate leavetext">
        <div>
          <p>From</p>
        </div>
        <div>
          <TextField
            label=""
            type="date"
            onChangeCapture={(event) => {
              setdate1(event.target.value);
              console.log(setdate1);
            }}
          />
        </div>
        <div>To</div>
        <div>
          <TextField
            label=""
            type="date"
            onChangeCapture={(e) => {
              setdate2(e.target.value);
              console.log(setdate2);
            }}
          />
        </div>
      </div>
      <div className="leavetext">
        <Button
          variant="contained"
          onClick={() => {
            setfromdate(date1);
            settodate(date2);
            setreason(reason1);
            // navigate("/Dashboard")
          }}
        >
          SUBMIT
        </Button>
      </div>
    </div>
  );
}

function Letter({ fromdate, todate, user, reason }) {
  const aa = todate;
  return (
    <div>
      <Card
        sx={{
          maxWidth: 645,
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: "30px",
        }}
      >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Leave Applications
            </Typography>
            {aa === 0 ? (
              <Typography>No leave is Applied</Typography>
            ) : (
              <Typography variant="body2" color="text.secondary">
                I am {user}and i need leave from{fromdate} to {todate} because,
                {reason}
              </Typography>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

function Compliants() {
  const navigate = useNavigate();

  return (
    <div>
      <div>
      <Button
          variant="contained"
          sx={{ margin: "10px" }}
          onClick={() => {
            navigate("/Dashboard");
          }}
        >
          Back
        </Button>
      </div>
      <div className="heading">
        <h2>Compliant Form</h2>
      </div>
      <div className="complainlabel">
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="Check here If the compliant is Confidential and your Complaint will not be displayed in any public flatform"
          />
        </FormGroup>
      </div>
      <div className="complaininbox">
        <TextField
          id="standard-basic"
          label="Staff Name"
          sx={{ width: "600px" }}
          variant="standard"
        />
      </div>
      <div className="complaininbox">
        <TextField
          id="standard-basic"
          label="Staff Id"
          sx={{ width: "600px" }}
          variant="standard"
        />
      </div>
      <div className="complaininbox">
        <TextField
          id="standard-basic"
          label="what is your complaint"
          sx={{ width: "600px" }}
          variant="standard"
        />
      </div>
      <div className="complaininbox">
        <Button
          variant="contained"
          onClick={() => {
            navigate("/Dashboard");
          }}
        >
          SUBMIT
        </Button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <p>copyrights</p>
    </div>
  );
}

export default App;
