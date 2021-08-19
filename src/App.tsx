import './App.scss'
import HomePage from './pages/home-page/HomePage'
import ShopPage from './pages/shop-page/ShopPage'
import Header from './components/header/Header'
import SignInAndUpPage from './pages/sign-in-and-up-page/SignInAndUpPage'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

type CurrentUser = {
  id: string,
  displayName: string,
  email: string,
  createdAt: string
} | null

function App() {
  const [currentUser, setCurrentUser] = useState<CurrentUser>(null);

  useEffect(() => {
    
    auth.onAuthStateChanged( async (userAuth) => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef?.onSnapshot(snapshot => {
          const { displayName, email, createdAt }: any = snapshot.data();
          
          setCurrentUser({
            id: snapshot.id,
            displayName: displayName,
            email: email,
            createdAt: createdAt
          })

        })
      } else {
        setCurrentUser(userAuth)
      }
      
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
