import { Layout, Left } from "../components/Login/Common";
import Carouselitem from "../components/Login/Carouselitem";
import ResetComp from "../components/Login/ResetComp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Reset = () => {
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
    <div>
      <ToastContainer />
      <Layout>
        <Left>
          <Carouselitem />
        </Left>
          <ResetComp  notify={notify} />
      </Layout>
    </div>
  );
};

export default Reset;
