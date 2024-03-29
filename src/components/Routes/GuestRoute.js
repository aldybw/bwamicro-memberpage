import { Redirect, Route, withRouter } from "react-router-dom";

const GuestRoute = ({ component: Component, location, ...rest }) => {
  const ok = localStorage.getItem("BWAMICRO:token");
  const params = location?.search.substring(1).split("&");
  const path = params.find((item) => item.indexOf("path") > -1);
  const redirect = path?.split("=")?.[1];

  if (!ok && redirect) localStorage.setItem("BWAMICRO:redirect", redirect);

  return (
    <Route
      {...rest}
      render={(props) =>
        ok ? <Redirect to={`/`} /> : <Component {...props} />
      }
    />
  );
};

export default withRouter(GuestRoute);
