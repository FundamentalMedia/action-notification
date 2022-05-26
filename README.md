# action-notification
Public action, by being in a public repo this action can be used by different projects.


```action.yml``` specifies this is a gihub action


```index.js``` contains the working files; 


This action gets triggered on instead of on:pull_request_target intead of on:pull_request as github won't perform an action if there is a merge-conflict.

The below is an example of usage, note the @v3.3 pointing to the right version/tag.

```bash
name: Notification-for-reviewers

on:
  pull_request_target:
    types: [opened]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Adding reviewers to a PR
        uses: FundamentalMedia/action-notification@v1
        with:
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```