import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Posts } from './components';

export default (store) => {
    return (
        <BrowserRouter>
            <div>
                Header
                <Route path="/" component={Posts} />
            </div>
        </BrowserRouter>
    )
}