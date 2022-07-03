import Navbar from "../components/global/Navbar";
import HeroSection from '../components/PaymentPg/HeroSection';
import { ToastContainer, toast } from "react-toastify";
import { useState,useEffect } from "react";
import Error from "./Error";
import "react-toastify/dist/ReactToastify.css";


function Payment(props) {
  const notify = (type, message) => {
    toast[type](message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const [refral, setrefral] = useState(null)
  const [cId, setcId] = useState(null)
  const [tId, settId] = useState(null)
  const [pId, setpId] = useState(null)
  const [active, setActive] = useState(1)
  const [error,setError] = useState(0);
  
  const resetRefral = ()=>{
    setrefral(null);
  };
  useEffect( () => {
    const url = window.location.search
    const urlParams = new URLSearchParams(url);
    const param = urlParams.get('cId')
    const param2 = urlParams.get('tId')
    const param3 = urlParams.get('pId')
    const coupon = urlParams.get('coupon')
    const from = urlParams.get('from')
    if(from && coupon){
      setrefral({
        coupenId:coupon,
        generator:from,
        case: 1
      })
    }
    if(param){
        setcId(param);
        setActive(2);
      }
    if(param2){
      settId(param2);
      setActive(3);
    }
    if(param3){
      setpId(param3);
      setActive(4);
    }
    if(!param && !param2 && !param3){
      setError(1);
    }
  }, [])
  
    return error?<Error/>:(
      <>
      {cId&&<>
       <ToastContainer />
        <Navbar />
        <HeroSection active={active} courseId={cId} notify={notify} refral={refral} resetRefral={resetRefral}/></>
      }
      {tId&&<>
       <ToastContainer />
        <Navbar />
        <HeroSection active={active} testSeriesId={tId} notify={notify} refral={refral} resetRefral={resetRefral} /></>
      }
      {pId&&<>
       <ToastContainer />
        <Navbar />
        <HeroSection active={active} packageId={pId} notify={notify} refral={refral} resetRefral={resetRefral} /></>
      }
      </>
    );
  }
  
  export default Payment;
  