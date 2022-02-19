import { Navigate } from "react-router";
import { useAuth } from "../../auth/contexts/AuthProvider";

type PrivateRouteProps = {
  roles?: string[];
  component: React.ComponentType;
};

const PrivateRoute = ({
  component: RouteComponent,
  roles
}: PrivateRouteProps) => {
  const { hasRole, userInfo } = useAuth();

  if (userInfo) {
    if (!hasRole(roles)) {
      return <Navigate to={`/403`} />;
    }
    return <RouteComponent />;
  } else {
    return <Navigate to={`/login`} />;
  }
};

export default PrivateRoute;
