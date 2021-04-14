import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ContactPage from './pages/contact'
import PortfolioPage from './pages/portfolio'
import HomePage from './pages/home'
import AboutPage from './pages/about'
import Nav from './components/Nav/nav'
import "./App.css"
import "./CYOA.png"
import "./comingsoon.png"
import "./battlestation.png"
import "./moonbackground.png"
import "./paul2.jpg"
import "./paul6.png"
import "./paulandmom.png"
import "./ragingmongooses.png"
import "./timedQuiz.png"

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/contact">
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
