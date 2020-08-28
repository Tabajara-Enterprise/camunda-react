import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from './Route';

import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';
import { Users } from '../pages/Users';
import { UserNew } from '../pages/UserNew';
import { Solicitations } from '../pages/Solicitations';
import { StartSolicitation } from '../pages/StartSolicitation';
import { Tasks } from '../pages/Tasks';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/tasks" component={Tasks} isPrivate />
      <Route
        path="/solicitations/start"
        component={StartSolicitation}
        isPrivate
      />
      <Route path="/solicitations" component={Solicitations} isPrivate />
      <Route path="/users/new" component={UserNew} isPrivate />
      <Route path="/users" component={Users} isPrivate />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/" exact component={Login} />
    </Switch>
  );
};
