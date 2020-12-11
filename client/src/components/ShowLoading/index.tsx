import React from "react";
import "./index.less"

interface IShowLoadingProps {
  loading: boolean
}

const ShowLoading: React.FC<IShowLoadingProps> = (props) => {

  return (
    <div id="tew-loading">
      {
        props.loading ?
          <div className="loading-info">loading...</div> : <div className="loading-info">No more data ~</div>
      }
    </div>
  )
}

export default ShowLoading