import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import React ,{useState} from 'react';
function Welcome() {
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
    fontWeight: "500"}}>Welcome to EveryFit</div>
    <div style={{
    marginTop: "28px"}}>
        <a href="/tracking">
<Button  style={{background:"green",
    color: "white"}} variant="outlined">Select Tracking</Button>
    </a></div>
<div style={{
    marginTop: "28px"}}>
                <a href="/personalize">

<Button style={{background:"green",
    color: "white"}}  variant="outlined">Personalize Plan</Button></a></div>
<div style={{
    marginTop: "28px"}}>
                <a href="/healthy">

<Button style={{background:"green",
    color: "white"}}  variant="outlined">Find Healthy Recipe</Button>
    </a></div>
   


<div style={{marginBottom: "33px",
    marginTop: "28px"}}>
                <a href="/exercise">

<Button style={{background:"green",
    color: "white"}}  variant="outlined">Find Exercise Videos</Button>
    </a></div>
      
 
</div>
      </div>
    </div>
  );
}

export default Welcome;
