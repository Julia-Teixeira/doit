import { ComponentType } from "react";
import { Link, Route as ReactRoute, IndexRouteObject } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

interface iProps extends IndexRouteObject {
  isPrivate?: boolean;
  component: ComponentType;
}

export const Route = ({
  isPrivate = false,
  component: Component,
  ...rest
}: iProps) => {
  const { accessToken } = useAuth();
  return (
    <ReactRoute
      {...rest}
      handle={() =>
        isPrivate === !!accessToken ? (
          <Component />
        ) : (
          <Link to={isPrivate ? "/" : "/dashboard"} />
        )
      }
    />
  );
};
