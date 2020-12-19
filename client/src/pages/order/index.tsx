import React from "react";
import { Tabs } from "antd-mobile";
import useHttpHook from "@/hooks/useHttpHook";
import { commonEnums } from "@/enums";
import Lists from "./components/Lists"
import { IOrderItem } from "@/type";
import "./index.less"

interface IOrderProps { }

const Order: React.FC<IOrderProps> = (props) => {
    const [page, setPage] = React.useState(commonEnums.PAGE)
    const [orders, ordersLoading] = useHttpHook<IOrderItem[]>({
        url: "/order/lists",
        body: {
            ...page
        }
    })

    const tabs = [
        { title: 'Paid', sub: 0 },
        { title: 'Unpaid', sub: 1 },
    ];
    return (
        <div className="order-page">

            <Tabs tabs={tabs}
            >
                <div className='tab'>
                    <Lists orders={orders} type={0} showLoading={ordersLoading} />
                </div>
                <div className='tab'>
                    <Lists orders={orders} type={1} showLoading={ordersLoading} />
                </div>
            </Tabs>
        </div>
    )
}

export default Order