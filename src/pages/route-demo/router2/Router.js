import React from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import Main from './Main'
import About from './About'
import Topic from './Topic'
import Home from './Home'

export default class IRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <Home>
                    <Route path='/main' render={() =>
                        <Main>
                            <Route path='/main/a' component={About}></Route>
                        </Main>
                    }></Route>
                    <Route path='/about' component={About}></Route>
                    <Route path='/topics' component={Topic}></Route>
                </Home>
            </HashRouter>
        )
    }
}