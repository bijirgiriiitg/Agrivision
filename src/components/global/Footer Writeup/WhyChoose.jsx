import React,{useEffect} from 'react'
import Navbar from "../Navbar"
import Footer from "../Footer"
import styled from "styled-components";

const WhyChoose = () => {
  useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Navbar/>
            <Container>
            <H1> Why choose us? </H1>
             <H3> 
             AgriVision4U aspires to give its users and subscribers the finest digital learning resources 
             backed by qualified teachers and experts. Here we provide quality knowledge on agriculture 
             and its allied sectors around the country and globe digitally which can be accessed anytime 
             and anywhere with just a click. It is the sole platform that gives all information and knowledge 
             regarding exams, jobs, internships, career counselling, global agriculture, news and many more 
             insights about Agriculture and allied sectors. It is basically a platform that holds true to its 
             tagline- Agriculture Under Single Roof!!You can choose us because every person in AgriVision4U 
             understands that agriculture is not just a means of livelihood but a way of living life in India 
             and so we swear to take things further for the betterment of the farming community and people associated with it.
            </H3>
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
export default WhyChoose
