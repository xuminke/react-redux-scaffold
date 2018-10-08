import React from 'react';
import Button from 'antd/lib/button';
import classNames from 'classnames';
import { Tooltip, Row, Col, Icon } from 'antd';
import { message } from '../../utils/label';

function renderParam(text) {
  let content = '';
  if (text) {
    content = text.map(data => (`${data.key}=${data.value}`));
  }
  return content.join(',');
}

function renderTooltip(method) {
  return (
    <span>
      <Row>
        <Col span="12">{message('Label_Table_Subjob_Waiting_Time')}</Col><Col span="11" offset="1">{method.waitTime}</Col>
      </Row>
      <Row>
        <Col span="12">{message('Label_Timeout_Time')}</Col><Col span="11" offset="1">{method.timeout}</Col>
      </Row>
      <Row>
        <Col span="12">{message('Label_Retires_Times')}</Col><Col span="11" offset="1">{method.retry}</Col>
      </Row>
      <Row>
        <Col span="12">{message('Label_Table_Subjob_Parameter')}</Col>
        <Col span="11" offset="1">
          <p>{renderParam(method.parameter)}</p>
        </Col>
      </Row>
    </span>
  );
}

export default function MethodTooltip(props) {
  let content = '';
  if (props.method) {
    content = <Tooltip title={renderTooltip(props.method)}>{props.method.name} <Icon type="question-circle-o" /></Tooltip>;
  }
  return content;
}
