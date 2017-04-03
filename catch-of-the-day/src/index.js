import React from 'react';			// imports the entire React package from react module
import { render } from 'react-dom'; // import the render method from the react-dom
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css';			// import stylings from the style.css file
import App from './components/App';
import StorePicker from './components/StorePicker'; // import the StorePicker component from the directory
import NotFound from './components/NotFound';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={StorePicker} />
				<Match pattern="/store/:storeId" component={App} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)
}

render(<Root/>, document.querySelector('#main')); // Mount the StorePicker component on the #main element