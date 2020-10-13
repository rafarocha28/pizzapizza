import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Container, CssBaseline } from '@material-ui/core';

import Cart from './pages/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import PizzaStep from './pages/PizzaStep';
import Welcome from './pages/Welcome';

const routes = [
  {
    component: Cart,
    exact: true,
    key: 'cart',
    path: '/cart',
  },
  {
    component: () => <PizzaStep step="crust" />,
    exact: true,
    key: 'crust',
    path: '/pizza/crust',
  },
  {
    component: () => <PizzaStep step="size" />,
    exact: true,
    key: 'size',
    path: '/pizza/size',
  },
  {
    component: () => <PizzaStep step="toppings" />,
    exact: true,
    key: 'toppings',
    path: '/pizza/toppings',
  },
  {
    component: Welcome,
    exact: true,
    key: 'welcome',
    path: '/welcome',
  },
  {
    component: () => <Redirect to="/welcome" />,
    exact: false,
    key: 'root',
    path: '/',
  },
];

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Header />
      <Container maxWidth="sm">
        <Switch>
          {routes.map((route) => (
            <Route
              component={route.component}
              exact={route.exact}
              key={route.key}
              path={route.path}
            />
          ))}
        </Switch>
      </Container>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
