import React from 'react'
import Exam from './Exam'
import styled from 'styled-components'
import CourseCaraousel from '../Course/CourseCaraousel'
import useWindowDimensions from "../../components/Util/useWindowDimensions";
function Examspecific(props) {
    const { width } = useWindowDimensions();
    return (
        <>
        <CourseCaraousel query="testseries"/>
        <CourseContentWrapper style={width>700?{
            display:"flex",
            flexDirection:"column"
        } : {
            display:"block",
            marginLeft:"auto",
            marginRight:"auto",
            marginTop:"50px"
        }} >
                <Exam name={props.name}/>
        </CourseContentWrapper>
        </>
    )
}

const CourseContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`




export default Examspecific
