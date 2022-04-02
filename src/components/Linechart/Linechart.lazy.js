import React, { lazy, Suspense } from 'react';

const LazyLinechart = lazy(() => import('./Linechart'));

const Linechart = props => (
  <Suspense fallback={null}>
    <LazyLinechart {...props} />
  </Suspense>
);

export default Linechart;
