import {useState,useEffect} from "react"
import NavBar from "./NavBar"
import {useNavigate} from "react-router-dom"
import {getAuth,sendPasswordResetEmail} from "firebase/auth"
function ForgotPassword()
{
const nav=useNavigate()
const[un,setUn]=useState("")
const[ans,setAns]=useState("")

useEffect(()=>{
	const un=localStorage.getItem("un")
	if(un!=null)
		nav("/home")
},[])

const hUn=(event)=>{setUn(event.target.value)}
const save=(event)=>{
	event.preventDefault();
	const auth=getAuth();
	sendPasswordResetEmail(auth,un)
	.then(res=>nav("/login"))
	.catch(err=>console.log(err))
}
return(
<>
<center>
<NavBar/>
<h1>Forgot Password</h1>
<form onSubmit={save}>
<input type="email" placeholder="enter email id" onChange={hUn} required/>
<br/><br/>
<input type="submit" value="Reset Password"/>
</form>
</center>
</>
)
}
export default ForgotPassword;