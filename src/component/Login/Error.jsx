import React from 'react';
import { Modal, Button, Row, Col, Icon } from 'antd';
import { message } from '../../utils/label';
import { subStringTime } from '../../utils/data';

class Error extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  hideModal = () => {
    this.props.changeState({
      errorVisible: false,
    });
  }

  render() {
    let noticeMsg = '';
    if(!this.props.auth.notice.error) {
      noticeMsg = this.props.auth.notice.payload && this.props.auth.notice.payload;
    }
    const startTime = noticeMsg && noticeMsg.starttime;
    const endTime = noticeMsg && noticeMsg.endtime;
    const hasTime = !!startTime && !!endTime;
    const period = hasTime ? <p>{message('Label_Maintenance_Period')}: {`${subStringTime(startTime)}~${subStringTime(endTime)}`}</p> : null;
    const detail = <p>{message('label_Login_Error_Message')}</p>;

    return (
      <span>
        <Modal
          title={<b>{message('Label_Error')}</b>}
          visible={this.props.errorVisible}
          onCancel={this.hideModal}
          maskClosable={false}
          onOk={this.hideModal}
        >
          <div>
            <Row>
              <Col span="2"><Icon type="close-circle" /></Col>
              <Col>{detail}</Col>
            </Row>
            <Row>
              <Col offset="2">{period}</Col>
            </Row>
          </div>
        </Modal>
      </span>
    );
  }
}

export default Error;
