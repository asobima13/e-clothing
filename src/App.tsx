import './App.scss'
import HomePage from './pages/home-page/HomePage'
import ShopPage from './pages/shop-page/ShopPage'
import Header from './components/header/Header'
import SignInAndUpPage from './pages/sign-in-and-up-page/SignInAndUpPage'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/shop'>
          <ShopPage />
        </Route>
        <Route path='/sign-in'>
          <SignInAndUpPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
