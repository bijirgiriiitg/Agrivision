import { Layout, Left } from "../components/Login/Common";
import Carouselitem from "../components/Login/Carouselitem";
import LoginComp from "../components/Login/LoginComp";
import SignUpComp from "../components/Login/SignUpComp";
import ForgotComp from "../components/Login/ForgotComp";
import { useState } from "react";
import { Slide,ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const notify = (type, message) => {
    toast[type](message, {
      position: "top-right",
      autoClose: 8000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition:Slide,
    });
  };

  const dismissAll = () => {
    toast.dismiss();
  };

  const [num, setNum] = useState(0);
  return (
    <>
      <ToastContainer />
      <Layout>
        <Left>
          <Carouselitem />
        </Left>
        {num === 0 ? (
          <LoginComp setNum={setNum} notify={notify} />
        ) : (num===1?<SignUpComp setNum={setNum} notify={notify} dismiss={dismissAll} />:
          <ForgotComp
          notify={notify} setNum={setNum}/>
        )}
      </Layout>
    </>
  );
};

export default Login;
