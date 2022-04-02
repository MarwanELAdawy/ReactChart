import React, { lazy, Suspense } from 'react';

const LazyBarchart = lazy(() => import('./Barchart'));

const Barchart = props => (
  <Suspense fallback={null}>
    <LazyBarchart {...props} />
  </Suspense>
);

export default Barchart;
