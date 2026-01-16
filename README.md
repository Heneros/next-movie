##

This Next.js project with Nest.js backend was Graphql and RestApi. and using third api custom from nest-movie project.

---

## Design

https://www.figma.com/design/zzLfLHPzV43yUkHJCerDSc/Movie---Series-Website--Community-?node-id=3504-1902&t=UXLWihxEU779a1Oy-0

---

## Launch app through Docker Compose

Rename file .env.example to .env 
```
mv .env.example .env
```

Build project

```bash 
pnpm run docker:dev:build
```


Install prisma into and seed with data to docker container:

```bash 
  docker compose -f docker-compose.dev.yaml exec nestjs   pnpm run docker:prisma:build
```

Seed data to database:

```bash 
  docker compose -f docker-compose.dev.yaml exec nestjs   pnpm run prisma:seed
```

## Functionality in app

- Registration include dto check user and Throttle
- Oauth2 with Github, Google
- After user registration to user send email during 15 minutes should validate his email
- Request and Reset Passwords
- Resend Email if user missed
- Cloud saving images: avatar user, poster movie, gallery images to movie
- Favorites movie to specific user only for registered users
- CRUD operations with movie available implemented with functionality RBAC. 
- Reviews functionality to movie only for registered users
- Ratings. User can rate movie or tvShow.
- Implemented cache requests.

## Modules app have

- Reviews
- Movies
- Users
- Auth
- Analytics
- Cloudinary

---

## Packages and libraries:
- Prisma
- Swagger
- Tailwind
- Graphql
- Redux 
- Rtk Query
- JWT
- ApolloClient
- Nest.js
- Docker Compose
- SuperTest+Jest
- i18next
- Formik and Yup
- Redis
- Chart.js
- HuggingFace


---

## Should have in future :

- custom third-party api integrate.
- socket.io create another service for chats online and integrate to Nextjs
- Paypal/Stripe
- Crypto payment
- Local History. in localStorage in frontend. which pages user visited
- Middleware custom
- ElasticSearch
- Real User Monitoring (RUM).
- next-seo / custom meta handler (SEO).
- Schema.org и structured data
- e2e tests for backend 
- observability
- K8s
- Viewers by profile
- Download your data profile with csv, json. 
- Custom web-hooks
- CSV data 
- AWS Lambda, S3 or similiar tool
- Terraform
- Supabase 
- Integrate OpenAi 
- Mongodb integrate (Match Snapshots, Player Stats, Leaderboard Tables),
- Cron-Tasks
- refresh tokens automatically.
- Exception Filter. Handle errors gracefully. create in Nestjs
- Module  User Oversight, Analytics 
- Ai recommedation to profile. product recommendation model
- UTM tags
- Parser custom 
- Video player
- Create Custom Webhook
- Share btns in social media(Facebook, Telegram, Viber)
- Notification module for users(updates, subscribtion to movie news)
- Temp link for 20 minutes and after expire link deleted himself
- Create specific token on only 31 day to access to data, you can share with other user token(only 3 times) after this token gonna be invalid
- Mailing to user about new movies, comments,
- Friends you add/delete friend
- Watch later movie
- Integration with calender
- 2FA authentication
- Bash scripts write
- You can't change password on same. check prev password before update on new
- CQRS event if someone reply or
- AES encryption
- Implement cursor and offset pagination
- CSRF tokens
- XSS protection
- Nestjs @HttpCode
- Monitoring resources
- Add aspects Gamification 