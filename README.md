# actions-abaplint

abaplint GitHub action

For additional features, faster feedback, and support use [abaplint.app](https://abaplint.app)

### Usage

```yml
name: lint

on: [push, pull_request]

jobs:
  lint:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - name: abaplint
      uses: abaplint/actions-abaplint@main
      # GITHUB_TOKEN in forked repositories is read-only
      # https://help.github.com/en/actions/reference/events-that-trigger-workflows#pull-request-event-pull_request
      if: ${{ github.event_name == 'push' || github.event.pull_request.head.repo.full_name == github.repository }}
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

The GITHUB_TOKEN is used to push back the results via the [Checks API](https://developer.github.com/v3/checks/)

A specific version can be chosen by setting the `version` attribute, if not set, `@abaplint/cli@latest` will be used
```
      with:
        version: '2.36.5'
```
