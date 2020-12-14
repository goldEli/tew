import React, { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Info from "./components/Info";
import CommentList from "./components/CommentList";
import Footer from "./components/Footer";
import { useHttpHook } from "@/hooks"
import useCommentList from "./hooks/useCommentList"
import { useLocation } from "umi";
// import useHouseDetail from "./useHouseDetail";
import './index.less';

interface IHouseProps { }

const House: React.FC<IHouseProps> = (props) => {
  const { query } = useLocation()
  const [commentList, commentListLoading] = useCommentList()
  const [detail] = useHttpHook({
    url: "/house/detail", initData: {
      banner: [],
      info: {}
    }, body: { id: query.id }
  })

  return (
    <div className="house-page">
      {/* banner */}
      <Banner list={detail?.banner} />
      {/* info */}
      <Info detail={detail?.info} />
      {/* comment list */}
      <CommentList lists={commentList} showLoading={commentListLoading} />
      {/* footer */}
      <Footer />
    </div>

  )
}

export default House