import './App.scss'
import HomePage from './pages/home-page/HomePage'
import ShopPage from './pages/shop-page/ShopPage'
import Header from './components/header/Header'
import SignInAndUpPage from './pages/sign-in-and-up-page/SignInAndUpPage'
import { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import { useActions, useTypedSelector } from './store/hooks'
// eslint-disable-next-line react-hooks/exhaustive-deps

function App() {
  
  const { doAuth } = useActions();

  useEffect(() => {
    // doAuth()
    const unsubscribe = () => doAuth();
    return () => {
      unsubscribe();
    }
  }, [doAuth])

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route path="/sign-in">
          <SignInAndUpPage />
        </Route>
        <Route path="*">404 NOT FOUND</Route>
      </Switch>
    </Router>
  );
}

export default App;
