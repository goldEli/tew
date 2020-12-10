import React from "react";
import { SearchBar, WhiteSpace } from "antd-mobile"
import { useHttpHook } from "@/hooks"
import { IHouses } from "@/type"

interface ISearchProps { }

const Search: React.FC<ISearchProps> = (props) => {
  const [searchVal, setSearchVal] = React.useState("")
  const [houses, loading] = useHttpHook<IHouses>({
    url: "/houses/search",
    body: {}
  })
  const handleCancel = () => {

  }
  const handleSubmit = () => {
  }
  return (
    <div className="search-page">
      {/* search bar */}
      <WhiteSpace />
      <SearchBar
        value={searchVal}
        onChange={(value) => setSearchVal(value)}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
        placeholder="Search Homestay"
        maxLength={8}
      />
      <WhiteSpace />
      {/* search result */}
      <div className="result">
        {
          houses?.map(item => {
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
      </div>
    </div>
  )
}

export default Search