import React from 'react';
import { Route } from 'react-router-dom';

import '@nx-example/shared/header';

import { CartCartPage } from '@nx-example/cart/cart-page';

export const App = () => {
  // This is a comment
  return (
    <>
      <nx-example-header />
      <Route path="/cart" exact component={CartCartPage} />
    </>
  );
};

export default App;
