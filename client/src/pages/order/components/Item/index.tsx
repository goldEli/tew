import React from "react";
import { Button } from "antd-mobile"
import { IOrderInfo } from "@/type";

type IItemProps = {
    type: number,
} & IOrderInfo

const Item: React.FC<IItemProps> = (props) => {

    const renderPay = () => {
        switch (props.type) {
            case 0:
                return <Button type='warning' size='small'>去支付</Button>
            case 1:
                return <Button size='small'>已完成</Button>
            default:
                break;
        }
    };

    return (
        <div className='order-item'>
            <img alt='order' src={props?.house?.imgs[0].url} />
            <div className='center'>
                <div className='title'>{props?.house?.name}</div>
                <div className='price'>￥{props?.house?.price}</div>
                <div className='time'>{props?.createTime}</div>
            </div>
            <div className='pay'>
                {renderPay()}
            </div>
        </div>
    )
}

export default Item