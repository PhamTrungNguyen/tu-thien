import ProgressBar from 'react-bootstrap/ProgressBar';
import React from 'react';

const MyProgressBar = () => {
    const now = 60;
    return <ProgressBar now={now} label={`${now}%`} />;
};

export default MyProgressBar;
