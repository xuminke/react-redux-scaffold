import React, { Component } from 'react';
import {
  Row,
  Col,
  Icon,
  Menu,
  Dropdown,
} from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../action/auth';
import { message } from '../../utils/label';
import { getUser, clearLocalToken } from '../../utils/token';


class TopNav extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired,
  }

  handleClick = clickedItem => {
    if( clickedItem.key === 'logout') {
      this.props.logout();
      clearLocalToken();
      //todo clear server's token
      this.props.history.push('/login');
    } else if( clickedItem.key === 'help') {
      this.props.history.push(`/help?backUrl=${this.props.location.pathname}`);
    }

  }

  render() {
    const userLayout = {
      xl: { span: 4, offset: 2 },
      xxl: { span: 3, offset: 3 },
    };
    const replacer = getUser().replace;
    const dropDownMenu = (
      <Menu onClick={ this.handleClick }>
        <Menu.Item key="logout"><Icon type="logout" />{ message('Label_Logout') }</Menu.Item>
        <Menu.Item key="help"><Icon type="question-circle-o" />{ message('Label_Help') }</Menu.Item>
      </Menu>
    );
    return (
      <Row>
        <Col span="18">
          <h1>{ message('Label_System_Title') }</h1>
        </Col>
        <Col { ...userLayout }>
          <Dropdown overlay={ dropDownMenu }>
            <label><Icon type="user" />{ getUser().userName }<Icon type="down" /></label>
          </Dropdown>
          <span>{ replacer && (replacer + message('Label_Represent'))}</span>
        </Col>
      </Row>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
  }
}
export default connect(null, mapDispatchToProps)(TopNav);
