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
