import React from "react";
import {
  ImagePicker, Toast
} from 'antd-mobile';
import {
  unstable_Form as Form,
  unstable_List as List,
  unstable_InputItem as InputItem,
  unstable_Button as Button
} from "@ant-design/mobile"
import { http } from "@/utils"
import { history } from "umi"
import { useHttpHook } from "@/hooks";
import { IUserDetail } from "@/type"

const { Group, Item } = Form

interface IEditProps { }

const Edit: React.FC<IEditProps> = (props) => {
  const [form] = Form.useForm()
  const [userDetail, loading] = useHttpHook<IUserDetail>({ url: "/user/detail", body: { id: "123" } })
  const [files, setFiles] = React.useState([{ url: userDetail?.avatar || "" }])

  const handleChange = (data: any) => {
    setFiles(data)
  }

  const handleSubmit = async (v: any) => {
    const res = await http({
      url: "/user/edit", body: {
        avatar: v.avatar[0].url,
        sign: v.sign,
        phone: v.phone
      }
    })
    if (res) {
      history.push({
        pathname: "/user"
      })
    }
  }

  return (
    <div className='user-edit'>
      {
        !loading && (

          <Form
            form={form}
            ref={console.log}
            initialValues={{
              avatar: [{ url: userDetail?.avatar || "" }],
              phone: userDetail?.phone,
              sign: userDetail?.sign
            }}
            onFinish={handleSubmit}
            onFinishFailed={err => {
              console.log(err)
              Toast.fail(err.errorFields[0].errors[0])
            }}
          >
            <Group>
              <Item
                label="Img: "
                name="avatar"
                rules={[{ required: true },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    console.log(123, value)
                    if (!value || !value[0]?.file ||value[0]?.file?.size / 1024 / 1024 <= 0.5) {
                      return Promise.resolve();
                    }
                    return Promise.reject('Image size must less than 0.5M');
                  },
                }),
                ]}
              >
                <ImagePicker
                  files={files}
                  selectable={files.length < 1}
                  onChange={handleChange}
                />
              </Item>
              <Item
                label="Phone: "
                name="phone"
                rules={[{ required: true }]}
              >
                <InputItem />
              </Item>
              <Item
                label="Sign: "
                name="sign"
                rules={[{ required: true }]}
              >
                <InputItem />
              </Item>
            </Group>
            <Button type="primary" htmlType="submit">修改</Button>
          </Form>
        )
      }
    </div>
  )
}

export default Edit