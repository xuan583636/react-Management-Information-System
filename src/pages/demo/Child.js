import React, { Component } from 'react'
export default class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    };
    componentWillMount() {
        console.log("will mount")
    }
    componentDidMount() {
        console.log("did mount")
    }
    componentWillReceiveProps(newprops) {
        console.log('will props' + newprops.name)
    }
    shouldComponentUpdate() {
        console.log('should update');
        return true;
    }

    componentWillUpdate() {
        console.log('will update');
    }

    componentDidUpdate() {
        console.log('DID update');
    }
    render() {
        return (
            <div>
                <p>这是Child组件</p>
                <p>{this.props.name}</p>
            </div>
        )

    }
}