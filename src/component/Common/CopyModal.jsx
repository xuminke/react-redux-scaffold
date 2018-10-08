import React from 'react';
import { Button, Form, Modal, Input } from 'antd';
import { message } from '../../utils/label';

const FormItem = Form.Item;

class CopyModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  hideModal = () => {
    this.props.form.resetFields();
    this.setState({ visible: false });
  }

  handleOk = () => {
    this.props.form.validateFields((errors, values) => {
      if (!!errors) {
        return;
      }
    });
  }

  renderForm = () => {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 10, offset: 1 },
    };
    return (
      <Form>
        <FormItem
          {...formItemLayout}
          label={this.props.copyInfo.name}
        >
          {getFieldDecorator('account', {
            rules: this.props.copyInfo.rules,
          })(
            <Input style={{ width: '100%' }} />
          )}
        </FormItem>
      </Form>
    );
  }

  renderTitle = () => {
    return (
      <span>
        <h3>{message('label_Button_Copy_Create')}</h3>
      </span>
    );
  }

  render() {
    return (
      <span>
        <Button onClick={this.showModal}>
          {message('label_Button_Copy_Create')}
        </Button>
        <Modal
          title={this.renderTitle()}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.hideModal}
          maskClosable={false}
          width={800}
        >
          {this.renderForm()}
        </Modal>
      </span>
    );
  }
}
export default Form.create()(CopyModal);
