import React from 'react';
import { NavLink } from 'react-router-dom';

import html from '../../images/html-icon.png'
import react from '../../images/react-icon.png'
import sass from '../../images/sass-icon.png'
import node from '../../images/nodejs.png'
import heroku from '../../images/heroku-icon.png'
import express from '../../images/express-icon.png'


/* JK: Basic Nav */
const Project = props => {
    let name = props.val.name;
    let description = props.val.description;
    let frontEnd = props.val.frontEnd;
    let backEnd = props.val.backEnd;

    let frontEndItems = frontEnd.split('/');
    let backEndItems = backEnd.split('/');

    let listings = [];
    frontEndItems.map((element, index) => {
        return listings.push(element);
    });
    backEndItems.map((element, index) => {
        return listings.push(element);
    })

    let icon;
    let iconStack;
    iconStack = listings.map((element, index) => {
        if (element.includes("SASS")) {
            icon = (<li>
                <img key={element.id} val={element} src={sass} height={40} alt="sass icon" />
            </li>)
        }
        else if (element.includes("React")) {
            icon = (<li>
                <img key={element.id} val={element} src={react} height={40} alt="react icon" />
            </li>)
        }
        else if (element.includes("HTML")) {
            icon = (<li>
                <img key={element.id} val={element} src={html} height={40} alt="html icon" />
            </li>)
        }
        else if (element.includes("CSS")) {
            icon = (<li>
                <img key={element.id} val={element} src={html} height={40} alt="css icon" />
            </li>)
        }
        else if (element.includes("Node")) {
            icon = (<li>
                <img key={element.id} val={element} src={node} height={40} alt="node icon" />
            </li>)
        }
        else if (element.includes("Heroku")) {
            icon = (<li>
                <img key={element.id} val={element} src={heroku} height={40} alt="heroku icon" />
            </li>)
        }
        else if (element.includes("Express")) {
            icon = (<li>
                <img key={element.id} val={element} src={express} height={40} alt="heroku icon" />
            </li>)
        } else {
            icon = (<li>
            </li>)
        }
        console.log(element);
        return icon;
    });
    return (
        <article>
            <h3>
                <NavLink to={`/portfolio/${name}`}>
                    {name}
                </NavLink>
            </h3>
            <p>{description}</p>
            <ul>
                {iconStack}
            </ul>
        </article >
    );
}

export default Project;