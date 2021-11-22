
import React from 'react';

const PageTitle = (props, children) => {
    return (
        <h1>
            {props.text} <span> {props.highlight}</span><span className="blink">_</span>
        </h1>
    );
}

export default PageTitle;