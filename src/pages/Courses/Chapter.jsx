import Layout from "../../components/Course/Chapter Specific/ChapterPageLayout";
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
            const cId = props.match.params.id1?props.match.params.id1:0
            if(json.success){
              if(json.data.courses.filter((ele)=>ele._id===cId)){
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
    }, [props.match.params.id1])
    

  return (
    <>
    {bought===2?<><Layout courseId={props.match.params.id1} chapterId={props.match.params.id2}/></>
          :bought===3?<Redirect to={`/payment?cId=${props.match.params.id1}`} />:<Loader></Loader>}
    
    </>
  );
}

export default Learning;
