import React from 'react';
import ReactDOM from 'react-dom';
import './Stylesheet/index.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
