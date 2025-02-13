import { showToast, Toast } from "@raycast/api";
import { clearRoutes, getRoutes } from "./routes";

export default async function Command() {
  clearRoutes();
  await getRoutes();
  await showToast({
    title: "Routes reloaded!",
    style: Toast.Style.Success,
    message: "Routes have been reloaded from configuration!",
  });
}
