import React from 'react';
import Rating from './Rating';
import Bar from './Bar.js'


function DisplayBar(props) {
    return (
        <div className='bar'>
            <div className='barPercentCont'>
                <div className='tension'>
                    <Bar percentage={props.percentage} />
                </div>
                <div className='spanPercent'> <span>{props.percentage}%</span></div>
            </div>
            <Rating value={props.rating} />
        </div>
    )
}

export default DisplayBar;