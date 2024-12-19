export interface Route {
  name: string;
  url: string;
  routes: Array<Route>;
}

export const routes: Array<Route> = [
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
