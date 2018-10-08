import React from 'react';
import { Button, Form, Modal, Input } from 'antd';
import { message } from '../../utils/label';
import { passwordValid } from '../../utils/inputCheck';
import { getUser } from '../../utils/token';
import { PASSWORD_LENGTH } from '../../constants/config';

const FormItem = Form.Item;

class ChangePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
    };
  }

  handleCancel = () => {
    this.props.changeState({
      modifyPwdVisible: false,
    });
  }

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('newPass')) {
      callback(message('Validation_User_Password_Confirm'));
    } else {
      callback();
    }
  }

  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['reNewPass'], { force: true });
    }
    callback();
  }

  handleOK = () => {
    this.props.form.validateFields({ force: true}, (errors, values) => {
      if (!errors) {
        this.props.modifyPassword({
          userID: getUser().userID,
          nowPassword: values.oldPass,
          newPassword: values.newPass,
        }).then(data => {
          if(!(data instanceof Error)) {
            this.props.form.resetFields();
            this.props.changeState({
              modifyPwdVisible: false,
            });
          }
        });
      }
    });
  };

  renderModifyForm() {
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 10, offset: 1 },
    };
    const { getFieldDecorator, validateFields, getFieldValue } = this.props.form;
    let createTime = '';
    let expireTime = '';
    const passwordInfo = this.props.auth.password;
    if (!passwordInfo.isFetching && !passwordInfo.error) {
      const result = passwordInfo.payload || {};
      if (result.create_time && result.password_expire) {
        createTime = result.create_time.split(' ')[0];
        expireTime = result.password_expire.split(' ')[0];
      }
    }

    return (
      <Form>
        <FormItem
          label={message('Label_Current_Password')}
          {...formItemLayout}
        >
          {getFieldDecorator('oldPass', {
            rules: [
              { required: true, message: message('Validation_Password_Current_Required') },
            ],
          })(
            <Input
              type="password"
              length={ PASSWORD_LENGTH }
            />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={message('Label_New_Password')}
        >
          {getFieldDecorator('newPass', {
            rules: [
              { required: true, message: message('Validation_Password_New_Required') },
              { validator: passwordValid },
              { validator: this.checkConfirm },
            ],
          })(
            <Input
              type="password"
              length={ PASSWORD_LENGTH }
              onBlur={ this.handleConfirmBlur }
            />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={message('Label_Repeat_Password')}
        >
          {
            getFieldDecorator('reNewPass', {
              rules: [
                { required: true, message: message('Validation_Password_Repeat_Required') },
                { validator: this.checkPassword },
              ],
            })(
              <Input
                type="password"
                length={ PASSWORD_LENGTH }
              />
            )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={message('Label_Last_Modify_Date')}
        >
          <span>{createTime}</span>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={message('Label_Password_Expiration_Date')}
        >
          <span>{expireTime}</span>
        </FormItem>
      </Form>
    );
  }

  renderTitle = () => {
    return (
      <span>
        <h3>{message('Label_Menu_Change_Password')}</h3>
        <span>{message('Label_Login_Modify_PasswordInfo')}</span>
        <br />
        <span>{message('Label_Login_Modify_Password_Info')}</span>
      </span>
    );
  }

  render() {
    return (
      <span>
        <Modal
          title={this.renderTitle()}
          visible={this.props.visible}
          onOk={this.handleOK}
          onCancel={this.handleCancel}
          maskClosable={false}
          width={800}
          confirmLoading={this.state.fetching}
        >
          { this.renderModifyForm() }
        </Modal>
      </span>
    );
  }
}

export default Form.create()(ChangePassword);
