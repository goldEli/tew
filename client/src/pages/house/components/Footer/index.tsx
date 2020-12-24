import React from "react";
import { Button, TextareaItem, Modal, Toast } from "antd-mobile";
import useCommentList from "../../hooks/useCommentList";
import { useLocation } from "umi"

interface IFooterProps { }

const Footer: React.FC<IFooterProps> = (props) => {
  const [visible, setVisible] = React.useState(false)
  const [commentVal, setVommentVal] = React.useState("")
  const { action } = useCommentList()
  const { query } = useLocation()

  const handleClick = () => {
    setVisible(true)
  }
  const handleClose = () => {
    setVisible(false)
  }
  const handleChange = (value?: string) => {
    setVommentVal(value || "")
  }
  const handleSubmit = () => {
    if (!commentVal) {
      Toast.fail("Please input comment !")
      return
    }
    action.add({
      comment: commentVal,
      houseId: query?.id as string
    })
    handleClose()

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
            value={commentVal}
          />
          <Button type='warning' onClick={handleSubmit}>Comment</Button>
        </div>
      </Modal>
    </>
  )
}

export default Footer