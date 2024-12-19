import { Route } from "./routes";
import { ActionPanel, List, Action } from "@raycast/api";

interface RouteListProps {
  routes: Array<Route>;
}

export function RouteList({ routes }: RouteListProps) {
  return (
    <List>
      {routes.map((route) => {
        if (route.routes.length === 0) {
          return <LeafListItem route={route} key={route.name} />;
        } else {
          return <BranchListItem route={route} key={route.name} />;
        }
      })}
    </List>
  );
}

interface RouteListItemProps {
  route: Route;
}

function BranchListItem({ route }: RouteListItemProps) {
  const childAction = (
    <ActionPanel>
      <Action.Push title={route.name} target={<RouteList routes={route.routes} />} />
    </ActionPanel>
  );

  return <List.Item icon="list-icon.png" title={route.name} actions={childAction} />;
}

function LeafListItem({ route }: RouteListItemProps) {
  const childAction = (
    <ActionPanel>
      <Action.OpenInBrowser url={route.url} title={route.name} />
    </ActionPanel>
  );

  return <List.Item icon="list-icon.png" title={route.name} actions={childAction} />;
}
