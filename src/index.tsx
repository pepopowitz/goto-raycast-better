// import { routes } from "./routes";
import { useEffect, useState } from "react";
import { RouteList } from "./RouteList";
import { getRoutes, Route } from "./routes";
import { showToast, Toast } from "@raycast/api";

export default function Command() {
  const [routes, setRoutes] = useState<Array<Route>>([]);

  useEffect(() => {
    async function fetchRoutes() {
      try {
        const routes = await getRoutes();
        setRoutes(routes);
      } catch (error) {
        await showToast({
          title: "Failed to reload routes.",
          style: Toast.Style.Failure,
          message: error as string,
        });
      }
    }
    fetchRoutes();
  }, []);

  return <RouteList routes={routes} />;
}
