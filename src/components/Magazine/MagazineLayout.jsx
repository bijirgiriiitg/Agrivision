import React from "react";
import Bottom from "./Bottom";
import Attention from "./Attention";
import Card1 from "./Cards/Card1";
import Card2 from "./Cards/Card2";
import Card3 from "./Cards/Card3";
import { useState, useEffect } from "react";
import MagazineCaraousel from "./Carousel/MagazineCaraousel";
import { baseURL } from "../../Apis";
import Loader from "../../pages/Loader";

function MagazineLayout() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [articles, setArticles] = useState(null);
  const popularArticles = articles ? articles.sort((a, b) => b.views - a.views) : null;

  useEffect(() => {
    fetch(`${baseURL}/article`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setArticles(result.data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Loader />;
  } else {
    return (
      articles && (
        <div>
          <MagazineCaraousel popularArticles={popularArticles}></MagazineCaraousel>
          <Card1 articles={articles} />
          <Card2 articles={articles} popularArticles={popularArticles}></Card2>
          <Attention
            heading="Give your article a voice!"
            content="Upload your work with us and get it published on AgriVision4U"
            info="Submit Your article!"
            link="/articles"
          ></Attention>
          <Card3></Card3>
          <Bottom
            heading="Get the best Vision of Agriculture Delivered to your Inbox"
            content="Sign up for more inspiring stories and news from AgriVision4U"
            info="SIGN UP"
            link="/login"
          ></Bottom>
        </div>
      )
    );
  }
}

export default MagazineLayout;
