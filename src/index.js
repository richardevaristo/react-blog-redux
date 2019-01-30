import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import Store from './app/Store'
import { HashRouter as Router } from 'react-router-dom'

ReactDOM.render(
<Provider store={Store}>
    <Router>
    <App />
    </Router>
</Provider>, 
document.getElementById('root'));
