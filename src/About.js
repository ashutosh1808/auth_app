import NavBar from "./NavBar"
import {useEffect} from "react"
import {useNavigate} from "react-router-dom"
function About()
{
const nav=useNavigate();

useEffect(()=>{
	const un=localStorage.getItem("un")
	if(un===null)
		nav("/login")
},[])
return(
<>
<center>
<NavBar/>
<h1>About</h1>
</center>
</>
)
}
export default About;