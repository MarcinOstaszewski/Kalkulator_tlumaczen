import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';

document.addEventListener('DOMContentLoaded', function () {

    class Main extends React.Component {
        render() {
            return (
                <div>
                    div
                </div>
            )
        }
    }

    class App extends React.Component {
        render() {
            return (
                <Main />
            )
        }
    }

    ReactDOM.render(
        <App/>, document.getElementById('app'));
});