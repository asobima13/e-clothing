import './App.scss'
import HomePage from './pages/home-page/HomePage'
import ShopPage from './pages/shop-page/ShopPage'
import Header from './components/header/Header'
import SignInAndUpPage from './pages/sign-in-and-up-page/SignInAndUpPage'
import CheckoutPage from './pages/checkout-page/CheckoutPage'
import { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import { useActions, useTypedSelector } from './store/hooks'

function App() {
  
  const { doAuth } = useActions();
  const { currentUser } = useTypedSelector(state => state.user)

  useEffect(() => {
    doAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/sign-in">
          {currentUser ? (<Redirect to="/" />) : (<SignInAndUpPage />)}
        </Route>
        <Route path="*"><h1>404: PAGE NOT FOUND</h1></Route>
      </Switch>
    </Router>
  );
}

export default App;
