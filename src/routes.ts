import { getPreferenceValues, Cache } from "@raycast/api";
import { promises as fs } from "fs";
import os from "os";
import path from "path";

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
    return Promise.resolve(JSON.parse(cached));
  }

  const routes = await loadRoutesFromFile();
  cache.set("routes", JSON.stringify(routes));
  return Promise.resolve(routes);
}

async function loadRoutesFromFile(): Promise<Array<Route>> {
  console.log("Loading routes from file");
  const preferences = getPreferenceValues<Preferences>();
  const filePath = path.resolve(preferences.goto_path.replace(/^~(?=$|\/|\\)/, os.homedir()));

  const fileContent = await fs.readFile(filePath, "utf-8");
  return JSON.parse(fileContent) as Array<Route>;
}

export async function clearRoutes() {
  const cache = new Cache();
  cache.remove("routes");
}
