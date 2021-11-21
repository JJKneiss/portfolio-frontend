import React from 'react';

import Header from '../components/Header';
import Icon from '../components/Icon';
export default function Home() {
    return (
        <div className="App">
            <Header />
            <img src={'https://drive.google.com/uc?export=view&id=1Cbx3VgavHPJuzkJ9gRmTaL2Gl6B0QemT'} height={224} className="portrait" alt="portrait" />
            <h1> Jamie <span> Kneiss</span></h1>
            <h2>React Focused Developer</h2>
            <section>
                <h2 className="section-heading">About Me</h2>
                <p>Hi 👋, I'm Jamie, a React focused web developer with a passion for learning and helping others learn.</p>
            </section>
            <section>
                <h2 className="section-heading">Primary Skills</h2>
                <div className="sub-section">
                    <h3>Frontend</h3>
                    <ul>
                        <Icon name="HTML" src={'https://drive.google.com/uc?export=view&id=1anlEk4J-GnsZa2as0z684ih5CgADDTGT'} />
                        <Icon name="ReactJS" src={'https://drive.google.com/uc?export=view&id=10sjd8u_5jhlTXybqMPvf0EopobBJ68Bw'} />
                        <Icon name="SASS" src={'https://drive.google.com/uc?export=view&id=1xOFi9wH_KhRa0pg5mNSC4s7YMr2F8fBR'} />
                    </ul>
                </div>
                <div className="sub-section">
                    <h3>Backend</h3>
                    <ul>
                        <Icon name="NodeJS" src={'https://drive.google.com/uc?export=view&id=1oSVUJ6FjvYHpGsKFD2s8Le49pvL0oVR-'} />
                        <Icon name="ExpressJS" src={'https://drive.google.com/uc?export=view&id=1BjdBsqJciEaUOvjM6xCFa0MNBQFMECxL'} />
                        <Icon name="Heroku" src={'https://drive.google.com/uc?export=view&id=1rTzMkHsMjGtTSoYW252V527qx23sy-IN'} />
                    </ul>
                </div>
            </section>
            <section>
                <h2 className="section-heading">Proficiencies</h2>
                <p>Description</p>
            </section>
            <section>
                <h2 className="section-heading">Soft Skills</h2>
                <p>During my time at Full Sail and in other roles I've gained a number of soft skills, including communication, research, a marked persistence, </p>
            </section>
        </div >
    );
}