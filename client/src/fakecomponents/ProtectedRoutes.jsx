import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoutes = (props) => {
  const { exact, path, user, component, ...francisco } = props;
  const Component = component;
  if (!user) {
    return <Redirect to="/login" />;
  }
  return (
    <Route
      exact={exact}
      path={path}
      render={(routerProps) => (
        <Component {...routerProps} user={user} {...francisco} />
      )}
    />
  );
};

export default ProtectedRoutes;
