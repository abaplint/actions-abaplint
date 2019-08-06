FROM node:lts

LABEL "version"="0.1.0"
LABEL "repository"="https://github.com/abaplint/actions-abaplint"

LABEL "com.github.actions.name"="abaplint"
LABEL "com.github.actions.description"="Lint ABAP code"
LABEL "com.github.actions.icon"="cloud-drizzle"
LABEL "com.github.actions.color"="blue"

ADD entrypoint.sh /entrypoint.sh
ADD logic.js /logic.js
ENTRYPOINT ["/entrypoint.sh"]
