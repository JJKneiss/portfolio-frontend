import React from 'react';

import Header from '../components/Header';

export default function Contact() {
    return (
        <div className="App">
            <Header />
            <h1>Contact <span>Me</span></h1>
            <h2>Let's Get In Touch!</h2>
            <div class="container">
                <form>
                    <label>email</label>
                    <input type="email" placeholder="Email" />
                    <label>message</label>
                    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div >
    );
}