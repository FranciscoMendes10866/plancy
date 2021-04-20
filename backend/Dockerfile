FROM node:15.14.0-slim
WORKDIR /app
COPY . .

RUN npm i --force

RUN npm run build

RUN rm -rf node_modules
RUN rm -rf src
RUN rm -rf babel.config.js
RUN rm -rf tsconfig.json

RUN npm i --only=prod

ENV NODE_ENV PROD
ENV PORT 7000
ENV JWT_SECRET WCFarkW&80pg%26HO5t$UAGH
ENV CORS_ORIGIN *

EXPOSE 7000

CMD ["npm", "start"]
