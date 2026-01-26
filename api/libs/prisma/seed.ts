import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

import bcrypt from 'bcryptjs';

// const prisma = new PrismaClient();

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');
  const directorNames = [
    'Steven Spielberg',
    'Christopher Nolan',
    'Greta Gerwig',
    'Ava DuVernay',
    'Quentin Tarantino',
  ];



  const userAdminEmail = 'seed-admin@example.com';
  const userEditorEmail = 'seed-editor@example.com';
  const pass = 'password123';
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(pass, salt);

  const user = await prisma.user.upsert({
    where: { email: userAdminEmail },
    update: {},
    create: {
      role: 'ADMIN',
      email: userAdminEmail,
      isEmailVerified: true,
      username: 'seed_admin',
      password: hashedPassword,
    },
  });
  const user2 = await prisma.user.upsert({
    where: { email: userEditorEmail },
    update: {},
    create: {
      role: 'EDITOR',
      email: userEditorEmail,
      isEmailVerified: true,
      username: 'seed_editor',
      password: hashedPassword,
    },
  });

  await prisma.verifyResetToken.upsert({
    where: { userId: user.id },
    update: {},
    create: {
      token: 'EDITOR',
      userId: user.id,
    },
  });

  await prisma.verifyResetToken.upsert({
    where: { userId: user2.id },
    update: {},
    create: {
      token: 'qwwerrtt',
      userId: user2.id,
    },
  });
  console.log('User ready:', { id: user.id, email: user.email });

  const directorPromises = directorNames.map((name) =>
    prisma.director.create({
      data: { name, bio: faker.lorem.sentences(2) },
    }),
  );

  const directors = await Promise.all(directorPromises);

  const galleryPromises: any = [];
  const avatarPromises: any = [];
  const moviePromises = [];
  const tvShowPromises: any = [];
  const ratingsPromises: any = [];
  const collectionsPromises:any = []

  const backDropItems = [
    'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1764674479/next-movieapp/1vIsdKr5SSzihUaRlGRgjA_1764674480314.jpg',
    'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1764674480/next-movieapp/02U0zl9eiBs_1764674482847.jpg',
    'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1763130486/next-movieapp/740549_1763130491249.jpg',
    'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1760275248/next-movieapp/2df5d57a964e7b2fb34bdadf9e92529a_1760275248189.jpg',
    'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1763130597/next-movieapp/te0aifojlpl41_1763130602471.jpg',
  ];

  const posterUrlItems = [
    'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1764674479/next-movieapp/1vIsdKr5SSzihUaRlGRgjA_1764674480314.jpg',
    'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1764674480/next-movieapp/02U0zl9eiBs_1764674482847.jpg',
    'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1763130486/next-movieapp/740549_1763130491249.jpg',
    'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1760275248/next-movieapp/2df5d57a964e7b2fb34bdadf9e92529a_1760275248189.jpg',
    'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1763130597/next-movieapp/te0aifojlpl41_1763130602471.jpg',
  ];



