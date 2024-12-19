import { ActionPanel, List, Action } from "@raycast/api";

const routes: Array<Route> = [
  {
    name: "gh",
    url: "https://github.com",
    routes: [
      {
        name: "docs",
        url: "https://github.com/camunda/camunda-docs",
        routes: [],
      },
      {
        name: "me",
        url: "https://github.com/pepopowitz",
        routes: [],
      },
    ],
  },
  {
    name: "google",
    url: "https://google.com",
    routes: [],
  },
];

export default function Command() {
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

interface Route {
  name: string;
  url: string;
  routes: Array<Route>;
}

interface ChildActionsProps {
  routes: Array<Route>;
}

function ChildActions({ routes }: ChildActionsProps) {
  return (
    <List>
      {routes.map((route) => {
        return (
          <List.Item
            icon="list-icon.png"
            title={route.name}
            actions={
              <ActionPanel>
                <Action.OpenInBrowser url={route.url} title={route.name} />
              </ActionPanel>
            }
          />
        );
      })}
    </List>
  );
}
