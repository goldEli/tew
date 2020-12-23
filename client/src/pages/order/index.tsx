import React, { useState, useEffect } from "react";
import { Tabs } from "antd-mobile";
import { commonEnums } from "@/enums";
import Lists from "./components/Lists"
import { IOrderItem } from "@/type";
import { useObserverHook } from "@/hooks"
import { http } from "@/utils";
import { isEmpty } from "lodash"
import { ErrorBoundary } from "@/components";

import "./index.less"

interface IOrderProps { }

const Order: React.FC<IOrderProps> = (props) => {
    const [page, setPage] = useState(commonEnums.PAGE);
    const [orders, setOrders] = useState<IOrderItem[]>([]);
    const [showLoading, setShowLoading] = useState(true);
    const [type, setType] = useState(0);
    // const [orders] = useHttpHook({
    //   url: '/order/lists',
    //   body: {
    //     ...page
    //   }
    // });

    const invokeHttp = async (pageNum: number) => {
        const result = await http({
            url: '/order/lists',
            body: {
                ...page,
                pageNum,
                type
            }
        });
        return result;
    };

    const fetchOrder = async (pageNum: number) => {

        const result = await invokeHttp(pageNum) as IOrderItem[];
        if (!isEmpty(result) && result.length === page.pageSize) {
            setOrders(result);
            setShowLoading(true);
        } else {
            setShowLoading(false);
        }
    };

    const handleChange = (e: any) => {
        // console.log(e)
        setType(e.sub);
        setPage(commonEnums.PAGE);
        setOrders([]);
        setShowLoading(true);
    };

    const tabs = [
        { title: 'Paid', sub: 0 },
        { title: 'Unpaid', sub: 1 }
    ];

    /**
     * 1，页面初始化时候请求接口；
     * 2，监听loading组件是否展示出来；
     * 3，修改page,pageNum+1,再次重新请求接口；
     * 4，拼装数据，然后page
     */
    useObserverHook('#' + commonEnums.LOADING_ID, async (entries) => {
        console.log(entries)
        if (entries[0].isIntersecting) {
            const result = await invokeHttp(page.current + 1) as IOrderItem[];
            if (!isEmpty(orders) && !isEmpty(result) && result.length === page.pageSize) {
                setOrders([...orders, ...result]);
                setPage({
                    ...page,
                    current: page.current + 1
                });
                setShowLoading(true);
            } else {
                setShowLoading(false);
            }
        }
    });

    useEffect(() => {
        fetchOrder(1);
    }, [type])

    return (
        <ErrorBoundary>
            <div className='order-page'>
                <Tabs
                    tabs={tabs}
                    onChange={handleChange}
                >
                    <div className='tab'>
                        <Lists orders={orders} type={0} showLoading={showLoading} />
                    </div>
                    <div className='tab'>
                        <Lists orders={orders} type={1} showLoading={showLoading} />
                    </div>
                </Tabs>
            </div>
        </ErrorBoundary>
    )
}

export default Order