const collectionsData = [
  {
    title: 'Marvel Cinematic Universe',
    slug: 'marvel',
    posterImage: 'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1764674479/next-movieapp/1vIsdKr5SSzihUaRlGRgjA_1764674480314.jpg',
  },
  {
    title: 'DC Comics',
    slug: 'dc-comics',
    posterImage: 'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1764674480/next-movieapp/02U0zl9eiBs_1764674482847.jpg',
  },
  {
    title: 'John Wick Collection',
    slug: 'john-wick',
    posterImage: 'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1763130486/next-movieapp/740549_1763130491249.jpg',
  },
  {
    title: 'Godzilla Franchise',
    slug: 'godzilla',
    posterImage: 'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1760275248/next-movieapp/2df5d57a964e7b2fb34bdadf9e92529a_1760275248189.jpg',
  },
  {
    title: 'Musical Movies',
    slug: 'musicals',
    posterImage: 'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1763130597/next-movieapp/te0aifojlpl41_1763130602471.jpg',
  },
  {
    title: 'Action Classics',
    slug: 'action-classics',
    posterImage: 'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1764674479/next-movieapp/1vIsdKr5SSzihUaRlGRgjA_1764674480314.jpg',
  },
  {
    title: 'Sci-Fi Masterpieces',
    slug: 'sci-fi-masterpieces',
    posterImage: 'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1764674480/next-movieapp/02U0zl9eiBs_1764674482847.jpg',
  },
  {
    title: 'Horror Collection',
    slug: 'horror-collection',
    posterImage: 'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1763130486/next-movieapp/740549_1763130491249.jpg',
  },
  {
    title: 'Comedy Gold',
    slug: 'comedy-gold',
    posterImage: 'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1760275248/next-movieapp/2df5d57a964e7b2fb34bdadf9e92529a_1760275248189.jpg',
  },
  {
    title: 'Drama Awards',
    slug: 'drama-awards',
    posterImage: 'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1763130597/next-movieapp/te0aifojlpl41_1763130602471.jpg',
  },
  {
    title: 'Animated Favorites',
    slug: 'animated-favorites',
    posterImage: 'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1764674479/next-movieapp/1vIsdKr5SSzihUaRlGRgjA_1764674480314.jpg',
  },
  {
    title: 'Thriller Zone',
    slug: 'thriller-zone',
    posterImage: 'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1764674480/next-movieapp/02U0zl9eiBs_1764674482847.jpg',
  },
];


  for (let i = 0; i < 12; i++) {
    let avgRating = faker.number.float({ min: 1, max: 10, fractionDigits: 2 });
    const title = faker.lorem.words({ min: 2, max: 4 });
    const slug = faker.helpers.slugify(title).toLowerCase();

    const categories = faker.helpers.arrayElements(
      [
        "Animation",
        'Action',
        'Drama',
        "Romance",
        "Mystery",
        "History",
        'Adventure',
        'Comedy',
        'Horror',
        'Sci-Fi',
        'Fantasy',
        'Thriller',
      ],
      faker.number.int({ min: 1, max: 3 }),
    );


    const tags = faker.helpers.arrayElements(
      [
        'Mafia',
        "SuperHeroes",
        'UFO',
        'Family',
        'Legendary',
        'Gambling',
        'Motivation',
        'Lovers',
        'War',
        'Nature',
        'Cars',
      ],
      faker.number.int({ min: 1, max: 3 }),
    );

    const providers = [
      'Netflix',
      'Disney',
      'Sony Pictures',
      'Universal',
      'Amazon',
      'A24',
      'HBO',
      'Paramount',
    ];

    const randomProvider = faker.helpers.arrayElement(providers);
    const backdrop = faker.helpers.arrayElement(backDropItems);
    const posterUrl = faker.helpers.arrayElement(posterUrlItems);
    const selected = faker.helpers.arrayElements(
      directors,
      faker.number.int({ min: 0, max: 2 }),
    );



    tvShowPromises.push(
      prisma.tvShow.create({
        data:{
        title: title,
          description: faker.lorem.sentence(),
          slug: slug,
          backdropUrl: backdrop,
          posterUrl: posterUrl,
          provider: randomProvider,
          tags: tags,
          year: faker.number.int({ min: 1900, max: 2026 }),
          category: categories,
          author: {
            connect: { id: user.id },
           },
          directors: {
            connect: selected.map((d) => ({ id: d.id })),
          },
        }

    
      })
    )

    moviePromises.push(
      prisma.movie.create({
        data: {
          title: title,
          description: faker.lorem.sentence(),
          slug: slug,
          avgRating: avgRating,
          backdropUrl: backdrop,
          posterUrl: posterUrl,
          provider: randomProvider,
          tags: tags,
          year: faker.number.int({ min: 1900, max: 2026 }),
          category: categories,
          author: {
            connect: { id: user.id },
          },
          directors: {
            connect: selected.map((d) => ({ id: d.id })),
          },
        },
      }),
    );
  }

  const movies = await Promise.all(moviePromises);
 const tvShows = await Promise.all(tvShowPromises);



for (const movie of movies) {

  await prisma.rating.create({
    data: {
      value: faker.number.float({ min: 1, max: 10, fractionDigits: 1 }),
      userId: user.id,
      movieId: movie.id,
    },
  });


  const agg = await prisma.rating.aggregate({
    where: {
      movieId: movie.id,
    },
    _avg: {
      value: true,
    },
  });


  await prisma.movie.update({
    where: {
      id: movie.id,
    },
    data: {
      avgRating: agg._avg.value ?? 0,
    },
  });
}


