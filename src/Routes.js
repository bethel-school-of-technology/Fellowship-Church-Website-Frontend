import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './screens/Login';
import ForgotPassword from './screens/ForgotPassword';
import ResetPassword from './screens/ResetPassword';
import UpdatePassword from './screens/UpdatePassword';

const Routes = () => (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/reset/:token" component={ResetPassword} />
        <Route exact path="/forgotPassword" component={ForgotPassword} />
        <Route exact path="/updateUser/:username" component={UpdateProfile} />
        <Route
          exact
          path="/updatePassword/:username"
          component={UpdatePassword}
        />
      </Switch>
    </div>
  );
  
  export default Routes;