FROM node:23.11.1


RUN npm install -g pnpm

WORKDIR /usr/src/app 

COPY pnpm-lock.yaml pnpm-workspace.yaml* ./

COPY next/package.json ./

RUN pnpm install  --prod=false

COPY . .


EXPOSE 3001 

CMD ["pnpm", "dev"]