import React from 'react';
import ReactDom from 'react-dom';
import Router from 'react-router';
import routes from 'routes';
import createBrowserHistory from 'history/lib/createBrowserHistory';
let history = createBrowserHistory();

ReactDom.render(<Router history={history}>{routes}</Router>, document.getElementById('content'));