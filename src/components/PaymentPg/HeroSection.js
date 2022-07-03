import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import Review from "./Review.js";
import ReviewData from "./ReviewData";
import FeedCard from "./FeedCard";
import PercentData from "./PercentData";
import DisplayBar from "./DisplayBar";
import CourseContent from "./CourseContent";
import LearningContent from "./LearningContent";
import PayCard from "../PaymentPg/PayCard";
import Head from "./Head";
import CreateIcon from "@material-ui/icons/Create";
import PayCardMobile from "../PaymentPg/PayCardMobile";
import Footer from "../global/Footer";
import Loader from "../../pages/Loader";
import { baseURL } from "../../Apis";

function HeroSection(props) {
  const [discount, setdiscount] = useState(0);
  const [discountType, setdiscountType] = useState(0);
  function createReview(review) {
    return (
      <Review
        key={review._id}
        name={`${review.user.name[0]} ${review.user.name[1]}`}
        // img={review.user.image}
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        detail={review.review}
        rating={review.rating}
        date={review.createdAt ? review.createdAt.substr(0, 10) : ""}
      />
    );
  }
  function createBar(percent) {
    return (
      <DisplayBar
        key={percent.id}
        percentage={percent.percentage}
        rating={percent.id}
      />
    );
  }
  function createCourseData(data) {
    return (
      <PayCard
        key={props.active === 2 ? data.courseId : data.testSeriesId}
        title={data.name}
        active={props.active}
        data={data}
        studentsEnrolled={data.userEnrolled}
      />
    );
  }
  function createMobileCourseData(data) {
    return (
      <PayCardMobile
        key={props.active === 2 ? data.courseId : data.testSeriesId}
        title={data.name}
        studentsEnrolled={data.userEnrolled}
        data={data}
        rating={4}
      />
    );
  }
  const [item, setitem] = useState(null);
  const [includes, setincludes] = useState(null);
  useEffect(() => {
    if (props.refral) {
      fetch(
        `${baseURL}/coupens/usereflink?item=${
          props.active === 2 ? 0 : props.active === 3 ? 1 : 2
        }&itemId=${
          props.active === 2
            ? props.courseId
            : props.active === 3
            ? props.testSeriesId
            : props.packageId
        }`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            generator: props.refral.generator,
            coupen: props.refral.coupenId,
          }),
        }
      )
        .then((res) => res.json())
        .then(
          (result) => {
            // setloader(false)
            if (result.isCoupen) {
              setdiscount(result.discount.discount);
              setdiscountType(result.discount.discountType);
              console.log(discount);
              props.notify(
                "success",
                `Successfully applied ${ result.discount.discountType === 0 ? `${result.discount.discount?result.discount.discount:0}%` : `${result.discount.discount?result.discount.discount:0}/-` } discount `
              );
            } else {
              props.resetRefral();
              props.notify("info", result.message);
            }
          },
          (error) => {
            console.log(error);
          }
        );
    }
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    let url =
      props.active === 2
        ? `${baseURL}/course/${props.courseId}?queryParam=2`
        : props.active === 3
        ? `${baseURL}/testseries/${props.testSeriesId}?queryParam=1`
        : `${baseURL}/package/${props.packageId}`;
    const fun = async () => {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const json = await response.json();
      if(json.data.includes){
        setincludes(json.data.includes.length !== 0 ? json.data.includes : null);
      }
      setitem(json.data);
    };
    fun();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {item ? (
        <div>
          <div className="hero-container">
            {props.active === 2 ? (
              <Head
                refral={props.refral}
                active={props.active}
                Id={props.courseId}
                name={item.name}
                description={item.description}
                rating={item.rating}
                price={discountType===0?Math.round(item.price - (discount * item.price) / 100):(item.price -discount)}
                notify={props.notify}
              />
            ) : props.active === 3 ? (
              <Head
                refral={props.refral}
                active={props.active}
                Id={props.testSeriesId}
                name={item.name}
                description={item.description}
                rating={item.rating}
                price={discountType===0?Math.round(item.price - (discount * item.price) / 100):(item.price -discount)}
                notify={props.notify}
              />
            ) : (
              <Head
                refral={props.refral}
                active={props.active}
                Id={props.packageId}
                name={item.name}
                description={item.description}
                rating={item.rating}
                price={discountType===0?Math.round(item.price - (discount * item.price) / 100):(item.price -discount)}
                notify={props.notify}
              />
            )}
          </div>
          <div className="bodyWrapper">
            <div className="midSection">
              <div className="midColOne">
                <h2>What you'll learn</h2>
                <div className="divider">
                  <div>
                    <LearningContent data={item.highlights} />
                  </div>
                </div>
              </div>
              <div className="midColTwo">
                {props.active === 2 ? (
                  <>
                    <h2>This Course Includes</h2>
                    <div className="dividerTwo">
                      {includes ? (
                        includes.map((item, i) => {
                          return (
                            <li key={i}>
                              <CreateIcon />
                              {item}
                            </li>
                          );
                        })
                      ) : (
                        <CourseContent
                          test={item.fullTestCount}
                          chapters={item.chapterCount}
                        />
                      )}
                    </div>
                  </>
                ) : props.active === 3 ? (
                  <>
                    <h2>This Testseries Includes</h2>
                    <div className="dividerTwo">
                      <div className="dividerTwo">
                        <ul className="content">
                          <li>
                            {includes ? (
                              includes.map((item, i) => {
                                return (
                                  <li key={i}>
                                    <CreateIcon />
                                    {item}
                                  </li>
                                );
                              })
                            ) : (
                              <CreateIcon />
                            )}
                            {item.noOfQuizzes !== 0 &&
                              item.noOfQuizzes + "Full tests"}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <h2>This Package Includes</h2>
                    <div className="dividerTwo">
                      <div className="dividerTwo">
                        <ul className="content">
                          {includes
                            ? includes.map((item, i) => {
                                return (
                                  <li key={i}>
                                    <CreateIcon />
                                    {item}
                                  </li>
                                );
                              })
                            : item.courses.map((course, i) => {
                                return (
                                  <li key={i}>
                                    <CreateIcon />
                                    {course.name}
                                  </li>
                                );
                              })}
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <section className="cardSection">
              <div className="cardHeader">
                <h1>Students also bought this</h1>
              </div>
              <div className="cardWrapper">
                {props.active === 3 ? (
                  item.similarTestSeries.length > 0 ? (
                    <>
                      {item.similarTestSeries.map(createCourseData)}
                      <div className="MobilePayCard">
                        {item.similarTestSeries.map(createMobileCourseData)}
                      </div>
                    </>
                  ) : (
                    "No one has Bought"
                  )
                ) : item.similarCourses.length > 0 ? (
                  <>
                    {item.similarCourses.map(createCourseData)}
                    <div className="MobilePayCard">
                      {item.similarCourses.map(createMobileCourseData)}
                    </div>
                  </>
                ) : (
                  "No one has Bought"
                )}
              </div>
            </section>

            <section className="feedback">
              <h1>Student Feedback</h1>
              <div className="feedbackWrapper">
                <FeedCard
                  key={ReviewData[2].id}
                  rating={ReviewData[2].rating}
                />
                <div className="feedColTwo">{PercentData.map(createBar)}</div>
              </div>
            </section>

            <section className="review">
              <h1>Reviews</h1>
              {item.feedbacks.map(createReview)}
            </section>
          </div>
          <Footer />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default HeroSection;
