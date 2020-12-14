import React from "react"
import { useHttpHook, useObserverHook } from "@/hooks"
import { commonEnums } from "@/enums"
import { HouseCommentList } from "@/type"

export default function useCommentList(): [HouseCommentList, boolean] {

  const [params, setParams] = React.useState({
    current: 1,
    pageSize: 8,
  })
  const [commentList, commentListLoading] = useHttpHook<HouseCommentList>({
    url: "/comments/lists", initData: [], body: params, watch: [params]
  })

  const [allCommenList, setAllCommenList] = React.useState<HouseCommentList>([])

  React.useEffect(() => {
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

  return [allCommenList, commentListLoading]
}