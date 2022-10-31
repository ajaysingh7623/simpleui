import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import React ,{useState} from 'react';
function Personalize() {
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
    fontWeight: "500"}}>Personalize Plan</div>
    <div style={{
    marginTop: "28px"}}>
<Button  style={{background:"green",
    color: "white"}} variant="outlined">Loose Fat</Button></div>
<div style={{
    marginTop: "28px"}}>
<Button style={{background:"green",
    color: "white"}}  variant="outlined">Build Muscle</Button></div>
<div style={{
    marginTop: "28px"}}>
<Button style={{background:"green",
    color: "white"}}  variant="outlined">Gain Weight</Button></div>
   



 
</div>
      </div>
    </div>
  );
}

export default Personalize;
