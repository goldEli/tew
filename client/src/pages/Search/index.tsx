import React, { useEffect } from "react";
import { SearchBar, ActivityIndicator } from "antd-mobile"
import { useHttpHook } from "@/hooks"
import { IHouses } from "@/type"
import { useObserverHook } from "@/hooks";
import { useLocation } from "umi"

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
    url: "/houses/search",
    body: params,
    watch: [params.current, params.houseName]
  })

  useObserverHook('bottomLoading', (entries) => {
    if (!loading && entries[0].isIntersecting) {
      setParams(prev => {
        return {
          ...prev,
          current: prev.current + 1,
        }
      })
    }
  })

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
      {allList.length === 0 ? <ActivityIndicator toast /> :
        (
          <div className="result">
            {
              allList?.map(item => {
                return (
                  <div className='item' key={item.id} >

                    <img alt='img' src={item.img} />
                    <div className='item-right'>
                      <div className='title'>{item.title}</div>
                      <div className='price'>{item.price}</div>
                    </div>
                  </div>
                )
              })
            }
            {
              houses.length ? <div id="bottomLoading">loading...</div> : <div>No more data</div>
            }
          </div>

        )
      }
    </div>
  )
}

export default Search