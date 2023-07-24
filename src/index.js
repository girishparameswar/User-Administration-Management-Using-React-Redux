import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from  'redux';
import userReducer from './reducers/users';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = createStore(userReducer);

render(
<BrowserRouter>
<App store={store} />
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
