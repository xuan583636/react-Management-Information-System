import React from 'react';
import MenuConfig from './../../config/menuConfig';
import './index.less'
import { Menu, Icon } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';

const SubMenu = Menu.SubMenu;
export default class NavLeft extends React.Component {
    constructor() {
        super();
        this.rootSubmenuKeys = [];
        this.state = {
            openKeys: [],
            menuTreeNode: this.renderMenu(MenuConfig)
        }
    }

    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                this.rootSubmenuKeys.push(item.key)
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return (
                <MenuItem title={item.title} key={item.key}>{item.title}</MenuItem>
            )
        })
    }

    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }
    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt="eee" />
                    <h1>Imooc MS</h1>
                </div>

                <Menu
                    mode="inline"
                    theme="dark"
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}
                >
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}
