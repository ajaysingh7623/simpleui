
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import SignUp from './SignUp';
import Welcome from './welcome';
import Tracking from './Tracking';
import Personalize from './personalize';
import Healthy from './healthy';
import Exercise from './Exercise';

function App() {
  return (
    <BrowserRouter>
                
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup" exact component={SignUp} />
                <Route path="/welcome" exact component={Welcome} />
                <Route path="/tracking" exact component={Tracking} />
                <Route path="/personalize" exact component={Personalize} />
                <Route path="/healthy" exact component={Healthy} />
                <Route path="/exercise" exact component={Exercise} />



                
            </Switch>
        </BrowserRouter>
    
  );
}

export default App;
