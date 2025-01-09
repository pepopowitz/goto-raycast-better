- [x] see some suggestions
- [x] suggestions are dynamically driven (by rules)
- [x] next stream: how can we make the "search box" show af ter I select a listitem
- [x] refactor! we scrambled pretty hard at the end, I bet we can make thingsure better.
- [ ] next stream:
  - [x] rename previous stream to be about refactorein
  - [ ] translate the urlMap from the previous iteration of goto into nested Lists
- [ ] accomodate different types of rules
  - [ ] depth:1, direct link (e.g. `prod` -> docs.camunda.io)
  - [ ] depth:1, includes a param (e.g. `search x` -> google.com?q=x)
  - [ ] depth:2, direct link (e.g. `gh prs` -> github.com/notifications)
  - [ ] depth:2, includes a param (e.g. `gh camunda-docs` -> github.com/camunda/camunda-docs)
  - [ ] depth:3, includes a param (e.g. `gh docs pulls` -> github.com/camunda/camunda-docs/pulls)

* see my most common submissions
* see my most recent submissions
* autocomplete (is this done?)
* add rules through raycast
* view rules
* import/export rules
  - or sync rules via raycast pro?
  - sync rules via something else like git?

# jon's thoughts

- are `gh` and `google` each their own command?
  - I think of this as the least favorable workaround
- can we list `gh docs` `gh me` `gh docs pulls` all those things as ListItems?
  - This feels better than the one above, but cluttered/noisy
  - what about wildcards?
    - `gh me goto-raycast-better` -- I don't want to define every single repo in my org
    - I want to be able to just audible something
- can `gh` open a new list, of `docs` and `me`?
