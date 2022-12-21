import ProgressBar from 'react-bootstrap/ProgressBar';
import React from 'react';

const MyProgressBar = () => {
    return (
        <div>
            <ProgressBar striped variant="success" now={40} />

        </div>
    );
};

export default MyProgressBar;
