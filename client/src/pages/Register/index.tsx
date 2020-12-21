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

const { Group } = Form

interface ILoginProps { }

const Register: React.FC<ILoginProps> = (props) => {
  const [form] = Form.useForm()

  const handleFinish = async (v: any) => {
    const res = await http({
      url: "/user/register", body: {
        username: v.username,
        password: v.password,
      }
    })
    history.push({ pathname: "/login" })
    console.log(res)
  }

  return (
    <div className="register-page">
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
        <Group renderHeader="Register">
          <Form.Item rules={[{ required: true, message: "Please input username" }]} label="Username" name="username">
            <InputItem placeholder="Please input username" clear />
          </Form.Item>
          <Form.Item rules={[{ required: true, message: "Please input password" }]} label="Password" name="password">
            <InputItem placeholder="Please input password" />
          </Form.Item>
          <Form.Item rules={[
            { required: true, message: "Please enter your password again" },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject('The password you entered twice does not match!');
              },
            }),
          ]} label="Comfirm Password" name="comfirePassword">
            <InputItem placeholder="Please enter your password again" />
          </Form.Item>
        </Group>
        <Button htmlType="submit" type="primary">Register</Button>
        <div onClick={() => {
          history.push({ pathname: "/login" })
        }} className="login">Has an account, go log in!</div>
      </Form >
    </div >
  )
}

export default Register