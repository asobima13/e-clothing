import './App.scss'
import HomePage from './pages/home-page/HomePage'
import ShopPage from './pages/shop-page/ShopPage'
import Header from './components/header/Header'
import SignInAndUpPage from './pages/sign-in-and-up-page/SignInAndUpPage'
import { auth } from './firebase/firebase.utils'
import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

type CurrentUser = {
  name: string | null,
  email: string | null,
  photoUrl: string | null
} | null

function App() {
  const [currentUser, setCurrentUser] = useState<CurrentUser>(null);

  useEffect(() => {
    
    auth.onAuthStateChanged((user) => {
      user && setCurrentUser({
        name: user?.displayName,
        email: user?.email,
        photoUrl: user?.photoURL
      })
      // displayName
      // email
      // photoUrl
      // emailVerified: bool
    })
    
  }, []);

  return (
    <Router>
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
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
