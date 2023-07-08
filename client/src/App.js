import './App.css';
import {Route, Switch} from 'react-router-dom'
import Landing from '../src/views/Landing/Landing'
import Home from '../src/views/Home/Home'
import Detail from '../src/views/Detail/Detail'
import CreateGame from '../src/views/CreateGame/CreateGame'



function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/home" component={Home}/>
        <Route path="/home/:id" component={Detail}/>
        <Route path="/creategame" component={CreateGame}/>
      </Switch>
    </div>
  );
}

export default App;
