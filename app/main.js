import React from 'react';
import Router from 'react-router';
import routes from './routes.js';

Router.run(routes , Router.HistoryLocation , function(Handler) {
	React.render(<Handler /> , document.getElementById('app'))
})