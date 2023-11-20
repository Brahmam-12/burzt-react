import { useContext } from "react";
import { studentsContext } from "../providers/StudentsContextProvider";
import '../App.css';
import { useEffect } from "react";
import Student from "./student";

const OtherStudents = () => {
    const {otherStudents, getOtherStudents} = useContext(studentsContext);
    useEffect(()=>{
        if(!otherStudents.length){
            getOtherStudents()
        }
    },[otherStudents.length])
    
    return <>
        <h3>Other Students</h3>
        {
            otherStudents.length ? otherStudents.map((student)=>{
                                        return <Student key={student.userId} username={student.username}/>
                                    })
                                : <p>Loading...</p> 
        }
    </>
}

export default OtherStudents;
