import NavBar from "./NavBar"
import {useLocation,Navigate,useNavigate} from "react-router-dom"
import {useEffect,useState} from "react"
import {getAuth,signOut} from "firebase/auth"
function Home()
{
const[user,setUser]=useState("")

const nav=useNavigate()
const loc=useLocation();

const lo=(event)=>{
	event.preventDefault();
	const auth=getAuth();
	localStorage.clear();
	signOut(auth)
	.then(res=>nav("/login"))
	.catch(err=>console.log(err))
}

useEffect(()=>{
	let u=localStorage.getItem("un")
	if(u===null)
		nav("/login");
	else
		setUser(u)
},[])
return(
<>
<center>
<NavBar/>
<h1>Home</h1>
<h1>{user}</h1>
<br/><br/>
<form onSubmit={lo}>
<input type="submit" value="Log Out"/>
</form>
</center>
</>
)
}
export default Home;