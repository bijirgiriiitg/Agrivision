import Navbar from "../components/global/Navbar";
import ReadMore from "../components/ArticleDisplay/ReadMore";
import Comments from "../components/ArticleDisplay/Comments";
import ReadThis from "../components/ArticleDisplay/ReadThis.jsx";
import "../components/ArticleDisplay/join-magazine-components.css";
import Footer from "../components/global/Footer";
import Bottom from "../components/Magazine/Bottom";
import { baseURL } from "../Apis";
import { useState, useEffect } from "react";
import Loader from "../pages/Loader";

function Magazine(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [article, setArticle] = useState(null);
  const [mainContent, setMainContent] = useState(null);

  const showing = () => {
    document.getElementById("sidebar").classList.toggle("active");
    document.getElementById("toggle-btn").classList.toggle("active");
  };

  useEffect(() => {
    fetch(`${baseURL}/article/${props.match.params.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setArticle(result.data);

          if (result.data.content) {
            fetch(`${result.data.content}`)
              .then((response) => {
                return response.text();
              })
              .then((text) => {
                setMainContent(text);
              });
          }
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [props.match.params.id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Loader />;
  } else {
    return (
      article && (
        <div>
          <Navbar></Navbar>
          <div className="magazine-block">
            <div className="magazine-block-left">
              <ReadMore article={article} mainContent={mainContent}></ReadMore>
              <Comments
                comments={article.comments}
                articleId={props.match.params.id}
              ></Comments>
            </div>
            <div className="magazine-block-right">
              <div id="not-side-bar">
                <ReadThis></ReadThis>
              </div>

              <div id="sidebar">
                <div className="toggle-btn" id="toggle-btn" onClick={showing}></div>
                <ReadThis className="sidebar-read-this"></ReadThis>
              </div>
            </div>
          </div>
          <Bottom
            heading="Get the best Vision of Agriculture Delivered to your Inbox"
            content="Sign up for more inspiring stories and news from AgriVision4U"
            info="SIGN UP"
            link="/login"
          ></Bottom>
          <Footer></Footer>
        </div>
      )
    );
  }
}

export default Magazine;
