import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Home() {
    let history = useHistory();

    const signUpForm=()=>{
    history.push("/signup")
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
        <div style={{marginTop:"68px"}}>
          <Button style={{    background: "lightblue",
    color:"black",
   
    padding: "4px 77px",
    textAlign: "center"}}variant="outlined">Login</Button>
        </div>
        <div style={{marginTop:"43px"}}>OR</div>
        <div style={{marginTop:"34px",marginBottom:"94px"}}>         
 <a href="/signup"><Button variant="outlined" style={{background: "lightblue",
    color:"black"}} >Create New Account</Button>
    </a>
</div>
</div>
      </div>
    </div>
  );
}

export default Home;
