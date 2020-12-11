import React from "react";
import { Button, TextareaItem, Modal } from "antd-mobile";

interface IFooterProps { }

const Footer: React.FC<IFooterProps> = (props) => {
  const [visible, setVisible] = React.useState(false)
  const handleClick = () => {
    setVisible(true)
  }
  const handleClose = () => {
    setVisible(false)
  }
  const handleChange = () => {

  }
  const handleSubmit = () => {

  }
  return (
    <>
      <div className='footer' onClick={handleClick}>
        Comment
      </div>
      <Modal
        popup
        visible={visible}
        animationType="slide-up"
        onClose={handleClose}
      >
        <div >
          <TextareaItem
            rows={2}
            count={200}
            onChange={handleChange}
          />
          <Button  type='warning' onClick={handleSubmit}>Comment</Button>
        </div>
      </Modal>
    </>
  )
}

export default Footer