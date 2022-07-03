import Layout from "../../components/Academics/TopColleges";
import Navbar from "../../components/global/Navbar";
import Footer from "../../components/global/Footer";

function Learning(props) {
  return (
    <>
      <Navbar />
      <Layout domain={props.match.params.domain} />
      <Footer />
    </>
  );
}

export default Learning;
