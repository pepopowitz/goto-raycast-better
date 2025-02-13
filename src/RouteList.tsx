import { Route } from "./routes";
import { ActionPanel, List, Action, Form, open } from "@raycast/api";

interface RouteListProps {
  routes: Array<Route>;
}

export function RouteList({ routes }: RouteListProps) {
  return (
    <List>
      {routes.map((route) => {
        if (route.routes.length === 0) {
          if (route.name === "*") {
            return <WildcardBranchListItem route={route} key={route.name} />;
          } else {
            return <LeafListItem route={route} key={route.name} />;
          }
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

function WildcardBranchListItem({ route }: RouteListItemProps) {
  const childAction = (
    <ActionPanel>
      <Action.Push title={route.name} target={<WildcardForm route={route} />} />
    </ActionPanel>
  );

  return <List.Item icon="list-icon.png" title={route.name} actions={childAction} />;
}

function WildcardForm({ route }: RouteListItemProps) {
  interface Values {
    name: string;
  }

  async function handleSubmit(values: Values) {
    await open(route.url.replace("${0}", values.name));
  }

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm title="Submit Name" onSubmit={handleSubmit} />
        </ActionPanel>
      }
    >
      <Form.TextField id="name" defaultValue="issues" />
    </Form>
  );
}
