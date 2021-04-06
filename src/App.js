import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ContactPage from './pages/contact'
import PortfolioPage from './pages/portfolio'
import HomePage from './pages/home'
import AboutPage from './pages/about'

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/Contact">
          <ContactPage />
        </Route>
        <Route path="/portfolio">
          <PortfolioPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
