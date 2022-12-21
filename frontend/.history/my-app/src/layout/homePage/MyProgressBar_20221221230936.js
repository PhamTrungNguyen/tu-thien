import ProgressBar from 'react-bootstrap/ProgressBar';
import React from 'react';

const MyProgressBar = () => {
    return (
        <div>
            <Row>

                <ProgressBar value={60} />
            </Row>
        </div>
    );
};

export default MyProgressBar;
