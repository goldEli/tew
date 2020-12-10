import React from "react";
import { IHouses } from "@/type";

interface IHotProps {
  houses?: IHouses
}

const Hot: React.FC<IHotProps> = (props) => {
  return (
    <div className="hot">
      <h1>Hot Homestay</h1>
      <div className='hot-lists'>
        {

          props.houses?.map(item => (

            <div key={item.id} className="hot-lists-item">
              <img className="img" src={item.img}></img>
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

export default Hot