import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import News from "./pages/News";
import Music from "./pages/Music";
import Settings from "./pages/Settings";
import UsersPageContainer from "./components/users/UsersPageContainer";
import LoginContainer from "./components/login/LoginContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import React, { lazy, Suspense, useEffect } from "react";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/reducers/appReducer";
import Preloader from "./components/UI/preloader/Preloader";
import store from "./redux/createStore";

const ProfilePageContainer = lazy(() =>
  import("./components/profile/ProfilePageContainer")
);
const ChatPageContainer = lazy(() =>
  import("./components/messages/ChatPageContainer")
);

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialization) {
      return <Preloader />;
    }
    return (
      <div className="main">
        <HeaderContainer />
        <div className="df ">
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="/login" element={<LoginContainer />} />
              <Route path="/profile" element={<ProfilePageContainer />} />
              <Route
                path="/profile/:userId"
                element={<ProfilePageContainer />}
              />
              <Route path="/messages" element={<ChatPageContainer />} />
              <Route path="/users" element={<UsersPageContainer />} />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialization: state.app.initialization,
  };
};

const AppContainer = compose(connect(mapStateToProps, { initializeApp })(App));

const MainApp = () => {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </BrowserRouter>
    </>
  );
};

export default MainApp;
