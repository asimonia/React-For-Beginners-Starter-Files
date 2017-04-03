import React from 'react';			// imports the entire React package from react module
import { render } from 'react-dom'; // import the render method from the react-dom

import StorePicker from './components/StorePicker'; // import the StorePicker component from the directory

render(<StorePicker/>, document.querySelector('#main')); // Mount the StorePicker component on the #main element