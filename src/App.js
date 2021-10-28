import './App.css';
import NavTabs from './components/NavTabs'
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Redirect exact from="macanica-client/#/" to="/create" />
      <Route exact path="macanica-client/#/:page?" render={props => <NavTabs {...props} />} />
    </Switch>
  );
}

export default App;
