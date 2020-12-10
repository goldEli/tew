import React, { useEffect } from "react";
import { useObserverHook } from "@/hooks";


interface IObserverProps { }

const Observer: React.FC<IObserverProps> = (props) => {

  useObserverHook("#box", (entries) => {
    console.log(entries)
  })

  return (
    <>
      <div id="scrollArea">
        <h1>observer</h1>
      </div>
      <div id="box" style={{ width: "100px", height: "100px", background: "red", marginTop: "1000px" }}></div>
    </>
  )
}

export default Observer