import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';

const onFinish = async (values) => {
  try {
    // This is the Step 3 connection logic
    const response = await axios.post('http://localhost:5001/api/adhaarTeam/adhaarRegister', values);
    
    console.log('Login Success:', response.data);
    
    // Example: Store the token if your backend sends one
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    
    alert('Login Successful!');
  } catch (error) {
    console.error('Login Error:', error.response?.data || error.message);
    alert('Login Failed: ' + (error.response?.data?.message || 'Server Error'));
  }
};

const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

// Rename this from "Form" to "MyForm"
const MyForm = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600, margin: '50px auto' }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked">
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default MyForm;