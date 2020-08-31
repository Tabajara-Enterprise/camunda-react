import React from 'react';
import { useKeycloak } from '@react-keycloak/web';

import { Route, Switch } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';
import { Users } from '../pages/Users';
import { UserNew } from '../pages/UserNew';
import { Solicitations } from '../pages/Solicitations';
import { StartSolicitation } from '../pages/StartSolicitation';
import { Tasks } from '../pages/Tasks';
import PrivateRoute from './PrivateRoute';
import { UserDetail } from '../pages/UserDetail';
import { UserEdit } from '../pages/UserEdit';

export const Routes: React.FC = () => {
  const [, initialized] = useKeycloak();
  if (!initialized) {
    return <h1>Aguarde...</h1>;
  }
  return (
    <Switch>
      <Route path="/tasks" component={Tasks} />
      <Route path="/solicitations/start/:id" component={StartSolicitation} />
      <Route path="/solicitations" component={Solicitations} />
      <PrivateRoute
        roles={['ADMINISTRATOR']}
        path="/users/new"
        component={UserNew}
      />
      <PrivateRoute
        roles={['ADMINISTRATOR']}
        path="/users/:id/detail"
        component={UserDetail}
      />
      <PrivateRoute
        roles={['ADMINISTRATOR']}
        path="/users/:id/edit"
        component={UserEdit}
      />
      <PrivateRoute roles={['ADMINISTRATOR']} path="/users" component={Users} />
      <Route exact path="/" component={Dashboard} />
    </Switch>
  );
};
