import logo from './logo.svg';
import './App.css';
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import About from "./About";
import ChangePassword from "./ChangePassword"
import ForgotPassword from "./ForgotPassword"
import {app} from "./FirebaseConfig"
import {BrowserRouter,Routes,Route,Link,Navigate} from "react-router-dom"
function App() {
  return (
    <div className="App">
  		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/login" element={<Login/>}/>
				<Route path="/signup" element={<SignUp/>}/>
				<Route path="/about" element={<About/>}/>
				<Route path="/cp" element={<ChangePassword/>}/>
				<Route path="/fp" element={<ForgotPassword/>}/>
				<Route path="*" element={<Navigate to="/"/>}/>
			</Routes>
		</BrowserRouter>
    </div>
  );
}

export default App;
