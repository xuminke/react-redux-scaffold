import React, { Component } from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import TopNav from '../component/App/Header';
import SideMenu from '../component/App/Sider';
import CustomizeRoutes from '../router';
import { TIMER } from '../constants/config';
import { getCurrentRole } from '../action/auth';
import { getUser } from '../utils/token';

const { Header, Content, Sider } = Layout;

class App extends Component {

  componentDidMount() {
    const roleId = getUser().role;
    this.props.getCurrentRole(roleId);
    this.timer = setInterval(this.props.getCurrentRole(roleId), TIMER);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <Layout className="layout login">
        <Header className="header">
          <TopNav history={ this.props.history } location={ this.props.location }/>
        </Header>
        <Layout>
          <Sider width={240}>
            <SideMenu history={ this.props.history }　location={ this.props.location } role={ this.props.role } />
          </Sider>
          <Layout>
            <Content>
              <CustomizeRoutes />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    role: state.auth.role,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCurrentRole: (id) => dispatch(getCurrentRole(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
