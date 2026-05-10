import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { store } from './store';

import GstCalculator from './components/GstCalculator/GstCalculator';

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}

(function() {
    const root = createRoot(document.getElementById('gstCalculator'));
    root.render(
        
        <Provider store={store}>
            <GstCalculator />
        </Provider>
    );
})()

    
