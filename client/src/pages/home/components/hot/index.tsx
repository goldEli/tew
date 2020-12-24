import React from "react";
import { IHouses } from "@/type";
import { history } from "umi";

interface IHotProps {
  houses?: IHouses
}

const Hot: React.FC<IHotProps> = (props) => {
  const handleClick = (id: string) => {
    history.push({
      pathname: "/house",
      query: { id }
    })
  }
  return (
    <div className="hot">
      <h1>Hot Homestay</h1>
      <div className='hot-lists'>
        {

          props.houses?.map(item => (

            <div onClick={() => { handleClick(item.id.toString()) }} key={item.id} className="hot-lists-item">
              <img className="img" src={item.imgs[0].url}></img>
              <div className="title">{item.title}</div>
              <div className="info">{item.info}</div>
              <div className="price">￥{item.price}</div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default React.memo(Hot)