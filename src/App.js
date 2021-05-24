import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter,
  Link,
  Route,
  Redirect,
  Switch,
  useLocation,
} from 'react-router-dom';
import ListElevator from './pages/ListElevator';
import ElevatorDetails from './pages/ElevatorDetails';
import './App.scss';

const PrivateRoute = ({ component: InternalComponent, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const isAuthenticated = true;
        return isAuthenticated
          ? <InternalComponent {...props} />
          : <Redirect to={{ pathname: '/' }} />;
      }
    }
  />
);

const PublicRoute = ({ component: InternalComponent, ...rest }) => (
  <Route
    {...rest}
    render={props => (<InternalComponent {...props} />)}
  />
);

const routes = [
  {
    name: 'Elevators',
    pathname: '/',
    component: ListElevator,
    exact: true,
    wrapper: PrivateRoute,
  },
  {
    name: 'Elevator Details',
    pathname: '/q-s-e',
    component: ElevatorDetails,
    exact: true,
    wrapper: PrivateRoute,
  },
];

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, index) => (
          <route.wrapper
            key={route.pathname}
            component={route.component}
            path={route.pathname}
            exact={route.exact || false}
          />))
        }
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

PublicRoute.propTypes = { component: PropTypes.any.isRequired };
PrivateRoute.propTypes = { component: PropTypes.any.isRequired };

export default App;
