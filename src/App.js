import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import {
  Signin,
  Reset,
  PasswordDisplay,
  NewPassword,
  Verification,
  Dashboard,
  Businesses,
  Business,
  Subscriptions,
} from "pages";

const App = () => {
  return (
    <Suspense>
      <Router>
        <Routes>
          <Route path="/session/new" exact element={<Signin />} />
          <Route path="/resetpassword" exact element={<Reset />} />
          <Route
            path="/resetpassword/sent"
            exact
            element={<PasswordDisplay />}
          />
          <Route path="/newpassword" exact element={<NewPassword />} />
          <Route path="/verification" exact element={<Verification />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/businesses" exact element={<Businesses />} />
          <Route path="/businesses/:id" exact element={<Business />} />
          <Route path="/subscriptions" exact element={<Subscriptions />} />
          <Route
            path="/subscriptions/:plan"
            exact
            element={<Subscriptions />}
          />
          <Route
            exact
            path="/"
            element={<Navigate to="/session/new" replace />}
          />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
