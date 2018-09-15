import React from 'react';
import ReactDOM from 'react-dom';
import '../src/assets/css/App.css';
import App from '../src/App.tsx';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
