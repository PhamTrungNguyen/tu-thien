import { Progress, Row } from 'react-bootstrap';
import React from 'react';

const MyProgressBar = () => {
    return (
        <div>
            <Row>

                <Progress value={60} />
            </Row>
        </div>
    );
};

export default MyProgressBar;
