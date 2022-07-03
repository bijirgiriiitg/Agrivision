import Navbar from "../../../global/Navbar";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Loader from "../../../../pages/Loader";
import ReactPlayer from "react-player";
import { Button } from "../../../global/Global";
import { baseURL } from "../../../../Apis";
import Markdown from "../../../Util/Markdown";
import ChapterSideBar from"./ChapterSideBar";
import useWindowDimensions from "../../../Util/useWindowDimensions";

function Layout({ courseId, chapterId }) {
  const [active, setActive] = useState(1);
  const [items, setItems] = useState(null);
  const [SubItems, setSubItems] = useState(null);
  const [mark, setmark] = useState(null);
  const [subId, setsubId] = useState(null);
  const [name, setName] = useState(null);
  const [completed, setCompleted] = useState([]);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const fun = async (e) => {
      const response = await fetch(
        `${baseURL}/course/${courseId}?queryParam=1&chapterID=${chapterId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const json = await response.json();
      if (json.success) {
        json.data.chapter.topics.forEach(ele => {
          ele.subTopics.forEach(subele => {
            if(subele.isCompleted){
              setCompleted(prevState => [...prevState, subele._id] );
            }
          });
        });
        setItems(json.data.chapter.topics);
        setName(json.data.chapter.name);
      }
    };
    fun();
    // eslint-disable-next-line
  }, []);

  const handelSub = async (id) => {
    setActive(3);
    const response = await fetch(`${baseURL}/course/subtopics/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const json = await response.json();
    if (json.success) {
      fetch(`${json.data}`)
        .then((response) => {
          return response.text();
        })
        .then((text) => {
          setmark(text);
        });
      setSubItems(json);
      setActive(2);
      setsubId(id);
    } else {
      setActive(3);
    }
  };
  
  const handleMark = async () => {
    setActive(3);
    const response = await fetch(
      `${baseURL}/course/${courseId}/markcompleted`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ chapterId: chapterId, subTopicId: subId }),
      }
    );
    const json = await response.json();
    if (json.success) {
      setCompleted(prevState => [...prevState, subId] );
      setActive(2);
    }
  };

  return (
    <>
      <Navbar course rhead={name} />
      <StyledLayout style={width>900?{
        width:"100%",
        height:"80vh",
        display:"grid",
        gridTemplateColumns:"1fr 3fr",
        overflow:"scroll"
      }:{
        width:"100%",
        height:"80vh",
        display:"flex",
        flexDirection:"column",
        overflow:"scroll"
      }} >
        {items ? (
          <>
              <ChapterSideBar items={items} handelSub={handelSub} completed={completed} />
              <LayOut style={width>900?{}:{
                padding:"0px 20px"
              }} >
            {active === 1 ? (
              <div
                style={{ display: "flex",itemsAlign: "center",justifyContent: "space-around",}}>
                <img style={{ height: "60vh", width: "60vw" }} src="/images/ChapterPageLogo.svg" alt="Select any subtopic to start learning"/>
              </div>
            ) : active === 2 ? (
              <div style={{ marginTop: "32px", overflow: "scroll", width: "98%" }}>
                {SubItems.contentType === 1 && (
                  <ReactPlayer width="59vw" height="70vh" controls url={SubItems.data}/>
                )}
                {SubItems.contentType === 0 && (
                  <section>
                    <Markdown source={mark}></Markdown>
                  </section>
                )}
                {completed.includes(subId)?
                <>
                  <StyledButton style={{opacity:"75%"}} disabled={true} onClick={() => {handleMark(SubItems);}}>
                    Completed
                  </StyledButton>
                </>
                :
                <>
                  <StyledButton onClick={() => {handleMark(SubItems);}}>
                    Mark as Completed
                  </StyledButton>
                </>
                }
              </div>
            ) : (
              <Loader />
            )}
          </LayOut>
          </>
        ) : (
          <Loader />
        )}
      </StyledLayout>
      
    </>
  );
}

const StyledLayout = styled.div`
  width: 100%;
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr 3fr;
  overflow: hidden;
`;

const LayOut = styled.div`

`;


const StyledButton = styled(Button)`
  margin: 2rem auto;
  background: linear-gradient(
    86.94deg,
    #1bbc9b 0%,
    #1bbc9b 0.01%,
    #16a086 100%
  );
  color: white;
`;

export default Layout;
