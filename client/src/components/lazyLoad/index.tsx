

import React, { Suspense } from "react";

interface ILazyLoadProps { 
  url: string
 }

const LazyLoad: React.FC<ILazyLoadProps> = (props) => {
  return <div>
    <Suspense fallback={<div>loading...</div>}>
      {React.lazy(() => import(props.url))}
    </Suspense>
  </div>
}

export default LazyLoad