import { ActionPanel, List, Action } from "@raycast/api";

const routes = [
  {
    code: "gh",
    url: "https://github.com",
  },
  {
    code: "google",
    url: "https://google.com",
  },
];

export default function Command(props) {
  console.log(props.arguments);
  return (
    <List>
      {routes.map((route) => {
        return (
          <List.Item
            icon="list-icon.png"
            title={route.code}
            key={route.code}
            actions={
              <ActionPanel>
                <Action.OpenInBrowser url={route.url} title={route.code} key={route.code} />
              </ActionPanel>
            }
          />
        );
      })}
    </List>
  );
}
