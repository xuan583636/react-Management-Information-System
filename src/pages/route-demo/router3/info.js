import React from 'react';

export default class Info extends React.Component {
    render() {
        return (
            <div>
                这里是测试动态路由功能
                {this.props.match.params.mainId} 
                <br/>
                {this.props.match.params.value}  
            </div>
        )
    }
}