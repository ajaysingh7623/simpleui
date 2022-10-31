import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import React ,{useState} from 'react';
function SignUp() {
    const [male,setMale]=useState("");
    const [status,setStatus]=useState("");
    const [email,setEmail]=useState("");
    const [name,setName]=useState("");


   const onChangeValue=(event) =>{
        setMale(event.target.value);
      }
      const onChangeValues=(event) =>{
        setStatus(event.target.value);
      }
      const onSubmit=() =>{
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.match(mailformat))
{
alert("Valid email address!");
}
else
{
alert("You have entered an invalid email address!");
}
 if(!name  || !male ||!email ) {
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
    <div style={{marginTop:"11px"}}>  <label>Name</label>         <TextField
          label="Name"
          size="small"
          style={{background:"white"}}
          value={name}
          onChange={    (e)=>setName(e.target.value)
        }
          
        />
</div>
<div style={{marginTop:"11px"}}>  <label>Email</label>     &nbsp;    <TextField
          label="Email"
          size="small"
          style={{background:"white"}}
          value={email}
          onChange={    (e)=>setEmail(e.target.value)
          }
          
        />
</div>
<div style={{marginTop:"11px",marginLeft:"-107px"}}>  <label>Gender</label>   &nbsp;   
<span onChange={onChangeValue}>
<input type="radio" name="size" value="male"                checked={male === "male"}
/> male
  <input type="radio" name="size" value="female"              checked={male === "female"}
 /> female
  </span>
</div>


<div style={{marginBottom: "33px",
    marginTop: "28px"}}>
<Button onClick={onSubmit} variant="outlined">Submit</Button></div>
      
 
</div>
      </div>
    </div>
  );
}

export default SignUp;
