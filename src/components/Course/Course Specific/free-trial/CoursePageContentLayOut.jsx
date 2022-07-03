import React, { useState, useEffect } from "react";
import ChapterCard from "../free-trial/ChapterCard";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useWindowDimensions from "../../../Util/useWindowDimensions";

const ContentlayOut = ({ items,name, courseId, progress }) => {
  const [progressData, setProgressData] = useState(null);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (progress) {
      progress.chapterWiseProgress.forEach((data) => {
        let tempObj = {};
        tempObj[data.chapterId] = {
          completedSubtopics: data.completedSubtopics,
          totalSubtopics: data.totalSubtopics,
        };
        setProgressData(tempObj);
      });
    }
  },[progress]);

  return (
    items && (
      <div
        style={width>900?{
          display: "flex",
          width: "80vw",
          float: "left",
          flexWrap: "nowrap",
          flexDirection: "column",
          overflow: "scroll",
          padding: "20px",
        }:{
          display: "flex",
          width: "100vw",
          float: "left",
          flexWrap: "nowrap",
          flexDirection: "column",
          overflow: "scroll",
          padding: "20px",
        }}
      >
        {items.chapters.map((chapter) => {
          let url = "/free-trial/course/" + courseId + "/" + chapter._id;
          return (
            chapter.isFreeTrial? 
            <>
            <ViewLink key={chapter._id} to={{pathname: url,state: {courseId: courseId,chapterId: chapter._id}}}>
            <ChapterCard
              key={chapter._id}
              chapter={chapter}
              progress={progress ? progressData[chapter._id] : null}
            />
            </ViewLink>
            </>
            :
            <div style={{opacity: "50%"}}>
              <ChapterCard
              key={chapter._id}
              chapter={chapter}
              progress={progress ? progressData[chapter._id] : null}
            />
            </div>
          );
        })}
      </div>
    )
  );
};

const ViewLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: green;
  }
`;





export default ContentlayOut;