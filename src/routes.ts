export interface Route {
  name: string;
  url: string;
  routes: Array<Route>;
}

export const routes: Array<Route> = [
  {
    name: "gh (GitHub)",
    url: "https://github.com",
    routes: [
      {
        name: "docs",
        url: "https://github.com/camunda/camunda-docs",
        routes: [
          {
            // gh docs issues
            // gh docs pull/123
            name: "*",
            url: "https://github.com/camunda/camunda-docs/${0}",
            routes: [],
          },
          {
            name: "pulls",
            url: "https://github.com/camunda/camunda-docs/pulls",
            routes: [],
          },
        ],
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
    routes: [
      {
        name: "*",
        url: "https://google.com?q=${0}",
        routes: [],
      },
      {
        name: "google",
        url: "https://google.com",
        routes: [],
      },
    ],
  },
];
