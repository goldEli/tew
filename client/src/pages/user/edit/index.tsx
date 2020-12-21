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

const { Group, Item } = Form

interface IEditProps { }

const Edit: React.FC<IEditProps> = (props) => {
  const [form] = Form.useForm()
  const [files, setFiles] = React.useState([])

  const handleChange = (data: any) => {
    setFiles(data)
  }

  const handleSubmit = async (v:any) => {
    console.log(v)
    const res = await http({
      url: "/user/edit", body: {
        img: v.img[0].url,
        sign: v.sign,
        tel: v.phone
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
      <Form
        form={form}
        ref={console.log}
        onFinish={handleSubmit}
        onFinishFailed={err => {
          console.log(err)
          Toast.fail(err.errorFields[0].errors[0])
        }}
      >
        <Group>
          <Item
            label="Img: "
            name="img"
            rules={[{ required: true },
            ({ getFieldValue }) => ({
              validator(rule, value) {

                if (!value || value[0]?.file?.size / 1024 / 1024 <= 0.5) {
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
      {/* <List>
        <List.Item>
          <ImagePicker
            files={files}
            selectable={files.length < 1}
            onChange={handleChange}
          />
        </List.Item>
        <List.Item>
          <InputItem
          >
            电话：
          </InputItem>
        </List.Item>
        <List.Item>
          <InputItem
          >
            签名：
          </InputItem>
        </List.Item>
      </List> */}
    </div>
  )
}

export default Edit