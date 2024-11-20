import { ActionPanel, List, Action } from "@raycast/api";

export default function Command() {
  return (
    <List>
      <List.Item
        icon="list-icon.png"
        title="Stuff!"
        actions={
          <ActionPanel>
            <Action.OpenInBrowser url="https://github.com" title="Things" key="gh" />
            <Action.OpenInBrowser url="https://docs.camunda.io" title="Production" key="prod" />
            <Action.OpenInBrowser url="https://stage.docs.camunda.io" title="Staging" key="stage" />
          </ActionPanel>
        }
      />
    </List>
  );
}
