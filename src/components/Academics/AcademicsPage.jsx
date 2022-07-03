import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { useEmblaCarousel } from "embla-carousel/react";
import Loader from "../../pages/Loader";
import { baseURL } from "../../Apis";
import { TopColleges } from './TopColleges';
import { Container } from "../global/Global";
import Autoplay from 'embla-carousel-autoplay'
const CollegesLogo = "/images/top_college_circle.svg";
const ExamsLogo = "/images/explore_exams_circle.svg";
const ScholarshipsLogo = "/images/explore_scholarship_circle.svg";
const domains = ['Agriculture', 'Food', 'Science', 'Technology', 'Central'];
const types = ['Agriculture', 'Masters', 'Engineering', 'Diploma', 'Chemistry'];

const College = ({college}) => {
  return (
    <div>
      <StyledCardC className="flex flex-fdc flex-aic">
        <BgC></BgC>
        <ContentC>
          <TopicHeadC>
            <div className="featuredCollege__name">{college.name}</div>
            <div className="featuredCollege__location">{college.location}</div>
          </TopicHeadC>
          <TopicC>
            {college.degree.length >= 3 && <div><b>Degrees</b>: {college.degree[0].name}, {college.degree[1].name} and {college.degree.length - 2} more<b>.</b></div>}</TopicC>
            {college.degree.length < 3 && <div><b>Degrees</b>: {college.degree.map((deg) => deg.name)}</div>}
            <br></br>
            <br></br>
          <TopicC>
            <Link to={"/academics/colleges/" + college._id}>
              <TopicButtonC>View details</TopicButtonC>
            </Link>
          </TopicC>
        </ContentC>
      </StyledCardC>
    </div>
  )
}

const EmblaCarousel = ({featuredColleges, type}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
      let timer1 = setInterval(() => {
        emblaApi.scrollNext();
      }, 7000);
      return () => {
        clearTimeout(timer1);
      };
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])


  return (
    <div className="embla"  style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                justifyContent: "space-around",
                marginBottom: "80px",
              }}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
                {featuredColleges.filter((college) => college.domain.toLowerCase() === type.toLowerCase()).map((college, index) => {
                return (
                  <div className="embla__slide" key={index}>
                    <College  college={college}/>
                  </div>
                )
              })}        
        </div>
      </div>
      {featuredColleges.filter((college) => college.domain.toLowerCase() === type.toLowerCase()).length > 1 && (
        <div>
          <button className="embla__prev" onClick={scrollPrev}>
            Prev
          </button>
          <button className="embla__next" onClick={scrollNext}>
            Next
          </button>
        </div>
      )}

    </div>
  );
};

const Colleges = ({featuredColleges, type}) => {
  return (
    <Wrapper>
      <CollegeContainer>
        <CollegeSlider className="flex flex-aic flex-jcc">
          <EmblaCarousel featuredColleges={featuredColleges} type={type}/>
        </CollegeSlider>
      </CollegeContainer>
  </Wrapper>
  )
}

