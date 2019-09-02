FROM node:lts

ADD entrypoint.sh /entrypoint.sh
ADD logic.js /logic.js
ENTRYPOINT ["/entrypoint.sh"]
