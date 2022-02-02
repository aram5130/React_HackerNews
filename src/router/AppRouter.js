import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import MainPage from "../components/MainPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path="/" component={MainPage} exact={true} />
        </Switch>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
