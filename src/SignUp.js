import {useState} from "react"
import NavBar from "./NavBar"
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"
import {useNavigate} from "react-router-dom"
function SignUp()
{
const[un,setUn]=useState("");
const[pw1,setPw1]=useState("");
const[pw2,setPw2]=useState("");
const[ans,setAns]=useState("");
const nav=useNavigate()

const hUn=(event)=>{setUn(event.target.value)}
const hPw1=(event)=>{setPw1(event.target.value)}
const hPw2=(event)=>{setPw2(event.target.value)}

const save=(event)=>{
	event.preventDefault();
	if(pw1===pw2)
	{
		const auth=getAuth();
		createUserWithEmailAndPassword(auth,un,pw1)
		.then(res=>nav("/login"))
		.catch(err=>console.log(err))
	}else
	{
		setAns("Passwords did not match")
	}
}
return(
<>
<center>
<NavBar/>
<h1>Sign Up</h1>
<form onSubmit={save}>
<input type="email" placeholder="enter email id" onChange={hUn} required/>
<br/><br/>
<input type="password" placeholder="enter password" onChange={hPw1} min_length="8" required/>
<br/><br/>
<input type="password" placeholder="confirm password" onChange={hPw2} min_length="8" required/>
<br/><br/>
<input type="submit" value="Sign Up"/>
</form>
<h1>{ans}</h1>
</center>
</>
)
}
export default SignUp;