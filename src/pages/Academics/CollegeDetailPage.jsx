import Layout from "../../components/Academics/CollegeDetail";
import Navbar from "../../components/global/Navbar";
import Footer from "../../components/global/Footer";

function Learning(props) {
  return (
    <>
      <Navbar />
      <Layout collegeId={props.match.params.id} />
      <Footer />
    </>
  );
}

export default Learning;
