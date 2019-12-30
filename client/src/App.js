import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import { ThemeProvider } from "emotion-theming";
import dark from "./themes/dark";
import Message from "./pages/Message";
import MyCandidates from "./pages/MyCandidates";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Login from "./pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/message">
            <Message />
          </Route>
          <Route path="/mycandidates">
            <MyCandidates />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
