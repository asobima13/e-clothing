import './App.scss'
import HomePage from './pages/homepage/HomePage'
import Shop from './pages/shop/Shop'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/shop'>
          <Shop />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
