import React from "react";
import { Button } from "antd-mobile";
import { timer } from "@/utils";
import { IHouseDetail, IOrderInfo } from "@/type"

interface IInfoProps {
  detail?: IHouseDetail,
  order?: IOrderInfo,
  btnClick: (id?: number) => void

}

const Info: React.FC<IInfoProps> = (props) => {

  const handleOrder = (id?: number) => {
    props?.btnClick(id)
  }

  const renderBtn = () => {
    // order里面没有id，说明订单一定不存在
    if (!props?.order?.id) {
      return <Button className='info-btn' type='warning' onClick={() => handleOrder()}>预定</Button>
    }

    // 已经有订单了，处于未支付状态
    if (props.order?.isPayed === 0) {
      return <Button className='info-btn' type='ghost' onClick={() => handleOrder(props?.order?.id)}>取消预定</Button>
    }

    // 已经有订单了，处于已支付状态
    if (props.order?.isPayed === 1) {
      return <Button className='info-btn' type='ghost'>居住中</Button>
    }
  }
  return (
    <div className='info'>
      <div className='info-title'>{props?.detail?.title}</div>
      <div className='info-msg'>Introduction: {props?.detail?.msg}</div>
      <div className='info-price'>Pirce: {props?.detail?.price}</div>
      <div className='info-time'>Release Date: {timer(props?.detail?.publishTime)}</div>
      <div className='info-time'>Start: {timer(props?.detail?.startTime, '')}</div>
      <div className='info-time'>End: {timer(props?.detail?.endTime, '')}</div>
      {renderBtn()}
    </div>
  )
}

export default Info