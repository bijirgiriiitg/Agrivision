import Layout from "../../components/Course/Course Specific/free-trial/CoursePageLayout";
import {Redirect} from "react-router-dom" 
import { useEffect } from "react";
import { useState } from "react";
import Loader from "../Loader";
import { baseURL } from "../../Apis";

function Learning(props) {
    const [bought, setbought] = useState(1)
  
    useEffect(() => {
      const fun =  async (e) => {
        const response = await fetch(`${baseURL}/user/profile`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
              },
            });
            const json = await response.json();
            const cId = props.match.params.id?props.match.params.id:0
            if(json.success){
              if(json.data.courses.indexOf(cId)!==-1){
                setbought(2)
              }
              else{
                setbought(3)
              }
            }
            else{
              alert("Something went wrong")
            }
        }
        fun()
    }, [props.match.params.id])
    

  return (
    <>
     
    {bought===3?<><Layout courseId={props.match.params.id}/></>
          :bought===2?<Redirect to={`/course/${props.match.params.id}`} />:<Loader></Loader>}
    
    </>
  );
}

export default Learning;
