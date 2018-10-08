import React, { Component } from 'react';
import {
  Menu,
} from 'antd';
import PropTypes from 'prop-types';
import { message } from '../../utils/label';
import { MENU_CONFIG } from '../../constants/menu';

const { SubMenu } = Menu;

class SideMenu extends Component {
  constructor(props) {
    super(props);
    //get urlPath
    const pathName = props.location && props.location.pathname;
    let selectedKeys = [];
    let openKeys = [];
    if(pathName) {
      selectedKeys.push(pathName.split('/')[1]);
    }
    MENU_CONFIG.map(menu => {
      const parentKey = menu.key;
      menu.children.map(childMenu => {
        if(childMenu.key === pathName.split('/')[1]) {
          openKeys.push(parentKey);
        }
      });
    });
    this.state = {
      selectedKeys: selectedKeys,
      openKeys: openKeys,
    };
  }

  static propTypes = {
    history: PropTypes.object.isRequired,
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.location) {
      const pathName = nextProps.location.pathname;
      let selectedKeys = [];
      let openKeys = [];
      if(pathName) {
        selectedKeys.push(pathName.split('/')[1]);
      }
      MENU_CONFIG.map(menu => {
        const parentKey = menu.key;
        menu.children.map(childMenu => {
          if(childMenu.key === pathName.split('/')[1]) {
            openKeys.push(parentKey);
          }
        });
      });
      this.setState({
        selectedKeys,
        openKeys,
      });
    }
  }

  handleTitleClick = (openKeys) => {
    if(openKeys.length === 0) {
      this.setState({
        openKeys: [],
      });
    } else {
      this.setState({
        openKeys: [openKeys.pop()],
      });
    }
  }

  getSubMenus = menus => {
    let　roleKeys = '';
    if(!this.props.role.isFetching && !this.props.role.error) {
      roleKeys = this.props.role.payload && this.props.role.payload.actions || '';
      roleKeys = roleKeys.split(',');
    }
    return menus.map(menu => {
      const { label, children, key } = menu;
      if(!roleKeys.includes(key)){
        return null;
      }
      if (!Array.isArray(children)) {
        return (<Menu.Item key={key} path={`/${key}`}><span>{message(label)}</span></Menu.Item>);
      } else {
        return (
          <SubMenu key={key} title={<span>{message(label)}</span>}>
            {this.getSubMenus(children)}
          </SubMenu>
        );
      }
    });
  }

  handleClickMenu = ({ item, key, keyPath }) => {
    const url = item.props.path;
    this.props.history.push(url);
  }

  render() {
    return (
      <Menu
        theme="dark"
        mode="inline"
        style={{ borderRight: 0 }}
        openKeys={this.state.openKeys }
        selectedKeys={ this.state.selectedKeys }
        onClick={ this.handleClickMenu }
        onOpenChange={this.handleTitleClick}
      >
        {this.getSubMenus(MENU_CONFIG)}
      </Menu>
    );
  }
}

export default SideMenu;
