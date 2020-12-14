import React from "react";
import { Button } from "antd-mobile";
import { timer } from "@/utils";
import { IHouseDetail } from "@/type"

interface IInfoProps {
  detail?: IHouseDetail
}

const Info: React.FC<IInfoProps> = (props) => {
  return (
    <div className='info'>
      <div className='info-title'>{props?.detail?.title}</div>
      <div className='info-msg'>Introduction: {props?.detail?.msg}</div>
      <div className='info-price'>Pirce: {props?.detail?.price}</div>
      <div className='info-time'>Release Date: {timer(props?.detail?.publishTime)}</div>
      <div className='info-time'>Start: {timer(props?.detail?.startTime, '')}</div>
      <div className='info-time'>End: {timer(props?.detail?.endTime, '')}</div>
      <Button className='info-btn' type='warning'>Order</Button>
    </div>
  )
}

export default Info