import React from 'react';
import styled from "styled-components";
const ProgressStyles = styled.div`
  width: 100%;
.progress-bar {
  height: 15px;
  background-color: #ddd;
  border-radius: 10px;
   position: relative;
}

.progress {
  background-color: #4caf50;
  height: 100%;
  border-radius: 10px;
}
.text-bar{
   position: absolute;
   top: 10px;
   left: 50%;
    transform: translate(-50%,-50%);
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
        <span className="text-bar">{`${props.completion}%`}</span>
      </div>
    </ProgressStyles>
  );
}

export default MyProgressBar;