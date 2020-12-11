

import React, { Suspense, useMemo } from "react";

interface ILazyLoadProps {
  Lazy: React.LazyExoticComponent<React.ComponentType<any>>
}

const LazyLoad: React.FC<ILazyLoadProps> = (props) => {
  const {Lazy} = props
  return <div>
    <Suspense fallback={<div>loading...</div>}>
      <Lazy />
    </Suspense>
  </div>
}

export default LazyLoad