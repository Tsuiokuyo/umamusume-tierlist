import React from 'react';

const breakTextIntoLines = (text) => {
    const splitText = text.split(/(\[[^\]]+\])/);
    return splitText;
};

const MultiLineText = (props) => {
    const splitText = breakTextIntoLines(props.twName);
    const twNameLines = splitText[1];
    const name = splitText[2];
    const nameStyle = {
        fontSize: name && name.length > 12 ? "x-small" : (name.length > 7 ? "smaller" : "medium"),
        color: props.isScenarioLink ? "#ffffff" : "inherit", 
        backgroundColor: props.isScenarioLink ? "#11c98f" : "inherit", 
        borderRadius: "10px",  
        padding: "3px",  
        display: "inline-block", 
        fontWeight:"bold"
    };
  
    return (
        <div>
            <span className="tw-name" style={nameStyle}>
                {name}
            </span>
        </div>
    );    
};

export default MultiLineText;
