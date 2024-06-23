/* eslint-disable react/prop-types */

import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const user = useSelector(state => state.user);

  if (!user) return <Navigate to="/" replace={true} />;

  return children;
};

export default PrivateRoute;
