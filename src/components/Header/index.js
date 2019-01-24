import React from 'react'
import { Row, Col } from 'antd';
import './index.less'
import Utils from './../../utils/util'
import Axios from "./../../axios/index"
import { resolve } from 'path';
import CryptoJS from 'crypto-js'
var hmacsha1 = require('hmacsha1');

export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: "河畔一角",
            systemTime: null,
            weather:null
        }
        this.timeSetting();
       // this.getWeatherAPIData();
    }
    
     
    timeSetting = () => {
        setInterval(() => {
            let systemTime = Utils.formatDate(new Date().getTime());
            //let systemTime = new Date().getTime();
            this.setState({ systemTime: systemTime })
        }, 1000);
    }

    getWeatherAPIData = () => {
        let city = encodeURIComponent('北京');
        let url = `http://v.juhe.cn/weather/index?format=2&cityname=北京&key=a413f967dec77d15d43c34978cf39c6d`

        Axios.jsonp({
            url:url
                }).then((res) => {
            if(res.resultcode == 200){
                 let {result:{future:[{temperature,weather}]}} = res;
                 let weatherstate = `${temperature} ${weather}`
                 console.log(weatherstate)
                 this.setState({weather:weatherstate})
            }
        })
    }

    render() {
        return (
            <div className="header">
                <Row className='header-top'>
                    <Col span={24} >
                        <span>欢迎,{this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className='breadcrumb'>
                    <Col span={4} className='breadcrumb-title'>首页</Col>
                    <Col span={20} className='weather'>
                        <span className='date'>{this.state.systemTime}</span>
                        <span className='weather-detail'>{this.state.weather}</span>
                    </Col>
                </Row>
            </div>
        )
    }
}
