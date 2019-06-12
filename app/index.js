import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/js/button.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import appReducer from './reducers';

import { GstCalculatorContainer } from './containers/GstCalculatorContainer/GstCalculatorContainer';

if (module.hot){
    module.hot.accept('./reducers.js', function() {
        console.log('Accepting the updated reducer module!');
    });
    module.hot.accept('./actions.js', function() {
        console.log('Accepting the updated actions module!');
    });
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}

//Store

let store = createStore(appReducer);

(function() {
    ReactDOM.render(
        <Provider store={store}>
            <GstCalculatorContainer />
        </Provider>,
        document.getElementById('gstCalculator')
        );
})()

    
