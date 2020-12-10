import React from "react";

interface IHotProps { }

const Hot: React.FC<IHotProps> = (props) => {
  return (
    <div className="hot">
      <h1>Hot Homestay</h1>
      <div className='hot-lists'>
        {

          houses.map(item => (

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
const houses = [
  {
    id: 1,
    img: 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg',
    title: '东城民宿',
    info: '东城区交通方便',
    price: '100'
  },
  {
    id: 2,
    img: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
    title: '西城民宿',
    info: '西城区山水怡情',
    price: '120'
  },
  {
    id: 3,
    img: 'http://img2.mukewang.com/szimg/5ad05dc00001eae705400300-360-202.jpg',
    title: '新区民宿',
    info: '新区民宿位置优越',
    price: '200'
  },
  {
    id: 4,
    img: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
    title: '老城民宿',
    info: '老城区风景秀美',
    price: '220'
  }
]