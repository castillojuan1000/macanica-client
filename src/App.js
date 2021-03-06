import './App.css';
import NavTabs from './components/NavTabs'
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Redirect exact from="/" to="/create" />
      <Route exact path="/:page?" render={props => <NavTabs {...props} />} />
    </Switch>
  );
}

export default App;
