import { useState, useEffect } from "react";
import styled from "styled-components";
import Guidelines from "./Guidelines";
import Main from "./Main";
import Payment from "./Payment";
import Upload from "./Upload";
import Data from "./Data";
import Navbar from "../global/Navbar";
import Footer from "../global/Footer";
import { Button } from "../global/Global";
import Loader from "../../pages/Loader";
import { baseURL } from "../../Apis";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
//functionality demo
const sections = ["guidelines", "data", "upload", "payment"];

const Layout = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [enableNext, setEnableNext] = useState(true);
  const [enableBack, setEnableBack] = useState(true);
  const [displayNext, setDisplayNext] = useState(true);
  const [displayBack, setDisplayBack] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [agreeCheck, setAgreeCheck] = useState(false);
  const [userObject, setUserObject] = useState(null);
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState({});
  const [isLoaded, setIsLoaded] = useState(true);
  const [ArticleType, setArticleType] = useState(250);
  const [ArticleData, setArticleData] = useState(null);
  const [profes, setprofes] = useState(0)
  const [subscriptionType, setSubscriptionType] = useState("annual");

  const [uploadData, setUploadData] = useState({
    articleTitle: "",
    articleFile: null,
    fileType: "docx",
  });

  const [userData, setUserData] = useState({
    firstN: "",
    lastN: "",
    institute: "",
    department: "",
    designation: "",
    city: "",
    mobile: "",
    email: "",
  });

  let history = useHistory();

  useEffect(() => {
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
          setIsLoaded(true);
          if (result.success) {
            setUserObject(result.data);
            setUserData({
              firstN: result.data.name[0],
              lastN: result.data.name[1],
              institute: result.data.institute,
              department: result.data.department,
              designation: result.data.designation,
              city: result.data.address,
              mobile: result.data.contactNumber,
              email: result.data.email,
            });
          }
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
    // eslint-disable-next-line
  }, []);

  const validateUploadForm = () => {
    let fields = uploadData;
    let errors = {};
    let formIsValid = true;

    if (!fields["articleTitle"]) {
      formIsValid = false;
      errors["articleTitle"] = "*Please Enter an Article Title";
    }

    if (!fields["articleFile"]) {
      formIsValid = false;
      errors["articleFile"] = "*Please Upload your Article";
    }
    setErrors(errors);
    return formIsValid;
  };

  const validateDataForm = () => {
    let fields = userData;
    let errors = {};
    let formIsValid = true;

    if (!fields["firstN"]) {
      formIsValid = false;
      errors["firstN"] = "*Please Enter your first name";
    }

    if (!fields["lastN"]) {
      formIsValid = false;
      errors["lastN"] = "*Please Enter your last name";
    }

    if (!fields["institute"]) {
      formIsValid = false;
      errors["institute"] = "*Please Enter your Institute";
    }

    if (!fields["department"]) {
      formIsValid = false;
      errors["department"] = "*Please Enter your department";
    }

    if (!fields["designation"]) {
      formIsValid = false;
      errors["designation"] = "*Please Enter your designation";
    }

    if (!fields["city"]) {
      formIsValid = false;
      errors["city"] = "*Please Enter your city";
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Please Enter your email";
    }

    if (fields["email"] !== "") {
      //regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["mobile"]) {
      formIsValid = false;
      errors["mobile"] = "*Please Enter your number";
    }
    if (fields["mobile"] !== "") {
      if (!fields["mobile"].toString().match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["mobile"] = "*Please enter valid mobile no.";
      }
    }

    setErrors(errors);
    return formIsValid;
  };

  const handlePaymentResponse = (result) => {
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

    if (result.redirectToPayment) {
      setShowPayment(true);
      goNextSection();
    } else {
      notify("success", "Article Uploaded!");
      history.push("/");
    }
  };

  const nextSection = () => {
    if (activeSection === 0) {
      goNextSection();
    } else if (activeSection === 1) {
      if (validateDataForm()) {
        // setIsLoaded(false);
        goNextSection();
      }
    } else {
      if (validateUploadForm()) {
        setIsLoaded(false);

        const textFields = {
          institute: userData.institute,
          department: userData.department,
          designation: userData.designation,
          contactNo: userData.mobile,
          address: userData.city,
          heading: uploadData.articleTitle,
          linkedinProfile: "",
          subscriptionType
        };

        var fd = new FormData();
        
        if (uploadData.articleFile) {
          fd.append("article_file", uploadData.articleFile);
          for (let key in textFields) {
            fd.append(key, textFields[key]);
          }
        }
        fetch(`${baseURL}/article/articleSubmission`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: fd,
        })
          .then((res) => res.json())
          .then(
            (result) => {
              setArticleData(result.data)
              setIsLoaded(true);
              handlePaymentResponse(result);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          );
      }
    }
  };
  const goNextSection = () => {
    setActiveSection((prev) => {
      if (prev + 1 < sections.length) {
        return prev + 1;
      }
      return prev;
    });
  };

  const prevSection = () => {
    setActiveSection((prev) => {
      if (prev - 1 >= 0) {
        return prev - 1;
      }
      return prev;
    });
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Loader />;
  } else {
    return (
      <Wrapper>
        <Navbar />
        <Container>
          <Main activeSection={activeSection} showPayment={showPayment} />

          <Tabs>
            {sections[activeSection] === "guidelines" ? (
              <Guidelines
                setDisplayNext={setDisplayNext}
                setDisplayBack={setDisplayBack}
                setEnableNext={setEnableNext}
                setEnableBack={setEnableBack}
                agreeCheck={agreeCheck}
                setAgreeCheck={setAgreeCheck}
              />
            ) : null}
            {sections[activeSection] === "upload" ? (
              <Upload
                setDisplayNext={setDisplayNext}
                setDisplayBack={setDisplayBack}
                setEnableNext={setEnableNext}
                setEnableBack={setEnableBack}
                uploadData={uploadData}
                setUploadData={setUploadData}
                errors={errors}
              />
            ) : null}
            {sections[activeSection] === "data" ? (
              <Data
                setDisplayNext={setDisplayNext}
                setDisplayBack={setDisplayBack}
                setEnableNext={setEnableNext}
                setEnableBack={setEnableBack}
                userData={userData}
                setUserData={setUserData}
                errors={errors}
                setArticleType={setArticleType}
                setprofes={setprofes}
                articlesRemaining={userObject ? userObject.articlesRemaining : null}
                setSubscriptionType={setSubscriptionType}
              />
            ) : null}
            {sections[activeSection] === "payment" && showPayment ? (
              <Payment
                setDisplayNext={setDisplayNext}
                setDisplayBack={setDisplayBack}
                setEnableNext={setEnableNext}
                setEnableBack={setEnableBack}
                ArticleType={ArticleType}
                ArticleData = {ArticleData}
                profes={profes}
              />
            ) : null}
          </Tabs>
          <ButtonArray>
            {displayBack ? (
              <StyledButton1 onClick={prevSection} disabled={!enableBack}>
                Back
              </StyledButton1>
            ) : null}
            {displayNext ? (
              <StyledButton onClick={nextSection} disabled={!enableNext}>
                Next
              </StyledButton>
            ) : null}
          </ButtonArray>
        </Container>
        <Footer />
      </Wrapper>
    );
  }
};

const Container = styled.div`
  padding-bottom: 30%;
  width: 100%;
  // display: grid;
  // grid-template-columns: 2.5fr 1fr;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Tabs = styled.div`
  width: 100%;
  height: 100%;
`;

const ButtonArray = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledButton = styled(Button)`
  background: linear-gradient(86.94deg, #1bbc9b 0%, #1bbc9b 0.01%, #16a086 100%);
  color: white;
  width: 100px;
  margin: 10px;
  margin-top: 3rem;

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }
`;

const StyledButton1 = styled(Button)`
  background: #e8f3ff;
  border: 2px solid #1bbc9b;
  color: linear-gradient(86.94deg, #1bbc9b 0%, #1bbc9b 0.01%, #16a086 100%);
  width: 100px;
  margin: 10px;
  margin-top: 3rem;

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }
`;

export default Layout;
