
import './App.css';
import { Dash } from './Dash';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { Signin } from './Signin';
import { Signup } from './Signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
 
<Router>
 <Navbar></Navbar>
 <Switch>
   <Route exact path='/'><Dash></Dash></Route>
   <Route exact path='/Signin'> <Signin></Signin></Route>
   <Route exact path='/Signup'> <Signup></Signup></Route>
 
 </Switch>
 <Footer></Footer>
 
 </Router>
  );
}

export default App;
