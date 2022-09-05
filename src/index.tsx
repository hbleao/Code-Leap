import React from 'react';
import ReactDom from 'react-dom';

import { App } from './App';

const domNode = document.querySelector('.__root');

ReactDom.render(<App />, domNode);
