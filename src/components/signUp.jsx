import { useContext, useState } from "react";
import { studentsContext } from "../providers/StudentsContextProvider";
import { Link } from 'react-router-dom';
import '../App.css';

const SignUp = () =>{
    const { signUp } = useContext(studentsContext)
    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");

    const changeInputUsername = (e) => {
        setUsername(e.target.value)
    };

    const changeInputPassword = (e) => {
        setpassword(e.target.value)
    };

    const clickSignUpButton = () => {
        signUp(username, password)
    };

    return <>
        <div className="signup-container">
            <div className="signup">
                <input type="text" placeholder="Enter Username" onChange={changeInputUsername} />
                <input type="text" placeholder="Enter Password" onChange={changeInputPassword} />
                <button className="signup-btn" onClick={clickSignUpButton}>Sign Up</button>
                <Link to="/signin">Existing user? Sign In</Link>
            </div>
        </div>
    </>
}

export default SignUp;
