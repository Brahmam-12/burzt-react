import { useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom"

const studentsContext = createContext({
    signUp: () => { },
    signIn: () => { },
    token: "",
    setToken: () => { },
    getCurrentUser: ()=> { },
    getOtherStudents:()=>{ },
    otherStudents:[],
    setOtherStudents:()=>{ }
});

const StudentsContextProvider = ({children}) =>{

    const navigate = useNavigate();
    const [token, setToken] = useState(localStorage.getItem('authorization'));
    const [currentUser, setCurrentUser] = useState("");
    const [otherStudents, setOtherStudents] = useState([]);

    const signUp = async(username, password) => {

        const url = 'https://burzt-express.onrender.com/students/signup';
        const response = await fetch(url, {
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({
                username:username,
                password:password
            })
        });
        const body = await response.json();
        console.log(body)
        if(body.message === 'user created'){
            navigate('/signin')
            
        }else{
            alert(body.errorMessage)  
        }
    };

    const signIn = async(username, password) => {
        const url = 'https://burzt-express.onrender.com/students/signin';
        const response = await fetch(url,{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({
                username:username,
                password:password
            })
        });
        const body = await response.json();
        if(body.message == "sign in successful"){
            const token = response.headers.get('authorization');
            console.log(token)
            localStorage.setItem('authorization',token);
            setToken(token)
            navigate('/home')
        }
        else{
            alert(body.error)
        }
        console.log(body)
    }

    const getCurrentUser = async() => {
        const url = 'https://burzt-express.onrender.com/students/user';
        const response = await fetch(url, {
            method:"GET",
            headers:{
                'Content-Type':"application/json",
                authorization: token
            },
        })
        const data = await response.json();
        setCurrentUser(data.username)
        console.log(data)
    }

    const getOtherStudents = async()=>{
        const url = 'https://burzt-express.onrender.com/students/others';
        const response = await fetch(url,{
            method:"GET",
            headers:{
                'Content-Type':'application/json',
                authorization:token
            }
        })
        const data = await response.json();
        setOtherStudents(data)
    }

    return <>
        <studentsContext.Provider value = {{signUp, signIn, token, setToken, getCurrentUser, currentUser, setCurrentUser, getOtherStudents, otherStudents,setOtherStudents}}>
            {children}
        </studentsContext.Provider>
    </>
}

export {StudentsContextProvider, studentsContext};
