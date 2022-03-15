import React from 'react';
import { NavLink } from 'react-router-dom';

import Header from '../components/Header';
import PageTitle from '../components/PageTitle';
export default function Blog() {
    document.title = 'Blog';
    return (
        <div className="App">
            <Header />
            <PageTitle text="My" highlight="Blog" />
            <section>
                <h2>This Page is currently in development!</h2>
                <h3 style={{
                    textAlign: 'center'
                }}>Check back in April!</h3>
                <p style={{
                    textAlign: 'center',
                    margin: 100,
                    color: "#E8EFF4"
                }}>
                    In the meantime if you would like to contact me feel free to do so <NavLink to="/contact">here</NavLink>
                </p>
            </section>
        </div >
    );
}