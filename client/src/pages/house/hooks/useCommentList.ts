import React from "react"
import { useHttpHook } from "@/hooks"
import { HouseCommentList } from "@/type"
import { createModel } from "hox";
import { http, getUrlParamsByKey } from "@/utils"

interface IReturnType {
  allCommenList: HouseCommentList;
  commentListLoading: boolean;
  action: {
    add: () => void;
    reset: () => void;
    nextPage: () => void;
  }
}

function useCommentList(): IReturnType {

  const [params, setParams] = React.useState({
    current: 1,
    pageSize: 8,
    id: getUrlParamsByKey("id")
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



  function nextPage() {
    setParams(prev => {
      return {
        ...prev,
        current: prev.current + 1,
      }
    })
  }

  function reset() {
    setParams({
      current: 1,
      pageSize: 8,
      id: getUrlParamsByKey("id")
    })
    setAllCommenList([])
  }

  async function add() {
    const res = await http({
      url: "/comments/add"
    })
    if (res) {
      reset()
    }
  }

  return { allCommenList, commentListLoading, action: { add, reset, nextPage } }
}

export default createModel(useCommentList)