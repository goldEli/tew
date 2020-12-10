import React from "react";
import "./index.less"
import Header from "./components/header";
import Search from "./components/search";
import Hot from "./components/hot";
import { useHttpHook } from "@/hooks";
import { ICities, IHouses } from "@/type";


interface IHomeProps { }

const Home: React.FC<IHomeProps> = (props) => {
  const [cities, citiesLoading] = useHttpHook<ICities>({
    url: "/common/cities"
  })
  const [houses, housesLoading] = useHttpHook<IHouses>({
    url: "/common/houses/hot"
  })
  return <div className="home">
    {/* header */}
    <Header />
    {/* search */}
    {!citiesLoading && <Search cities={cities} />}
    {/* hot */}
    {!housesLoading && <Hot houses={houses}/>}
  </div>
}

export default Home