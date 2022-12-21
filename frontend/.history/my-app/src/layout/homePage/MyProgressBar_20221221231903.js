import React from 'react';
import styled from "styled-components";
const ProgressStyles = styled.div`
  .progress-bar {
  width: 500px;
  height: 20px;
  background-color: #ddd;
  border-radius: 10px;
}

.progress-bar::-webkit-progress-bar {
  background-color: #ddd;
  border-radius: 10px;
}

.progress-bar::-webkit-progress-value {
  background-color: #4caf50;
  border-radius: 10px;
}
`;
function MyProgressBar(props) {
    return (
        <ProgressStyles>
            <div className="progress-bar">
                <div
                    className="progress"
                    style={{ width: `${props.completion}%` }}
                >123</div>
            </div>
        </ProgressStyles>
    );
}

export default MyProgressBar;