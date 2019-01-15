import React, {Component} from 'react'
import Child from './Child'
import './index.less'

export default class Lifestyle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    };

    handleOnclick() {
        this.setState({
            count: this.state.count + 1
        })
    }
    handleAdd = () => {
        this.setState({
            count: this.state.count + 1
        })
    }


    render() {
        let style = {
            padding:50
        }
        return (
            <div className="containt">
                <p>生命周期的介绍</p>
                <button onClick={this.handleAdd}>点击一下</button>
                <button onClick={this.handleOnclick.bind(this)}>点击一下</button>
                <p>{this.state.count}</p>
                <Child name={this.state.count}></Child>
            </div>
        );
    }
}

