import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { AppContainer } from 'react-hot-loader';
import Hello from './page';

if (module.hot) {
    module.hot.accept(() => {
        render(
            <AppContainer>
                <BrowserRouter>
                    <Hello />
                </BrowserRouter>
            </AppContainer>,
            document.getElementById('app')
        );
    })
}

render(
    <AppContainer>
        <BrowserRouter>
            <Hello />
        </BrowserRouter>
    </AppContainer>,
    document.getElementById('app')
);