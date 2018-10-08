import React, { Component } from 'react';
import {
  Layout,
  Row,
  Col,
  Icon,
} from 'antd';
import PropTypes from 'prop-types';
import { message } from '../utils/label';
import { Link } from 'react-router-dom';

const { Header, Content } = Layout;

class Help extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired,
  }

  handleBack = () => {
    const params = new URLSearchParams(this.props.location.search);
    const backUrl = params.get('backUrl');
    if(backUrl) {
      this.props.history.push(backUrl);
    } else {
      this.props.history.push('/vm');
    }
  }

  render() {
    return (
      <Layout className="layout help">
        <Header className="header">
          <h1>{ message('Label_System_Title') }</h1>
        </Header>
        <Content>
          <h2>{ message('Label_Manual') }</h2>
          <hr />
          <div className="margin-bottom-middle">
            <ul>
              <li><a href="/public/manual.pdf" target="_blank">{ message('Label_Operation_Manual') }</a></li>
            </ul>
          </div>
          <div>
            <a onClick={this.handleBack}><Icon type="rollback" />{message('Label_Return')}</a>
          </div>
        </Content>
      </Layout>
    );
  }
}

export default Help;
