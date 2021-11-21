import React from 'react';
import { NavLink } from 'react-router-dom';

import Header from '../components/Header';
import Icon from '../components/Icon';
export default function Home() {
    return (
        <div className="App">
            <Header />

            <img src={'https://drive.google.com/uc?export=view&id=1Cbx3VgavHPJuzkJ9gRmTaL2Gl6B0QemT'} height={224} className="portrait" alt="portrait" />
            <h1>
                Jamie <span> Kneiss</span>
            </h1>
            <h2>React Focused Developer</h2>
            <section>
                <h2 className="section-heading">About Me</h2>
                <p>Hi 👋, I'm Jamie, a React focused web developer with a passion for learning and helping others learn. My portfolio can be found <NavLink to="/portfolio">here</NavLink>.</p>
            </section>
            <section>
                <h2 className="section-heading">Technical Skills</h2>
                <p>My typical tech stack includes </p>
                <ul className="skills">
                    <Icon name="JS" src={'https://drive.google.com/uc?export=view&id=1v2DjdWcJcq5M6VG14FpfY8e-FJgdC9iI'} />
                    <Icon name="HTML" src={'https://drive.google.com/uc?export=view&id=1anlEk4J-GnsZa2as0z684ih5CgADDTGT'} />
                    <Icon name="ReactJS" src={'https://drive.google.com/uc?export=view&id=10sjd8u_5jhlTXybqMPvf0EopobBJ68Bw'} />
                    <Icon name="SASS" src={'https://drive.google.com/uc?export=view&id=1xOFi9wH_KhRa0pg5mNSC4s7YMr2F8fBR'} />
                    <Icon name="NodeJS" src={'https://drive.google.com/uc?export=view&id=1oSVUJ6FjvYHpGsKFD2s8Le49pvL0oVR-'} />
                    <Icon name="ExpressJS" src={'https://drive.google.com/uc?export=view&id=1BjdBsqJciEaUOvjM6xCFa0MNBQFMECxL'} />
                    <Icon name="Heroku" src={'https://drive.google.com/uc?export=view&id=1rTzMkHsMjGtTSoYW252V527qx23sy-IN'} />
                    <Icon name="VSCode" src={'https://drive.google.com/uc?export=view&id=1RVVwm-YMkZLtUfOaRos8Ry5IfTLz1Y_7'} />
                </ul>
            </section>
            <section>
                <h2 className="section-heading">Competencies</h2>
                <p>In addition to my primary skills I've also grown proficient in both relational and nonrelational databases (primarily <span style={{
                    fontWeight: 'bold'
                }}>mongo and mysql</span>), alternate frontend frameworks (such as <span style={{
                    fontWeight: 'bold'
                }}>svelte and vue</span>), and the basics of various AWS applications (specifically <span style={{
                    fontWeight: 'bold'
                }}>S3, EC2, and serverless functions</span>).</p>
            </section>
            <section>
                <h2 className="section-heading">Soft Skills</h2>
                <p>During my time at Full Sail and in other roles I've gained a number of soft skills, including communication, research, a marked persistence, </p>
            </section>
            <section>
                <h2 className="section-heading">Education</h2>
                <p>During my time at Full Sail and in other roles I've gained a number of soft skills, including communication, research, a marked persistence, </p>
            </section>
        </div >
    );
}