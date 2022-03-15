import React from 'react';

import Header from '../components/Header';
import Icon from '../components/Icon';
import PageTitle from '../components/PageTitle';
export default function Contact() {
    document.title = 'Contact';
    return (
        <div className="App">
            <Header />
            <PageTitle text="Contact" highlight="Me" />
            <h2>Let's Get In Touch!</h2>
            <a href="https://github.com/JJKneiss">
                <Icon name="github" src={'https://drive.google.com/uc?export=view&id=1LZawFzmeNo7BstQWV9jA0e81rtWvizcF'} />
            </a>
            <a href="https://twitter.com/jjkneiss">
                <Icon name="twitter" src={'https://drive.google.com/uc?export=view&id=1Uu6jr-XyB211RQrV0vkUTaUFJfFjSN0X'} />
            </a>

            <a href="https://www.instagram.com/punkdev_jay/">
                <Icon name="instagram" src={'https://drive.google.com/uc?export=view&id=1sl1PmP4xq-X7IFcBMig7c2RN1raaO36F'} />
            </a>
            <a href="https://www.linkedin.com/in/jjkneiss/">
                <Icon name="linkedin" src={'https://drive.google.com/uc?export=view&id=1OMXztdJ3vQyusTG9LTTXn6Ey8oL43kff'} />
            </a>
            <div class="container">
                <form action="https://formsubmit.co/jamiejk@icloud.com" method="POST">
                    {/* <label>Name</label>
                    <input type="text" name="name" placeholder="Name" /> */}
                    <label>Email</label>
                    <input type="email" name="email" placeholder="email" required />
                    <label>Subject</label>
                    <input type="text" name="_subject" placeholder="subject" />

                    <label>Message</label>
                    <textarea id="message" type="text" name="message" placeholder="your message here..."></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div >
    );
}