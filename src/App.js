
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import SignUp from './SignUp';
import Welcome from './welcome';
import Tracking from './Tracking';
import Personalize from './personalize';
import Healthy from './healthy';
import Exercise from './Exercise';
import Login from './Login';

function App() {
  return (
    <BrowserRouter>
                
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup"  component={SignUp} />
                <Route path="/login"  component={Login} />

                <Route path="/welcome"  component={Welcome} />
                <Route path="/tracking"  component={Tracking} />
                <Route path="/personalize"  component={Personalize} />
                <Route path="/healthy"  component={Healthy} />
                <Route path="/exercise"  component={Exercise} />



                
            </Switch>
        </BrowserRouter>
    
  );
}

export default App;
