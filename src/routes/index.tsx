import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';
import { Deployments } from '../pages/Deployments';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/deployments" component={Deployments} />
      <Route path="/" exact component={Dashboard} />
    </Switch>
  );
};
