import {useState} from "react"
import NavBar from "./NavBar"
import {getAuth,signInWithEmailAndPassword} from "firebase/auth"
import {useNavigate} from "react-router-dom"
import {useEffect} from "react"
function Login()
{
const nav=useNavigate()
useEffect(()=>{
	const un=localStorage.getItem("un")
	if(un!=null)
		nav("/home")
},[])
const[un,setUn]=useState("");
const[pw,setPw]=useState("");
const[ans,setAns]=useState("");

const hUn=(event)=>{setUn(event.target.value)}
const hPw=(event)=>{setPw(event.target.value)}

const check=(event)=>{
	event.preventDefault();
	const auth=getAuth()
	signInWithEmailAndPassword(auth,un,pw)
	.then(res=>{
		localStorage.setItem("un",un)
		nav("/")
	})
	.catch(err=>console.log(err))
}
return(
<>
<center>
<NavBar/>
<h1> Login </h1>
<form onSubmit={check}>
<input type="email" placeholder="enter email id" onChange={hUn} required/>
<br/><br/>
<input type="password" placeholder="enter password" onChange={hPw} min_length="8" required/>
<br/><br/>
<input type="submit" value="Login"/>
</form>
<h1>{ans}</h1>
</center>
</>
)
}
export default Login;