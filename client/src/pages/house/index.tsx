import React from "react";
import Banner from "./components/Banner";
import Info from "./components/Info";
import CommentList from "./components/CommentList";
import Footer from "./components/Footer";

interface IHouseProps { }

const House: React.FC<IHouseProps> = (props) => {
  return (
    <div className="house">
      {/* banner */}
      <Banner />
      {/* info */}
      <Info />
      {/* comment list */}
      <CommentList /> 
      {/* footer */}
      <Footer />
    </div>

  )
}

export default House