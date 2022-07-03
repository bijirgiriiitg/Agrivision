import React from 'react'
import PopularCourses from './PopularCourses'
import styled from 'styled-components'
function CourseContent() {
    return (
        <CourseContentWrapper>
            <MainDiv/>
                <PopularCourses trending name="Gate" />
                <PopularCourses name="ICAR" />
        </CourseContentWrapper>
    )
}

const CourseContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const MainDiv = styled.div`
    background: #C4C4C4;
    height: 256px;
    margin-left: 16px;
    margin-right: 32px;
    margin-top: 20px;

`



export default CourseContent
