import React from "react";
import { Button } from "antd-mobile"
import { IOrderItem } from "@/type";

type IItemProps = {
    type: number,
} & IOrderItem

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
            <img alt='order' src={props?.img} />
            <div className='center'>
                <div className='title'>{props?.title}</div>
                <div className='price'>￥{props?.price}</div>
                <div className='time'>{props?.createTime}</div>
            </div>
            <div className='pay'>
                {renderPay()}
            </div>
        </div>
    )
}

export default Item