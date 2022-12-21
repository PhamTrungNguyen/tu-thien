import React from 'react';
import styled from "styled-components";
const ProgressStyles = styled.div`
width: 100%;
  .progress-bar {
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
.progress {
  border-radius: 10px;
  background-color: #4caf50;

}
`;
function MyProgressBar(props) {
  console.log("🚀 ~ file: MyProgressBar.js:22 ~ MyProgressBar ~ props", props)
  return (
    <ProgressStyles>
      <div className="progress-bar" style={{ width: `${props.completion}%` }}>

      </div>
    </ProgressStyles>
  );
}

export default MyProgressBar;