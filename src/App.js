import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";

import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Profile from "./screens/Profile";
import Chatting from "./screens/Chatting";
import { GlobalStyle, darkTheme, whiteTheme } from "./styles";

import { ThemeProvider } from "styled-components";
import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : whiteTheme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path={routes.home} element={isLogin ? <Home /> : <Login />} />
          <Route path={routes.signup} element={<SignUp />} />
          <Route path={routes.profile} element={<Profile />} />
          <Route path={routes.chatting} element={<Chatting />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
