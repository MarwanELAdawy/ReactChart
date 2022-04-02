import React, { lazy, Suspense } from 'react';

const LazyPiechart = lazy(() => import('./Piechart'));

const Piechart = props => (
  <Suspense fallback={null}>
    <LazyPiechart {...props} />
  </Suspense>
);

export default Piechart;
