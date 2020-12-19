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

const { Group, Item } = Form

interface IEditProps { }

const Edit: React.FC<IEditProps> = (props) => {
  const [form] = Form.useForm()
  const [files, setFiles] = React.useState([])

  const handleChange = () => {

  }

  const handleSubmit = () => {

  }

  return (
    <div className='user-edit'>
      <Form
        form={form}
        ref={console.log}
        onFinish={v => {
          console.log(v)
          Toast.fail(JSON.stringify(v))
        }}
        onFinishFailed={err => {
          console.log(err)
          Toast.fail(err.errorFields[0].errors[0])
        }}
      >
        <Group>
          <Item
            label="Img: "
            name="Img"
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
            name="Sign"
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