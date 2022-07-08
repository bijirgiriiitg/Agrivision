import React from 'react';
import Apkk from './unlock';
import "../../App.css";
import Appk from './food';
import Notes from './notes';
export const ReportsOne = () => {
  return (
    <div className='reports'>
      <Notes/>
    </div>
  );
};

export const ReportsTwo = () => {
  return (
    <div className='reports'>
    </div>
  );
};

export const ReportsThree = () => {
  return (
    <div className='reports'>
      <Appk/>
    </div>
  );
};
export const ReportsFour = () => {
  return (
    <div className='reports'>
      <Apkk/>
    </div>
  );
};
