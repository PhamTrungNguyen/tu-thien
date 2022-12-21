import React from 'react';
import styled from "styled-components";
const ProgressStyles = styled.div`
  
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