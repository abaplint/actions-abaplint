# actions-abaplint

abaplint GitHub action

### Usage

```
    - name: abaplint
      uses: abaplint/actions-abaplint@master
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}  
```

The GITHUB_TOKEN is used to push back the results via the [Checks API](https://developer.github.com/v3/checks/)
