import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';

export default (store) => {
    return (
        <BrowserRouter>
            <Route path="/hello" component={App} />
        </BrowserRouter>
    )
}