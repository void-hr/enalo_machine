import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import logo from "../../assets/logo.png"
import "./signup.css"
const SignUp = () => {
  return (
    <div className="form_outer_container">
    <div className="form_container">
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="heading">
            <h1>Sign Up</h1>
            <span>Or <p>Sign In</p></span>
        </div>
    <Form
    name="basic"
    labelCol={{
      span: 32,
    }}
    wrapperCol={{
      span: 32,
    }}
    style={{
      maxWidth: "100%",

    }}
    initialValues={{
      remember: true,
    }}
    onFinish={"onFinish"}
    onFinishFailed={"onFinishFailed"}
    autoComplete="off"
  >
    <Form.Item
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your Email!',
        },
      ]}
    >
      <Input placeholder="Email"/>
    </Form.Item>

    <Form.Item
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password placeholder="Password"/>
    </Form.Item>
    <Form.Item
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password placeholder="Re-enter Password"/>
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 0,
        span: 32,
      }}
    >
    <div className="checkbox_container">
      <Checkbox>Remember me</Checkbox>
      <p>Forgot Password ?</p>
    </div>
    </Form.Item>
    <Form.Item
      wrapperCol={{
        offset: 0,
        span: 32,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  </div>
  </div>
  )
}

export default SignUp