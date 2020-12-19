import React, { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Info from "./components/Info";
import CommentList from "./components/CommentList";
import Footer from "./components/Footer";
import useCommentList from "./hooks/useCommentList"
import { useLocation } from "umi";
import { useHttpHook, useObserverHook } from "@/hooks"
import { commonEnums } from "@/enums"
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

  useObserverHook('#' + commonEnums.LOADING_ID, (entries) => {
    // console.log(commentListLoading, entries[0].isIntersecting);
    if (!commentListLoading && entries[0].isIntersecting) {
      action.nextPage()
    }
  })

  useEffect(() => {
    return () => {
      action.reset()
    }
  }, [])

  return (
    <div className="house-page">
      {/* banner */}
      <Banner list={detail?.banner} />
      {/* info */}
      <Info detail={detail?.info} />
      {/* comment list */}
      <CommentList lists={allCommenList} showLoading={showLoading} />
      {/* footer */}
      <Footer />
    </div>

  )
}

export default House