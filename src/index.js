import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

console.json = function(obj, text = "") {
    return console.log(text + JSON.stringify(obj, null, 2));
};

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
