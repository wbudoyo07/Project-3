import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import AnswerSurvey from "./pages/AnswerSurvey";
import CreateSurvey from "./pages/CreateSurvey";
import Login from "./pages/Login";
import PreviousSurvey from "./pages/PreviousSurvey";
import SignUp from "./pages/Signup";
import SurveyOption from "./pages/SurveyOption";
import VoteResults from "./pages/VoteResults";
import NoMatch from "./pages/NoMatch";
import PrivateRoute from "./components/PrivateRoute";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/AnswerSurvey" component={AnswerSurvey} />
        {/* In Order to access to private route the use must logged in */}
        <PrivateRoute exact path="/aboutus" component={AboutUs} />
        <PrivateRoute exact path="/surveyoptions" component={SurveyOption} />
        <PrivateRoute exact path="/createsurvey" component={CreateSurvey} />
        <PrivateRoute exact path="/previousSurvey" component={PreviousSurvey} />
        <PrivateRoute exact path="/VoteResults" component={VoteResults} />
        {/* No match routes must be on bottom if it on the top,
          it will render first before calling the PrivateRoute */}
        <Route component= {NoMatch}/>
      </Switch>
    </div>
  </Router>
);

export default App;
