import React, { useEffect } from "react";
import { SearchBar, ActivityIndicator } from "antd-mobile"
import { useHttpHook, useImgHook } from "@/hooks"
import { IHouses } from "@/type"
import { useObserverHook } from "@/hooks";
import { useLocation } from "umi"
import { ShowLoading } from "@/components"
import { commonEnums } from "@/enums";
import {OrderSkeletons} from "@/skeletons"

import "./index.less"

interface ISearchProps { }

const Search: React.FC<ISearchProps> = (props) => {
  const { query } = useLocation() as any
  const [searchVal, setSearchVal] = React.useState("")
  const [allList, setAllList] = React.useState<IHouses>([])
  const [params, setParams] = React.useState({
    current: 1,
    pageSize: 8,
    houseName: "",
    code: query?.code,
    startTime: `${query?.startTime} 00:00:00`,
    endTime: `${query?.endTime} 23:59:59`,
  })
  const [houses = [], loading] = useHttpHook<IHouses>({
    url: "/house/search",
    body: params,
    watch: [params.current, params.houseName]
  })

  useObserverHook('#'+commonEnums.LOADING_ID, (entries) => {
    if (!loading && entries[0].isIntersecting) {
      setParams(prev => {
        return {
          ...prev,
          current: prev.current + 1,
        }
      })
    }
  })

  useImgHook(".search-item-img")

  useEffect(() => {
    if (houses.length) {
      setAllList(prev => {
        return [
          ...prev,
          ...houses
        ]
      })
    }

  }, [houses])

  const handleCancel = () => {
    setParams({
      ...params,
      current: 1,
      houseName: ""
    })
    setAllList([])
    setSearchVal("")

  }
  const handleSubmit = (value: string) => {
    setParams({
      ...params,
      current: 1,
      houseName: value
    })
    setAllList([])
  }
  return (
    <div className="search-page">
      {/* search bar */}
      <SearchBar
        value={searchVal}
        onChange={(value) => setSearchVal(value)}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
        placeholder="Search Homestay"
        maxLength={8}
      />
      {/* search result */}
      {allList.length === 0 ? <OrderSkeletons /> :
        (
          <div className="result">
            {
              allList?.map(item => {
                return (
                  <div className='item' key={item.id} >

                    <img className='search-item-img' data-src={item?.imgs[0]?.url} alt='img' src={require("../../assets/blank.png")} />
                    <div className='item-right'>
                      <div className='title'>{item.name}</div>
                      <div className='price'>{item.price}</div>
                    </div>
                  </div>
                )
              })
            }
            <ShowLoading loading={houses.length > 0} />
          </div>

        )
      }
    </div>
  )
}

export default Search