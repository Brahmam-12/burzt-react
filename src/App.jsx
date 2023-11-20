import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import Navbar from "./components/navbar";
import Home from "./components/home";
import OtherStudents from "./components/OtherStudents";
import { studentsContext } from "./providers/StudentsContextProvider";

const App = () => {
  const { token } = useContext(studentsContext)
  return <>
    <Navbar/>
      <Routes>
        {
          token ? <>
                    <Route path="/signin" element={<SignIn/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/other-students" element={<OtherStudents/>}/>
                    <Route path="/" element={<Navigate to='/signin'/>}/>
                  </>
                :<>
                  <Route path="/signin" element={<SignIn/>}/>
                  <Route path="/signup" element={<SignUp/>}/>
                  <Route path="/" element={<Navigate to='/signin'/>}/>
                  <Route path="*" element={<Navigate to='/signin'/>}/>
                </>
        }    
      </Routes>
  </>
}

export default App;
