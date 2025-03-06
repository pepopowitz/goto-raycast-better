import { Route } from "./routes";
import { ActionPanel, List, Action, Form, open } from "@raycast/api";
import { useState } from "react";

interface RouteListProps {
  routes: Array<Route>;
}

export function RouteList({ routes }: RouteListProps) {
  return (
    <List>
      {routes.map((route) => {
        if (route.routes.length === 0) {
          if (route.name === "*") {
            return <WildcardListItem route={route} key={route.name} />;
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

  return <List.Item icon="branch.png" title={route.name} actions={childAction} />;
}

function LeafListItem({ route }: RouteListItemProps) {
  const childAction = (
    <ActionPanel>
      <Action.OpenInBrowser url={route.url} title={route.name} />
    </ActionPanel>
  );

  return <List.Item icon="leaf.png" title={route.name} actions={childAction} />;
}

function WildcardListItem({ route }: RouteListItemProps) {
  const childAction = (
    <ActionPanel>
      <Action.Push title={route.name} target={<WildcardForm route={route} />} />
    </ActionPanel>
  );

  return <List.Item icon="leaf.png" title={route.name} actions={childAction} />;
}

function WildcardForm({ route }: RouteListItemProps) {
  const [name, setName] = useState<string>("");

  function generateUrl() {
    return route.url.replace("${0}", name);
  }

  async function handleSubmit() {
    await open(generateUrl());
  }

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm title="Submit Name" onSubmit={handleSubmit} />
        </ActionPanel>
      }
    >
      <Form.TextField id="name" value={name} onChange={setName} />
      <Form.Description text={generateUrl()} />
    </Form>
  );
}

export default function Command() {
  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm title="Submit Name" onSubmit={(values) => console.log(values)} />
        </ActionPanel>
      }
    >
      <Form.TextField id="name" value={name} onChange={setName} />
    </Form>
  );
}
