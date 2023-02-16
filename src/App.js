import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Header from "./composants/header/Header";
import Footer from "./composants/footer/Footer";
import Error from "./composants/error/Error";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Logement from "./pages/logement/Logement";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/a-propos">
            <About />
          </Route>
          <Route path="/logement/:id">
            <Logement />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
