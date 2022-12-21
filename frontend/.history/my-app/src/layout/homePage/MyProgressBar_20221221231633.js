import React from 'react';

function MyProgressBar(props) {
    return (
        <div className="progress-bar">
            <div
                className="progress"
                style={{ width: `${props.completion}%` }}
            ></div>
        </div>
    );
}

export default MyProgressBar;