import { Route, routes } from "./routes";
import { ActionPanel, List, Action } from "@raycast/api";

export default function Command() {
  return <ChildActions routes={routes} />;
}

interface ChildActionsProps {
  routes: Array<Route>;
}

function ChildActions({ routes }: ChildActionsProps) {
  return (
    <List>
      {routes.map((route) => {
        let childAction;
        if (route.routes.length === 0) {
          childAction = (
            <ActionPanel>
              <Action.OpenInBrowser url={route.url} title={route.name} />
            </ActionPanel>
          );
        } else {
          childAction = (
            <ActionPanel>
              <Action.Push title={route.name} target={<ChildActions routes={route.routes} />} />
            </ActionPanel>
          );
        }

        return <List.Item icon="list-icon.png" title={route.name} key={route.name} actions={childAction} />;
      })}
    </List>
  );
}
