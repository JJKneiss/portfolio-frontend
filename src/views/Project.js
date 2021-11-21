import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

import Icon from '../components/Icon';

import Header from '../components/Header';
// import Project from '../components/Project';

export default function Portfolio() {
    let url = "https://jamiekneiss-portfolio-backend.herokuapp.com";
    const [project, setProject] = useState({
        id: '',
        name: '',
        description: '',
        frontEnd: '',
        backEnd: '',
        siteLink: ''
    });
    useEffect(() => {
        let loadAPI = async () => {
            try {
                let location = window.location.href;
                let id = location.split('/');
                let projectId = id[5];

                const response = await fetch(url + '/api/projects/' + projectId);
                const data = await response.json();
                console.log(data);
                let arr = project || [];
                if (data.length === 0) {
                    alert("No results.");
                }
                else {
                    setProject({
                        id: data.id,
                        name: data.name,
                        description: data.description,
                        frontEnd: data.frontEnd,
                        backEnd: data.backEnd,
                        siteLink: data.siteLink,
                        thumbnailImage: data.thumbnailImage
                    });
                }
            }
            catch (err) {
                console.log(err);
            }
        }
        loadAPI();
    }, []);
    let frontEndItems = project.frontEnd.split('/');
    let backEndItems = project.backEnd.split('/');

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
        <div className="App">
            <Header />
            <h1>My <span>Portfolio</span></h1>
            <NavLink to="/portfolio"> {"<-- Back"} </NavLink>
            <section>
                <h2>{project.name || 'Loading'}</h2>
                <p>{project.description || 'Loading'}</p>
                <p>
                    <a href={project.siteLink}>Live Project</a>
                </p>
                <img src={project.thumbnailImage} height={224} />
            </section>
            <section>
                <h3>Tech Stack</h3>
                <ul>
                    {iconStack}
                </ul>
            </section>
        </div >
    );
}