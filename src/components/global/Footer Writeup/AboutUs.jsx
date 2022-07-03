import React,{useEffect} from 'react'
import Navbar from "../Navbar"
import Footer from "../Footer"
import styled from "styled-components";

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Navbar/>
            <Container>
            <H1> About Us </H1>
             <H3> 
            AgriVision4U is an initiative with the sole aim of furnishing the dorsum to Indian 
            agriculture by bridging the gap between the agricultural service sectors and farmers. 
            AgriVision4U is an agriculture and allied Ed-Tech platform offering precise and effective 
            learning programs for students competing for GATE, ICAR-NET, etc. The AgriVision4U team has 
            conscientiously vowed to work for the upliftment of Indian agriculture by working in tandem 
            with the dynamic youth. It focuses on providing intricate knowledge about the varied disciplines 
            related to agricultural studies, their importance, scope, and their respective career opportunities. 
            The team wishes and has a longing from the Indian community to have only one selfish motto which 
            is to deliver their utmost towards the farmers and aspirants by providing them better knowledge and information.</H3>
        </Container>
        <Footer/>
        
        </div>
    )
}
const Container = styled.div`
    width: 70%;
    max-width: 90rem;
    margin:3.5rem auto;
`;

const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  border-bottom: #000000 1px solid;
  margin: 1.5rem 0;
`;
const H3 = styled.div`
  width:95%;
  line-height: 1.75;
  font-size: 1.25rem;
  padding: 1rem;
  padding-top: 0;
`;

export default AboutUs
