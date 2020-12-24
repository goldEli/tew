import React, { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Info from "./components/Info";
import CommentList from "./components/CommentList";
import Footer from "./components/Footer";
import useCommentList from "./hooks/useCommentList"
import { useLocation } from "umi";
import { useHttpHook, useObserverHook } from "@/hooks"
import { commonEnums } from "@/enums"
import { IOrderInfo } from "@/type";
import { http } from "@/utils"
// import useHouseDetail from "./useHouseDetail";
import './index.less';

interface IHouseProps { }

const House: React.FC<IHouseProps> = (props) => {
  const { query } = useLocation()
  const { allCommenList, commentListLoading, showLoading, action } = useCommentList()
  const [detail] = useHttpHook({
    url: "/house/detail", initData: {
      banner: [],
      info: {}
    }, body: { id: query.id }
  })
  const [order, setOrder] = React.useState<IOrderInfo>({})

  useObserverHook('#' + commonEnums.LOADING_ID, (entries) => {
    // console.log(commentListLoading, entries[0].isIntersecting);
    if (!commentListLoading && entries[0].isIntersecting) {
      action.nextPage()
    }
  })

  useEffect(() => {
    action.init()
    return () => {
      action.reset()
    }
  }, [])
  useEffect(() => {
    getOrder()
  }, [])

  const getOrder = async () => {
    const res = await http({
      url: "/orders/hasOrder",
      body: {
        id: query.id,
      }
    }) as IOrderInfo
    console.log(res, "---res")
    setOrder(res || {})
  }

  async function btnClick(id?: string) {
    if (!id) {
      await http({
        url: "/orders/addOrder",
        body: {
          id: query?.id
        }
      })
      getOrder()
    } else {
      await http({
        url: "/orders/delOrder",
        body: {
          id: order.id
        }
      })
      getOrder()
    }
  }

  return (
    <div className="house-page">
      {/* banner */}
      <Banner list={detail?.banner} />
      {/* info */}
      <Info btnClick={btnClick} detail={detail?.info} order={order} />
      {/* comment list */}
      <CommentList lists={allCommenList} showLoading={showLoading} />
      {/* footer */}
      <Footer />
    </div>

  )
}

export default House