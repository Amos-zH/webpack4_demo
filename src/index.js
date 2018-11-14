import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Hello from './page';
import './index.less';

render(
    <BrowserRouter>
        <Hello />
    </BrowserRouter>,
    document.getElementById('app')
);