const Layout = ({ig}) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);
  const [featuredColleges, setFeaturedColleges] = useState(null);
  const [type, setType] = useState('agriculture');
  const [domain, setDomain] = useState(null);
  const {search} = useLocation();
  useEffect(() => {
    if (isLoaded) {
      window.scrollTo(0, 0);
    }
  }, [isLoaded]);

  useEffect(() => {
    fetch(`${baseURL}/academics`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
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
  }, []);

  useEffect(() => {
    if (data) {
      const filteredColleges = data.filter((obj) => obj.isTopFeatured );
      const fgc = filteredColleges.filter((college) => college.isGlobal === ig);
      setFeaturedColleges(fgc);
    }
  }, [data, ig]);
  
  useEffect(() => {
    const queryParams = new URLSearchParams(search);
    setDomain(queryParams.get('domain'));
  }, [search]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Loader />;
  } else if (domain) {
    return (
      domain && (
        <TopColleges domain={domain} ig={ig}/>
      )
    )
  } else {
    return (
      featuredColleges && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            background: "white",
          }}
        >
          <input
            style={{
              margin: "60px",
              padding: "24px",
              width: "50vw",
              height: "5vh",
              borderRadius: "8px",
              fontSize: "16px",
              border: "2px solid #1BBC9B",
              outline: "none",
            }}
            type="text"
            placeholder="Search colleges, exams"
          ></input>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "16px",
              justifyContent: "center",
            }}
          >
            <div>

                <StyledCard>
                  <Bg>
                    <StyledImg src={CollegesLogo} />
                  </Bg>
                  <Content>
                    <TopicHead>Explore top colleges</TopicHead>
                    <Topic>Claytronics is an extreme example:</Topic>
                    <Topic>completely physical 3D voxels that</Topic>
                  </Content>
                </StyledCard>

            </div>
            <div>

                <StyledCard>
                  <Bg>
                    <StyledImg src={ExamsLogo} />
                  </Bg>
                  <Content>
                    <TopicHead>Explore top colleges</TopicHead>
                    <Topic>Claytronics is an extreme example:</Topic>
                    <Topic>completely physical 3D voxels that</Topic>
                  </Content>
                  </StyledCard>
            </div>
            <div>

                <StyledCard>
                  <Bg>
                    <StyledImg src={ScholarshipsLogo} />
                  </Bg>
                  <Content>
                    <TopicHead>Explore top colleges</TopicHead>
                    <Topic>Claytronics is an extreme example:</Topic>
                    <Topic>completely physical 3D voxels that</Topic>
                  </Content>
                </StyledCard>

            </div>
          </div>
          <h2 style={{ margin: "32px" }}>Explore different domains</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "16px",
              justifyContent: "center",
            }}
          >
            {domains.map((dom) => {
              return (
                <div key={dom.toLowerCase() + "1"}>
                  <ViewLink to={"/academics?domain=" + dom.toLowerCase() + "&global=" + ig}>
                    <StyledCard>
                      <Bg>
                        <StyledImg src={CollegesLogo} />
                      </Bg>
                      <Content2>
                        <TopicHead2>{dom}</TopicHead2>
                        <Topic2>{featuredColleges.filter((college) => college.domain.toLowerCase() === dom.toLowerCase()).filter((college) => college.isGlobal === ig).length} Colleges</Topic2>
                        <Topic2V>View All</Topic2V>
                      </Content2>
                    </StyledCard>
                  </ViewLink>
                </div>
                )
            })}
          </div>
          <h2 style={{ margin: "32px" }}>Top featured colleges</h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              justifyContent: "center",
            }}
          >

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                justifyContent: "center",
                marginTop: "25px",
                marginBottom: "2px",
                fontSize: "20px"
              }}
            >
              {types.map((tp) => {
                return (
                <div key={tp.toLowerCase()}>
                  <Domain >
                    <DomainButton className={type === tp.toLowerCase() ? 'active': ''} onClick={() => setType(tp.toLowerCase())}>
                      <b>{tp}</b>
                    </DomainButton>
                  </Domain>
                </div>
                )
              })}

            </div>
          </div>
          <hr
            style={{
              color: "black",
              width: '95%',
              height: "4px"
            }}  
          />
          {featuredColleges.filter((college) => college.domain.toLowerCase() === type.toLowerCase()).length > 0 && (
          <div>
            <Colleges featuredColleges={featuredColleges} type={type}/>
          </div>
          )}


          {featuredColleges.filter((college) => college.domain.toLowerCase() === type.toLowerCase()).length <= 0 && (
            <h4>No Colleges Available!</h4>
          )}
          

          <div
            style={{
              width: "100%",
              background:
                "linear-gradient(86.94deg, #1BBC9B 0%, #1BBC9B 0.01%, #16A086 100%)",
              textAlign: "center",
            }}
          >
            <h2 style={{ margin: "32px 24px 24px", color: "#FFFFFF" }}>
              Get the best vision of Agriculture Delivered to your Inbox
            </h2>
            <p style={{ margin: "24px", color: "#FFFFFF" }}>
              Sign up for Latest news and updates about academics from AgriVision4U
            </p>
            <Link to="/login">
              <button
                style={{
                  margin: "8px 24px 28px",
                  border: "none",
                  background: "white",
                  color: "rgba(27, 188, 155, 1)",
                  borderRadius: "6px",
                  padding: "8px 12px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "inline-end",
                  cursor: "pointer",
                  fontWeight: "800",
                  fontSize: "20px",
                }}
              >
                SIGN UP
              </button>
            </Link>
          </div>
        </div>
      )
    );
  }
};


const ViewLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-style: normal;
  font-weight: normal;
`;

const StyledCard = styled.div`
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
  border-radius: 4px;
  overflow: hidden;
  margin: 1rem;
  text-align: center;
`;
const Bg = styled.div`
  width: 100%;
  height: 60px;
  color: white;
  position: relative;
`;

const StyledImg = styled.img`
  font-size: 18px;
  font-weight: 600;
  position: absolute;
  padding: 12px 60px;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
`;

const Content = styled.div`
  padding: 24px 12px 12px 12px;
  background-color: white;
  background: #ffffff;
  box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  border: 2px solid #16a086;
`;
const TopicHead = styled.div`
  margin: 30px 15px 0px 15px;
  font-family: Poppins;
  font-style: normal;
  font-size: 20px;
  line-height: 30px;
  font-weight: 600;
`;

const Topic = styled.div`
  margin: 15px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 10px;
`;

const Content2 = styled.div`
  padding: 24px 12px 12px 12px;
  background-color: white;
  background: #ffffff;
  box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  border: 2px solid #16a086;
`;
const TopicHead2 = styled.div`
  margin: 30px 15px 0px 15px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
`;

const Topic2 = styled.div`
  margin: 15px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
`;

const Topic2V = styled.div`
  margin: 15px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  color: #1bbc9b;
`;

const StyledCardC = styled.div`
  width: 400px;
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
  border-radius: 4px;
  overflow: hidden;
  margin: 1rem;
`;
const BgC = styled.div`
  width: 100%;
  height: 180px;
  background: url("/images/college_placeholder_2.png") no-repeat center;
  color: white;
  position: relative;
`;

const ContentC = styled.div`
  padding: 12px 10px 12px;
  background-color: white;
  font-size: 12px;
  font-weight: 400;
`;

const TopicHeadC = styled.div`
  margin: 0px 15px 0px 15px;
  font-family: Poppins;
  font-style: normal;
  font-size: 16px;
  line-height: 30px;
  display: flex;
  flex-direction: column;
  .featuredCollege__name {
    font-weight: 500;
  }
  .featuredCollege__location {
  }
`;

const TopicC = styled.div`
  margin: 15px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
`;

const TopicButtonC = styled.button`
  background: linear-gradient(86.94deg, #1bbc9b 0%, #1bbc9b 0.01%, #16a086 100%);
  border: none;
  color: white;
  border-radius: 3px;
  padding: 6px 6px;
  text-align: center;
  text-decoration: none;
  display: inline-end;
  position: absolute;
  right: 25px;
  bottom: 20px;
  cursor: pointer;
`;

const Domain = styled.div`
  .active {
    background: linear-gradient(86.94deg, #1bbc9b 0%, #1bbc9b 0.01%, #16a086 100%);
    color: white;
  }
`
const DomainButton = styled.button`
  background-color: white;
  border: none;
  color: "black";
  border-radius: 3px;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  display: inline;
  position: relative;
  margin: 5px 20px 5px 10px;
  cursor: pointer;
`


const Wrapper = styled.section`
  background: white;
`;
const CollegeContainer = styled(Container)`
  min-height: 40rem;
  padding: 3rem 0;
  color: black;
  .embla {
    overflow: hidden;
    cursor: grab;
  }
  .embla__container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .embla__slide {
    position: relative;
    flex: 0 0 50%;
    justify-content: center;
    align-items: center;
  }
  .embla__prev {
    background: linear-gradient(86.94deg, #1bbc9b 0%, #1bbc9b 0.01%, #16a086 100%);
    color: white;
    border-radius: 3px;
    padding: 10px 10px;
    text-align: center;
    margin: 40px;
  }

  .embla__next {
    background: linear-gradient(86.94deg, #1bbc9b 0%, #1bbc9b 0.01%, #16a086 100%);
    color: white;
    border-radius: 3px;
    padding: 10px 10px;
    text-align: center;
    margin: 40px;
  }

`;

const CollegeSlider = styled.div`
  max-width: 1100px;
  height: 28rem;
  box-shadow: 0px 0px 24px rgba(64, 64, 64, 0.1);
  margin: 0 auto;
  padding: 1rem;
  font-size: 1.25rem;
  border-radius: 0.5rem;
  align-items: center;
`;


export default Layout;
