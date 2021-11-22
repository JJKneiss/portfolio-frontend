import React from 'react';

import Header from '../components/Header';
import Icon from '../components/Icon';
//1LZawFzmeNo7BstQWV9jA0e81rtWvizcF
export default function Contact() {
    return (
        <div className="App">
            <Header />
            <h1>Contact <span>Me</span></h1>
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
                <form>
                    <label>Name</label>
                    <input type="text" placeholder="Name" />
                    <label>email</label>
                    <input type="email" placeholder="Email" />
                    <label>Message</label>
                    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div >
    );
}