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

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/surveyoptions" component={SurveyOption} />
        <Route exact path="/createsurvey" component={CreateSurvey} />
        <Route exact path="/previousSurvey" component={PreviousSurvey} />
        <Route exact path="/AnswerSurvey" component={AnswerSurvey} />
        <Route exact path="/VoteResults" component={VoteResults} />
      </Switch>
    </div>
  </Router>
);

export default App;
