import React, { useEffect } from "react";
import { SearchBar, ActivityIndicator } from "antd-mobile"
import { useHttpHook } from "@/hooks"
import { IHouses } from "@/type"
import { useObserverHook } from "@/hooks";

import "./index.less"

interface ISearchProps { }

const Search: React.FC<ISearchProps> = (props) => {
  const [searchVal, setSearchVal] = React.useState("")
  const [allList, setAllList] = React.useState<IHouses>([])
  const [pagination, setPagination] = React.useState({
    current: 1,
    pageSize: 8
  })
  const [houses = [], loading] = useHttpHook<IHouses>({
    url: "/houses/search",
    body: pagination,
    watch: [pagination.current]
  })

  useObserverHook('bottomLoading', (entries) => {
    if (!loading && entries[0].isIntersecting) {
      setPagination(prev => {
        return {
          ...prev,
          current: prev.current + 1
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

  }
  const handleSubmit = () => {
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