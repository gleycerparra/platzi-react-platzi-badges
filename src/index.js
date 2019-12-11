import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './global.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import Badge from './components/Badge';
import BadgeNew from './pages/BadgeNew';

ReactDOM.render(<BadgeNew />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
