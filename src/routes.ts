import { getPreferenceValues, Cache } from "@raycast/api";
export interface Route {
  name: string;
  url: string;
  routes: Array<Route>;
}

interface Preferences {
  goto_path: string;
}

export async function getRoutes(): Promise<Array<Route>> {
  const cache = new Cache();
  const cached = cache.get("routes");
  if (cached) {
    return Promise.resolve(JSON.parse("[]"));
  }

  const preferences = getPreferenceValues<Preferences>();
  // TODO: Fetch routes from preferences.goto_path
  const routes: Array<Route> = [];
  cache.set("routes", JSON.stringify(routes));
  return Promise.resolve(routes);
}

export async function clearRoutes() {
  const cache = new Cache();
  cache.clear();
}
