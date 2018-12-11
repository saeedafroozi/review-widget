import React from 'react';
import ReactDOM from 'react-dom';
import '../src/style/index.scss';
import App from './component/App';
import data from './data'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App review={data}/>, document.getElementById('root'));
registerServiceWorker();
