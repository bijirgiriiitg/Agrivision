import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/global/Navbar";
import {Button} from "../components/global/Global"
import device from "../components/Util/MediaQuery";

const Error = () => {
    return (
        <div>
            <Navbar />
            <Container>
                <HeroImage src="/images/error.png" alt="Agrivision 4U" />
                {/* <HeroImage src="/images/err404.jpg" alt="Agrivision 4U" /> */}
                <H1> There's NOTHING here... </H1>
                <H3>...maybe the page you’re looking for is not found or never existed</H3>
                <Link to="/"><StyledButton>Back to Home <img src="/images/ArrowRight.svg" alt="Agrivision 4U" /></StyledButton></Link>
            </Container>
        </div>
    )
}

const Container = styled.div`
    width: 95%;
    text-align: center;
    max-width: 90rem;
    margin: auto;
`;
const HeroImage = styled.img`
  width: 40%;
  min-height: 15rem;
  ${device.tablet}{
    width:85%;
    height: 10%;
    margin-bottom:1.5rem;
  }
`;

const H1 = styled.h1`
  margin-top: 1.5rem;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.2rem;
`;
const H3 = styled.h3`
  margin-top: 1.5rem;
  font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1rem;
`;

const StyledButton = styled(Button)`
  background: linear-gradient(
    86.94deg,
    #1bbc9b 0%,
    #1bbc9b 0.01%,
    #16a086 100%
  );
  color: white;
  
  margin: auto;
  margin-top:50px;
`;

export default Error
