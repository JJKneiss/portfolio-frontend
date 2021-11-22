import React from 'react';

const Icon = (props, children) => {
    return (
        <li className="tooltip">
            <img key={props.key} val={props.val} src={props.src} height={30} alt={props.name + " icon"} />
            <span className="tooltiptext">{props.name}</span>
        </li>
    );
}

export default Icon;