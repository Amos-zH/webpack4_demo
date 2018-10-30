import React from 'react';
import {render} from 'react-dom';
import Hello from './component.js';
import './demo.less';

render(
    <Hello />,
    document.getElementById('app')
);