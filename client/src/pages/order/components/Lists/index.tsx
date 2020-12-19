import React from "react";
import { isEmpty } from "lodash";
import OrderItem from '../Item';
import { ShowLoading } from '@/components';
import { OrderSkeletons } from '@/skeletons';
import { IOrderItem } from "@/type";

interface IListsProps {
    orders?: IOrderItem[],
    type: number,
    showLoading: boolean
}

const Lists: React.FC<IListsProps> = (props) => {

    React.useEffect(() => {

    }, [])

    return (
        <div>
            {isEmpty(props?.orders) ?
                <OrderSkeletons /> :
                <div className='tab-lists'>
                    {props?.orders?.map(item => (
                        <OrderItem type={props.type} key={item.id} {...item} />
                    ))}
                    <ShowLoading loading={props.showLoading} />
                </div>
            }
        </div>
    )
}

export default Lists