for (const tvShow of tvShows) {

  await prisma.rating.create({
    data: {
      value: faker.number.float({ min: 1, max: 10, fractionDigits: 1 }),
      userId: user.id,
      tvShowId: tvShow.id,
    },
  });


  const agg = await prisma.rating.aggregate({
    where: {
      tvShowId: tvShow.id,
    },
    _avg: {
      value: true,
    },
  });


  await prisma.tvShow.update({
    where: {
      id: tvShow.id,
    },
    data: {
      avgRating: agg._avg.value ?? 0,
    },
  });
}

  movies.forEach((movie) => {
    
    // ratingsPromises.push(
    //   prisma.rating.create({
    //     data: {
    //       value: avgRating,
    //       userId: user.id,
    //       movieId: movie.id,
    //       // value: avgRating,
    //       // user: {
    //       //   connect: { id: user.id },
    //       // },
    //       // movie: {
    //       //   connect: { id: movie.id },
    //       // },
    //     },
    //   }),
    // );
    for (let j = 0; j < 12; j++) {
      const backDropItems = [
        'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1764674479/next-movieapp/1vIsdKr5SSzihUaRlGRgjA_1764674480314.jpg',
        'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1764674480/next-movieapp/02U0zl9eiBs_1764674482847.jpg',
        'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1763130486/next-movieapp/740549_1763130491249.jpg',
        'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1760275248/next-movieapp/2df5d57a964e7b2fb34bdadf9e92529a_1760275248189.jpg',
        'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1763130597/next-movieapp/te0aifojlpl41_1763130602471.jpg',
      ];

      const valImg = faker.helpers.arrayElement(backDropItems);
      galleryPromises.push(
        prisma.galleryImage.create({
          data: {
            url: valImg,
            publicId: String(faker.number.int({ min: 1, max: 3025 })),
            // title,
            movie: {
              connect: { id: movie.id },
            },
          },
        }),
      );
      avatarPromises.push(
        prisma.avatar.create({
          data: {
            url: valImg,
            publicId: String(faker.number.int({ min: 3025, max: 6925 })),

            movie: {
              connect: { id: movie.id },
            },
          },
        }),
      );

      // for (let j = 0; j < 12; j++) {

      // }
      // });
    }
  });
  tvShows.forEach((tvShow) => {
    // ratingsPromises.push(
    //   prisma.rating.create({
    //     data: {
    //  value: faker.number.int({ min: 1, max: 5 }),

    //       userId: user.id,
    //       tvShowId: tvShow.id,
      
    //     },
    //   }),
    // );
    for (let j = 0; j < 12; j++) {
      const backDropItems = [
        'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1764674479/next-movieapp/1vIsdKr5SSzihUaRlGRgjA_1764674480314.jpg',
        'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1764674480/next-movieapp/02U0zl9eiBs_1764674482847.jpg',
        'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1763130486/next-movieapp/740549_1763130491249.jpg',
        'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1760275248/next-movieapp/2df5d57a964e7b2fb34bdadf9e92529a_1760275248189.jpg',
        'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1763130597/next-movieapp/te0aifojlpl41_1763130602471.jpg',
      ];

      const valImg = faker.helpers.arrayElement(backDropItems);
      galleryPromises.push(
        prisma.galleryImage.create({
          data: {
            url: valImg,
            publicId: String(faker.number.int({ min: 1, max: 3025 })),
            // title,
            tvShow: {
              connect: { id: tvShow.id },
            },
          },
        }),
      );


    }
  });


for (const collectionData of collectionsData) {
  const randomMovies = faker.helpers.arrayElements(
    movies,
    faker.number.int({ min: 3, max: 8 })
  );

  collectionsPromises.push(
    prisma.collections.create({
      data: {
        title: collectionData.title,
        slug: collectionData.slug,
        posterImage: collectionData.posterImage,
        movies: {
          connect: randomMovies.map((movie) => ({ id: movie.id })),
        },
      },
    })
  );
}
const collections = await Promise.all(collectionsPromises);

  const ratings = await Promise.all(ratingsPromises);
  const galleries = await Promise.all(galleryPromises);
  const avatars = await Promise.all(avatarPromises);
  movies.forEach((movie) => {
    console.log('Movie ready:', movie.title, 'id:', movie.id);
  });
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error('Seeding error: ', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
