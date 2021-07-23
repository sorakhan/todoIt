import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Completed from "./pages/Completed";
import Next from "./pages/Next";
import Todo from "./pages/Todo";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Todo} exact></Route>
        <Route path="/upcoming" component={Next}></Route>
        <Route path="/completed" component={Completed}></Route>
      </Switch>
    </Layout>
  );
}

export default App;
