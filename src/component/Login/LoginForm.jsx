import React, { Component } from 'react';
import {
  Row,
  Col,
  Form,
  Input,
  Button,
} from 'antd';
import PropTypes from 'prop-types';
import { message } from '../../utils/label';
import { setLocalToken, decodeToken } from '../../utils/token';

const FormItem = Form.Item;

class LoginForm extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  }

  handleLogin = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login({
          ...values,
        }).then(response => {
          let noticeMsg = '';
          if(!this.props.auth.notice.error) {
            noticeMsg = this.props.auth.notice.payload && this.props.auth.notice.payload;
          }
          const startTime = noticeMsg && noticeMsg.starttime;
          const endTime = noticeMsg && noticeMsg.endtime;
          const hasTime = !!startTime && !!endTime;
          const token = this.props.token;
          if (hasTime && new Date(startTime) <= new Date() && new Date(endTime) >= new Date() && decodeToken(token.payload.token).user.userName !== 'administrator') {
            this.props.changeState({
              errorVisible: true,
            });
          } else if(response.status && response.status === 207) {
            //open modify password modal,
            //save the userId
            this.props.changeState({
              userId: values.userId,
              modifyPwdVisible: true,
            });
            this.props.form.resetFields();
          } else {
            setLocalToken(token.payload.token);
            this.props.history.push('/');
          }
        });
      }
    });
  }

  handleClear = () => {
    this.props.form.resetFields();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        span: 12,
        xl: { span: 8 },
      },
      wrapperCol: {
        span: 12,
        xl: { span: 8 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        span: 12,
        offset: 6,
      },
    };
    return (
      <Row type="flex" justify="center">
        <Col span="8">
          <div className="login-form">
            <Form hideRequiredMark={ true }>
              <FormItem label={message('Label_User_Id')} { ...formItemLayout }>
                {getFieldDecorator('userId', {
                  rules: [
                    { required: true, message: message('Validation_User_Id_Required') },
                  ],
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem label={message('Label_User_Password')} { ...formItemLayout }>
                {getFieldDecorator('password', {
                  rules: [
                    { required: true, message: message('Validation_User_Password_Required') },
                  ],
                })(
                  <Input type="password" />
                )}
              </FormItem>
              <FormItem { ...tailFormItemLayout }>
                <Button className="submit" type="primary" onClick={ this.handleLogin }>{ message('label_Button_Login') }</Button>
                <Button onClick={ this.handleClear }>{ message('label_Button_Clear') }</Button>
              </FormItem>
            </Form>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Form.create()(LoginForm);
