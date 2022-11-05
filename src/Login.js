import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import React ,{useState} from 'react';
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";


function Login() {
  let history = useHistory();

    const [male,setMale]=useState("");
    const [status,setStatus]=useState("");
    const [email,setEmail]=useState("harsh@gmail.com");
    const [name,setName]=useState("harsh");
    const [login,setLogin] =useState(false);


   const onChangeValue=(event) =>{
        setMale(event.target.value);
      }
      const handleEmail=(event) =>{
        if(event.target.value==email){
            alert("correct email") 
        }
        else{
            // alert("invalid email");
        }
      }
      const handlePassword=(event) =>{
        if(event.target.value==name){
            alert("correct password") 
        }
        else{
            // alert("invalid password");
        }
      }
      const onSubmit=() =>{
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.match(mailformat))
{
  setLogin(true);

}
else
{
alert("You have entered an invalid email address!");
}
 if(!name  || !email ) {
            alert("plz fill all data");

        }
         

      }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
        top: "30px",
      }}
    >
      <div
        style={{
          border: "1px solid orange",
          background: "orange",
          width: "400px",
        }}
      ><div style={{textAlign:"center"}}>
        <div style={{color:"darkblue",fontSize: "22px",
    fontWeight: "500"}}>Sign Up</div>
    <div style={{marginTop:"11px"}}>  <label>Email</label>         <TextField
          label="Name"
          size="small"
          style={{background:"white"}}
        //   value={email}
          onChange={handleEmail}
          
        />
</div>
<div style={{marginTop:"11px"}}>  <label>password</label>     &nbsp;    <TextField
          label="Email"
          size="small"
          style={{background:"white"}}
        //   value={name}
          onChange={handlePassword}
          
        />
</div>



<div style={{marginBottom: "33px",
    marginTop: "28px"}}>

{login==true?<a href="/welcome"><Button onClick={onSubmit} variant="outlined">Submit</Button></a>:<Button onClick={onSubmit} variant="outlined">Submit</Button>}</div>
       
 
</div>
      </div>
    </div>
  );
}

export default Login;
