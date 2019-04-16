# actions-abaplint

abaplint GitHub action

### Usage

```
workflow "workflow, on pull_request" {
  on = "pull_request"
  resolves = ["action, on pull_request"]
}

action "action, on pull_request" {
  uses = "abaplint/actions-abaplint@master"
  secrets = ["GITHUB_TOKEN"]
}
```

Or on push,

```
workflow "Workflow, On Push" {
  on = "push"
  resolves = ["abaplint/actions-abaplint@master"]
}

action "abaplint/actions-abaplint@master" {
  uses = "abaplint/actions-abaplint@master"
  secrets = ["GITHUB_TOKEN"]
}
```

The GITHUB_TOKEN is used to push back the results via the [Checks API](https://developer.github.com/v3/checks/)
