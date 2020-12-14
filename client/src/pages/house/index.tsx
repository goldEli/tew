import React, { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Info from "./components/Info";
import CommentList from "./components/CommentList";
import Footer from "./components/Footer";
import { useHttpHook, useObserverHook } from "@/hooks"
import { commonEnums } from "@/enums"
// import useHouseDetail from "./useHouseDetail";
import './index.less';

interface IHouseProps { }

const House: React.FC<IHouseProps> = (props) => {
  const [params, setParams] = React.useState({
    current: 1,
    pageSize: 8,
  })
  const [detail] = useHttpHook({
    url: "/house/detail", initData: {
      banner: [],
      info: {}
    }
  })
  const [commentList, commentListLoading] = useHttpHook({
    url: "/comments/lists", initData: [], body: params, watch: [params]
  })

  const [allCommenList, setAllCommenList] = useState([])

  useEffect(() => {
    if (commentList?.length) {
      setAllCommenList(prev => {
        return [
          ...prev,
          ...commentList
        ]
      })
    }
  }, [commentList])


  useObserverHook('#' + commonEnums.LOADING_ID, (entries) => {
    if (!commentListLoading && entries[0].isIntersecting) {
      setParams(prev => {
        return {
          ...prev,
          current: prev.current + 1,
        }
      })
    }
  })

  return (
    <div className="house-page">
      {/* banner */}
      <Banner list={detail?.banner} />
      {/* info */}
      <Info detail={detail?.info} />
      {/* comment list */}
      <CommentList lists={allCommenList} showLoading={commentListLoading} />
      {/* footer */}
      <Footer />
    </div>

  )
}

export default House