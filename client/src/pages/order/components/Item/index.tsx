import React from "react";
import { Button, Toast } from "antd-mobile"
import { IOrderInfo } from "@/type";
import { timer, http } from "@/utils";

type IItemProps = {
    type: number,
} & IOrderInfo

const Item: React.FC<IItemProps> = (props) => {

    const renderPay = () => {
        switch (props.type) {
            case 0:
                return <Button onClick={handlePay} type='warning' size='small'>去支付</Button>
            case 1:
                return <Button size='small'>已完成</Button>
            default:
                break;
        }
    };

    const handlePay = async () => {
        const result = await http({
            url: '/orders/pay',
            body: {
                id: props.id
            }
        });
        if (result) {
            Toast.success('支付成功');
            window.location.reload();
        }
    }

    return (
        <div className='order-item'>
            <img alt='order' src={props?.house?.imgs[0].url} />
            <div className='center'>
                <div className='title'>{props?.house?.name}</div>
                <div className='price'>￥{props?.house?.price}</div>
                <div className='time'>{timer(props?.createTime)}</div>
            </div>
            <div className='pay'>
                {renderPay()}
            </div>
        </div>
    )
}

export default Item