import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import axios from "axios";
import styled from "styled-components";
import device from "../Util/MediaQuery";
import Loader from  "../../pages/Loader"
import { baseURL } from "../../Apis";

const JobWrapper = (props) => {
  // eslint-disable-next-line
  const [all, setAll] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [intern, setIntern] = useState([]);
  const [scholar, setScholar] = useState([]);
  // eslint-disable-next-line
  const [loading, setloading] = useState(false);
  useEffect(() => {
    const getJobs = async (e) => {
      setloading(true);
      const response = await axios.get(
        `${baseURL}/jobs`,
        {
          headers: {
            // Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const response2 = await axios.get(
        `${baseURL}/jobs?job=jobs`,
        {
          headers: {
            // Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const response3 = await axios.get(
        `${baseURL}/jobs?job=internships`,
        {
          headers: {
            // Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const response4 = await axios.get(
        `${baseURL}/jobs?job=scholarships`,
        {
          headers: {
            // Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setAll(response.data.data);
      setJobs(response2.data.data);
      setIntern(response3.data.data);
      setScholar(response4.data.data);
      setloading(false);
    };
    getJobs();
    // eslint-disable-next-line
     return () => {
       setAll([]);
       setJobs([]);
       setIntern([]);
       setScholar([]);
       setloading(false);
     };
  }, []);

  const handleAll = async (e) => {
    setloading(true);
     setAll([]);
    [...e.target.parentElement.children].forEach(sib => sib.classList.remove('active'));
      e.target.classList.add('active');
    const response = await axios.get(
      `${baseURL}/jobs`,
      {
        headers: {
          // Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    setAll(response.data.data);
    setloading(false);
  };
  const handleJobs = async (e) => {
    setloading(true);
    setAll([]);
    [...e.target.parentElement.children].forEach(sib => sib.classList.remove('active'));
      e.target.classList.add('active');
    const response = await axios.get(
      `${baseURL}/jobs?job=jobs`,
      {
        headers: {
          // Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    setAll(response.data.data);
    setloading(false);
  };

  const handleIntern = async (e) => {
    setloading(true);
    setAll([]);
    [...e.target.parentElement.children].forEach(sib => sib.classList.remove('active'));
      e.target.classList.add('active');
    const response = await axios.get(
      `${baseURL}/jobs?job=internships`,
      {
        headers: {
          // Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    setAll(response.data.data);
    setloading(false);
  };

  const handleScholar = async (e) => {
    setloading(true);
    setAll([]);
    [...e.target.parentElement.children].forEach(sib => sib.classList.remove('active'));
      e.target.classList.add('active');
    const response = await axios.get(
    `${baseURL}/jobs?job=scholarships`,
      {
        headers: {
          // Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    setAll(response.data.data);
    setloading(false);
  };
  return (
    <div>
      <Container>
        <ul>
          <li onClick={handleAll} className="active">
            All &nbsp; ({jobs.length + intern.length + scholar.length})
          </li>
          <li onClick={handleJobs}>Jobs &nbsp; ({jobs.length})</li>
          <li onClick={handleIntern}>Internships &nbsp; ({intern.length})</li>
          <li onClick={handleScholar}>
            Scholarships &nbsp; ({scholar.length})
          </li>
        </ul>
      </Container>
      {loading && <Loader></Loader>}
      {all.map((job) => (
        <JobCard
          key={job._id}
          title={job.title}
          organisation={job.organisation}
          stipend={job.stipend}
          location={job.location}
          duration={job.duration}
          type={job.jobType}
          description={job.description}
          link={job.link}
        ></JobCard>
      ))}
    </div>
  );
};



const Container = styled.div`
  width: 800px;
  ul {
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    align-items: center;
    ${device.tablet} {
      width: 100vw;
      grid-auto-flow: row;
      grid-template-columns: 150px 150px;
      justify-items: end;
      margin-left: 0px;
      
    }
  }
  li {
    color: #1bbc9b;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 156px;
    background: #e8f3ff;
    border-radius: 24px;
    margin: 17px;
    border: 1px solid #1bbc9b;
    font-size: 13px;
    cursor: pointer;
    ${device.tablet} {
      width: 135px;
    }
  }
  .active {
    color: white;
    background: #1bbc9b;
  }
`;

export default JobWrapper;
