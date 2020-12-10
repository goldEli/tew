import React from "react";
import "./index.less"
import Header from "./components/header";
import Search from "./components/search";
import Hot from "./components/hot";

interface IHomeProps {}

const Home:React.FC<IHomeProps> = (props) => {
    return <div className="home">
      {/* header */}
      <Header />
      {/* search */}
      <Search />
      {/* hot */}
      <Hot />
    </div>
}

export default Home