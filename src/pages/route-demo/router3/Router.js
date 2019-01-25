import React from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import Main from './Main'
import About from './About'
import Info from './info'
import Topic from './Topic'
import Home from './Home'
import Default from './Default'

export default class IRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <Home>
                    
                        <Route path='/main' render={() =>
                            <Main>
                                <Route path='/main/:mainId/:value' component={Info}></Route>
                            </Main>
                        }></Route>
                        <Route path='/about' component={About}></Route>
                        <Route path='/topics' component={Topic}></Route>
                        <Route  component={Default}></Route>
                  
                </Home>
            </HashRouter>
        )
    }
}