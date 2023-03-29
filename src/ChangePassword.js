import NavBar from "./NavBar"
import {useNavigate} from "react-router-dom"
import {getAuth,updatePassword,onAuthStateChanged} from "firebase/auth"
import {useState,useEffect} from "react" 
function ChangePassword()
{
const nav=useNavigate()
const[pw1,setPw1]=useState("")
const[pw2,setPw2]=useState("")
const[ans,setAns]=useState("")

useEffect(()=>{
	const un=localStorage.getItem("un")
	if(un===null)
		nav("/login");
},[])
const hPw1=(event)=>{setPw1(event.target.value)}
const hPw2=(event)=>{setPw2(event.target.value)}

const save=(event)=>{
	event.preventDefault();
	if(pw1===pw2)
	{
		const auth=getAuth()
		onAuthStateChanged(auth,(user)=>{
			updatePassword(user,pw1)
			.then(res=>{
				localStorage.clear();
				nav("/login")
			})
			.catch(err=>console.log(err))
		})
	}else{
		setAns("Passwords did not match");
	}
}
return(
<>
<center>
<NavBar/>
<h1> Change Password </h1>
<form onSubmit={save}>
<input type="password" placeholder="enter password" min_length="8" onChange={hPw1} required/>
<br/><br/>
<input type="password" placeholder="confirm password" min_length="8" onChange={hPw2} required/>
<br/><br/>
<input type="submit" value="Change Password"/>
</form>
<h1>{ans}</h1>
</center>
</>
)
}
export default ChangePassword;