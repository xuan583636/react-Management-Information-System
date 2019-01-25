import React from 'react';
import {Link } from 'react-router-dom'

export default class Main extends React.Component {
    render() {
        return (
            <div>
                This is Main pages
                <br/>
                <Link to='/main/test-id/nihao'>嵌套路由1</Link>
                <br/>
                <Link to='/main/456/hel'>嵌套路由2</Link>
                <hr/>
                {this.props.children}
            </div>
        )
    }
}