import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from './Route';

import { Dashboard } from '../pages/Dashboard';
import { StartProcess } from '../pages/StartProcess';
import { Login } from '../pages/Login';
import { Users } from '../pages/Users';
import { UserNew } from '../pages/UserNew';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route
        path="/start-process/key/:key"
        component={StartProcess}
        isPrivate
      />
      <Route path="/users/new" component={UserNew} isPrivate />
      <Route path="/users" component={Users} isPrivate />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/" exact component={Login} />
    </Switch>
  );
};
