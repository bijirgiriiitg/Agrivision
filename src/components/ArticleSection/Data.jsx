import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Row, Col } from "reactstrap";
import "./article.css";
function Data(props) {
  useEffect(() => {
    props.setDisplayNext(true);
    props.setDisplayBack(true);
    props.setEnableNext(true);
    props.setEnableBack(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [proffesion, setproffesion] = useState("proffesion_1")

  const handleProffesion = (e) =>{
    if(e.target.value==="proffesion_1"){
      props.setprofes(0)
      props.setArticleType(250)
    }
    else if(e.target.value==="proffesion_2") {
      props.setprofes(1)
      props.setArticleType(450)
    }
    else if(e.target.value==="proffesion_3") {
      props.setprofes(2)
      props.setArticleType(500)
    }
    setproffesion(e.target.value)
  }

  const handleChange = (e) => {
    if(e.target.value==="annual"){
      props.setSubscriptionType("annual");
      if(proffesion==="proffesion_1") props.setArticleType(250)
      else if(proffesion==="proffesion_2") props.setArticleType(450)
      else if(proffesion==="proffesion_3") props.setArticleType(500)
    }
    else if(e.target.value==="single"){
      props.setSubscriptionType("single");
      if(proffesion==="proffesion_1") props.setArticleType(100)
      else if(proffesion==="proffesion_2") props.setArticleType(125)
      else if(proffesion==="proffesion_3") props.setArticleType(150)
    }
    props.setUserData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <DataContainer>
      <div>
        <h4 className="submission-head">Enter Your Details</h4>{" "}
      </div>
      <div className="details_box">
        <Row className="row_3">
          <Col sm="6">
            <InputField>
              <label htmlFor="text">First Name</label>
              <input
                type="text"
                name="firstN"
                id="title"
                value={props.userData.firstN}
                onChange={handleChange}
              />
            </InputField>
            <div className="errorMsg">{props.errors.firstN}</div>
          </Col>
          <Col sm="6">
            <InputField>
              <label htmlFor="text">Last Name</label>
              <input
                type="text"
                name="lastN"
                id="title"
                value={props.userData.lastN}
                onChange={handleChange}
              />
            </InputField>
            <div className="errorMsg">{props.errors.lastN}</div>
          </Col>
        </Row>
        <Row className="row_3">
          <Col sm="6">
            <InputField>
              <label htmlFor="text">Institute Name</label>
              <input
                type="text"
                name="institute"
                id="title"
                value={props.userData.institute}
                onChange={handleChange}
              />
            </InputField>
            <div className="errorMsg">{props.errors.institute}</div>
          </Col>
          <Col sm="6">
            <InputField>
              <label htmlFor="text">Department</label>
              <input
                type="text"
                name="department"
                id="title"
                value={props.userData.department}
                onChange={handleChange}
              />
            </InputField>
            <div className="errorMsg">{props.errors.department}</div>
          </Col>
        </Row>
        <Row className="row_3">
          <Col sm="6">
            <InputField>
              <label htmlFor="text">Designation</label>
              <input
                type="text"
                name="designation"
                id="title"
                value={props.userData.designation}
                onChange={handleChange}
              />
            </InputField>
            <div className="errorMsg">{props.errors.designation}</div>
          </Col>
          <Col sm="6">
            <InputField>
              <label htmlFor="text">City</label>
              <input
                type="text"
                name="city"
                id="title"
                value={props.userData.city}
                onChange={handleChange}
              />
            </InputField>
            <div className="errorMsg">{props.errors.city}</div>
          </Col>
        </Row>
        <Row className="row_3">
          <Col sm="6">
            <InputField>
              <label htmlFor="text">Email</label>
              <input
                type="text"
                name="email"
                id="title"
                value={props.userData.email}
                onChange={handleChange}
              />
            </InputField>
            <div className="errorMsg">{props.errors.email}</div>
          </Col>
          <Col sm="6">
            <InputField>
              <label htmlFor="text">Mobile No.</label>
              <input
                type="text"
                name="mobile"
                id="title"
                value={props.userData.mobile}
                onChange={handleChange}
              />
            </InputField>
            <div className="errorMsg">{props.errors.mobile}</div>
          </Col>
        </Row>
        <Row className="row_4">
          <Col sm="6">
            <InputField>
              <label htmlFor="dropdown">Profession</label>
              <div>
                <select className="select2" name="dropdown" id="dropdown3" onChange={handleProffesion}>
                  <option value="proffesion_1">
                    M.Sc / M.Tech / M.Phill / Project JRF
                  </option>
                  <option value="proffesion_2">
                    Ph.D. Scholars / Project SRF / Research Associates / Teaching
                    Associates
                  </option>
                  <option value="proffesion_3">
                    Scientists / Asst Prof. / Professors / SMS / AO and other officers.
                  </option>
                </select>
              </div>
            </InputField>
          </Col>
          <Col sm="6">
            <InputField>
              <label htmlFor="dropdown">Subscription Type</label>
              <div>
                <select
                  className="select2"
                  name="dropdown"
                  id="dropdown3"
                  disabled={props.articlesRemaining > 0}
                  onChange={handleChange}
                >
                  <option value="annual">Annual Subscription</option>
                  <option value="single">Single Article</option>
                </select>
              </div>
            </InputField>
          </Col>
        </Row>
      </div>
    </DataContainer>
  );
}
export default Data;

export const DataContainer = styled.div`
  .errorMsg {
    color: #cc0000;
    margin-bottom: 12px;
    padding-left: 15%;
  }
`;
export const InputField = styled.div`
  width: 100%;
  padding-left: 15%;

  label {
    font-size: 16px;
    font-weight: 600;
  }
  input {
    width: 100%;
    font-size: 16px;
    border-radius: 8px;
    border: 1px solid black;
    outline: none;
    padding: 2%;
    margin-top: 4%;
  }
`;

export const InputField2 = styled.div`
  width: 100%;
  margin: 24px 0px;

  label {
    font-size: 16px;
    font-weight: 600;
  }
  input {
    width: 100%;
    font-size: 16px;
    border-radius: 8px;
    border: 2px solid lightgrey;
    outline: none;
    padding: 2%;
    margin-top: 4%;
  }
`;
