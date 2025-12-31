export const AUTH_CONTROLLER = 'auth' as const;

export const AUTH_ROUTES = {
  REGISTER: '',
  LOGIN: 'login',
  LOGOUT: 'logout',

  AUTH_ME: 'auth_me',

  VERIFY: 'verify/:emailToken/:userId',
  RESEND_EMAIL: 'resend_email_token',
  RESET_PASSWORD: 'reset_password',
  RESET_PASSWORD_REQUEST: 'reset_password_request',

  GOOGLE: 'google',
  GOOGLE_CALLBACK: 'google/callback',
  GOOGLE_REDIRECT: 'google/redirect',

  GITHUB: 'github',
  GITHUB_CALLBACK: 'github/callback',

  DISCORD: 'discord',
  DISCORD_CALLBACK: 'discord/callback',
};

export const USERS_CONTROLLER = 'users' as const;

export const USERS_ROUTES = {
  GET_ALL: '',
  GET_ID_USER: ':userId',
  UPDATE_USER: ':userId',
  DELETE_USER: ':userId',
  CHANGE_ROLE: ':userId/role',
  DELETE_MY_ACCOUNT: ':userId/myaccount',
  BAN_USER_ACCOUNT: ':userId/ban',
  LIST_BLOCKED_USERS: 'blocked-list',
  UPLOAD_AVATAR_USER: 'upload/:userId',
  SEND_COMPLAINT: ':userId/complaint',
  USERS_COMPLAINTS: 'complaints',
  // PUBLIC_PROFILE: 'public/:id',
};

export const MOVIE_CONTROLLER = 'movie' as const;

export const MOVIE_ROUTES = {
  GET_ALL: '',
  EVENTS: 'events',
  SEARCH: 'search',
  REVIEWS_ALL: 'reviewsAll',
  DRAFTS: 'drafts',
  GET_ID_MOVIE: ':movieId',
  CREATE_MOVIE: '',
  UPDATE_MOVIE: ':movieId',
  DELETE_MOVIE: ':movieId',
  ADD_FAVORITE: ':movieId/addFav',
  REMOVE_FAVORITE: ':userId/removeFav/:movieId',
  ALL_FAVORITE: ':userId/allFavorites',
  RATE_MOVIE: ':movieId/rateMovie',

  GET_All_REVIEW_FROM_MOVIE: ':id/review',
  GET_SINGLE_REVIEW_FROM_MOVIE: ':id/singleReview',
  CREATE_REVIEW: ':id/review',

  UPDATE_REVIEW: ':id/review/user/:userId',
  DELETE_REVIEW: ':id/review/:userId',

  UPLOAD_IMAGES: 'gallery/:movieId',
  FILTER: 'filter',

  IMAGE_PREVIEW: 'preview/:movieId',
} as const;

export const ANALYTICS_CONTROLLER = 'analytics' as const;

export const ANALYTICS_ROUTES = {
  INCREMENT_VIEW: ':userId/increment',
  GET_STATS: ':userId/stats',

  GET_TOTAL: ':userId/total',
  GET_MONTHLY: ':userId/monthly',
} as const;

export const AI_ROUTES = {
  SEND_MESSAGE: 'ai-assistant',
} as const;

export const FAVORITES_CONTROLLER = 'favorites' as const;

export const FAVORITES__ROUTES = {
  ADD_TO_LIST: ':movieId/:userId',
  GET_ALL_FAVORITES: ':userId',

  REMOVE_FAVORITE: ':id',
} as const;
