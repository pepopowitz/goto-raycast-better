// import { routes } from "./routes";
import { useEffect, useState } from "react";
import { RouteList } from "./RouteList";
import { getRoutes, Route } from "./routes";

export default function Command() {
  const [routes, setRoutes] = useState<Array<Route>>([]);

  useEffect(() => {
    async function fetchRoutes() {
      const routes = await getRoutes();
      setRoutes(routes);
    }
    fetchRoutes();
  }, []);

  return <RouteList routes={routes} />;
}
