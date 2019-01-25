import React from 'react';
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/main">首页</Link></li>
                    <li><Link to="/about">关于</Link></li>
                    <li><Link to="/topics">主题列表</Link></li>
                    <li><Link to="/default1">默认路由1</Link></li>
                    <li><Link to="/default2">默认路由2</Link></li>
                </ul>
                <hr />
                {this.props.children}
            </div>

        )
    }
}