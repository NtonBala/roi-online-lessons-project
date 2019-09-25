// Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'connected-react-router';

// Instruments
import { store } from './init/store';
import { history } from './init/middleware';

// Routes
import { Routes } from './routes';

// Components
import { Bridge, Profile, Panel } from './components';

render(
    <Provider store = { store } >
        <Panel />
        {

            /*
            <Router history = { history } >
                <Routes />
            </Router>
            */
        }
    </Provider>,
    document.getElementById('app'),
);
