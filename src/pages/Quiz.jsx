import Layout from "../components/Quiz/Layout";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import { Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Redirect } from "react-router";
import { baseURL } from "../Apis";

function Quiz(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoader2, setIsLoader2] = useState(true);
  // const [profileCompleted, setprofileCompleted] = useState(false)

  const [data, setData] = useState(null);
  const [subscribed, setSubscribed] = useState(false);
  const [Attempted, setAttempted] = useState(false);

  const notify = (type, message) => {
    toast[type](message, {
      position: "top-right",
      autoClose: 8000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Slide,
    });
  };
  const start = Date.now()

  useEffect(() => {
    setIsLoader2(true);
    fetch(`${baseURL}/user/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if(result.success){
            if(!result.data.institute || !result.data.category || !result.data.address || !result.data.contactNumber){
              // setprofileCompleted(true);
              // notify("info","Please complete your profile details")
            }
            setIsLoader2(false);
          }
        },
        (error) => {
          setIsLoader2(false);
          setError(error);
        }
      );
  }, [])

  useEffect(() => {
    fetch(`${baseURL}/quiz/${props.match.params.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result.data);
          if(result.isAttempted){
            setAttempted(true)
          }
          if (result.isSubscribed) {
            setSubscribed(true);
          } else {
            setSubscribed(false);
            notify("error", result.message);
          }
          if(result.data.showAnalysisTime>Date.now() && result.data.quizType===0 && result.isAttempted){
            notify("info","Results will be declared soon")
          }
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
    // eslint-disable-next-line
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded || isLoader2) {
    return <Loader />;
  // } else if(profileCompleted){
  //   return <Redirect to={"/profile"} />
  } else {
    if (!subscribed) {
      return (
        <>
          {/* <div>You Have not registered for this Quiz</div> */}
          <Redirect to={"/"} />
        </>
      );
    } else if(Attempted && data.quizType===1){
      return (
      <>
          {/* <div>You Have not registered for this Quiz</div> */}
          <Redirect to={`/analysis/${props.match.params.id}`} />
        </>
      );
    }

    else if(data.showAnalysisTime<Date.now() && data.quizType===0 && Attempted){
      return (
        <>
            {/* <div>You Have not registered for this Quiz</div> */}
            <Redirect to={`/analysis/${props.match.params.id}`} />
          </>
        );
    }
    else if(data.showAnalysisTime>Date.now() && data.quizType===0 && Attempted){
      return (
        <>
            {/* <div>You Have not registered for this Quiz</div> */}
            <Redirect to={`/`} />
          </>
        );
    }
    else {
      return (
        <>
          <Layout
            data={data}
            error={error}
            isLoaded={isLoaded}
            quizId={props.match.params.id}
            start={start}
          />
        </>
      );
    }
  }
}

export default Quiz;
