import React from "react";
import "./index.less"
import Header from "./components/header";
import Search from "./components/search";
import { ErrorBoundary } from "@/components";
import Hot from "./components/hot";
import { useHttpHook } from "@/hooks";
import { ICities, IHouses } from "@/type";


interface IHomeProps { }

const Home: React.FC<IHomeProps> = (props) => {
  const [cities, citiesLoading] = useHttpHook<ICities>({
    url: "/common/cities", initData: []
  })
  const [houses, housesLoading] = useHttpHook<IHouses>({
    url: "/house/hot", initData: []
  })
  return (
    <ErrorBoundary>
      <div className="home">
        {/* header */}
        <Header />
        {/* search */}
        {!citiesLoading && <Search cities={cities} />}
        {/* hot */}
        {!housesLoading && <Hot houses={houses} />}
      </div>
    </ErrorBoundary>
  )
}

export default Home