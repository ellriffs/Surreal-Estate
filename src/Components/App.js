import {
  BrowserRouter as Router, 
  Switch, 
  Route, 
} from 'react-router-dom'
import Navbar from './Navbar'
import '../styles/App.css';
import Properties from './Properties';
import AddProperty from './Add-Properties';




function App() {
  return (
    <Router>
    <div className="App">
      <title>Surreal Estate</title>
      <Navbar />
      <Switch>
        <Route exact path="/Properties" component={Properties} />
        <Route exact path="/Add-Properties" component={AddProperty} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
