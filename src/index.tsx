import { ActionPanel, List, Action, Detail } from "@raycast/api";

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
                <Action.Push title="Push Pong" target={<Pong />} />
              </ActionPanel>
            }
          />
        );
      })}
    </List>
  );
}

function Pong() {
  return (
    <List>
      <List.Item
        icon="list-icon.png"
        title="Windhand"
        actions={
          <ActionPanel>
            <Action.OpenInBrowser url="https://google.com" title="This Is It" />
          </ActionPanel>
        }
      />
    </List>
  );
}
