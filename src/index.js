import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import ReactDOM from 'react-dom/client';
import React from 'react';

import {setupStore} from "./redux";
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));

const store = setupStore()

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);

