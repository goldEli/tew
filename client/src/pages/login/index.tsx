import React from "react";
import {
  unstable_Form as Form,
  unstable_Button as Button,
  unstable_InputItem as InputItem,
  unstable_Modal as Modal,
} from '@ant-design/mobile'
import "./index.less"
import { history } from "umi"
import { http } from "@/utils"
import { Toast } from "antd-mobile"

const { Group } = Form

interface ILoginProps { }

const Login: React.FC<ILoginProps> = (props) => {
  const [form] = Form.useForm()

  const handleFinish = async (v: any) => {
    const res = await http({ url: "/user/login", body: v }) as any
    localStorage.setItem('token', res.token);
    localStorage.setItem('username', res.username);
    var url_string = window.location.href
    var url = new URL(url_string);
    var fromRoute = url.searchParams.get("from");
    if (fromRoute) {
      history.push(fromRoute);
    } else {
      history.push("/");
    }
    Toast.success('登录成功');
    console.log(res)
  }

  return (
    <div className="login-page">
      <Form
        form={form}
        ref={console.log}
        onFinish={handleFinish}
        onFinishFailed={err => {
          Modal.alert({
            title: 'error',
            content: err.errorFields[0].errors[0],
          })
        }}
      >
        <Group renderHeader="Login">
          <Form.Item rules={[{ required: true, message: "Please input username" }]} label="Username" name="username">
            <InputItem placeholder="Please input username" clear />
          </Form.Item>
          <Form.Item rules={[{ required: true, message: "Please input password" }]} label="Password" name="password">
            <InputItem placeholder="Please input password" />
          </Form.Item>
        </Group>
        <Button htmlType="submit" type="primary">Login</Button>
        <div onClick={() => {
          history.push({ pathname: "/register" })
        }} className="register">No account, go register!</div>
      </Form >
    </div >
  )
}

export default Login