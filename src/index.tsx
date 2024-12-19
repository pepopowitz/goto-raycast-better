import { routes } from "./routes";
import { RouteList } from "./RouteList";

export default function Command() {
  return <RouteList routes={routes} />;
}
