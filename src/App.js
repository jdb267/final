import './App.css';
import Campuses from './components/Campuses';
import Navbar from './components/Navbar';
import Students from './components/Students';
import Campus from './components/Campus';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/campuses" component={Campuses} />
          <Route path="/students" component={Students} />
        </Switch>
        

    </div>
    </Router>
    
  );
}

export default App;
