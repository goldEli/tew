import React from "react";
import "./index.less"
import { commonEnums } from "@/enums";

interface IShowLoadingProps {
  loading: boolean
}

const ShowLoading: React.FC<IShowLoadingProps> = (props) => {

  return (
    <div >
      {
        props.loading ?
          <div id={commonEnums.LOADING_ID} className="loading-info">loading...</div> : <div className="loading-info">No more data ~</div>
      }
    </div>
  )
}

export default ShowLoading