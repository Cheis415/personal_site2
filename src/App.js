import './App.css';
import Home from './components/Pages';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ProjectDetails from './components/ProjectDetails';
import { projectObj, projectObj2, projectObj3 } from './components/ProjectDetails/Data';
import Portfolio from './components/Portfolio';


function App() {
  return (
    <Router>
     <Switch>
       <Route path='/' component={Home} exact />
       <Route path='/details' exact >
         <ProjectDetails {...projectObj} />
       </Route>
       <Route path='/details2' exact >
         <ProjectDetails {...projectObj2} />
       </Route>
       <Route path='/details3' exact >
         <ProjectDetails {...projectObj3} />
       </Route>
       <Route path='/projects' exact >
         <Portfolio />
       </Route>
     </Switch>
    </Router>
  );
}

export default App;
