import React, { Component } from 'react';
import {
  Row,
  Col,
} from 'antd';
import { message } from '../../utils/label';
import { subStringTime } from '../../utils/data';

class Notice extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getNotice && this.props.getNotice();
  }

  render() {
    let noticeMsg = '';
    if(!this.props.auth.notice.error) {
      noticeMsg = this.props.auth.notice.payload && this.props.auth.notice.payload;
    }
    const msg = noticeMsg && noticeMsg.comment;
    const startTime = noticeMsg && noticeMsg.starttime;
    const endTime = noticeMsg && noticeMsg.endtime;
    const hasTime = !!startTime && !!endTime;

    return (
      <Row type="flex" justify="center">
        <Col span="8">
          <h3>{ this.props.title }</h3>
          <div className="notice">
            {hasTime && <label>{message('Label_Maintenance_Period')}: </label>}
            {hasTime && <span>{`${subStringTime(startTime)}~${subStringTime(endTime)}`}</span>}
            <p>{msg}</p>
          </div>
        </Col>
      </Row>
    );
  }

};

export default Notice;
