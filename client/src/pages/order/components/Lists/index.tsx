import React from "react";
import { isEmpty, set } from "lodash";
import OrderItem from '../Item';
import { ShowLoading } from '@/components';
import { OrderSkeletons } from '@/skeletons';
import { IOrderInfo } from "@/type";

interface IListsProps {
    orders?: IOrderInfo[],
    type: number,
    showLoading: boolean
}

const Lists: React.FC<IListsProps> = (props) => {
    // console.log(props.showLoading)
    // const [showSkeletions, setShowSkeletions] = React.useState(true)


    // React.useEffect(() => {
    //     if (isEmpty(props?.orders)) {
    //         setShowSkeletions(true)
    //         setTimeout(() => {
    //             setShowSkeletions(false)
    //         }, 1500)
    //     } else {
    //         setShowSkeletions(false)
    //     }
    // }, [props.orders])

    return (
        <div>
            {/* {showSkeletions ?
                <OrderSkeletons /> : */}
                <div className='tab-lists'>
                    {props?.orders?.map(item => (
                        <OrderItem type={props.type} key={item.id} {...item} />
                    ))}
                    <ShowLoading loading={props.showLoading} />
                </div>
            {/* } */}
        </div>
    )
}

export default Lists