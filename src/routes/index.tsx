import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
    </Switch>
  );
};
