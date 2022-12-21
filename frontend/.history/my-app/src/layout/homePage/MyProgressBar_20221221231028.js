import ProgressBar from 'react-bootstrap/ProgressBar';
import React from 'react';

const MyProgressBar = () => {
    return (
        <div>
            <ProgressBar variant="success" now={40} />

        </div>
    );
};

export default MyProgressBar;
