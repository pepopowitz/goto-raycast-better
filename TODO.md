- [x] see some suggestions
- [x] suggestions are dynamically driven (by rules)
- [x] next stream: how can we make the "search box" show af ter I select a listitem
- [x] refactor! we scrambled pretty hard at the end, I bet we can make thingsure better.
- [x] rename previous stream to be about refactorein
- [x] accomodate different types of rules
  - [x] depth:1, direct link (e.g. `prod` -> docs.camunda.io)
  - [x] depth:1, includes a param (e.g. `search x` -> google.com?q=x)
  - [x] depth:2, direct link (e.g. `gh prs` -> github.com/notifications)
  - [x] depth:2, includes a param (e.g. `gh camunda-docs` -> github.com/camunda/camunda-docs)
  - [x] depth:3, includes a param (e.g. `gh docs pulls` -> github.com/camunda/camunda-docs/pulls)
- [x] wildcards
- [x] add rules through raycast settings
- [x] reset to top of tree instead of retaining state
- [x] async: translate the urlMap from the previous iteration of goto into nested Lists

## next stream

- [x] Leaves and branches should have different icons!
  - [x] async: find better icons
- [x] When filling in a wildcard, it would be nice to see what the target URL is going to resolve to.
- [x] Can we change the keybinding for submitting the wildcard form from cmd-enter to enter?
- [ ] `routes: []` shouldn't be required for leaves, it makes the config noisy.

## futures

- a node can be both a branch and a leaf (example: gh me)
- see my most common submissions
- see my most recent submissions
