import { Bar } from "react-chartjs-2";
import React from "react";
import styled from "styled-components";

const dataBuilder = (readingDuration, testDuration, goal) => {
  const d = new Date();
  const currentDate = d.getDate();
  let labels = [];
  for (let i = Math.max(0, currentDate - 6); i <= currentDate; i++) {
    labels.push(i);
  }

  return {
    labels: labels,
    datasets: [
      {
        label: "Reading",
        data: readingDuration
          .slice(Math.max(0, currentDate - 7), currentDate)
          .map((day) => (day.duration/goal)*100>100?100:(day.duration/goal)*100),
        backgroundColor: "#1BBC9B",
        barThickness: 12,
      },
      {
        label: "Test",
        data: testDuration
          .slice(Math.max(0, currentDate - 7), currentDate)
          .map((day) => (day.duration/goal)*100>100?100:(day.duration/goal)*100),
        backgroundColor: "#B3DDD4",
        barThickness: 12,
      },
    ],
  };
};

function DashBar(props) {
  let readingProgress = props.courseProg;
  let testProgress = props.testProg;

  // useEffect(() => {
  //   if (readingProgress.length < 31) {
  //     for (let i = readingProgress.length; i < 31; i++) {
  //       readingProgress.push({ duration: 0 });
  //     }
  //   }
  //   if (testProgress.length < 31) {
  //     for (let i = testProgress.length; i < 31; i++) {
  //       testProgress.push({ duration: 0 });
  //     }
  //   }
  //   // eslint-disable-next-line
  // }, []);


  const data = dataBuilder(readingProgress, testProgress, props.userprog.data.readingGoal);

  return (
    <DashBarDiv>
      <Bar
        style={{ width: 16 }}
        data={data}
        options={{
          scales: {
            xAxes: [
              {
                maxBarThickness: 40,
                barPercentage: 1 /* change this */,
                categoryPercentage: 0.5 /* change this */,

                gridLines: {
                  color: "white",
                },

                ticks: {
                  fontColor: "black",
                },
              },
            ],
            yAxes: [
              {
                gridLines: {
                  color: "white",
                },

                ticks: {
                  beginAtZero: true,
                  fontColor: "black",
                },
              },
            ],
          },
        }}
      ></Bar>
    </DashBarDiv>
  );
}

const DashBarDiv = styled.div``

export default DashBar;
