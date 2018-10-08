import React, { Component } from 'react';
import {
  Layout,
  Row,
  Col,
} from 'antd';
import { connect } from 'react-redux';
import { message } from '../utils/label';
import Notice from '../component/Login/Notice';
import LoginForm from '../component/Login/LoginForm';
import ModifyPassword from '../component/Login/ModifyPassword';
import Error from '../component/Login/Error';
import { getNotice, login, modifyPassword, getPasswordInfo } from '../action/auth';
import { getUser } from '../utils/token';

const { Header, Content } = Layout;

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      modifyPwdVisible: false,
      errorVisible: false,
    };
  }

  changeState = param => {
    if (param && param.modifyPwdVisible) {
      this.props.getPasswordInfo(getUser().userID);
    }
    this.setState(param);
  }

  render() {
    return (
      <Layout className="layout login">
        <Header className="header">
          <h1>{ message('Label_System_Title') }</h1>
        </Header>
        <Content>
          <Notice
            title={ message('Label_Notice_Title') }
            notice={ this.props.auth.notice }
            getNotice={ this.props.getNotice }
            auth={this.props.auth}
          />
          <LoginForm
            login={ this.props.login }
            token={ this.props.auth.token }
            history={ this.props.history }
            changeState={ this.changeState }
            auth={this.props.auth}
          />
          <ModifyPassword
            changeState={ this.changeState }
            visible={ this.state.modifyPwdVisible }
            modifyPassword={ this.props.modifyPassword }
            auth={this.props.auth}
          />
          <Error
            notice={ this.props.auth.notice }
            auth={this.props.auth}
            errorVisible={this.state.errorVisible}
            changeState={ this.changeState }
          />
        </Content>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPasswordInfo: (id) => dispatch(getPasswordInfo(id)),
    getNotice: () => dispatch(getNotice()),
    login: params => dispatch(login(params)),
    modifyPassword: params => dispatch(modifyPassword(params)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
