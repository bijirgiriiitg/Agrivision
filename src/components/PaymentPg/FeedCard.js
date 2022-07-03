import React from 'react';
import Rating from './Rating.js'


function FeedCard(props) {
    return (
        <div className='feedColOne'>
            <h1>{props.rating}</h1>
            <Rating value={props.rating} />
            <p>Course Rating</p>
        </div>
    )
}

export default FeedCard;