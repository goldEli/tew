import React from "react";
import Banner from "./components/Banner";
import Info from "./components/Info";
import CommentList from "./components/CommentList";
import Footer from "./components/Footer";
import { useHttpHook } from "@/hooks"
import { IHouseDetail } from "@/type"
// import useHouseDetail from "./useHouseDetail";
import './index.less';

interface IHouseProps { }

const House: React.FC<IHouseProps> = (props) => {
  const [detail, detailLoading] = useHttpHook({
    url: "/house/detail", initData: {
      banner: [],
      info: {}
    }
  })
  return (
    <div className="house-page">
      {/* banner */}
      <Banner list={detail?.banner}/>
      {/* info */}
      <Info detail={detail?.info}/>
      {/* comment list */}
      <CommentList />
      {/* footer */}
      <Footer />
    </div>

  )
}

export default House