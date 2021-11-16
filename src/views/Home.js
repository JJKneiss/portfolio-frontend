import React from 'react';

import Header from '../components/Header';
import portrait from '../images/portrait.png'
import html from '../images/html-icon.png'
import react from '../images/react-icon.png'
import sass from '../images/sass-icon.png'
import node from '../images/nodejs.png'
import heroku from '../images/heroku-icon.png'


export default function Home() {
    return (
        <div className="App">
            <Header />
            <img src={portrait} height={224} className="portrait" />
            <h1>Jamie <span>Kneiss</span></h1>
            <h2>React Focused Developer</h2>
            <section>
                <h2 className="section-heading">About Me</h2>
                <ul>
                    <li>
                        <img src={html} height={30} alt="html icon" />
                    </li>
                    <li>
                        <img src={sass} height={30} alt="sass icon" />
                    </li>
                    <li>
                        <img src={node} height={30} alt="node icon" />
                    </li>
                    <li>
                        <img src={react} height={30} alt="react icon" />
                    </li>
                    <li>
                        <img src={heroku} height={30} alt="heroku icon" />
                    </li>
                </ul>
                <p>Description</p>
            </section>
            <section>
                <h2 className="section-heading">Primary Skills</h2>
                <ul>
                    <li>ReactJS</li>
                    <li>HTML5 / CSS3 / ES6</li>
                    <li></li>
                    <li></li>
                </ul>
                <p>Description</p>
            </section>
            <section>
                <h2 className="section-heading">Proficiencies</h2>
                <p>Description</p>
                <ul>
                    <li>ReactJS</li>
                    <li>HTML5 / CSS3 / ES6</li>
                    <li></li>
                    <li></li>
                </ul>
            </section>
            <section>
                <h2 className="section-heading">Soft Skills</h2>
                <p>Description</p>
                <ul>
                    <li>Communication</li>
                    <li>Persistence</li>
                    <li></li>
                    <li></li>
                </ul>
            </section>
        </div >
    );
}