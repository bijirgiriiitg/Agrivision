import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import Hero from "../components/PaymentPgTwo/Hero";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function OrderCheckpoint() {
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

  
    return (
      <>
      <ToastContainer />
        <Navbar />
        <Hero notify = {notify}/>
        <Footer />
      </>
    );
  }
  
  export default OrderCheckpoint;