import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import Header from '../components/Header';
import Icon from '../components/Icon';
import PageTitle from '../components/PageTitle';
export default function Home() {
    // const [title, setTitle] = useState('Loading');
    // useEffect(() => {
    //     setTitle("This is a cool title");
    // }, []);
    // setTitle('Home');
    document.title = 'Home';
    return (
        <div className="App">
            <Header />

            <img src={'https://drive.google.com/uc?export=view&id=1Cbx3VgavHPJuzkJ9gRmTaL2Gl6B0QemT'} height={224} className="portrait" alt="portrait" />

            <PageTitle text="Jamie" highlight="Kneiss" />
            <h2>React Focused Developer</h2>
            <section>
                <h2 className="section-heading">About Me</h2>
                <article>
                    <p>Hi 👋, I'm Jamie, a React focused web developer with a passion for learning and helping others learn. My portfolio can be found <NavLink to="/portfolio">here</NavLink>.</p>
                </article>
            </section>
            <section>
                <h2 className="section-heading">Technical Skills</h2>
                <article>
                    <p className="description">As my skillset grows I continue to realize just how important the fundamental skills are. I've grown a strong foundation in the following technologies and tools.</p>
                    <div className="skills-section">
                        <div className="frontend">
                            <h3>Frontend</h3>
                            <ul className="skills">
                                <Icon name="JS" src={'https://drive.google.com/uc?export=view&id=1v2DjdWcJcq5M6VG14FpfY8e-FJgdC9iI'} />
                                <Icon name="HTML" src={'https://drive.google.com/uc?export=view&id=1anlEk4J-GnsZa2as0z684ih5CgADDTGT'} />
                                <Icon name="CSS" src={'https://drive.google.com/uc?export=view&id=1riFdLqYCVVdhJ7r_wMLV_XYD-w2IcnmO'} />
                                <Icon name="ReactJS" src={'https://drive.google.com/uc?export=view&id=10sjd8u_5jhlTXybqMPvf0EopobBJ68Bw'} />
                                <Icon name="SASS" src={'https://drive.google.com/uc?export=view&id=1xOFi9wH_KhRa0pg5mNSC4s7YMr2F8fBR'} />
                            </ul>
                        </div>
                        <div className="backend">
                            <h3>Backend</h3>
                            <ul className="skills">
                                <Icon name="NodeJS" src={'https://drive.google.com/uc?export=view&id=1oSVUJ6FjvYHpGsKFD2s8Le49pvL0oVR-'} />
                                <Icon name="ExpressJS" src={'https://drive.google.com/uc?export=view&id=1BjdBsqJciEaUOvjM6xCFa0MNBQFMECxL'} />
                                <Icon name="Heroku" src={'https://drive.google.com/uc?export=view&id=1rTzMkHsMjGtTSoYW252V527qx23sy-IN'} />
                                <Icon name="MongoDB" src={'https://drive.google.com/uc?export=view&id=1Qu_Xk8H-d970UWagtxp58DuoiOKSy-Bh'} />
                                <Icon name="MySQL" src={'https://drive.google.com/uc?export=view&id=1-NbBm1xqSRlaUc-Zt4e6FQpvm88i1OZh'} />
                            </ul>
                        </div>
                        <div className="other-tools">
                            <h3>Other Tools</h3>
                            <ul className="skills">
                                <Icon name="Command Line" src={'https://drive.google.com/uc?export=view&id=1W6tjSeFk53Mc1t1vbzm6pM4SZS5SG8yL'} />
                                <Icon name="Git" src={'https://drive.google.com/uc?export=view&id=1LQj7Jy8kY0w0RPfZcwfLShN6vWJEzyyZ'} />
                                <Icon name="Github" src={'https://drive.google.com/uc?export=view&id=1LZawFzmeNo7BstQWV9jA0e81rtWvizcF'} />
                                <Icon name="VSCode" src={'https://drive.google.com/uc?export=view&id=1RVVwm-YMkZLtUfOaRos8Ry5IfTLz1Y_7'} />
                            </ul>
                        </div>
                    </div>
                </article>
            </section>
            <section>
                <h2 className="section-heading">Competencies</h2>
                <article>
                    <p>In addition to my primary skills I've also grown proficient in both relational and nonrelational databases (primarily <span style={{
                        fontWeight: 'bold'
                    }}>mongo and mysql</span>), alternate frontend frameworks (such as <span style={{
                        fontWeight: 'bold'
                    }}>svelte and vue</span>), and the basics of various AWS applications (specifically <span style={{
                        fontWeight: 'bold'
                    }}>S3, EC2, and serverless functions</span>).</p>
                </article>
            </section>
            <section>
                <h2 className="section-heading">Soft Skills</h2>
                <article>
                    <p>During my time at Full Sail and in other roles I've gained a number of soft skills, including communication, research, a marked persistence, </p>
                </article>
            </section>
            <section>
                <h2 className="section-heading">Education</h2>
                <article>
                    <h3><a href="https://www.fullsail.edu/">Full Sail University</a>, Web Design and Development Bachelor's Degree</h3>
                    <p><time datetime="2019-04">March 2019</time> to <time datetime="2019-04">November 2021</time></p>
                </article>
            </section>
        </div >
    );
}