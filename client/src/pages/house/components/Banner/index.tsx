import React from "react";
import AwesomeSwiper from 'react-awesome-swiper';

interface IBannerProps { }

const Banner: React.FC<IBannerProps> = (props) => {
  const refSwiper = React.useRef(null)
  const [config, setConfig] = React.useState({
    loop: true,
    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      // disableOnInteraction: true,
    },
    // Disable preloading of all images
    // preloadImages: false,
    // Enable lazy loading
    // lazy: true,
    speed: 500,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      bulletElement: 'li',
      hideOnClick: true,
      clickable: true,
    },
    // on: {
    //   slideChange: function () {
    //     // console.log(this.activeIndex);
    //   },
    // },
  })
  return (
    <AwesomeSwiper ref={refSwiper} config={config} className="banner">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img alt="img" src={require("../../../../assets/1.png")}></img>
        </div>
        <div className="swiper-slide">
          <img alt="img" src={require("../../../../assets/2.png")}></img>
        </div>
        <div className="swiper-slide">
          <img alt="img" src={require("../../../../assets/3.png")}></img>
        </div>
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-pagination"></div>
    </AwesomeSwiper>
  )
}

export default Banner