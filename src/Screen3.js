
import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Select, Input, Button } from 'antd';

class App extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        // call api here
      }
      console.log('values', values)
    });
  };


  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form
        labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}
        onSubmit={this.handleSubmit}>
        <Form.Item label="Note">
          {getFieldDecorator('name', {
            rules: [
              { required: true, message: 'Please input your note!' },
              // { type: 'email', message: 'Please enter proper email address.' },
              // {
              //   // required: true,
              //   pattern: new RegExp("^[0-9]*$"),
              //   message: "Wrong format!"
              // },
            ],
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedApp = Form.create({ name: 'formInputDemo' })(App);

export default WrappedApp