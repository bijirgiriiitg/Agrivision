import React, { useState } from "react";
import styled from "styled-components";
import device from "../Util/MediaQuery";

const JobCard = (props) => {
  const [modal, setModal] = useState(false);
  const handleModal = (e) => {
    modal ? setModal(false) : setModal(true);
  };
  const handleBack = (e) => {
    setModal(false);
  };
  return (
    <>
      <Container onClick={handleModal}>
        <div className="detail-1">
          <div className="avatar">
            <img
              src="https://farmersfreshco.com/wp-content/uploads/2016/06/placeholder-round.png"
              alt="AVATAR"
            />
          </div>
          <div className="detail">
            <h4>{props.title}</h4>
            <p>{props.organisation.slice(0, 18)}</p>
            <p>
              Stipend : <b>{props.stipend} Rs</b>
            </p>
          </div>
        </div>
        <div className="detail-2">
          <h4>
            {props.type && props.type === 1
              ? "Internship"
              : props.type === 2
              ? "Scholarschip"
              : "Job"}
          </h4>
          <p>Location: {props.location.slice(0, 18)}..</p>
          <p>
            Duration : <b>{props.duration} Months</b>
          </p>
        </div>
        {modal && (
          <Modal>
            <div className="content">
              <p>
                <b> Job Description:</b>
              </p>
              <p>{props.description}</p>
            </div>
            <div className="button">
              <button>
                {/* eslint-disable-next-line */}
                <a href={props.link} target="_blank" rel="noreferrer">
                  Apply
                </a>
              </button>

              <button onClick={handleBack} className="backbtn">
                Back
              </button>
            </div>
          </Modal>
        )}
      </Container>
    </>
  );
};
const Modal = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 95px;
  align-items: baseline;
  grid-area: 2 / 1 / 3 / 3;

  ${device.tablet} {
    grid-area: 3 / 1 / 4 / 2;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    p {
      margin-top: 5px;
      margin-bottom: 0;
      text-align: justify;
      ${device.mobileL} {
        width: 200px;
        text-align: initial;
        font-size: 13px;
      }
    }
  }
  .button {
    display: flex;
    gap: 10px;
    margin-top: 10px;
    ${device.mobileM} {
      flex-direction: column;
    }
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    padding: 8px 24px;
    width: 96px;
    height: 40px;
    background: linear-gradient(
      86.94deg,
      #1bbc9b 0%,
      #1bbc9b 0.01%,
      #16a086 100%
    );
    border-radius: 9px;
    border: 3px solid #1bbc9b;

    a {
      color: black;
    }
    :hover {
      background: #1bbc9b;
    }
  }
  .backbtn {
    background: #e8f3ff;
  }
`;

const Container = styled.div`
  max-width: 750px;
  height: auto;
  margin-left: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  margin-top: 15px;
  box-shadow: 0px 3px 12px 0px #0000001f;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 20px;
  padding: 10px;

  h4 {
    ${device.tablet} {
      margin-bottom: 0;
    }
  }
  .detail-1 {
    display: flex;
    width: 400px;
  }
  .avatar {
    width: 100px;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  img {
    width: 64px;
    height: 64px;
    object-fit: contain;
  }
  .detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: first baseline;

    h4 {
      font-size: 20px;
      font-weight: 400;
      ${device.mobileM} {
        font-size: 15px;
      }
    }

    p {
      font-size: 16px;
      font-weight: 400;
      color: #4a4a4a;
      ${device.tablet} {
        margin-bottom: 0;
      }
      ${device.mobileL} {
        font-size: 12px;
      }
    }
  }
  .mt-4 {
    margin-top: 20px;
    ${device.tablet} {
      margin-top: 0 !important;
    }
  }
  .detail-2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 280px;
    align-items: end;
    h4 {
      color: #1bbc9b;
      font-size: 20px;
      font-weight: 600;
      ${device.mobileM} {
        font-size: 15px;
      }
    }
    p {
      font-size: 16px;
      font-weight: 400;
      color: #4a4a4a;
      ${device.tablet} {
        margin-bottom: 0;
      }
      ${device.mobileL} {
        font-size: 12px;
      }
    }
  }
  ${device.laptop} {
    width: 650px;
  }
  ${device.tablet} {
    grid-auto-flow: column;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    height: auto;
    width: 90vw;
    margin: 15px;
    .avatar {
      margin-top: 36px;
    }
    .detail-2 {
      margin-left: 100px;
      align-items: first baseline;
    }
  }
`;

export default JobCard;
