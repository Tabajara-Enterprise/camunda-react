import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from './Route';

import { Dashboard } from '../pages/Dashboard';
import { Deployments } from '../pages/Deployments';
import { StartProcess } from '../pages/StartProcess';
import { Login } from '../pages/Login';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route
        path="/start-process/key/:key"
        component={StartProcess}
        isPrivate
      />
      <Route path="/deployments" component={Deployments} isPrivate />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/" exact component={Login} />
    </Switch>
  );
};
