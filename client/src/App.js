import logo from "./logo.svg";
import React from "react";
import questions from "./questions.json";
import Question from "./components/Question";
import { addNewQuestion, getAllQuestions } from "./services/questions";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingleQuestionPage from "./pages/SingleQuestionPage";
import Navbar from "./components/Navbar";
import Signup from "./pages/Singup";
import LogIn from "./pages/LoginPage";
import ProtectedPage from "./pages/ProtectedPage";
import NotFound from "./pages/NotFound";
import ProtectedRoutes from "./fakecomponents/ProtectedRoutes";
import NormalRoute from "./fakecomponents/NormalRoutes";

class App extends React.Component {
  state = {
    user: null,
    isLoading: true,
  };

  authenticate = (user) => {
    this.setState({ user: user });
  };

  logout = () => {
    const accessToken = localStorage.getItem("accessToken"); // 43562390567435986743 || null
    axios
      .delete("http://localhost:5005/auth/logout", {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        console.log("response:", response);
        localStorage.removeItem("accessToken");
        this.authenticate(null);
      })
      .catch((err) => {
        console.log("err:", err);
        localStorage.removeItem("accessToken");
        this.authenticate(null);
      });
  };

  componentDidMount = () => {
    const accessToken = localStorage.getItem("accessToken"); // 43562390567435986743 || null
    console.log("accessToken:", accessToken);
    axios
      .get("http://localhost:5005/auth/loggedin", {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        console.log(response);
        this.setState({
          user: response.data.user,
          isLoading: false,
        });
      });
  };

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div style={{ margin: "0 auto", maxWidth: "768px" }} className="App">
        <Navbar logout={this.logout} user={this.state.user} />
        <h3 style={{ textAlign: "center" }}>Slack overflow</h3>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/question/:id" component={SingleQuestionPage} />
          {/* <Route
            exact
            path="/signup"
            render={(routerProps) => (
              <Signup {...routerProps} authenticate={this.authenticate} />
            )}
          /> */}

          <NormalRoute
            exact
            path="/signup"
            component={Signup}
            authenticate={this.authenticate}
          />

          {/* {this.state.user && (
            <Route exact path="/protected" component={ProtectedPage} />
          )} */}
          {/* {this.state.user ? (
            <Route
              exact
              path="/protected"
              render={(routerProps) => (
                <ProtectedPage
                  {...routerProps}
                  user={this.state.user}
                  authenticate={this.authenticate}
                />
              )}
            />
          ) : (
            <Route component={LogIn} />
          )} */}

          <ProtectedRoutes
            exact
            path="/protected"
            component={ProtectedPage}
            user={this.state.user}
            authenticate={this.authenticate}
          />

          {/* <ProtectedRoutes
            exact
            path="/admin"
            component={AdminComponent}
            user={this.state.user}
          />

          <ProtectedRoutes
            exact
            path="/profile"
            component={ProfilePage}
            user={this.state.user}
          /> */}

          <Route
            exact
            path="/login"
            render={(routerProps) => (
              <LogIn {...routerProps} authenticate={this.authenticate} />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
