import { ActionPanel, List, Action, Detail } from "@raycast/api";

const routes = [
  {
    code: "gh",
    url: "https://github.com",
    routes: [
      {
        name: "docs",
        url: "https://github.com/camunda/camunda-docs",
      },
      {
        name: "me",
        url: "https://github.com/pepopowitz",
      },
    ],
  },
  {
    code: "google",
    url: "https://google.com",
    routes: [],
  },
];

export default function Command(props) {
  console.log(props.arguments);
  return (
    <List>
      {routes.map((route) => {
        let childAction;
        if (route.routes.length === 0) {
          childAction = (
            <ActionPanel>
              <Action.OpenInBrowser url={route.url} title={route.code} />
            </ActionPanel>
          );
        } else {
          childAction = (
            <ActionPanel>
              <Action.Push title={route.code} target={<ChildActions routes={route.routes} />} />
            </ActionPanel>
          );
        }

        return <List.Item icon="list-icon.png" title={route.code} key={route.code} actions={childAction} />;
      })}
    </List>
  );
}

function ChildActions({ routes }) {
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
