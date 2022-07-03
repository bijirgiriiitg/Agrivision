import React from 'react';
import CheckIcon from '@material-ui/icons/Check';

function LearningContent({data}) {

    function createDetails(detail, index) {
        return (
            <li key={index}>
                {<CheckIcon />} {detail}
            </li>
        )
    }
    return (
        <>
            {data.map(createDetails)}
        </>
    )
}

export default LearningContent;