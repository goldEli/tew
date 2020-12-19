import React from "react";
import { Tabs } from "antd-mobile";
import "./index.less"

interface IOrderProps { }

const Order: React.FC<IOrderProps> = (props) => {

    const tabs = [
        { title: 'Paid', sub: 0 },
        { title: 'Unpaid', sub: 1 },
    ];
    return (
        <div className="order-page">

            <Tabs tabs={tabs}
            >
                <div className="tab"> 1</div>
                <div className="tab"> 2 </div>
            </Tabs>
        </div>
    )
}

export default Order