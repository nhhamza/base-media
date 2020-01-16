import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';

const HelpPage = lazy(() => import('./pages/help/help.component'));

export const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/" component={HelpPage} key="help" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
