import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalStyle from './style/GlobalStyle';
import Search from './pages/Search';
import Home from './pages/Home';

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
