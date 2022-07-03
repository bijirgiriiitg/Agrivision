import React, { useEffect, useState } from "react";
import "./article.css";
import styled from "styled-components";
import device from "../Util/MediaQuery";

const Guidelines = (props) => {
  const [activeSection, setActiveSection] = useState(0);
  const toggleAgreeCheck = () => {
    props.setAgreeCheck((prev) => !prev);
  };

  useEffect(() => {
    props.setDisplayNext(true);
    props.setDisplayBack(false);
    props.setEnableNext(false);
    props.setEnableBack(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (props.agreeCheck) {
      props.setEnableNext(true);
    } else {
      props.setEnableNext(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.agreeCheck]);

  const Guidelinesdata = [
    [
      "1. Article must be prepared in editable Micro Soft Word (saved in 1997-2003 document) format and should be sent to editor-in-chief@agrivision4u.com as an email attachment or through online submission for reviewing and suggested modification.",
      "2. Article should not be more that 2000 words. ",
      "3. Article must be informative, innovative and trending.",
      "4. Tables, figures and good quality photographs are always desirable. ",
      "5. Title should be short and informative of the content with 14 font size of bold Times New Roman.  ",
      "6. Complete addresses of all authors should be given below the title with 12 font size of times new roman and email of corresponding author must be given after the addressees with 11 font size of bold times new roman. ",
      "7. Units in metric system; full forms of all abbreviations used in table; source of data should be given in detail. ",
      "8. Units of measurement, symbols and standard abbreviations should conform to those recommended by the International Union of Biochemistry (IUB) and the International Union of Pure and Applied Chemistry (IUPAC). ",
      "9. Metric measurements are preferred, and dosages should be expressed entirely in metric units (SI units). In exceptional circumstances, others may be used, provided they are consistent. ",
      "10. Well - presented articles will be given priority.",
    ],
    [
      "• Title of Article .... Font size 14. ",
      "• Author(s) Name: ...... Font size 12. ",
      "• Author(s) Institution/University/State department Font size 11. ",
      "• Tables, figures and good quality photographs are always desirable. ",
      "• Corresponding author email ID ...... Font size 11. ",
      "• 1. Introduction ",
      "• Lines, figures, Illustrations and other resources to be reproduced from other publications must be properly credited / cited. ",
      "• 2. Heading ",
      "• 2.1 Sub-heading ",
      "• 2.2 ……… ",
      "• 2.3 ……… ",
      "• Conclusion ",
      "• Table(s), and Figure(s) ",
      "• References [(if required) can be added in articles]. ",
    ],
    [],
  ];
  return (
    <div>
      <h4 className="submission-head">Submission Guidelines</h4>
      <Toggler>
        <div className="header">
          <ul>
            <li
              className={activeSection === 0 ? "active" : ""}
              onClick={() => setActiveSection(0)}
            >
              Authors guidelines
            </li>
            <li
              className={activeSection === 1 ? "active" : ""}
              onClick={() => setActiveSection(1)}
            >
              Instructions
            </li>
            <li
              className={activeSection === 2 ? "active" : ""}
              onClick={() => setActiveSection(2)}
            >
              How we Charge
            </li>
          </ul>
        </div>
      </Toggler>
      <GuidelinesContainer>
        <Concept>
          {Guidelinesdata[activeSection].map((data, d_index) => (
            <div key={`guideline_${d_index}`}>
              <Description key={`desc_${d_index}`}>{data}</Description>
            </div>
          ))}
          {activeSection === 1 && (
            <>
              <h5 style={{ fontSize: "18px", marginTop: "1.7rem" }}>How to cite reference:</h5><hr/>
              <Description>
                Text citation by name followed by year of publication: Singh
                (2004); Tomar et al. (2004); (Joshi 1984; Jain and Reddy 1995;
                Saxena et al. 2012) Listing of references should be in
                alphabetical order.
                <br /> Hemantaranjan, A., Bhanu, A. N., Singh, M. N., Yadav, D.
                K., Patel, P. K., Singh, R., & Katiyar, D. (2014). Heat stress
                responses and thermotolerance. Adv. Plants Agric. Res, 1(3),
                1-10. <br /> Bhanu, A. N., Bhandari, H. R., Singh, M. N., &
                Srivastava, K. (2017). Introduction to phenomics and its
                application in physiological breeding. Advances in Plant
                Physiology (Vol. 17), 200. Hemantaranjan, A. (Ed.). (1998).
                Advances in plant physiology. Scientific Publ..
              </Description>
            </>
          )}
          {activeSection === 2 && (
            <>
              <h5 style={{ fontSize: "18px", marginTop: "1.7rem" }}>1. For single Article</h5><hr />
              <Description> • 100 INR – M.Sc. / M.Tech / M.Phill. / Project JRF</Description>
              <Description> • 125 INR – Ph.D. Scholars/ Project SRF / Research Associates /Teaching Associates</Description>
              <Description> • 150 INR - Scientists / Asst Prof. / Professors / SMS / AO andother officers</Description>

              <Description>
                In case articles with more than two authors and then a paymentof extra 50 INR per extra co-author is needed for that article.
              </Description>
              <h5 style={{ fontSize: "18px",marginTop: "1.7rem" }}>
                2. Annual Membership charge (4 free articles)
              </h5>
              <hr />
              <Description style={{ lineHeight: "20px" }}>
                An annual member can publish 4 articles in this e-magazine free
                of cost (Articles must satisfy the minimum quality requirement,
                plagiarism policy and must have all coauthor’s payment done).
              </Description>
              <Description> • 250 INR – M.Sc / M.Tech / M.Phill. / Project JRF.</Description>
              <Description> • 450 INR – Ph.D. Scholars/ Project SRF / Research Associates /Teaching Associates.</Description>
              <Description> • 500 INR - Scientists / Asst Prof. / Professors / SMS / AO andother officers.</Description>
              <Description> • Receipt, transaction details & membership form is mandatory to be sent to after payment (in 1-2 days).</Description>
              <Description>Members would get annual membership certificate</Description>
            </>
          )}
        </Concept>
        <Concept1>
          <form className="des_check">
            <input
              type="checkbox"
              checked={props.agreeCheck}
              onClick={toggleAgreeCheck}
              onChange={(e) => {}}
            />
            <label className="check">
              I have read all the Guidelines and I acknowledge that I have
              Completed all the Requirments
            </label>
          </form>
        </Concept1>
      </GuidelinesContainer>
    </div>
  );
};

const Toggler = styled.div`
  height: 100%;
  .header {
    margin: 20px auto;
    margin-left: 71px;
    ${device.tablet} {
      margin: 20px 0px;
    }

    ul {
      width: 50%;
      margin: 0px auto;
      display: flex;
      gap: 7rem;
      justify-content: flex-start;
      padding: 0;
      padding-bottom: 1px;
      ${device.laptop} {
        gap: 40px;
      }
      ${device.tablet} {
        gap: 5px;
        flex-direction: column;
        width: auto;
        margin: 0 30px;
      }
    }

    li {
      text-align:center;
      padding: 4px 6px;
      border-radius: 4px;
      cursor: pointer;
    }
    .active {
      background: linear-gradient(86.94deg, #1bbc9b 0%, #1bbc9b 0.01%, #16a086 100%);
    }
`;

const GuidelinesContainer = styled.div`
  width: 100%;
  overflow: auto;
  font-size: 3vh;
`;

const Concept = styled.div`
  @media (max-width: 600px) {
    width: 90%;
    padding-left: 10%;
    overflow-y: auto;
  }

  @media (min-width: 600px) and (max-width: 1100px) {
    width: 85%;
    padding-left: 20%;
    overflow-y: auto;
  }

  @media (min-width: 1100px) {
    width: 75%;
    padding-left: 29%;
    overflow-y: auto;
  }
`;
const Concept1 = styled.div`
  @media (max-width: 600px) {
    width: 90%;
    overflow-y: auto;
  }

  @media (min-width: 600px) and (max-width: 1100px) {
    width: 80%;
    padding-left: 0%;
    overflow-y: auto;
  }
  @media (min-width: 1100px) {
    width: 75%;
    padding-left: 11%;
    overflow-y: auto;
  }
`;

const Description = styled.div`
  width: 100%;
  padding: 1.5%;
  padding-left: 1.2%;
  font-size: 13px;
  font-weight: 500;
`;
export default Guidelines;
