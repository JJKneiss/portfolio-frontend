import React from 'react';
import { NavLink } from 'react-router-dom';

import Header from '../components/Header';

export default function Blog() {
    return (
        <div className="App">
            <Header />
            <div>
                <h1>My <span>Blog</span></h1>
                <section>
                    <h2>This Page is currently in development!</h2>
                    <h3 style={{
                        textAlign: 'center'
                    }}>Come Back January 5th!</h3>
                    <p style={{
                        textAlign: 'center',
                        margin: 100,
                        color: "#E8EFF4"
                    }}>
                        In the meantime if you would like to contact me feel free to do so <NavLink to="/contact">here</NavLink>
                    </p>
                </section>
            </div>
        </div >
    );
}