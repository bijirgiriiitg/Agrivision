import React from "react";
import { Circle } from "rc-progress";
import styled from "styled-components";

const getDay = () => {
  const d = new Date();
  return {
    day: d.getDay(),
    date: d.getDate(),
    month: d.toLocaleString("default", { month: "long" }),
    monthNum: d.getMonth()+1,
    week: (d.getDate() / 7) | 0,
  };
};

const rotateArray2 = function(nums, k) {
  // reverse helper function
  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  k %= nums.length;
  reverse(nums, 0, (nums.length - 1));
  reverse(nums, 0, (k - 1));
  reverse(nums, k, (nums.length - 1));
  return nums;
}

export default function Progress(props) {
  const today = getDay();
  var date = new Date();
  var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  let week = ["Sun","Mon","Tue","Wed","Thr","Fri","Sat"];
  week = rotateArray2(week,7-firstDay.getDay());
  today.day=today.day-firstDay.getDay()<0?today.day-firstDay.getDay()+7:today.day-firstDay.getDay()

  return (
    <ProgressContainer>
     <div className="progress-table">
      <table className="p-table">
        <tbody>
          <tr>
            <td></td>
            {week.map((w,i)=>{
            return <td key={i} className={today.day === i ? "day-active" : ""}>{w}</td>
            })}
          </tr>
          <tr>
            <td className={today.week === 0 ? "day-active" : ""}>
              {today.week === 0 ? "This Week (1-7)" : `1-7 ${today.month}`}
            </td>
            {props.progress.slice(0, 7).map((day, index) => {
              return (
                <td key={index}>
                  <Circle
                    percent={
                      day.duration > props.data.readingDuration
                        ? 100
                        : (100 * day.duration) / props.data.readingGoal
                    }
                    trailWidth="15"
                    trailColor="#CCF0C5"
                    strokeWidth="15"
                    strokeColor="#1BBC9B"
                  />
                </td>
              );
            })}
          </tr>
          <tr>
            <td className={today.week === 1 ? "day-active" : ""}>
              {today.week === 1 ? "This Week (8-14)" : `8-14 ${today.month}`}
            </td>
            {props.progress.slice(7, 14).map((day, index) => {
              return (
                <td key={index}>
                  <Circle
                    percent={
                      day.duration > props.data.readingDuration
                        ? 100
                        : (100 * day.duration) / props.data.readingGoal
                    }
                    trailWidth="15"
                    trailColor="#CCF0C5"
                    strokeWidth="15"
                    strokeColor="#1BBC9B"
                  />
                </td>
              );
            })}
          </tr>
          <tr>
            <td className={today.week === 2 ? "day-active" : ""}>
              {today.week === 2 ? "This Week  (15-21)" : `15-21 ${today.month}`}
            </td>
            {props.progress.slice(14, 21).map((day, index) => {
              return (
                <td key={index}>
                  <Circle
                    percent={
                      day.duration > props.data.readingDuration
                        ? 100
                        : (100 * day.duration) / props.data.readingGoal
                    }
                    trailWidth="15"
                    trailColor="#CCF0C5"
                    strokeWidth="15"
                    strokeColor="#1BBC9B"
                  />
                </td>
              );
            })}
          </tr>
          <tr>
            <td className={today.week === 3 ? "day-active" : ""}>
              {today.week === 3 ? "This Week  (22-28)" : `22-28 ${today.month}`}
            </td>
            {props.progress.slice(21, 28).map((day, index) => {
              return (
                <td key={index}>
                  <Circle
                    percent={
                      day.duration > props.data.readingDuration
                        ? 100
                        : (100 * day.duration) / props.data.readingGoal
                    }
                    trailWidth="15"
                    trailColor="#CCF0C5"
                    strokeWidth="15"
                    strokeColor="#1BBC9B"
                  />
                </td>
              );
            })}
          </tr>
          <tr>
            <td className={today.week === 4 ? "day-active" : ""}>
              {today.week === 4 ? "This Week  (29-31)" : `29-31 ${today.month}`}
            </td>
            {props.progress.slice(28, 31).map((day, index) => {
              return (
                <td key={index}>
                  <Circle
                    percent={
                      day.duration > props.data.readingDuration
                        ? 100
                        : (100 * day.duration) / props.data.readingGoal
                    }
                    trailWidth="15"
                    trailColor="#CCF0C5"
                    strokeWidth="15"
                    strokeColor="#1BBC9B"
                  />
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
    </ProgressContainer>
  );
}

const ProgressContainer = styled.div`
  position: relative;
  .progress-table {
    text-align: center;
  }
  .p-table {
    margin: auto;
    width: 75%;
    font-size: 0.8rem;
  }
  .p-table td {
    padding: 10px;
    width: 12.25%;
    /* width: 12px; */
    color: rgba(0, 0, 0, 0.5);
  }
  .p-table .day-active {
    color: #000;
    font-weight: bolder;
  }

`