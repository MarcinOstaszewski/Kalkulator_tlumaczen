import React from 'react';
import ReactDOM from 'react-dom';

require('../sass/main.scss');

import Hero from './hero.jsx';
import Calculator from './calculator.jsx';
import AboutUs from './aboutus.jsx';
import Credentials from './credentials.jsx';
import Partners from './partners.jsx';
import Contact from './contact.jsx';

document.addEventListener('DOMContentLoaded', function () {

    class App extends React.Component {
        render() {
            return (
                <div>
                    <Hero />
                    <Calculator />
                    <AboutUs/>
                    <Credentials/>
                    <Partners/>
                    <Contact/>
                </div>
            )
        }
    }

    ReactDOM.render(
        <App/>, document.getElementById('app'));
});