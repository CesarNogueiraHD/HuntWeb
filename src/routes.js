import React from 'react'
import {BrowserRouter, Switch, Route, Router} from 'react-router-dom'

import Main from './pages/main'
import Product from './pages/product'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact component={Main} path="/" />
            <Route exact component={Product} path="/products/:id" />
        </Switch>
    </BrowserRouter>
)

export default Routes