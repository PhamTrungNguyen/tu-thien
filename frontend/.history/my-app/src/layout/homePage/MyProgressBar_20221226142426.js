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
  background-color: #1f9ac0;
  height: 100%;
  border-radius: 10px;
}
.text-bar{
   position: absolute;
   top: 7px;
   left: 50%;
    transform: translate(-50%,-50%);
}
`;
function MyProgressBar(props) {
  const percent = props.completion >= 100 ? 100 : props.completion
  return (
    // <ProgressStyles>
    //   <div className="progress-bar" >
    //     <div
    //       className="progress"
    //       style={{ width: `${percent}%` }}
    //     ></div>
    //     <span className="text-bar">{`${percent}%`}</span>
    //   </div>
    // </ProgressStyles>
    <LinearProgressWithLabel value={progress} />
  );
}

export default MyProgressBar;