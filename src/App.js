import './App.css';
import { NavBar } from './components/layout/NavBar';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import {PageNotFound} from "./components/pages/404"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { CreateUser } from './components/users/CreateUser';
import { UpdateUser } from './components/users/UpdateUser';
import { ShowUser } from './components/users/ShowUser';
function App() {
  return (
    <div>
      <Router>
      <NavBar />
        <div className="container py-4">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/users/add" component={CreateUser}/>
          <Route path="/users/edit/:id" component={UpdateUser}/>
          <Route path="/users/view/:id" component={ShowUser}/>
          <Route component={PageNotFound} />
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
