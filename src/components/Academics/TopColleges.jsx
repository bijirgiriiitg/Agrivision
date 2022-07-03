import styled from "styled-components";
import CollegeCard from "./CollegeCard";
import { useState, useEffect, useRef } from "react";
import Loader from "../../pages/Loader";
import { baseURL } from "../../Apis";
import { useLocation } from "react-router";

export const TopColleges = ({domain}) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);
  const componentMounted = useRef(true);
  const [global, setGlobal] = useState(undefined);
  const {search} = useLocation()
  useEffect(() => {
    if (isLoaded) {
      window.scrollTo(0, 0);
    }
  }, [isLoaded]);
  useEffect(() => {
    const queryParams = new URLSearchParams(search);
    const ig = queryParams.get('global');
    if (ig === 'true') {
      setGlobal(true);
    } else {
      setGlobal(undefined)
    }
  }, [global, search]);
  useEffect(() => {
    
    fetch(`${baseURL}/academics?domain=${domain}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if (componentMounted.current) {
            setIsLoaded(true);
            setData(result.data);
          }
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
    return () => {
      componentMounted.current = false;
    }
  }, [domain, data]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Loader />;
  } else {
    return (
      data && (
        <>
          <StyledLayout>
            <div></div>
            <CentreContent>
              <Banner>
                <div className="banner__header">Top {domain} Colleges in India</div>
                <div className="banner__description">
                  Get the complete List of 200 Top Agriculture Colleges in India 2021
                  based on Rankings below:
                </div>
                <BannerButton>Reset Filters</BannerButton>
              </Banner>

              {data.filter((college) => college.isGlobal === global).map((college) => (
                <CollegeCard key={college._id} college={college} />
              ))}
            </CentreContent>
            <SideContent>
              <SideCard>
                <ExpertCard />
              </SideCard>
              <SideCard>
                <MoreColleges />
              </SideCard>
            </SideContent>
          </StyledLayout>
        </>
      )
    );
  }
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

TopColleges.defaultProps = {
  ig: true,
}
const StyledLayout = styled.div`
  width: 100%;
  //   height: 85vh;
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 3.5fr 1fr;
  column-gap: 14px;
  overflow: hidden;
  font-family: Poppins;
  @media screen and (max-width: 960px) {
    grid-template-columns: 0fr 2fr 1fr;
  }

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

const CentreContent = styled.div``;
const SideContent = styled.div``;
const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1em;
  margin-bottom: 5em;
  height: 208px;
  background: linear-gradient(to right, #1bbc9b 0%, #1bbc9b 0.01%, #16a086 100%);
  border-radius: 10px;
  .banner__header {
    font-size: 2em;
    color: white;
  }
  .banner__description {
    color: white;
    font-size: 1em;
  }
`;

const BannerButton = styled.button`
  border-radius: 15px;
  background-color: #ffffff;
  padding: 5px;
  font-size: 1em;
  padding: 0.25em 1em;
  align-self: flex-end;
  border: none;
`;

const SideCard = styled.div`
  height: 370px;
  background-color: white;
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
  margin-bottom: 1em;
  margin-right: 1em;
  overflow-y: auto;
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
export default TopColleges;
