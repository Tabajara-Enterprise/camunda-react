import React from 'react';
import { useKeycloak } from '@react-keycloak/web';

import { Route, Switch } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';
import { Users } from '../pages/Users';
import { UserNew } from '../pages/UserNew';
import { Solicitations } from '../pages/Solicitations';
import { StartSolicitation } from '../pages/StartSolicitation';
import { Tasks } from '../pages/Tasks';
import { DeployProcess } from '../components/Camunda/DeployProcess';
import PrivateRoute from './PrivateRoute';
import { UserDetail } from '../pages/UserDetail';

export const Routes: React.FC = () => {
  const [, initialized] = useKeycloak();
  if (!initialized) {
    return <h1>Aguarde...</h1>;
  }
  return (
    <Switch>
      <PrivateRoute
        path="/process/deployment"
        roles={['admin']}
        component={DeployProcess}
      />
      <Route path="/tasks" component={Tasks} />
      <Route path="/solicitaions/start" component={StartSolicitation} />
      <Route path="/solicitations" component={Solicitations} />
      <Route path="/users/new" component={UserNew} />
      <Route path="/users/:id" component={UserDetail} />
      <Route path="/users" component={Users} />
      <Route exact path="/" component={Dashboard} />
    </Switch>
  );
};
