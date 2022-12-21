import React from 'react';
import styled from "styled-components";
const ProgressStyles = styled.div`
  width: 100%;
.progress-bar {
  height: 20px;
  background-color: #ddd;
  border-radius: 10px;
}

.progress {
  background-color: #4caf50;
  height: 100%;
  border-radius: 10px;
}
`;
function MyProgressBar(props) {
  console.log("🚀 ~ file: MyProgressBar.js:22 ~ MyProgressBar ~ props", props)
  return (
    <ProgressStyles>
      <div className="progress-bar" >
        <div
          className="progress"
          style={{ width: `${props.completion}%` }}
        ></div>
      </div>
    </ProgressStyles>
  );
}

export default MyProgressBar;