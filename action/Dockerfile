FROM gplane/pnpm:alpine as builder

COPY package.json pnpm-lock.yaml /
RUN pnpm i --frozen-lockfile

COPY . /
RUN pnpm build

FROM gplane/pnpm:alpine

ENV NODE_ENV=production

COPY package.json pnpm-lock.yaml /
RUN pnpm i --frozen-lockfile --prod

COPY --from=builder dist /

ENTRYPOINT ["node", "/index.js"]
