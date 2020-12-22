import React from "react"
import { useHttpHook } from "@/hooks"
import { HouseCommentList } from "@/type"
import { createModel } from "hox";
import { http, getUrlParamsByKey } from "@/utils"
import { commonEnums } from "@/enums";
import { isEmpty } from "lodash"

interface IReturnType {
  allCommenList: HouseCommentList;
  commentListLoading: boolean;
  showLoading: boolean;
  action: {
    add: () => void;
    reset: () => void;
    nextPage: () => void;
    init: () => void;
  }
}

function useCommentList(): IReturnType {

  const [params, setParams] = React.useState({})
  const [commentList, setCommentList] = React.useState<HouseCommentList>([])
  const [commentListLoading, setCommentListLoading] = React.useState(false)

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

  React.useEffect(() => {
    async function func() {
      setCommentListLoading(true)
      const res = await http({
        url: "/comments/lists",
        body: params
      }) as HouseCommentList
      setCommentListLoading(false)
      if (res) {
        setCommentList(res)
      }
    }
    !isEmpty(params) && func()
  }, [params])

  function init() {
    setParams({
      ...commonEnums.PAGE,
      id: getUrlParamsByKey("id")
    })

  }

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

  return { allCommenList, commentListLoading, showLoading: (commentList?.length || 0) > 0, action: { add, reset, nextPage, init } }
}

export default createModel(useCommentList)