import React from 'react';
import { Link, Route, HashRouter,Switch} from 'react-router-dom'
import Main from './Main'
import About from './About'
import Topic from './Topic'
export default class Home extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/about">关于</Link></li>
                        <li><Link to="/topics">主题列表</Link></li>
                    </ul>
                    <hr/>
                    <Switch>
                        <Route exact={true} path='/' component={Main}></Route>
                        <Route path='/about' component={About}></Route>
                        <Route path='/topics' component={Topic}></Route>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}