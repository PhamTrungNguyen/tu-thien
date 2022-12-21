import ProgressBar from 'react-bootstrap/ProgressBar';
import React from 'react';

const MyProgressBar = () => {
    const now = 60;
    return <div>
        123
        <ProgressBar now={now} label={`${now}%`} />
    </div>
};

export default MyProgressBar;
