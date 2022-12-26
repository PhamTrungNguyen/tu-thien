/* import React from 'react';
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
    <ProgressStyles>
      <div className="progress-bar" >
        <div
          className="progress"
          style={{ width: `${percent}%` }}
        ></div>
        <span className="text-bar">{`${percent}%`}</span>
      </div>
    </ProgressStyles>
  );
}

export default MyProgressBar; */
import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel(props) {
  const percent = props.completion >= 100 ? 100 : props.completion

  // const [progress, setProgress] = React.useState(10);

  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
  //   }, 800);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <Box sx={{ width: '95%' }}>
      <LinearProgressWithLabel value={percent} />
    </Box>
  );
}