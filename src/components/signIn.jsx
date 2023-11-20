import { useContext, useState } from "react";
import { studentsContext } from "../providers/StudentsContextProvider";
import { Link } from 'react-router-dom';
import '../App.css';

const SignIn = () =>{
    const { signIn } = useContext(studentsContext)
    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");

    const changeInputUsername = (e) => {
        setUsername(e.target.value)
    };

    const changeInputPassword = (e) => {
        setpassword(e.target.value)
    };

    const clickSignInButton = () => {
        signIn(username, password)
    };

    return <>
        <div className="signin-container">
            <div className="signin">
                <input type="text" placeholder="Enter Username" onChange={changeInputUsername} />
                <input type="text" placeholder="Enter Password" onChange={changeInputPassword} />
                <button className="signin-btn" onClick={clickSignInButton}>Sign In</button>
                <Link to = '/signup'>New user? Sign Up</Link>
            </div>
        </div>
    </>
}

export default SignIn;
