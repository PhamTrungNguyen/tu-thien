import { Progress } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const MyProgressBar = () => {
    return (
        <div>
            <Progress value={60} />
        </div>
    );
};

export default MyProgressBar;
