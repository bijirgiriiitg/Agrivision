import React from "react";
import styled from "styled-components";
import Searchselector from "./Searchselector";
import Review from "./Review";
import { useState, useEffect } from "react";
import Loader from "../../pages/Loader";
import { baseURL } from "../../Apis";
import {useLocation} from 'react-router-dom';

const CollegeDetail = ({ collegeId }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);
  const [coursesOffered, setCoursesOffered] = useState(null);
  const {search} = useLocation();
 
  useEffect(() => {
    if (isLoaded) {
      window.scrollTo(0, 0);
    }
  }, [isLoaded]);

  useEffect(() => {
    //let mounted = true;
    fetch(`${baseURL}/academics/${collegeId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result.data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [collegeId]);

  useEffect(() => {
    if (data) {
      let deg=[]
      data.degree.forEach(ele => {
        deg.push(ele.name)
      });
      setCoursesOffered(deg.join(", "));
    }
  }, [data]);

  // useEffect(() => {
  //   const queryParams = new URLSearchParams(search);
  //   setD(queryParams.get('d'));

  // }, [d, search]);

  useEffect(() => {
    const queryParams = new URLSearchParams(search);
    let d = queryParams.get('d');

    let scroll = 0;
    if (d) {
      scroll = 575 + 300 * Number(d);
    }
    window.scrollTo(0, scroll)
  });


  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) { 
    return <Loader />;
  } else {
    return (
      data && (
        <>
          <StyledLayout>
            <LeftContent>
              <SideCard>
                <AdvancedSearch />
              </SideCard>
            </LeftContent>
            <CentreContent>
              <College>
                <div>
                  <img src="/images/college_placeholder_2.png" alt="college_photo"></img>
                </div>
                <div>
                  <h5>{data.name}</h5>
                  <h6>{data.location}</h6>
                  <h6 style={{fontSize:"1.1rem"}}><b>Degree</b>: {coursesOffered}</h6>

                </div>
              </College>
              <Rating>
                <div className="collegeRating__factor">
                  <p className="collegeRating__title">College</p>
                  <p>{data.ratings[0]}/10</p>
                </div>
                <div className="collegeRating__factor">
                  <p className="collegeRating__title">Hostel</p>
                  <p>{data.ratings[1]}/10</p>
                </div>
                <div className="collegeRating__factor">
                  <p className="collegeRating__title">Hostel</p>
                  <p>{data.ratings[2]}/10</p>
                </div>
                <div className="collegeRating__factor">
                  <p className="collegeRating__title">Placement</p>
                  <p>{data.ratings[3]}/10</p>
                </div>
                <div className="collegeRating__factor">
                  <p className="collegeRating__title">Faculty</p>
                  <p>{data.ratings[4]}/10</p>
                </div>
                <div className="collegeRating__factor">
                  <p className="collegeRating__title">Campus Life</p>
                  <p>{data.ratings[5]}/10</p>
                </div>
              </Rating>
              {data.degree.map((deg, i) => (
                <Tab key={deg.name} id={i}>
                <br></br>
                <br></br>
                <h3>{deg.name}</h3>
                <br></br>
                <table>
                  <tbody>
                    <tr>
                      <td>Duration</td>
                      <td>{deg.Duration}</td>
                    </tr>
                    <tr>
                      <td>Average fess incurred</td>
                      <td>{deg.courseFees}</td>
                    </tr>
                    <tr>
                      <td>Average salary offered</td>
                      <td>{deg.salaryOffered}</td>
                    </tr>
                    <tr>
                      <td>Placement opportunities</td>
                      <td>{deg.opportunities}</td>
                    </tr>
                  </tbody>
                </table>
              </Tab>
              ))}

              <CollegeReview>
                <span className="collegeReview__heading">Reviews</span>
                <Review
                  key={null}
                  name={null}
                  img={null}
                  detail={null}
                  rating={null}
                  date={null}
                />
              </CollegeReview>
            </CentreContent>
            <RightContent>
              <SideCard>
                <ExpertCard />
              </SideCard>
              <SideCard>
                <MoreColleges />
              </SideCard>
            </RightContent>
          </StyledLayout>
        </>
      )
    );
  }
};

const AdvancedSearch = () => {
  const [filter, setFilter] = useState({
    discipline: "",
    degree: "",
    location: "",
  });

  const [feeFilter, setFeeFilter] = useState([]);

  const handleChangeDiscipline = (event) => {
    setFilter({ ...filter, discipline: event.target.value });
  };
  const handleChangeDegree = (event) => {
    setFilter({ ...filter, degree: event.target.value });
  };
  const handleChangeLocation = (event) => {
    setFilter({ ...filter, location: event.target.value });
  };

  const handleFeeFilterChange = (event) => {
    const isSelected = feeFilter.includes(event.target.value);

    const newFeeFilter = isSelected
      ? feeFilter.filter((fee) => fee !== event.target.value)
      : [...feeFilter, event.target.value];
    setFeeFilter(newFeeFilter);
  };

  // useEffect(() => {
  //   console.log(filter, feeFilter);
  // }, [feeFilter, filter]);

  return (
    <AdvancedSearchContainer>
      <div className="heading">Advance Search</div>
      <div className="main discipline">
        <h6>Select Discipline</h6>
        <Searchselector
          value={filter.discipline}
          handleChange={handleChangeDiscipline}
          items={[
            { key: "All", value: "All" },
            { key: "Last 28 Days", value: "28" },
            { key: "Last 90 Days", value: "90" },
          ]}
        />
      </div>
      <div className="main degree">
        <h6>Select Degree</h6>
        <Searchselector
          value={filter.degree}
          handleChange={handleChangeDegree}
          items={[
            { key: "All", value: 1 },
            { key: "Btech", value: 2 },
            { key: "BSC", value: 90 },
          ]}
        />
      </div>
      <div className="main location">
        <h6>Location</h6>
        <Searchselector
          value={filter.location}
          handleChange={handleChangeLocation}
          items={[
            { key: "ALL", value: 7 },
            { key: "Delhi", value: 28 },
            { key: "Mumbai", value: 90 },
          ]}
        />
      </div>
      <div className="main fees">
        <h6>Total fees</h6>
        <ul>
          <li>
            <input type="Checkbox" value="0-2" onChange={handleFeeFilterChange} />
            <label htmlFor="">0-2 L</label>
          </li>
          <li>
            <input type="Checkbox" value="2-4" onChange={handleFeeFilterChange} />
            <label htmlFor="">2-4 L</label>
          </li>
          <li>
            <input type="Checkbox" value="4-6" onChange={handleFeeFilterChange} />
            <label htmlFor="">4-6 L</label>
          </li>
          <li>
            <input type="Checkbox" value="6-8" onChange={handleFeeFilterChange} />
            <label htmlFor="">6-8 L</label>
          </li>
          <li>
            <input type="Checkbox" value="8-" onChange={handleFeeFilterChange} />
            <label htmlFor="">More than 8L</label>
          </li>
        </ul>
      </div>
    </AdvancedSearchContainer>
  );
};

const ExpertCard = () => {
  return (
    <ExpertCardContainer>
      <img src="/images/female_assistant.svg" alt="assistant_image" />
      <div className="expertCard__description">ARE YOU INTERESTED IN OTHER COLLEGES</div>
      <div className="external__contact">
        <ExpertButton>TALK TO EXPERTS</ExpertButton>
        <div className="external__moreinfo">GET MORE INFO</div>
      </div>
    </ExpertCardContainer>
  );
};

const MoreColleges = () => {
  return (
    <MoreCollegeContainer>
      <div className="moreCollege__container">
        <div className="moreCollege__header">You may also be intersted in</div>
        <div className="moreCollege__body">
          <div className="moreCollege__item">Top Colleges in Punjab</div>
          <div className="moreCollege__item">Top Colleges in Punjab</div>
          <div className="moreCollege__item">Top Colleges in Punjab</div>
          <div className="moreCollege__item">Top Colleges in Punjab</div>
          <div className="moreCollege__item">Top Colleges in Punjab</div>
          <div className="moreCollege__item">Top Colleges in Punjab</div>
          <div className="moreCollege__item">Top Colleges in Punjab</div>
          <div className="moreCollege__item">Top Colleges in Punjab</div>
          <div className="moreCollege__item">Top Colleges in Punjab</div>
          <div className="moreCollege__item">Top Colleges in Punjab</div>
          <div className="moreCollege__item">Top Colleges in Punjab</div>
        </div>
      </div>
    </MoreCollegeContainer>
  );
};

const StyledLayout = styled.div`
  width: 100%;
  //   height: 85vh;
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  column-gap: 14px;
  overflow: hidden;
  font-family: Poppins;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`;

const LeftContent = styled.div`
  min-width: 0;
`;
const CentreContent = styled.div``;
const CollegeReview = styled.div`
  margin-top: 60px;
  .collegeReview__heading {
    font-size: 1.5em;
    font-weight: 600;
  }
`;
const RightContent = styled.div``;

const AdvancedSearchContainer = styled.div`
  .heading {
    background-color: #1ab697;
    font-size: 15px;
    padding: 0.8rem 0;
    text-align: center;
    color: white;
    border-radius: 6px 6px 0 0;
  }

  .main {
    padding: 0.8em 1em;
    ${this}h6 {
      font-size: 14px;
    }

    ul {
      list-style-type: none;
      padding: 0 10px;
    }
    input {
      margin-right: 5px;
    }
    label {
      font-size: 12px;
    }
  }
`;

const College = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 20px;
  img {
    min-width: 150px;
    width: 100%;
    object-fit: contain;
    border-radius: 10px;
  }
  h5 {
    margin-bottom: 1em;
  }
`;

const Rating = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 4em 0;
  padding: 0 1em;
  text-align: center;

  .collegeRating__title {
    font-weight: 500;
  }

  .collegeRating__factor {
    margin: 10px;
  }
`;

const Tab = styled.div`
  table {
    width: 100%;
  }
  td {
    width: 50%;
    border: 1px solid black;
    padding: 10px 20px;
  }
`;

const SideCard = styled.div`
  height: auto;
  background-color: white;
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
  margin: 0 1em 1em;
`;
const ExpertCardContainer = styled.div`
  img {
    height: 62px;
  }
  .external__contact {
    display: block;
  }
  .expertCard__description {
    font-weight: 500;
    font-size: 1.125em;
    margin: 0.5em 1em;
  }
  .external__moreinfo {
    color: #1bbc9b;
  }
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
`;

const ExpertButton = styled.button`
  background: linear-gradient(to right, #1bbc9b 0%, #1bbc9b 0.01%, #16a086 100%);
  color: white;
  padding: 0.5em 1.5em;
  margin: 1em;
  border: none;
`;

const MoreCollegeContainer = styled.div`
  display: flex;
  flex-direction: column;

  .moreCollege__header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 53px;
    background: linear-gradient(to right, #1bbc9b 0%, #1bbc9b 0.01%, #16a086 100%);
    color: white;
  }
  .moreCollege__body {
    flex: 1;
    font-size: 0.9em;
    text-align: center;
    .moreCollege__item {
      padding: 5px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.09);
      color: #1ab697;
    }
    .moreCollege__item:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export default CollegeDetail;
