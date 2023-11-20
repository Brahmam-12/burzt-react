import { useContext } from 'react';
import { studentsContext } from '../providers/StudentsContextProvider';
import '../App.css';
import { useEffect } from 'react';

const Home = () => {
    const {currentUser, getCurrentUser} = useContext(studentsContext);
    if(!currentUser){
        useEffect(()=>{
            getCurrentUser()
        },[currentUser])
    }
    return <>
        {currentUser ? <h3>Welcome, {currentUser}</h3> : <p>Loading.....</p> }
    </>
}

export default Home;
