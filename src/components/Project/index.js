import React from 'react';
import { NavLink } from 'react-router-dom';

import Icon from '../Icon';

/* JK: Basic Nav */
const Project = props => {
    let id = props.val.id;
    let name = props.val.name;
    let description = props.val.description;
    let frontEnd = props.val.frontEnd;
    let backEnd = props.val.backEnd;
    let thumbnailImage = props.val.thumbnailImage;
    let siteLink = props.val.siteLink;


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
            icon = (<Icon iconKey={index} iconVal={element} name="SASS" src={'https://drive.google.com/uc?export=view&id=1xOFi9wH_KhRa0pg5mNSC4s7YMr2F8fBR'} />)
        }
        else if (element.includes("React")) {
            icon = (<Icon iconKey={index} iconVal={element} name="ReactJS" src={'https://drive.google.com/uc?export=view&id=10sjd8u_5jhlTXybqMPvf0EopobBJ68Bw'} />)
        }
        else if (element.includes("HTML")) {
            icon = (<Icon iconKey={index} iconVal={element} name="HTML" src={'https://drive.google.com/uc?export=view&id=1anlEk4J-GnsZa2as0z684ih5CgADDTGT'} />)
        }
        else if (element.includes("Node")) {
            icon = (<Icon iconKey={index} iconVal={element} name="NodeJS" src={'https://drive.google.com/uc?export=view&id=1oSVUJ6FjvYHpGsKFD2s8Le49pvL0oVR-'} height={40} alt="node icon" />)
        }
        else if (element.includes("Heroku")) {
            icon = (<Icon iconKey={index} iconVal={element} name="Heroku" src={'https://drive.google.com/uc?export=view&id=1rTzMkHsMjGtTSoYW252V527qx23sy-IN'} height={40} alt="heroku icon" />)
        }
        else if (element.includes("Express")) {
            icon = (<Icon iconKey={index} iconVal={element} name="Express" src={'https://drive.google.com/uc?export=view&id=1BjdBsqJciEaUOvjM6xCFa0MNBQFMECxL'} height={40} alt="express icon" />)
        }
        else {
            icon = (<li>
            </li>)
        }
        return icon;
    });
    return (
        <article>
            <h3>
                <NavLink to={`/portfolio/${id}`}>
                    {name}
                </NavLink>
            </h3>
            <img src={thumbnailImage} height={224} />
            <p>
                {description}
            </p>
            <NavLink to={`/portfolio/${id}`}>Read More</NavLink> | <a href={siteLink}>View Live</a>
            <section>
                <h3>Tech Stack</h3>
                <ul>
                    {iconStack}
                </ul>
            </section>
        </article >
    );
}

export default Project;