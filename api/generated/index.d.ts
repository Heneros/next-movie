
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ProfileVisit
 * 
 */
export type ProfileVisit = $Result.DefaultSelection<Prisma.$ProfileVisitPayload>
/**
 * Model Movie
 * 
 */
export type Movie = $Result.DefaultSelection<Prisma.$MoviePayload>
/**
 * Model Feedback
 * 
 */
export type Feedback = $Result.DefaultSelection<Prisma.$FeedbackPayload>
/**
 * Model VerifyResetToken
 * 
 */
export type VerifyResetToken = $Result.DefaultSelection<Prisma.$VerifyResetTokenPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Like
 * 
 */
export type Like = $Result.DefaultSelection<Prisma.$LikePayload>
/**
 * Model Chat
 * 
 */
export type Chat = $Result.DefaultSelection<Prisma.$ChatPayload>
/**
 * Model ChatUser
 * 
 */
export type ChatUser = $Result.DefaultSelection<Prisma.$ChatUserPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model WatchListItem
 * 
 */
export type WatchListItem = $Result.DefaultSelection<Prisma.$WatchListItemPayload>
/**
 * Model Avatar
 * 
 */
export type Avatar = $Result.DefaultSelection<Prisma.$AvatarPayload>
/**
 * Model GalleryImage
 * 
 */
export type GalleryImage = $Result.DefaultSelection<Prisma.$GalleryImagePayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  EDITOR: 'EDITOR',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const Recommended: {
  GOOD: 'GOOD',
  NEUTRALITY: 'NEUTRALITY',
  NEGATIVE: 'NEGATIVE'
};

export type Recommended = (typeof Recommended)[keyof typeof Recommended]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type Recommended = $Enums.Recommended

export const Recommended: typeof $Enums.Recommended

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.profileVisit`: Exposes CRUD operations for the **ProfileVisit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProfileVisits
    * const profileVisits = await prisma.profileVisit.findMany()
    * ```
    */
  get profileVisit(): Prisma.ProfileVisitDelegate<ExtArgs>;

  /**
   * `prisma.movie`: Exposes CRUD operations for the **Movie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movie.findMany()
    * ```
    */
  get movie(): Prisma.MovieDelegate<ExtArgs>;

  /**
   * `prisma.feedback`: Exposes CRUD operations for the **Feedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedback.findMany()
    * ```
    */
  get feedback(): Prisma.FeedbackDelegate<ExtArgs>;

  /**
   * `prisma.verifyResetToken`: Exposes CRUD operations for the **VerifyResetToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerifyResetTokens
    * const verifyResetTokens = await prisma.verifyResetToken.findMany()
    * ```
    */
  get verifyResetToken(): Prisma.VerifyResetTokenDelegate<ExtArgs>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs>;

  /**
   * `prisma.like`: Exposes CRUD operations for the **Like** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.like.findMany()
    * ```
    */
  get like(): Prisma.LikeDelegate<ExtArgs>;

  /**
   * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.ChatDelegate<ExtArgs>;

  /**
   * `prisma.chatUser`: Exposes CRUD operations for the **ChatUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatUsers
    * const chatUsers = await prisma.chatUser.findMany()
    * ```
    */
  get chatUser(): Prisma.ChatUserDelegate<ExtArgs>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs>;

  /**
   * `prisma.watchListItem`: Exposes CRUD operations for the **WatchListItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WatchListItems
    * const watchListItems = await prisma.watchListItem.findMany()
    * ```
    */
  get watchListItem(): Prisma.WatchListItemDelegate<ExtArgs>;

  /**
   * `prisma.avatar`: Exposes CRUD operations for the **Avatar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avatars
    * const avatars = await prisma.avatar.findMany()
    * ```
    */
  get avatar(): Prisma.AvatarDelegate<ExtArgs>;

  /**
   * `prisma.galleryImage`: Exposes CRUD operations for the **GalleryImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GalleryImages
    * const galleryImages = await prisma.galleryImage.findMany()
    * ```
    */
  get galleryImage(): Prisma.GalleryImageDelegate<ExtArgs>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    ProfileVisit: 'ProfileVisit',
    Movie: 'Movie',
    Feedback: 'Feedback',
    VerifyResetToken: 'VerifyResetToken',
    Comment: 'Comment',
    Like: 'Like',
    Chat: 'Chat',
    ChatUser: 'ChatUser',
    Message: 'Message',
    Order: 'Order',
    WatchListItem: 'WatchListItem',
    Avatar: 'Avatar',
    GalleryImage: 'GalleryImage',
    Review: 'Review'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "profileVisit" | "movie" | "feedback" | "verifyResetToken" | "comment" | "like" | "chat" | "chatUser" | "message" | "order" | "watchListItem" | "avatar" | "galleryImage" | "review"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ProfileVisit: {
        payload: Prisma.$ProfileVisitPayload<ExtArgs>
        fields: Prisma.ProfileVisitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileVisitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileVisitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileVisitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileVisitPayload>
          }
          findFirst: {
            args: Prisma.ProfileVisitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileVisitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileVisitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileVisitPayload>
          }
          findMany: {
            args: Prisma.ProfileVisitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileVisitPayload>[]
          }
          create: {
            args: Prisma.ProfileVisitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileVisitPayload>
          }
          createMany: {
            args: Prisma.ProfileVisitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileVisitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileVisitPayload>[]
          }
          delete: {
            args: Prisma.ProfileVisitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileVisitPayload>
          }
          update: {
            args: Prisma.ProfileVisitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileVisitPayload>
          }
          deleteMany: {
            args: Prisma.ProfileVisitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileVisitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProfileVisitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileVisitPayload>
          }
          aggregate: {
            args: Prisma.ProfileVisitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfileVisit>
          }
          groupBy: {
            args: Prisma.ProfileVisitGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileVisitGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileVisitCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileVisitCountAggregateOutputType> | number
          }
        }
      }
      Movie: {
        payload: Prisma.$MoviePayload<ExtArgs>
        fields: Prisma.MovieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          findFirst: {
            args: Prisma.MovieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          findMany: {
            args: Prisma.MovieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>[]
          }
          create: {
            args: Prisma.MovieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          createMany: {
            args: Prisma.MovieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MovieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>[]
          }
          delete: {
            args: Prisma.MovieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          update: {
            args: Prisma.MovieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          deleteMany: {
            args: Prisma.MovieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MovieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          aggregate: {
            args: Prisma.MovieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovie>
          }
          groupBy: {
            args: Prisma.MovieGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovieGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovieCountArgs<ExtArgs>
            result: $Utils.Optional<MovieCountAggregateOutputType> | number
          }
        }
      }
      Feedback: {
        payload: Prisma.$FeedbackPayload<ExtArgs>
        fields: Prisma.FeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findFirst: {
            args: Prisma.FeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findMany: {
            args: Prisma.FeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          create: {
            args: Prisma.FeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          createMany: {
            args: Prisma.FeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeedbackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          delete: {
            args: Prisma.FeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          update: {
            args: Prisma.FeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          deleteMany: {
            args: Prisma.FeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          aggregate: {
            args: Prisma.FeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedback>
          }
          groupBy: {
            args: Prisma.FeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackCountAggregateOutputType> | number
          }
        }
      }
      VerifyResetToken: {
        payload: Prisma.$VerifyResetTokenPayload<ExtArgs>
        fields: Prisma.VerifyResetTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerifyResetTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerifyResetTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerifyResetTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerifyResetTokenPayload>
          }
          findFirst: {
            args: Prisma.VerifyResetTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerifyResetTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerifyResetTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerifyResetTokenPayload>
          }
          findMany: {
            args: Prisma.VerifyResetTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerifyResetTokenPayload>[]
          }
          create: {
            args: Prisma.VerifyResetTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerifyResetTokenPayload>
          }
          createMany: {
            args: Prisma.VerifyResetTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerifyResetTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerifyResetTokenPayload>[]
          }
          delete: {
            args: Prisma.VerifyResetTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerifyResetTokenPayload>
          }
          update: {
            args: Prisma.VerifyResetTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerifyResetTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerifyResetTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerifyResetTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerifyResetTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerifyResetTokenPayload>
          }
          aggregate: {
            args: Prisma.VerifyResetTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerifyResetToken>
          }
          groupBy: {
            args: Prisma.VerifyResetTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerifyResetTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerifyResetTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerifyResetTokenCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Like: {
        payload: Prisma.$LikePayload<ExtArgs>
        fields: Prisma.LikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findFirst: {
            args: Prisma.LikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findMany: {
            args: Prisma.LikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          create: {
            args: Prisma.LikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          createMany: {
            args: Prisma.LikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          delete: {
            args: Prisma.LikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          update: {
            args: Prisma.LikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          deleteMany: {
            args: Prisma.LikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          aggregate: {
            args: Prisma.LikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLike>
          }
          groupBy: {
            args: Prisma.LikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikeCountArgs<ExtArgs>
            result: $Utils.Optional<LikeCountAggregateOutputType> | number
          }
        }
      }
      Chat: {
        payload: Prisma.$ChatPayload<ExtArgs>
        fields: Prisma.ChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findFirst: {
            args: Prisma.ChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findMany: {
            args: Prisma.ChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          create: {
            args: Prisma.ChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          createMany: {
            args: Prisma.ChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          delete: {
            args: Prisma.ChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          update: {
            args: Prisma.ChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          deleteMany: {
            args: Prisma.ChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.ChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatCountArgs<ExtArgs>
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      ChatUser: {
        payload: Prisma.$ChatUserPayload<ExtArgs>
        fields: Prisma.ChatUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload>
          }
          findFirst: {
            args: Prisma.ChatUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload>
          }
          findMany: {
            args: Prisma.ChatUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload>[]
          }
          create: {
            args: Prisma.ChatUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload>
          }
          createMany: {
            args: Prisma.ChatUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload>[]
          }
          delete: {
            args: Prisma.ChatUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload>
          }
          update: {
            args: Prisma.ChatUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload>
          }
          deleteMany: {
            args: Prisma.ChatUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChatUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload>
          }
          aggregate: {
            args: Prisma.ChatUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatUser>
          }
          groupBy: {
            args: Prisma.ChatUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatUserCountArgs<ExtArgs>
            result: $Utils.Optional<ChatUserCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      WatchListItem: {
        payload: Prisma.$WatchListItemPayload<ExtArgs>
        fields: Prisma.WatchListItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WatchListItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WatchListItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListItemPayload>
          }
          findFirst: {
            args: Prisma.WatchListItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WatchListItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListItemPayload>
          }
          findMany: {
            args: Prisma.WatchListItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListItemPayload>[]
          }
          create: {
            args: Prisma.WatchListItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListItemPayload>
          }
          createMany: {
            args: Prisma.WatchListItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WatchListItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListItemPayload>[]
          }
          delete: {
            args: Prisma.WatchListItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListItemPayload>
          }
          update: {
            args: Prisma.WatchListItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListItemPayload>
          }
          deleteMany: {
            args: Prisma.WatchListItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WatchListItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WatchListItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListItemPayload>
          }
          aggregate: {
            args: Prisma.WatchListItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWatchListItem>
          }
          groupBy: {
            args: Prisma.WatchListItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<WatchListItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.WatchListItemCountArgs<ExtArgs>
            result: $Utils.Optional<WatchListItemCountAggregateOutputType> | number
          }
        }
      }
      Avatar: {
        payload: Prisma.$AvatarPayload<ExtArgs>
        fields: Prisma.AvatarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvatarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvatarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          findFirst: {
            args: Prisma.AvatarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvatarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          findMany: {
            args: Prisma.AvatarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>[]
          }
          create: {
            args: Prisma.AvatarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          createMany: {
            args: Prisma.AvatarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvatarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>[]
          }
          delete: {
            args: Prisma.AvatarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          update: {
            args: Prisma.AvatarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          deleteMany: {
            args: Prisma.AvatarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvatarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AvatarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          aggregate: {
            args: Prisma.AvatarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvatar>
          }
          groupBy: {
            args: Prisma.AvatarGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvatarGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvatarCountArgs<ExtArgs>
            result: $Utils.Optional<AvatarCountAggregateOutputType> | number
          }
        }
      }
      GalleryImage: {
        payload: Prisma.$GalleryImagePayload<ExtArgs>
        fields: Prisma.GalleryImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GalleryImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GalleryImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          findFirst: {
            args: Prisma.GalleryImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GalleryImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          findMany: {
            args: Prisma.GalleryImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>[]
          }
          create: {
            args: Prisma.GalleryImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          createMany: {
            args: Prisma.GalleryImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GalleryImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>[]
          }
          delete: {
            args: Prisma.GalleryImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          update: {
            args: Prisma.GalleryImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          deleteMany: {
            args: Prisma.GalleryImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GalleryImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GalleryImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          aggregate: {
            args: Prisma.GalleryImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGalleryImage>
          }
          groupBy: {
            args: Prisma.GalleryImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<GalleryImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.GalleryImageCountArgs<ExtArgs>
            result: $Utils.Optional<GalleryImageCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    visits: number
    movies: number
    likes: number
    comments: number
    orders: number
    chats: number
    messages: number
    watchList: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visits?: boolean | UserCountOutputTypeCountVisitsArgs
    movies?: boolean | UserCountOutputTypeCountMoviesArgs
    likes?: boolean | UserCountOutputTypeCountLikesArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    chats?: boolean | UserCountOutputTypeCountChatsArgs
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
    watchList?: boolean | UserCountOutputTypeCountWatchListArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVisitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileVisitWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMoviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatUserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWatchListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchListItemWhereInput
  }


  /**
   * Count Type MovieCountOutputType
   */

  export type MovieCountOutputType = {
    galleryImages: number
    comments: number
    likes: number
    watchList: number
    review: number
  }

  export type MovieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    galleryImages?: boolean | MovieCountOutputTypeCountGalleryImagesArgs
    comments?: boolean | MovieCountOutputTypeCountCommentsArgs
    likes?: boolean | MovieCountOutputTypeCountLikesArgs
    watchList?: boolean | MovieCountOutputTypeCountWatchListArgs
    review?: boolean | MovieCountOutputTypeCountReviewArgs
  }

  // Custom InputTypes
  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCountOutputType
     */
    select?: MovieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountGalleryImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryImageWhereInput
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountWatchListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchListItemWhereInput
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type ChatCountOutputType
   */

  export type ChatCountOutputType = {
    users: number
    messages: number
  }

  export type ChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | ChatCountOutputTypeCountUsersArgs
    messages?: boolean | ChatCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCountOutputType
     */
    select?: ChatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatUserWhereInput
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    profileViews: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    profileViews: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    payment: string | null
    role: $Enums.UserRole | null
    profileViews: number | null
    password: string | null
    isEmailVerified: boolean | null
    blocked: boolean | null
    provider: string | null
    providerId: string | null
    googleId: string | null
    githubId: string | null
    discordId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    payment: string | null
    role: $Enums.UserRole | null
    profileViews: number | null
    password: string | null
    isEmailVerified: boolean | null
    blocked: boolean | null
    provider: string | null
    providerId: string | null
    googleId: string | null
    githubId: string | null
    discordId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    payment: number
    role: number
    refreshToken: number
    profileViews: number
    password: number
    isEmailVerified: number
    blocked: number
    provider: number
    providerId: number
    googleId: number
    githubId: number
    discordId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    profileViews?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    profileViews?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    payment?: true
    role?: true
    profileViews?: true
    password?: true
    isEmailVerified?: true
    blocked?: true
    provider?: true
    providerId?: true
    googleId?: true
    githubId?: true
    discordId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    payment?: true
    role?: true
    profileViews?: true
    password?: true
    isEmailVerified?: true
    blocked?: true
    provider?: true
    providerId?: true
    googleId?: true
    githubId?: true
    discordId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    payment?: true
    role?: true
    refreshToken?: true
    profileViews?: true
    password?: true
    isEmailVerified?: true
    blocked?: true
    provider?: true
    providerId?: true
    googleId?: true
    githubId?: true
    discordId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    payment: string | null
    role: $Enums.UserRole
    refreshToken: string[]
    profileViews: number
    password: string
    isEmailVerified: boolean | null
    blocked: boolean
    provider: string | null
    providerId: string | null
    googleId: string | null
    githubId: string | null
    discordId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    payment?: boolean
    role?: boolean
    refreshToken?: boolean
    profileViews?: boolean
    password?: boolean
    isEmailVerified?: boolean
    blocked?: boolean
    provider?: boolean
    providerId?: boolean
    googleId?: boolean
    githubId?: boolean
    discordId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    token?: boolean | User$tokenArgs<ExtArgs>
    avatar?: boolean | User$avatarArgs<ExtArgs>
    visits?: boolean | User$visitsArgs<ExtArgs>
    movies?: boolean | User$moviesArgs<ExtArgs>
    likes?: boolean | User$likesArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    chats?: boolean | User$chatsArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    watchList?: boolean | User$watchListArgs<ExtArgs>
    review?: boolean | User$reviewArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    payment?: boolean
    role?: boolean
    refreshToken?: boolean
    profileViews?: boolean
    password?: boolean
    isEmailVerified?: boolean
    blocked?: boolean
    provider?: boolean
    providerId?: boolean
    googleId?: boolean
    githubId?: boolean
    discordId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    payment?: boolean
    role?: boolean
    refreshToken?: boolean
    profileViews?: boolean
    password?: boolean
    isEmailVerified?: boolean
    blocked?: boolean
    provider?: boolean
    providerId?: boolean
    googleId?: boolean
    githubId?: boolean
    discordId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token?: boolean | User$tokenArgs<ExtArgs>
    avatar?: boolean | User$avatarArgs<ExtArgs>
    visits?: boolean | User$visitsArgs<ExtArgs>
    movies?: boolean | User$moviesArgs<ExtArgs>
    likes?: boolean | User$likesArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    chats?: boolean | User$chatsArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    watchList?: boolean | User$watchListArgs<ExtArgs>
    review?: boolean | User$reviewArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      token: Prisma.$VerifyResetTokenPayload<ExtArgs> | null
      avatar: Prisma.$AvatarPayload<ExtArgs> | null
      visits: Prisma.$ProfileVisitPayload<ExtArgs>[]
      movies: Prisma.$MoviePayload<ExtArgs>[]
      likes: Prisma.$LikePayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      chats: Prisma.$ChatUserPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
      watchList: Prisma.$WatchListItemPayload<ExtArgs>[]
      review: Prisma.$ReviewPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      payment: string | null
      role: $Enums.UserRole
      refreshToken: string[]
      profileViews: number
      password: string
      isEmailVerified: boolean | null
      blocked: boolean
      provider: string | null
      providerId: string | null
      googleId: string | null
      githubId: string | null
      discordId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    token<T extends User$tokenArgs<ExtArgs> = {}>(args?: Subset<T, User$tokenArgs<ExtArgs>>): Prisma__VerifyResetTokenClient<$Result.GetResult<Prisma.$VerifyResetTokenPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    avatar<T extends User$avatarArgs<ExtArgs> = {}>(args?: Subset<T, User$avatarArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    visits<T extends User$visitsArgs<ExtArgs> = {}>(args?: Subset<T, User$visitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileVisitPayload<ExtArgs>, T, "findMany"> | Null>
    movies<T extends User$moviesArgs<ExtArgs> = {}>(args?: Subset<T, User$moviesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findMany"> | Null>
    likes<T extends User$likesArgs<ExtArgs> = {}>(args?: Subset<T, User$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany"> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany"> | Null>
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    chats<T extends User$chatsArgs<ExtArgs> = {}>(args?: Subset<T, User$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "findMany"> | Null>
    messages<T extends User$messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany"> | Null>
    watchList<T extends User$watchListArgs<ExtArgs> = {}>(args?: Subset<T, User$watchListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchListItemPayload<ExtArgs>, T, "findMany"> | Null>
    review<T extends User$reviewArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly payment: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly refreshToken: FieldRef<"User", 'String[]'>
    readonly profileViews: FieldRef<"User", 'Int'>
    readonly password: FieldRef<"User", 'String'>
    readonly isEmailVerified: FieldRef<"User", 'Boolean'>
    readonly blocked: FieldRef<"User", 'Boolean'>
    readonly provider: FieldRef<"User", 'String'>
    readonly providerId: FieldRef<"User", 'String'>
    readonly googleId: FieldRef<"User", 'String'>
    readonly githubId: FieldRef<"User", 'String'>
    readonly discordId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.token
   */
  export type User$tokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerifyResetToken
     */
    select?: VerifyResetTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerifyResetTokenInclude<ExtArgs> | null
    where?: VerifyResetTokenWhereInput
  }

  /**
   * User.avatar
   */
  export type User$avatarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    where?: AvatarWhereInput
  }

  /**
   * User.visits
   */
  export type User$visitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileVisit
     */
    select?: ProfileVisitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileVisitInclude<ExtArgs> | null
    where?: ProfileVisitWhereInput
    orderBy?: ProfileVisitOrderByWithRelationInput | ProfileVisitOrderByWithRelationInput[]
    cursor?: ProfileVisitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfileVisitScalarFieldEnum | ProfileVisitScalarFieldEnum[]
  }

  /**
   * User.movies
   */
  export type User$moviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    where?: MovieWhereInput
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    cursor?: MovieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * User.likes
   */
  export type User$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    cursor?: LikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.chats
   */
  export type User$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserInclude<ExtArgs> | null
    where?: ChatUserWhereInput
    orderBy?: ChatUserOrderByWithRelationInput | ChatUserOrderByWithRelationInput[]
    cursor?: ChatUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatUserScalarFieldEnum | ChatUserScalarFieldEnum[]
  }

  /**
   * User.messages
   */
  export type User$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.watchList
   */
  export type User$watchListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchListItem
     */
    select?: WatchListItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListItemInclude<ExtArgs> | null
    where?: WatchListItemWhereInput
    orderBy?: WatchListItemOrderByWithRelationInput | WatchListItemOrderByWithRelationInput[]
    cursor?: WatchListItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchListItemScalarFieldEnum | WatchListItemScalarFieldEnum[]
  }

  /**
   * User.review
   */
  export type User$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ProfileVisit
   */

  export type AggregateProfileVisit = {
    _count: ProfileVisitCountAggregateOutputType | null
    _avg: ProfileVisitAvgAggregateOutputType | null
    _sum: ProfileVisitSumAggregateOutputType | null
    _min: ProfileVisitMinAggregateOutputType | null
    _max: ProfileVisitMaxAggregateOutputType | null
  }

  export type ProfileVisitAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    viewCount: number | null
  }

  export type ProfileVisitSumAggregateOutputType = {
    id: number | null
    userId: number | null
    viewCount: number | null
  }

  export type ProfileVisitMinAggregateOutputType = {
    id: number | null
    userId: number | null
    ipHash: string | null
    viewCount: number | null
    visitDate: Date | null
    updatedAt: Date | null
  }

  export type ProfileVisitMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    ipHash: string | null
    viewCount: number | null
    visitDate: Date | null
    updatedAt: Date | null
  }

  export type ProfileVisitCountAggregateOutputType = {
    id: number
    userId: number
    ipHash: number
    viewCount: number
    visitDate: number
    updatedAt: number
    _all: number
  }


  export type ProfileVisitAvgAggregateInputType = {
    id?: true
    userId?: true
    viewCount?: true
  }

  export type ProfileVisitSumAggregateInputType = {
    id?: true
    userId?: true
    viewCount?: true
  }

  export type ProfileVisitMinAggregateInputType = {
    id?: true
    userId?: true
    ipHash?: true
    viewCount?: true
    visitDate?: true
    updatedAt?: true
  }

  export type ProfileVisitMaxAggregateInputType = {
    id?: true
    userId?: true
    ipHash?: true
    viewCount?: true
    visitDate?: true
    updatedAt?: true
  }

  export type ProfileVisitCountAggregateInputType = {
    id?: true
    userId?: true
    ipHash?: true
    viewCount?: true
    visitDate?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfileVisitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileVisit to aggregate.
     */
    where?: ProfileVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileVisits to fetch.
     */
    orderBy?: ProfileVisitOrderByWithRelationInput | ProfileVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProfileVisits
    **/
    _count?: true | ProfileVisitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileVisitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileVisitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileVisitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileVisitMaxAggregateInputType
  }

  export type GetProfileVisitAggregateType<T extends ProfileVisitAggregateArgs> = {
        [P in keyof T & keyof AggregateProfileVisit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfileVisit[P]>
      : GetScalarType<T[P], AggregateProfileVisit[P]>
  }




  export type ProfileVisitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileVisitWhereInput
    orderBy?: ProfileVisitOrderByWithAggregationInput | ProfileVisitOrderByWithAggregationInput[]
    by: ProfileVisitScalarFieldEnum[] | ProfileVisitScalarFieldEnum
    having?: ProfileVisitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileVisitCountAggregateInputType | true
    _avg?: ProfileVisitAvgAggregateInputType
    _sum?: ProfileVisitSumAggregateInputType
    _min?: ProfileVisitMinAggregateInputType
    _max?: ProfileVisitMaxAggregateInputType
  }

  export type ProfileVisitGroupByOutputType = {
    id: number
    userId: number
    ipHash: string
    viewCount: number
    visitDate: Date
    updatedAt: Date
    _count: ProfileVisitCountAggregateOutputType | null
    _avg: ProfileVisitAvgAggregateOutputType | null
    _sum: ProfileVisitSumAggregateOutputType | null
    _min: ProfileVisitMinAggregateOutputType | null
    _max: ProfileVisitMaxAggregateOutputType | null
  }

  type GetProfileVisitGroupByPayload<T extends ProfileVisitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileVisitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileVisitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileVisitGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileVisitGroupByOutputType[P]>
        }
      >
    >


  export type ProfileVisitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ipHash?: boolean
    viewCount?: boolean
    visitDate?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profileVisit"]>

  export type ProfileVisitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ipHash?: boolean
    viewCount?: boolean
    visitDate?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profileVisit"]>

  export type ProfileVisitSelectScalar = {
    id?: boolean
    userId?: boolean
    ipHash?: boolean
    viewCount?: boolean
    visitDate?: boolean
    updatedAt?: boolean
  }

  export type ProfileVisitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileVisitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfileVisitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProfileVisit"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      ipHash: string
      viewCount: number
      visitDate: Date
      updatedAt: Date
    }, ExtArgs["result"]["profileVisit"]>
    composites: {}
  }

  type ProfileVisitGetPayload<S extends boolean | null | undefined | ProfileVisitDefaultArgs> = $Result.GetResult<Prisma.$ProfileVisitPayload, S>

  type ProfileVisitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProfileVisitFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProfileVisitCountAggregateInputType | true
    }

  export interface ProfileVisitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProfileVisit'], meta: { name: 'ProfileVisit' } }
    /**
     * Find zero or one ProfileVisit that matches the filter.
     * @param {ProfileVisitFindUniqueArgs} args - Arguments to find a ProfileVisit
     * @example
     * // Get one ProfileVisit
     * const profileVisit = await prisma.profileVisit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileVisitFindUniqueArgs>(args: SelectSubset<T, ProfileVisitFindUniqueArgs<ExtArgs>>): Prisma__ProfileVisitClient<$Result.GetResult<Prisma.$ProfileVisitPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProfileVisit that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProfileVisitFindUniqueOrThrowArgs} args - Arguments to find a ProfileVisit
     * @example
     * // Get one ProfileVisit
     * const profileVisit = await prisma.profileVisit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileVisitFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileVisitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileVisitClient<$Result.GetResult<Prisma.$ProfileVisitPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProfileVisit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileVisitFindFirstArgs} args - Arguments to find a ProfileVisit
     * @example
     * // Get one ProfileVisit
     * const profileVisit = await prisma.profileVisit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileVisitFindFirstArgs>(args?: SelectSubset<T, ProfileVisitFindFirstArgs<ExtArgs>>): Prisma__ProfileVisitClient<$Result.GetResult<Prisma.$ProfileVisitPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProfileVisit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileVisitFindFirstOrThrowArgs} args - Arguments to find a ProfileVisit
     * @example
     * // Get one ProfileVisit
     * const profileVisit = await prisma.profileVisit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileVisitFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileVisitFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileVisitClient<$Result.GetResult<Prisma.$ProfileVisitPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProfileVisits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileVisitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfileVisits
     * const profileVisits = await prisma.profileVisit.findMany()
     * 
     * // Get first 10 ProfileVisits
     * const profileVisits = await prisma.profileVisit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileVisitWithIdOnly = await prisma.profileVisit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileVisitFindManyArgs>(args?: SelectSubset<T, ProfileVisitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileVisitPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProfileVisit.
     * @param {ProfileVisitCreateArgs} args - Arguments to create a ProfileVisit.
     * @example
     * // Create one ProfileVisit
     * const ProfileVisit = await prisma.profileVisit.create({
     *   data: {
     *     // ... data to create a ProfileVisit
     *   }
     * })
     * 
     */
    create<T extends ProfileVisitCreateArgs>(args: SelectSubset<T, ProfileVisitCreateArgs<ExtArgs>>): Prisma__ProfileVisitClient<$Result.GetResult<Prisma.$ProfileVisitPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProfileVisits.
     * @param {ProfileVisitCreateManyArgs} args - Arguments to create many ProfileVisits.
     * @example
     * // Create many ProfileVisits
     * const profileVisit = await prisma.profileVisit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileVisitCreateManyArgs>(args?: SelectSubset<T, ProfileVisitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProfileVisits and returns the data saved in the database.
     * @param {ProfileVisitCreateManyAndReturnArgs} args - Arguments to create many ProfileVisits.
     * @example
     * // Create many ProfileVisits
     * const profileVisit = await prisma.profileVisit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProfileVisits and only return the `id`
     * const profileVisitWithIdOnly = await prisma.profileVisit.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileVisitCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileVisitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileVisitPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProfileVisit.
     * @param {ProfileVisitDeleteArgs} args - Arguments to delete one ProfileVisit.
     * @example
     * // Delete one ProfileVisit
     * const ProfileVisit = await prisma.profileVisit.delete({
     *   where: {
     *     // ... filter to delete one ProfileVisit
     *   }
     * })
     * 
     */
    delete<T extends ProfileVisitDeleteArgs>(args: SelectSubset<T, ProfileVisitDeleteArgs<ExtArgs>>): Prisma__ProfileVisitClient<$Result.GetResult<Prisma.$ProfileVisitPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProfileVisit.
     * @param {ProfileVisitUpdateArgs} args - Arguments to update one ProfileVisit.
     * @example
     * // Update one ProfileVisit
     * const profileVisit = await prisma.profileVisit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileVisitUpdateArgs>(args: SelectSubset<T, ProfileVisitUpdateArgs<ExtArgs>>): Prisma__ProfileVisitClient<$Result.GetResult<Prisma.$ProfileVisitPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProfileVisits.
     * @param {ProfileVisitDeleteManyArgs} args - Arguments to filter ProfileVisits to delete.
     * @example
     * // Delete a few ProfileVisits
     * const { count } = await prisma.profileVisit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileVisitDeleteManyArgs>(args?: SelectSubset<T, ProfileVisitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfileVisits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileVisitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfileVisits
     * const profileVisit = await prisma.profileVisit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileVisitUpdateManyArgs>(args: SelectSubset<T, ProfileVisitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProfileVisit.
     * @param {ProfileVisitUpsertArgs} args - Arguments to update or create a ProfileVisit.
     * @example
     * // Update or create a ProfileVisit
     * const profileVisit = await prisma.profileVisit.upsert({
     *   create: {
     *     // ... data to create a ProfileVisit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfileVisit we want to update
     *   }
     * })
     */
    upsert<T extends ProfileVisitUpsertArgs>(args: SelectSubset<T, ProfileVisitUpsertArgs<ExtArgs>>): Prisma__ProfileVisitClient<$Result.GetResult<Prisma.$ProfileVisitPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProfileVisits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileVisitCountArgs} args - Arguments to filter ProfileVisits to count.
     * @example
     * // Count the number of ProfileVisits
     * const count = await prisma.profileVisit.count({
     *   where: {
     *     // ... the filter for the ProfileVisits we want to count
     *   }
     * })
    **/
    count<T extends ProfileVisitCountArgs>(
      args?: Subset<T, ProfileVisitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileVisitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProfileVisit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileVisitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileVisitAggregateArgs>(args: Subset<T, ProfileVisitAggregateArgs>): Prisma.PrismaPromise<GetProfileVisitAggregateType<T>>

    /**
     * Group by ProfileVisit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileVisitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileVisitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileVisitGroupByArgs['orderBy'] }
        : { orderBy?: ProfileVisitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileVisitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileVisitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProfileVisit model
   */
  readonly fields: ProfileVisitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProfileVisit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileVisitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProfileVisit model
   */ 
  interface ProfileVisitFieldRefs {
    readonly id: FieldRef<"ProfileVisit", 'Int'>
    readonly userId: FieldRef<"ProfileVisit", 'Int'>
    readonly ipHash: FieldRef<"ProfileVisit", 'String'>
    readonly viewCount: FieldRef<"ProfileVisit", 'Int'>
    readonly visitDate: FieldRef<"ProfileVisit", 'DateTime'>
    readonly updatedAt: FieldRef<"ProfileVisit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProfileVisit findUnique
   */
  export type ProfileVisitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileVisit
     */
    select?: ProfileVisitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileVisitInclude<ExtArgs> | null
    /**
     * Filter, which ProfileVisit to fetch.
     */
    where: ProfileVisitWhereUniqueInput
  }

  /**
   * ProfileVisit findUniqueOrThrow
   */
  export type ProfileVisitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileVisit
     */
    select?: ProfileVisitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileVisitInclude<ExtArgs> | null
    /**
     * Filter, which ProfileVisit to fetch.
     */
    where: ProfileVisitWhereUniqueInput
  }

  /**
   * ProfileVisit findFirst
   */
  export type ProfileVisitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileVisit
     */
    select?: ProfileVisitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileVisitInclude<ExtArgs> | null
    /**
     * Filter, which ProfileVisit to fetch.
     */
    where?: ProfileVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileVisits to fetch.
     */
    orderBy?: ProfileVisitOrderByWithRelationInput | ProfileVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfileVisits.
     */
    cursor?: ProfileVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfileVisits.
     */
    distinct?: ProfileVisitScalarFieldEnum | ProfileVisitScalarFieldEnum[]
  }

  /**
   * ProfileVisit findFirstOrThrow
   */
  export type ProfileVisitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileVisit
     */
    select?: ProfileVisitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileVisitInclude<ExtArgs> | null
    /**
     * Filter, which ProfileVisit to fetch.
     */
    where?: ProfileVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileVisits to fetch.
     */
    orderBy?: ProfileVisitOrderByWithRelationInput | ProfileVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfileVisits.
     */
    cursor?: ProfileVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfileVisits.
     */
    distinct?: ProfileVisitScalarFieldEnum | ProfileVisitScalarFieldEnum[]
  }

  /**
   * ProfileVisit findMany
   */
  export type ProfileVisitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileVisit
     */
    select?: ProfileVisitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileVisitInclude<ExtArgs> | null
    /**
     * Filter, which ProfileVisits to fetch.
     */
    where?: ProfileVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileVisits to fetch.
     */
    orderBy?: ProfileVisitOrderByWithRelationInput | ProfileVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProfileVisits.
     */
    cursor?: ProfileVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileVisits.
     */
    skip?: number
    distinct?: ProfileVisitScalarFieldEnum | ProfileVisitScalarFieldEnum[]
  }

  /**
   * ProfileVisit create
   */
  export type ProfileVisitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileVisit
     */
    select?: ProfileVisitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileVisitInclude<ExtArgs> | null
    /**
     * The data needed to create a ProfileVisit.
     */
    data: XOR<ProfileVisitCreateInput, ProfileVisitUncheckedCreateInput>
  }

  /**
   * ProfileVisit createMany
   */
  export type ProfileVisitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProfileVisits.
     */
    data: ProfileVisitCreateManyInput | ProfileVisitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProfileVisit createManyAndReturn
   */
  export type ProfileVisitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileVisit
     */
    select?: ProfileVisitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProfileVisits.
     */
    data: ProfileVisitCreateManyInput | ProfileVisitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileVisitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfileVisit update
   */
  export type ProfileVisitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileVisit
     */
    select?: ProfileVisitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileVisitInclude<ExtArgs> | null
    /**
     * The data needed to update a ProfileVisit.
     */
    data: XOR<ProfileVisitUpdateInput, ProfileVisitUncheckedUpdateInput>
    /**
     * Choose, which ProfileVisit to update.
     */
    where: ProfileVisitWhereUniqueInput
  }

  /**
   * ProfileVisit updateMany
   */
  export type ProfileVisitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProfileVisits.
     */
    data: XOR<ProfileVisitUpdateManyMutationInput, ProfileVisitUncheckedUpdateManyInput>
    /**
     * Filter which ProfileVisits to update
     */
    where?: ProfileVisitWhereInput
  }

  /**
   * ProfileVisit upsert
   */
  export type ProfileVisitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileVisit
     */
    select?: ProfileVisitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileVisitInclude<ExtArgs> | null
    /**
     * The filter to search for the ProfileVisit to update in case it exists.
     */
    where: ProfileVisitWhereUniqueInput
    /**
     * In case the ProfileVisit found by the `where` argument doesn't exist, create a new ProfileVisit with this data.
     */
    create: XOR<ProfileVisitCreateInput, ProfileVisitUncheckedCreateInput>
    /**
     * In case the ProfileVisit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileVisitUpdateInput, ProfileVisitUncheckedUpdateInput>
  }

  /**
   * ProfileVisit delete
   */
  export type ProfileVisitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileVisit
     */
    select?: ProfileVisitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileVisitInclude<ExtArgs> | null
    /**
     * Filter which ProfileVisit to delete.
     */
    where: ProfileVisitWhereUniqueInput
  }

  /**
   * ProfileVisit deleteMany
   */
  export type ProfileVisitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileVisits to delete
     */
    where?: ProfileVisitWhereInput
  }

  /**
   * ProfileVisit without action
   */
  export type ProfileVisitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileVisit
     */
    select?: ProfileVisitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileVisitInclude<ExtArgs> | null
  }


  /**
   * Model Movie
   */

  export type AggregateMovie = {
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  export type MovieAvgAggregateOutputType = {
    id: number | null
    year: number | null
    authorId: number | null
    rating: number | null
    avgRating: number | null
  }

  export type MovieSumAggregateOutputType = {
    id: number | null
    year: number | null
    authorId: number | null
    rating: number | null
    avgRating: number | null
  }

  export type MovieMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    slug: string | null
    year: number | null
    published: boolean | null
    authorId: number | null
    rating: number | null
    avgRating: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MovieMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    slug: string | null
    year: number | null
    published: boolean | null
    authorId: number | null
    rating: number | null
    avgRating: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MovieCountAggregateOutputType = {
    id: number
    title: number
    description: number
    slug: number
    year: number
    category: number
    published: number
    authorId: number
    rating: number
    avgRating: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MovieAvgAggregateInputType = {
    id?: true
    year?: true
    authorId?: true
    rating?: true
    avgRating?: true
  }

  export type MovieSumAggregateInputType = {
    id?: true
    year?: true
    authorId?: true
    rating?: true
    avgRating?: true
  }

  export type MovieMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    slug?: true
    year?: true
    published?: true
    authorId?: true
    rating?: true
    avgRating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MovieMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    slug?: true
    year?: true
    published?: true
    authorId?: true
    rating?: true
    avgRating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MovieCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    slug?: true
    year?: true
    category?: true
    published?: true
    authorId?: true
    rating?: true
    avgRating?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MovieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movie to aggregate.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movies
    **/
    _count?: true | MovieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieMaxAggregateInputType
  }

  export type GetMovieAggregateType<T extends MovieAggregateArgs> = {
        [P in keyof T & keyof AggregateMovie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovie[P]>
      : GetScalarType<T[P], AggregateMovie[P]>
  }




  export type MovieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieWhereInput
    orderBy?: MovieOrderByWithAggregationInput | MovieOrderByWithAggregationInput[]
    by: MovieScalarFieldEnum[] | MovieScalarFieldEnum
    having?: MovieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieCountAggregateInputType | true
    _avg?: MovieAvgAggregateInputType
    _sum?: MovieSumAggregateInputType
    _min?: MovieMinAggregateInputType
    _max?: MovieMaxAggregateInputType
  }

  export type MovieGroupByOutputType = {
    id: number
    title: string
    description: string | null
    slug: string
    year: number | null
    category: string[]
    published: boolean
    authorId: number
    rating: number | null
    avgRating: number
    createdAt: Date
    updatedAt: Date
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  type GetMovieGroupByPayload<T extends MovieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieGroupByOutputType[P]>
            : GetScalarType<T[P], MovieGroupByOutputType[P]>
        }
      >
    >


  export type MovieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    slug?: boolean
    year?: boolean
    category?: boolean
    published?: boolean
    authorId?: boolean
    rating?: boolean
    avgRating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    galleryImages?: boolean | Movie$galleryImagesArgs<ExtArgs>
    comments?: boolean | Movie$commentsArgs<ExtArgs>
    likes?: boolean | Movie$likesArgs<ExtArgs>
    watchList?: boolean | Movie$watchListArgs<ExtArgs>
    review?: boolean | Movie$reviewArgs<ExtArgs>
    _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movie"]>

  export type MovieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    slug?: boolean
    year?: boolean
    category?: boolean
    published?: boolean
    authorId?: boolean
    rating?: boolean
    avgRating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movie"]>

  export type MovieSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    slug?: boolean
    year?: boolean
    category?: boolean
    published?: boolean
    authorId?: boolean
    rating?: boolean
    avgRating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MovieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    galleryImages?: boolean | Movie$galleryImagesArgs<ExtArgs>
    comments?: boolean | Movie$commentsArgs<ExtArgs>
    likes?: boolean | Movie$likesArgs<ExtArgs>
    watchList?: boolean | Movie$watchListArgs<ExtArgs>
    review?: boolean | Movie$reviewArgs<ExtArgs>
    _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MovieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MoviePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movie"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      galleryImages: Prisma.$GalleryImagePayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      likes: Prisma.$LikePayload<ExtArgs>[]
      watchList: Prisma.$WatchListItemPayload<ExtArgs>[]
      review: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      slug: string
      year: number | null
      category: string[]
      published: boolean
      authorId: number
      rating: number | null
      avgRating: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["movie"]>
    composites: {}
  }

  type MovieGetPayload<S extends boolean | null | undefined | MovieDefaultArgs> = $Result.GetResult<Prisma.$MoviePayload, S>

  type MovieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MovieFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MovieCountAggregateInputType | true
    }

  export interface MovieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movie'], meta: { name: 'Movie' } }
    /**
     * Find zero or one Movie that matches the filter.
     * @param {MovieFindUniqueArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovieFindUniqueArgs>(args: SelectSubset<T, MovieFindUniqueArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Movie that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MovieFindUniqueOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovieFindUniqueOrThrowArgs>(args: SelectSubset<T, MovieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Movie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovieFindFirstArgs>(args?: SelectSubset<T, MovieFindFirstArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Movie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovieFindFirstOrThrowArgs>(args?: SelectSubset<T, MovieFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movie.findMany()
     * 
     * // Get first 10 Movies
     * const movies = await prisma.movie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movieWithIdOnly = await prisma.movie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovieFindManyArgs>(args?: SelectSubset<T, MovieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Movie.
     * @param {MovieCreateArgs} args - Arguments to create a Movie.
     * @example
     * // Create one Movie
     * const Movie = await prisma.movie.create({
     *   data: {
     *     // ... data to create a Movie
     *   }
     * })
     * 
     */
    create<T extends MovieCreateArgs>(args: SelectSubset<T, MovieCreateArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Movies.
     * @param {MovieCreateManyArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movie = await prisma.movie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovieCreateManyArgs>(args?: SelectSubset<T, MovieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Movies and returns the data saved in the database.
     * @param {MovieCreateManyAndReturnArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movie = await prisma.movie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Movies and only return the `id`
     * const movieWithIdOnly = await prisma.movie.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MovieCreateManyAndReturnArgs>(args?: SelectSubset<T, MovieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Movie.
     * @param {MovieDeleteArgs} args - Arguments to delete one Movie.
     * @example
     * // Delete one Movie
     * const Movie = await prisma.movie.delete({
     *   where: {
     *     // ... filter to delete one Movie
     *   }
     * })
     * 
     */
    delete<T extends MovieDeleteArgs>(args: SelectSubset<T, MovieDeleteArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Movie.
     * @param {MovieUpdateArgs} args - Arguments to update one Movie.
     * @example
     * // Update one Movie
     * const movie = await prisma.movie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovieUpdateArgs>(args: SelectSubset<T, MovieUpdateArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Movies.
     * @param {MovieDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovieDeleteManyArgs>(args?: SelectSubset<T, MovieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovieUpdateManyArgs>(args: SelectSubset<T, MovieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Movie.
     * @param {MovieUpsertArgs} args - Arguments to update or create a Movie.
     * @example
     * // Update or create a Movie
     * const movie = await prisma.movie.upsert({
     *   create: {
     *     // ... data to create a Movie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movie we want to update
     *   }
     * })
     */
    upsert<T extends MovieUpsertArgs>(args: SelectSubset<T, MovieUpsertArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movie.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
    **/
    count<T extends MovieCountArgs>(
      args?: Subset<T, MovieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovieAggregateArgs>(args: Subset<T, MovieAggregateArgs>): Prisma.PrismaPromise<GetMovieAggregateType<T>>

    /**
     * Group by Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MovieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieGroupByArgs['orderBy'] }
        : { orderBy?: MovieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MovieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movie model
   */
  readonly fields: MovieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    galleryImages<T extends Movie$galleryImagesArgs<ExtArgs> = {}>(args?: Subset<T, Movie$galleryImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findMany"> | Null>
    comments<T extends Movie$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Movie$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany"> | Null>
    likes<T extends Movie$likesArgs<ExtArgs> = {}>(args?: Subset<T, Movie$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany"> | Null>
    watchList<T extends Movie$watchListArgs<ExtArgs> = {}>(args?: Subset<T, Movie$watchListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchListItemPayload<ExtArgs>, T, "findMany"> | Null>
    review<T extends Movie$reviewArgs<ExtArgs> = {}>(args?: Subset<T, Movie$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Movie model
   */ 
  interface MovieFieldRefs {
    readonly id: FieldRef<"Movie", 'Int'>
    readonly title: FieldRef<"Movie", 'String'>
    readonly description: FieldRef<"Movie", 'String'>
    readonly slug: FieldRef<"Movie", 'String'>
    readonly year: FieldRef<"Movie", 'Int'>
    readonly category: FieldRef<"Movie", 'String[]'>
    readonly published: FieldRef<"Movie", 'Boolean'>
    readonly authorId: FieldRef<"Movie", 'Int'>
    readonly rating: FieldRef<"Movie", 'Int'>
    readonly avgRating: FieldRef<"Movie", 'Float'>
    readonly createdAt: FieldRef<"Movie", 'DateTime'>
    readonly updatedAt: FieldRef<"Movie", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Movie findUnique
   */
  export type MovieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie findUniqueOrThrow
   */
  export type MovieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie findFirst
   */
  export type MovieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie findFirstOrThrow
   */
  export type MovieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie findMany
   */
  export type MovieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie create
   */
  export type MovieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to create a Movie.
     */
    data: XOR<MovieCreateInput, MovieUncheckedCreateInput>
  }

  /**
   * Movie createMany
   */
  export type MovieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movies.
     */
    data: MovieCreateManyInput | MovieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Movie createManyAndReturn
   */
  export type MovieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Movies.
     */
    data: MovieCreateManyInput | MovieCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Movie update
   */
  export type MovieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to update a Movie.
     */
    data: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
    /**
     * Choose, which Movie to update.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie updateMany
   */
  export type MovieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movies.
     */
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     */
    where?: MovieWhereInput
  }

  /**
   * Movie upsert
   */
  export type MovieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The filter to search for the Movie to update in case it exists.
     */
    where: MovieWhereUniqueInput
    /**
     * In case the Movie found by the `where` argument doesn't exist, create a new Movie with this data.
     */
    create: XOR<MovieCreateInput, MovieUncheckedCreateInput>
    /**
     * In case the Movie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
  }

  /**
   * Movie delete
   */
  export type MovieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter which Movie to delete.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie deleteMany
   */
  export type MovieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movies to delete
     */
    where?: MovieWhereInput
  }

  /**
   * Movie.galleryImages
   */
  export type Movie$galleryImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    where?: GalleryImageWhereInput
    orderBy?: GalleryImageOrderByWithRelationInput | GalleryImageOrderByWithRelationInput[]
    cursor?: GalleryImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GalleryImageScalarFieldEnum | GalleryImageScalarFieldEnum[]
  }

  /**
   * Movie.comments
   */
  export type Movie$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Movie.likes
   */
  export type Movie$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    cursor?: LikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Movie.watchList
   */
  export type Movie$watchListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchListItem
     */
    select?: WatchListItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListItemInclude<ExtArgs> | null
    where?: WatchListItemWhereInput
    orderBy?: WatchListItemOrderByWithRelationInput | WatchListItemOrderByWithRelationInput[]
    cursor?: WatchListItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchListItemScalarFieldEnum | WatchListItemScalarFieldEnum[]
  }

  /**
   * Movie.review
   */
  export type Movie$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Movie without action
   */
  export type MovieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
  }


  /**
   * Model Feedback
   */

  export type AggregateFeedback = {
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  export type FeedbackAvgAggregateOutputType = {
    id: number | null
  }

  export type FeedbackSumAggregateOutputType = {
    id: number | null
  }

  export type FeedbackMinAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    message: string | null
    createdAt: Date | null
  }

  export type FeedbackMaxAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    message: string | null
    createdAt: Date | null
  }

  export type FeedbackCountAggregateOutputType = {
    id: number
    email: number
    username: number
    message: number
    createdAt: number
    _all: number
  }


  export type FeedbackAvgAggregateInputType = {
    id?: true
  }

  export type FeedbackSumAggregateInputType = {
    id?: true
  }

  export type FeedbackMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    message?: true
    createdAt?: true
  }

  export type FeedbackMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    message?: true
    createdAt?: true
  }

  export type FeedbackCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type FeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedback to aggregate.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feedbacks
    **/
    _count?: true | FeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedbackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedbackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackMaxAggregateInputType
  }

  export type GetFeedbackAggregateType<T extends FeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedback[P]>
      : GetScalarType<T[P], AggregateFeedback[P]>
  }




  export type FeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithAggregationInput | FeedbackOrderByWithAggregationInput[]
    by: FeedbackScalarFieldEnum[] | FeedbackScalarFieldEnum
    having?: FeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackCountAggregateInputType | true
    _avg?: FeedbackAvgAggregateInputType
    _sum?: FeedbackSumAggregateInputType
    _min?: FeedbackMinAggregateInputType
    _max?: FeedbackMaxAggregateInputType
  }

  export type FeedbackGroupByOutputType = {
    id: number
    email: string
    username: string
    message: string
    createdAt: Date
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  type GetFeedbackGroupByPayload<T extends FeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    message?: boolean
    createdAt?: boolean
  }


  export type $FeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feedback"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      username: string
      message: string
      createdAt: Date
    }, ExtArgs["result"]["feedback"]>
    composites: {}
  }

  type FeedbackGetPayload<S extends boolean | null | undefined | FeedbackDefaultArgs> = $Result.GetResult<Prisma.$FeedbackPayload, S>

  type FeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FeedbackFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FeedbackCountAggregateInputType | true
    }

  export interface FeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feedback'], meta: { name: 'Feedback' } }
    /**
     * Find zero or one Feedback that matches the filter.
     * @param {FeedbackFindUniqueArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedbackFindUniqueArgs>(args: SelectSubset<T, FeedbackFindUniqueArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Feedback that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FeedbackFindUniqueOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Feedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedbackFindFirstArgs>(args?: SelectSubset<T, FeedbackFindFirstArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Feedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedback.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackWithIdOnly = await prisma.feedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeedbackFindManyArgs>(args?: SelectSubset<T, FeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Feedback.
     * @param {FeedbackCreateArgs} args - Arguments to create a Feedback.
     * @example
     * // Create one Feedback
     * const Feedback = await prisma.feedback.create({
     *   data: {
     *     // ... data to create a Feedback
     *   }
     * })
     * 
     */
    create<T extends FeedbackCreateArgs>(args: SelectSubset<T, FeedbackCreateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Feedbacks.
     * @param {FeedbackCreateManyArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedbackCreateManyArgs>(args?: SelectSubset<T, FeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Feedbacks and returns the data saved in the database.
     * @param {FeedbackCreateManyAndReturnArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeedbackCreateManyAndReturnArgs>(args?: SelectSubset<T, FeedbackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Feedback.
     * @param {FeedbackDeleteArgs} args - Arguments to delete one Feedback.
     * @example
     * // Delete one Feedback
     * const Feedback = await prisma.feedback.delete({
     *   where: {
     *     // ... filter to delete one Feedback
     *   }
     * })
     * 
     */
    delete<T extends FeedbackDeleteArgs>(args: SelectSubset<T, FeedbackDeleteArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Feedback.
     * @param {FeedbackUpdateArgs} args - Arguments to update one Feedback.
     * @example
     * // Update one Feedback
     * const feedback = await prisma.feedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedbackUpdateArgs>(args: SelectSubset<T, FeedbackUpdateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Feedbacks.
     * @param {FeedbackDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedbackDeleteManyArgs>(args?: SelectSubset<T, FeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedbackUpdateManyArgs>(args: SelectSubset<T, FeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Feedback.
     * @param {FeedbackUpsertArgs} args - Arguments to update or create a Feedback.
     * @example
     * // Update or create a Feedback
     * const feedback = await prisma.feedback.upsert({
     *   create: {
     *     // ... data to create a Feedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedback we want to update
     *   }
     * })
     */
    upsert<T extends FeedbackUpsertArgs>(args: SelectSubset<T, FeedbackUpsertArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedback.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends FeedbackCountArgs>(
      args?: Subset<T, FeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeedbackAggregateArgs>(args: Subset<T, FeedbackAggregateArgs>): Prisma.PrismaPromise<GetFeedbackAggregateType<T>>

    /**
     * Group by Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feedback model
   */
  readonly fields: FeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Feedback model
   */ 
  interface FeedbackFieldRefs {
    readonly id: FieldRef<"Feedback", 'Int'>
    readonly email: FieldRef<"Feedback", 'String'>
    readonly username: FieldRef<"Feedback", 'String'>
    readonly message: FieldRef<"Feedback", 'String'>
    readonly createdAt: FieldRef<"Feedback", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Feedback findUnique
   */
  export type FeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findUniqueOrThrow
   */
  export type FeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findFirst
   */
  export type FeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findFirstOrThrow
   */
  export type FeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findMany
   */
  export type FeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Filter, which Feedbacks to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback create
   */
  export type FeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * The data needed to create a Feedback.
     */
    data: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
  }

  /**
   * Feedback createMany
   */
  export type FeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feedback createManyAndReturn
   */
  export type FeedbackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feedback update
   */
  export type FeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * The data needed to update a Feedback.
     */
    data: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
    /**
     * Choose, which Feedback to update.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback updateMany
   */
  export type FeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
  }

  /**
   * Feedback upsert
   */
  export type FeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * The filter to search for the Feedback to update in case it exists.
     */
    where: FeedbackWhereUniqueInput
    /**
     * In case the Feedback found by the `where` argument doesn't exist, create a new Feedback with this data.
     */
    create: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
    /**
     * In case the Feedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
  }

  /**
   * Feedback delete
   */
  export type FeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Filter which Feedback to delete.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback deleteMany
   */
  export type FeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedbacks to delete
     */
    where?: FeedbackWhereInput
  }

  /**
   * Feedback without action
   */
  export type FeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
  }


  /**
   * Model VerifyResetToken
   */

  export type AggregateVerifyResetToken = {
    _count: VerifyResetTokenCountAggregateOutputType | null
    _avg: VerifyResetTokenAvgAggregateOutputType | null
    _sum: VerifyResetTokenSumAggregateOutputType | null
    _min: VerifyResetTokenMinAggregateOutputType | null
    _max: VerifyResetTokenMaxAggregateOutputType | null
  }

  export type VerifyResetTokenAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type VerifyResetTokenSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type VerifyResetTokenMinAggregateOutputType = {
    id: number | null
    userId: number | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerifyResetTokenMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerifyResetTokenCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerifyResetTokenAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type VerifyResetTokenSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type VerifyResetTokenMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerifyResetTokenMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerifyResetTokenCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerifyResetTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerifyResetToken to aggregate.
     */
    where?: VerifyResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerifyResetTokens to fetch.
     */
    orderBy?: VerifyResetTokenOrderByWithRelationInput | VerifyResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerifyResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerifyResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerifyResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerifyResetTokens
    **/
    _count?: true | VerifyResetTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VerifyResetTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VerifyResetTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerifyResetTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerifyResetTokenMaxAggregateInputType
  }

  export type GetVerifyResetTokenAggregateType<T extends VerifyResetTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerifyResetToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerifyResetToken[P]>
      : GetScalarType<T[P], AggregateVerifyResetToken[P]>
  }




  export type VerifyResetTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerifyResetTokenWhereInput
    orderBy?: VerifyResetTokenOrderByWithAggregationInput | VerifyResetTokenOrderByWithAggregationInput[]
    by: VerifyResetTokenScalarFieldEnum[] | VerifyResetTokenScalarFieldEnum
    having?: VerifyResetTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerifyResetTokenCountAggregateInputType | true
    _avg?: VerifyResetTokenAvgAggregateInputType
    _sum?: VerifyResetTokenSumAggregateInputType
    _min?: VerifyResetTokenMinAggregateInputType
    _max?: VerifyResetTokenMaxAggregateInputType
  }

  export type VerifyResetTokenGroupByOutputType = {
    id: number
    userId: number
    token: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: VerifyResetTokenCountAggregateOutputType | null
    _avg: VerifyResetTokenAvgAggregateOutputType | null
    _sum: VerifyResetTokenSumAggregateOutputType | null
    _min: VerifyResetTokenMinAggregateOutputType | null
    _max: VerifyResetTokenMaxAggregateOutputType | null
  }

  type GetVerifyResetTokenGroupByPayload<T extends VerifyResetTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerifyResetTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerifyResetTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerifyResetTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerifyResetTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerifyResetTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verifyResetToken"]>

  export type VerifyResetTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verifyResetToken"]>

  export type VerifyResetTokenSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerifyResetTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VerifyResetTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VerifyResetTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerifyResetToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      token: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["verifyResetToken"]>
    composites: {}
  }

  type VerifyResetTokenGetPayload<S extends boolean | null | undefined | VerifyResetTokenDefaultArgs> = $Result.GetResult<Prisma.$VerifyResetTokenPayload, S>

  type VerifyResetTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VerifyResetTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VerifyResetTokenCountAggregateInputType | true
    }

  export interface VerifyResetTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerifyResetToken'], meta: { name: 'VerifyResetToken' } }
    /**
     * Find zero or one VerifyResetToken that matches the filter.
     * @param {VerifyResetTokenFindUniqueArgs} args - Arguments to find a VerifyResetToken
     * @example
     * // Get one VerifyResetToken
     * const verifyResetToken = await prisma.verifyResetToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerifyResetTokenFindUniqueArgs>(args: SelectSubset<T, VerifyResetTokenFindUniqueArgs<ExtArgs>>): Prisma__VerifyResetTokenClient<$Result.GetResult<Prisma.$VerifyResetTokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one VerifyResetToken that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VerifyResetTokenFindUniqueOrThrowArgs} args - Arguments to find a VerifyResetToken
     * @example
     * // Get one VerifyResetToken
     * const verifyResetToken = await prisma.verifyResetToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerifyResetTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerifyResetTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerifyResetTokenClient<$Result.GetResult<Prisma.$VerifyResetTokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first VerifyResetToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerifyResetTokenFindFirstArgs} args - Arguments to find a VerifyResetToken
     * @example
     * // Get one VerifyResetToken
     * const verifyResetToken = await prisma.verifyResetToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerifyResetTokenFindFirstArgs>(args?: SelectSubset<T, VerifyResetTokenFindFirstArgs<ExtArgs>>): Prisma__VerifyResetTokenClient<$Result.GetResult<Prisma.$VerifyResetTokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first VerifyResetToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerifyResetTokenFindFirstOrThrowArgs} args - Arguments to find a VerifyResetToken
     * @example
     * // Get one VerifyResetToken
     * const verifyResetToken = await prisma.verifyResetToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerifyResetTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerifyResetTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerifyResetTokenClient<$Result.GetResult<Prisma.$VerifyResetTokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more VerifyResetTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerifyResetTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerifyResetTokens
     * const verifyResetTokens = await prisma.verifyResetToken.findMany()
     * 
     * // Get first 10 VerifyResetTokens
     * const verifyResetTokens = await prisma.verifyResetToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verifyResetTokenWithIdOnly = await prisma.verifyResetToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerifyResetTokenFindManyArgs>(args?: SelectSubset<T, VerifyResetTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerifyResetTokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a VerifyResetToken.
     * @param {VerifyResetTokenCreateArgs} args - Arguments to create a VerifyResetToken.
     * @example
     * // Create one VerifyResetToken
     * const VerifyResetToken = await prisma.verifyResetToken.create({
     *   data: {
     *     // ... data to create a VerifyResetToken
     *   }
     * })
     * 
     */
    create<T extends VerifyResetTokenCreateArgs>(args: SelectSubset<T, VerifyResetTokenCreateArgs<ExtArgs>>): Prisma__VerifyResetTokenClient<$Result.GetResult<Prisma.$VerifyResetTokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many VerifyResetTokens.
     * @param {VerifyResetTokenCreateManyArgs} args - Arguments to create many VerifyResetTokens.
     * @example
     * // Create many VerifyResetTokens
     * const verifyResetToken = await prisma.verifyResetToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerifyResetTokenCreateManyArgs>(args?: SelectSubset<T, VerifyResetTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerifyResetTokens and returns the data saved in the database.
     * @param {VerifyResetTokenCreateManyAndReturnArgs} args - Arguments to create many VerifyResetTokens.
     * @example
     * // Create many VerifyResetTokens
     * const verifyResetToken = await prisma.verifyResetToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerifyResetTokens and only return the `id`
     * const verifyResetTokenWithIdOnly = await prisma.verifyResetToken.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerifyResetTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerifyResetTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerifyResetTokenPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a VerifyResetToken.
     * @param {VerifyResetTokenDeleteArgs} args - Arguments to delete one VerifyResetToken.
     * @example
     * // Delete one VerifyResetToken
     * const VerifyResetToken = await prisma.verifyResetToken.delete({
     *   where: {
     *     // ... filter to delete one VerifyResetToken
     *   }
     * })
     * 
     */
    delete<T extends VerifyResetTokenDeleteArgs>(args: SelectSubset<T, VerifyResetTokenDeleteArgs<ExtArgs>>): Prisma__VerifyResetTokenClient<$Result.GetResult<Prisma.$VerifyResetTokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one VerifyResetToken.
     * @param {VerifyResetTokenUpdateArgs} args - Arguments to update one VerifyResetToken.
     * @example
     * // Update one VerifyResetToken
     * const verifyResetToken = await prisma.verifyResetToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerifyResetTokenUpdateArgs>(args: SelectSubset<T, VerifyResetTokenUpdateArgs<ExtArgs>>): Prisma__VerifyResetTokenClient<$Result.GetResult<Prisma.$VerifyResetTokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more VerifyResetTokens.
     * @param {VerifyResetTokenDeleteManyArgs} args - Arguments to filter VerifyResetTokens to delete.
     * @example
     * // Delete a few VerifyResetTokens
     * const { count } = await prisma.verifyResetToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerifyResetTokenDeleteManyArgs>(args?: SelectSubset<T, VerifyResetTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerifyResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerifyResetTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerifyResetTokens
     * const verifyResetToken = await prisma.verifyResetToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerifyResetTokenUpdateManyArgs>(args: SelectSubset<T, VerifyResetTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerifyResetToken.
     * @param {VerifyResetTokenUpsertArgs} args - Arguments to update or create a VerifyResetToken.
     * @example
     * // Update or create a VerifyResetToken
     * const verifyResetToken = await prisma.verifyResetToken.upsert({
     *   create: {
     *     // ... data to create a VerifyResetToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerifyResetToken we want to update
     *   }
     * })
     */
    upsert<T extends VerifyResetTokenUpsertArgs>(args: SelectSubset<T, VerifyResetTokenUpsertArgs<ExtArgs>>): Prisma__VerifyResetTokenClient<$Result.GetResult<Prisma.$VerifyResetTokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of VerifyResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerifyResetTokenCountArgs} args - Arguments to filter VerifyResetTokens to count.
     * @example
     * // Count the number of VerifyResetTokens
     * const count = await prisma.verifyResetToken.count({
     *   where: {
     *     // ... the filter for the VerifyResetTokens we want to count
     *   }
     * })
    **/
    count<T extends VerifyResetTokenCountArgs>(
      args?: Subset<T, VerifyResetTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerifyResetTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerifyResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerifyResetTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerifyResetTokenAggregateArgs>(args: Subset<T, VerifyResetTokenAggregateArgs>): Prisma.PrismaPromise<GetVerifyResetTokenAggregateType<T>>

    /**
     * Group by VerifyResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerifyResetTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerifyResetTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerifyResetTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerifyResetTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerifyResetTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerifyResetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerifyResetToken model
   */
  readonly fields: VerifyResetTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerifyResetToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerifyResetTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerifyResetToken model
   */ 
  interface VerifyResetTokenFieldRefs {
    readonly id: FieldRef<"VerifyResetToken", 'Int'>
    readonly userId: FieldRef<"VerifyResetToken", 'Int'>
    readonly token: FieldRef<"VerifyResetToken", 'String'>
    readonly expiresAt: FieldRef<"VerifyResetToken", 'DateTime'>
    readonly createdAt: FieldRef<"VerifyResetToken", 'DateTime'>
    readonly updatedAt: FieldRef<"VerifyResetToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerifyResetToken findUnique
   */
  export type VerifyResetTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerifyResetToken
     */
    select?: VerifyResetTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerifyResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which VerifyResetToken to fetch.
     */
    where: VerifyResetTokenWhereUniqueInput
  }

  /**
   * VerifyResetToken findUniqueOrThrow
   */
  export type VerifyResetTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerifyResetToken
     */
    select?: VerifyResetTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerifyResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which VerifyResetToken to fetch.
     */
    where: VerifyResetTokenWhereUniqueInput
  }

  /**
   * VerifyResetToken findFirst
   */
  export type VerifyResetTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerifyResetToken
     */
    select?: VerifyResetTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerifyResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which VerifyResetToken to fetch.
     */
    where?: VerifyResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerifyResetTokens to fetch.
     */
    orderBy?: VerifyResetTokenOrderByWithRelationInput | VerifyResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerifyResetTokens.
     */
    cursor?: VerifyResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerifyResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerifyResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerifyResetTokens.
     */
    distinct?: VerifyResetTokenScalarFieldEnum | VerifyResetTokenScalarFieldEnum[]
  }

  /**
   * VerifyResetToken findFirstOrThrow
   */
  export type VerifyResetTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerifyResetToken
     */
    select?: VerifyResetTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerifyResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which VerifyResetToken to fetch.
     */
    where?: VerifyResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerifyResetTokens to fetch.
     */
    orderBy?: VerifyResetTokenOrderByWithRelationInput | VerifyResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerifyResetTokens.
     */
    cursor?: VerifyResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerifyResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerifyResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerifyResetTokens.
     */
    distinct?: VerifyResetTokenScalarFieldEnum | VerifyResetTokenScalarFieldEnum[]
  }

  /**
   * VerifyResetToken findMany
   */
  export type VerifyResetTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerifyResetToken
     */
    select?: VerifyResetTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerifyResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which VerifyResetTokens to fetch.
     */
    where?: VerifyResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerifyResetTokens to fetch.
     */
    orderBy?: VerifyResetTokenOrderByWithRelationInput | VerifyResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerifyResetTokens.
     */
    cursor?: VerifyResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerifyResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerifyResetTokens.
     */
    skip?: number
    distinct?: VerifyResetTokenScalarFieldEnum | VerifyResetTokenScalarFieldEnum[]
  }

  /**
   * VerifyResetToken create
   */
  export type VerifyResetTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerifyResetToken
     */
    select?: VerifyResetTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerifyResetTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a VerifyResetToken.
     */
    data: XOR<VerifyResetTokenCreateInput, VerifyResetTokenUncheckedCreateInput>
  }

  /**
   * VerifyResetToken createMany
   */
  export type VerifyResetTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerifyResetTokens.
     */
    data: VerifyResetTokenCreateManyInput | VerifyResetTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerifyResetToken createManyAndReturn
   */
  export type VerifyResetTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerifyResetToken
     */
    select?: VerifyResetTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many VerifyResetTokens.
     */
    data: VerifyResetTokenCreateManyInput | VerifyResetTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerifyResetTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VerifyResetToken update
   */
  export type VerifyResetTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerifyResetToken
     */
    select?: VerifyResetTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerifyResetTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a VerifyResetToken.
     */
    data: XOR<VerifyResetTokenUpdateInput, VerifyResetTokenUncheckedUpdateInput>
    /**
     * Choose, which VerifyResetToken to update.
     */
    where: VerifyResetTokenWhereUniqueInput
  }

  /**
   * VerifyResetToken updateMany
   */
  export type VerifyResetTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerifyResetTokens.
     */
    data: XOR<VerifyResetTokenUpdateManyMutationInput, VerifyResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerifyResetTokens to update
     */
    where?: VerifyResetTokenWhereInput
  }

  /**
   * VerifyResetToken upsert
   */
  export type VerifyResetTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerifyResetToken
     */
    select?: VerifyResetTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerifyResetTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the VerifyResetToken to update in case it exists.
     */
    where: VerifyResetTokenWhereUniqueInput
    /**
     * In case the VerifyResetToken found by the `where` argument doesn't exist, create a new VerifyResetToken with this data.
     */
    create: XOR<VerifyResetTokenCreateInput, VerifyResetTokenUncheckedCreateInput>
    /**
     * In case the VerifyResetToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerifyResetTokenUpdateInput, VerifyResetTokenUncheckedUpdateInput>
  }

  /**
   * VerifyResetToken delete
   */
  export type VerifyResetTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerifyResetToken
     */
    select?: VerifyResetTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerifyResetTokenInclude<ExtArgs> | null
    /**
     * Filter which VerifyResetToken to delete.
     */
    where: VerifyResetTokenWhereUniqueInput
  }

  /**
   * VerifyResetToken deleteMany
   */
  export type VerifyResetTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerifyResetTokens to delete
     */
    where?: VerifyResetTokenWhereInput
  }

  /**
   * VerifyResetToken without action
   */
  export type VerifyResetTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerifyResetToken
     */
    select?: VerifyResetTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerifyResetTokenInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    movieId: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
    userId: number | null
    movieId: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    userId: number | null
    movieId: number | null
    body: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    movieId: number | null
    body: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    userId: number
    movieId: number
    body: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    body?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    body?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    body?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: number
    userId: number
    movieId: number
    body: string
    createdAt: Date
    updatedAt: Date
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieId?: boolean
    body?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieId?: boolean
    body?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    userId?: boolean
    movieId?: boolean
    body?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      movie: Prisma.$MoviePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      movieId: number
      body: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    movie<T extends MovieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieDefaultArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */ 
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'Int'>
    readonly userId: FieldRef<"Comment", 'Int'>
    readonly movieId: FieldRef<"Comment", 'Int'>
    readonly body: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Like
   */

  export type AggregateLike = {
    _count: LikeCountAggregateOutputType | null
    _avg: LikeAvgAggregateOutputType | null
    _sum: LikeSumAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  export type LikeAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    movieId: number | null
  }

  export type LikeSumAggregateOutputType = {
    id: number | null
    userId: number | null
    movieId: number | null
  }

  export type LikeMinAggregateOutputType = {
    id: number | null
    userId: number | null
    movieId: number | null
    createdAt: Date | null
  }

  export type LikeMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    movieId: number | null
    createdAt: Date | null
  }

  export type LikeCountAggregateOutputType = {
    id: number
    userId: number
    movieId: number
    createdAt: number
    _all: number
  }


  export type LikeAvgAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
  }

  export type LikeSumAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
  }

  export type LikeMinAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    createdAt?: true
  }

  export type LikeMaxAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    createdAt?: true
  }

  export type LikeCountAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    createdAt?: true
    _all?: true
  }

  export type LikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Like to aggregate.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Likes
    **/
    _count?: true | LikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikeMaxAggregateInputType
  }

  export type GetLikeAggregateType<T extends LikeAggregateArgs> = {
        [P in keyof T & keyof AggregateLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLike[P]>
      : GetScalarType<T[P], AggregateLike[P]>
  }




  export type LikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithAggregationInput | LikeOrderByWithAggregationInput[]
    by: LikeScalarFieldEnum[] | LikeScalarFieldEnum
    having?: LikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikeCountAggregateInputType | true
    _avg?: LikeAvgAggregateInputType
    _sum?: LikeSumAggregateInputType
    _min?: LikeMinAggregateInputType
    _max?: LikeMaxAggregateInputType
  }

  export type LikeGroupByOutputType = {
    id: number
    userId: number
    movieId: number
    createdAt: Date
    _count: LikeCountAggregateOutputType | null
    _avg: LikeAvgAggregateOutputType | null
    _sum: LikeSumAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  type GetLikeGroupByPayload<T extends LikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikeGroupByOutputType[P]>
            : GetScalarType<T[P], LikeGroupByOutputType[P]>
        }
      >
    >


  export type LikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectScalar = {
    id?: boolean
    userId?: boolean
    movieId?: boolean
    createdAt?: boolean
  }

  export type LikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }
  export type LikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }

  export type $LikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Like"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      movie: Prisma.$MoviePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      movieId: number
      createdAt: Date
    }, ExtArgs["result"]["like"]>
    composites: {}
  }

  type LikeGetPayload<S extends boolean | null | undefined | LikeDefaultArgs> = $Result.GetResult<Prisma.$LikePayload, S>

  type LikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LikeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LikeCountAggregateInputType | true
    }

  export interface LikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Like'], meta: { name: 'Like' } }
    /**
     * Find zero or one Like that matches the filter.
     * @param {LikeFindUniqueArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikeFindUniqueArgs>(args: SelectSubset<T, LikeFindUniqueArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Like that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LikeFindUniqueOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikeFindUniqueOrThrowArgs>(args: SelectSubset<T, LikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Like that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikeFindFirstArgs>(args?: SelectSubset<T, LikeFindFirstArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Like that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikeFindFirstOrThrowArgs>(args?: SelectSubset<T, LikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.like.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.like.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likeWithIdOnly = await prisma.like.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LikeFindManyArgs>(args?: SelectSubset<T, LikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Like.
     * @param {LikeCreateArgs} args - Arguments to create a Like.
     * @example
     * // Create one Like
     * const Like = await prisma.like.create({
     *   data: {
     *     // ... data to create a Like
     *   }
     * })
     * 
     */
    create<T extends LikeCreateArgs>(args: SelectSubset<T, LikeCreateArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Likes.
     * @param {LikeCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikeCreateManyArgs>(args?: SelectSubset<T, LikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Likes and returns the data saved in the database.
     * @param {LikeCreateManyAndReturnArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Likes and only return the `id`
     * const likeWithIdOnly = await prisma.like.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LikeCreateManyAndReturnArgs>(args?: SelectSubset<T, LikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Like.
     * @param {LikeDeleteArgs} args - Arguments to delete one Like.
     * @example
     * // Delete one Like
     * const Like = await prisma.like.delete({
     *   where: {
     *     // ... filter to delete one Like
     *   }
     * })
     * 
     */
    delete<T extends LikeDeleteArgs>(args: SelectSubset<T, LikeDeleteArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Like.
     * @param {LikeUpdateArgs} args - Arguments to update one Like.
     * @example
     * // Update one Like
     * const like = await prisma.like.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikeUpdateArgs>(args: SelectSubset<T, LikeUpdateArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Likes.
     * @param {LikeDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.like.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikeDeleteManyArgs>(args?: SelectSubset<T, LikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikeUpdateManyArgs>(args: SelectSubset<T, LikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Like.
     * @param {LikeUpsertArgs} args - Arguments to update or create a Like.
     * @example
     * // Update or create a Like
     * const like = await prisma.like.upsert({
     *   create: {
     *     // ... data to create a Like
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Like we want to update
     *   }
     * })
     */
    upsert<T extends LikeUpsertArgs>(args: SelectSubset<T, LikeUpsertArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.like.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends LikeCountArgs>(
      args?: Subset<T, LikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LikeAggregateArgs>(args: Subset<T, LikeAggregateArgs>): Prisma.PrismaPromise<GetLikeAggregateType<T>>

    /**
     * Group by Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikeGroupByArgs['orderBy'] }
        : { orderBy?: LikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Like model
   */
  readonly fields: LikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Like.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    movie<T extends MovieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieDefaultArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Like model
   */ 
  interface LikeFieldRefs {
    readonly id: FieldRef<"Like", 'Int'>
    readonly userId: FieldRef<"Like", 'Int'>
    readonly movieId: FieldRef<"Like", 'Int'>
    readonly createdAt: FieldRef<"Like", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Like findUnique
   */
  export type LikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like findUniqueOrThrow
   */
  export type LikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like findFirst
   */
  export type LikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like findFirstOrThrow
   */
  export type LikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like findMany
   */
  export type LikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like create
   */
  export type LikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to create a Like.
     */
    data: XOR<LikeCreateInput, LikeUncheckedCreateInput>
  }

  /**
   * Like createMany
   */
  export type LikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Likes.
     */
    data: LikeCreateManyInput | LikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Like createManyAndReturn
   */
  export type LikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Likes.
     */
    data: LikeCreateManyInput | LikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Like update
   */
  export type LikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to update a Like.
     */
    data: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
    /**
     * Choose, which Like to update.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like updateMany
   */
  export type LikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Likes.
     */
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikeWhereInput
  }

  /**
   * Like upsert
   */
  export type LikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The filter to search for the Like to update in case it exists.
     */
    where: LikeWhereUniqueInput
    /**
     * In case the Like found by the `where` argument doesn't exist, create a new Like with this data.
     */
    create: XOR<LikeCreateInput, LikeUncheckedCreateInput>
    /**
     * In case the Like was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
  }

  /**
   * Like delete
   */
  export type LikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter which Like to delete.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like deleteMany
   */
  export type LikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to delete
     */
    where?: LikeWhereInput
  }

  /**
   * Like without action
   */
  export type LikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
  }


  /**
   * Model Chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatAvgAggregateOutputType = {
    id: number | null
  }

  export type ChatSumAggregateOutputType = {
    id: number | null
  }

  export type ChatMinAggregateOutputType = {
    id: number | null
    title: string | null
    isGroup: boolean | null
    createdAt: Date | null
  }

  export type ChatMaxAggregateOutputType = {
    id: number | null
    title: string | null
    isGroup: boolean | null
    createdAt: Date | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    title: number
    isGroup: number
    createdAt: number
    _all: number
  }


  export type ChatAvgAggregateInputType = {
    id?: true
  }

  export type ChatSumAggregateInputType = {
    id?: true
  }

  export type ChatMinAggregateInputType = {
    id?: true
    title?: true
    isGroup?: true
    createdAt?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    title?: true
    isGroup?: true
    createdAt?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    title?: true
    isGroup?: true
    createdAt?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chat to aggregate.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type ChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithAggregationInput | ChatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _avg?: ChatAvgAggregateInputType
    _sum?: ChatSumAggregateInputType
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: number
    title: string | null
    isGroup: boolean
    createdAt: Date
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends ChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type ChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    isGroup?: boolean
    createdAt?: boolean
    users?: boolean | Chat$usersArgs<ExtArgs>
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    isGroup?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectScalar = {
    id?: boolean
    title?: boolean
    isGroup?: boolean
    createdAt?: boolean
  }

  export type ChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Chat$usersArgs<ExtArgs>
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chat"
    objects: {
      users: Prisma.$ChatUserPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string | null
      isGroup: boolean
      createdAt: Date
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }

  type ChatGetPayload<S extends boolean | null | undefined | ChatDefaultArgs> = $Result.GetResult<Prisma.$ChatPayload, S>

  type ChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChatFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface ChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chat'], meta: { name: 'Chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {ChatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatFindUniqueArgs>(args: SelectSubset<T, ChatFindUniqueArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Chat that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ChatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatFindFirstArgs>(args?: SelectSubset<T, ChatFindFirstArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatFindManyArgs>(args?: SelectSubset<T, ChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Chat.
     * @param {ChatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
     */
    create<T extends ChatCreateArgs>(args: SelectSubset<T, ChatCreateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Chats.
     * @param {ChatCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatCreateManyArgs>(args?: SelectSubset<T, ChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chats and returns the data saved in the database.
     * @param {ChatCreateManyAndReturnArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Chat.
     * @param {ChatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
     */
    delete<T extends ChatDeleteArgs>(args: SelectSubset<T, ChatDeleteArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Chat.
     * @param {ChatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatUpdateArgs>(args: SelectSubset<T, ChatUpdateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Chats.
     * @param {ChatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatDeleteManyArgs>(args?: SelectSubset<T, ChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatUpdateManyArgs>(args: SelectSubset<T, ChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chat.
     * @param {ChatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
     */
    upsert<T extends ChatUpsertArgs>(args: SelectSubset<T, ChatUpsertArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends ChatCountArgs>(
      args?: Subset<T, ChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chat model
   */
  readonly fields: ChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Chat$usersArgs<ExtArgs> = {}>(args?: Subset<T, Chat$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "findMany"> | Null>
    messages<T extends Chat$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Chat$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chat model
   */ 
  interface ChatFieldRefs {
    readonly id: FieldRef<"Chat", 'Int'>
    readonly title: FieldRef<"Chat", 'String'>
    readonly isGroup: FieldRef<"Chat", 'Boolean'>
    readonly createdAt: FieldRef<"Chat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chat findUnique
   */
  export type ChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findUniqueOrThrow
   */
  export type ChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findFirst
   */
  export type ChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findFirstOrThrow
   */
  export type ChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findMany
   */
  export type ChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat create
   */
  export type ChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to create a Chat.
     */
    data?: XOR<ChatCreateInput, ChatUncheckedCreateInput>
  }

  /**
   * Chat createMany
   */
  export type ChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chat createManyAndReturn
   */
  export type ChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chat update
   */
  export type ChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to update a Chat.
     */
    data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    /**
     * Choose, which Chat to update.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat updateMany
   */
  export type ChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
  }

  /**
   * Chat upsert
   */
  export type ChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The filter to search for the Chat to update in case it exists.
     */
    where: ChatWhereUniqueInput
    /**
     * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
     */
    create: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    /**
     * In case the Chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
  }

  /**
   * Chat delete
   */
  export type ChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter which Chat to delete.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat deleteMany
   */
  export type ChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chats to delete
     */
    where?: ChatWhereInput
  }

  /**
   * Chat.users
   */
  export type Chat$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserInclude<ExtArgs> | null
    where?: ChatUserWhereInput
    orderBy?: ChatUserOrderByWithRelationInput | ChatUserOrderByWithRelationInput[]
    cursor?: ChatUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatUserScalarFieldEnum | ChatUserScalarFieldEnum[]
  }

  /**
   * Chat.messages
   */
  export type Chat$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Chat without action
   */
  export type ChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
  }


  /**
   * Model ChatUser
   */

  export type AggregateChatUser = {
    _count: ChatUserCountAggregateOutputType | null
    _avg: ChatUserAvgAggregateOutputType | null
    _sum: ChatUserSumAggregateOutputType | null
    _min: ChatUserMinAggregateOutputType | null
    _max: ChatUserMaxAggregateOutputType | null
  }

  export type ChatUserAvgAggregateOutputType = {
    id: number | null
    chatId: number | null
    userId: number | null
  }

  export type ChatUserSumAggregateOutputType = {
    id: number | null
    chatId: number | null
    userId: number | null
  }

  export type ChatUserMinAggregateOutputType = {
    id: number | null
    chatId: number | null
    userId: number | null
    joinedAt: Date | null
  }

  export type ChatUserMaxAggregateOutputType = {
    id: number | null
    chatId: number | null
    userId: number | null
    joinedAt: Date | null
  }

  export type ChatUserCountAggregateOutputType = {
    id: number
    chatId: number
    userId: number
    joinedAt: number
    _all: number
  }


  export type ChatUserAvgAggregateInputType = {
    id?: true
    chatId?: true
    userId?: true
  }

  export type ChatUserSumAggregateInputType = {
    id?: true
    chatId?: true
    userId?: true
  }

  export type ChatUserMinAggregateInputType = {
    id?: true
    chatId?: true
    userId?: true
    joinedAt?: true
  }

  export type ChatUserMaxAggregateInputType = {
    id?: true
    chatId?: true
    userId?: true
    joinedAt?: true
  }

  export type ChatUserCountAggregateInputType = {
    id?: true
    chatId?: true
    userId?: true
    joinedAt?: true
    _all?: true
  }

  export type ChatUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatUser to aggregate.
     */
    where?: ChatUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatUsers to fetch.
     */
    orderBy?: ChatUserOrderByWithRelationInput | ChatUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatUsers
    **/
    _count?: true | ChatUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatUserMaxAggregateInputType
  }

  export type GetChatUserAggregateType<T extends ChatUserAggregateArgs> = {
        [P in keyof T & keyof AggregateChatUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatUser[P]>
      : GetScalarType<T[P], AggregateChatUser[P]>
  }




  export type ChatUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatUserWhereInput
    orderBy?: ChatUserOrderByWithAggregationInput | ChatUserOrderByWithAggregationInput[]
    by: ChatUserScalarFieldEnum[] | ChatUserScalarFieldEnum
    having?: ChatUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatUserCountAggregateInputType | true
    _avg?: ChatUserAvgAggregateInputType
    _sum?: ChatUserSumAggregateInputType
    _min?: ChatUserMinAggregateInputType
    _max?: ChatUserMaxAggregateInputType
  }

  export type ChatUserGroupByOutputType = {
    id: number
    chatId: number
    userId: number
    joinedAt: Date
    _count: ChatUserCountAggregateOutputType | null
    _avg: ChatUserAvgAggregateOutputType | null
    _sum: ChatUserSumAggregateOutputType | null
    _min: ChatUserMinAggregateOutputType | null
    _max: ChatUserMaxAggregateOutputType | null
  }

  type GetChatUserGroupByPayload<T extends ChatUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatUserGroupByOutputType[P]>
            : GetScalarType<T[P], ChatUserGroupByOutputType[P]>
        }
      >
    >


  export type ChatUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    userId?: boolean
    joinedAt?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatUser"]>

  export type ChatUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    userId?: boolean
    joinedAt?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatUser"]>

  export type ChatUserSelectScalar = {
    id?: boolean
    chatId?: boolean
    userId?: boolean
    joinedAt?: boolean
  }

  export type ChatUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatUser"
    objects: {
      chat: Prisma.$ChatPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chatId: number
      userId: number
      joinedAt: Date
    }, ExtArgs["result"]["chatUser"]>
    composites: {}
  }

  type ChatUserGetPayload<S extends boolean | null | undefined | ChatUserDefaultArgs> = $Result.GetResult<Prisma.$ChatUserPayload, S>

  type ChatUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChatUserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChatUserCountAggregateInputType | true
    }

  export interface ChatUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatUser'], meta: { name: 'ChatUser' } }
    /**
     * Find zero or one ChatUser that matches the filter.
     * @param {ChatUserFindUniqueArgs} args - Arguments to find a ChatUser
     * @example
     * // Get one ChatUser
     * const chatUser = await prisma.chatUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatUserFindUniqueArgs>(args: SelectSubset<T, ChatUserFindUniqueArgs<ExtArgs>>): Prisma__ChatUserClient<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ChatUser that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ChatUserFindUniqueOrThrowArgs} args - Arguments to find a ChatUser
     * @example
     * // Get one ChatUser
     * const chatUser = await prisma.chatUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatUserFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatUserClient<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ChatUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUserFindFirstArgs} args - Arguments to find a ChatUser
     * @example
     * // Get one ChatUser
     * const chatUser = await prisma.chatUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatUserFindFirstArgs>(args?: SelectSubset<T, ChatUserFindFirstArgs<ExtArgs>>): Prisma__ChatUserClient<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ChatUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUserFindFirstOrThrowArgs} args - Arguments to find a ChatUser
     * @example
     * // Get one ChatUser
     * const chatUser = await prisma.chatUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatUserFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatUserClient<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ChatUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatUsers
     * const chatUsers = await prisma.chatUser.findMany()
     * 
     * // Get first 10 ChatUsers
     * const chatUsers = await prisma.chatUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatUserWithIdOnly = await prisma.chatUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatUserFindManyArgs>(args?: SelectSubset<T, ChatUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ChatUser.
     * @param {ChatUserCreateArgs} args - Arguments to create a ChatUser.
     * @example
     * // Create one ChatUser
     * const ChatUser = await prisma.chatUser.create({
     *   data: {
     *     // ... data to create a ChatUser
     *   }
     * })
     * 
     */
    create<T extends ChatUserCreateArgs>(args: SelectSubset<T, ChatUserCreateArgs<ExtArgs>>): Prisma__ChatUserClient<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ChatUsers.
     * @param {ChatUserCreateManyArgs} args - Arguments to create many ChatUsers.
     * @example
     * // Create many ChatUsers
     * const chatUser = await prisma.chatUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatUserCreateManyArgs>(args?: SelectSubset<T, ChatUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatUsers and returns the data saved in the database.
     * @param {ChatUserCreateManyAndReturnArgs} args - Arguments to create many ChatUsers.
     * @example
     * // Create many ChatUsers
     * const chatUser = await prisma.chatUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatUsers and only return the `id`
     * const chatUserWithIdOnly = await prisma.chatUser.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatUserCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ChatUser.
     * @param {ChatUserDeleteArgs} args - Arguments to delete one ChatUser.
     * @example
     * // Delete one ChatUser
     * const ChatUser = await prisma.chatUser.delete({
     *   where: {
     *     // ... filter to delete one ChatUser
     *   }
     * })
     * 
     */
    delete<T extends ChatUserDeleteArgs>(args: SelectSubset<T, ChatUserDeleteArgs<ExtArgs>>): Prisma__ChatUserClient<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ChatUser.
     * @param {ChatUserUpdateArgs} args - Arguments to update one ChatUser.
     * @example
     * // Update one ChatUser
     * const chatUser = await prisma.chatUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatUserUpdateArgs>(args: SelectSubset<T, ChatUserUpdateArgs<ExtArgs>>): Prisma__ChatUserClient<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ChatUsers.
     * @param {ChatUserDeleteManyArgs} args - Arguments to filter ChatUsers to delete.
     * @example
     * // Delete a few ChatUsers
     * const { count } = await prisma.chatUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatUserDeleteManyArgs>(args?: SelectSubset<T, ChatUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatUsers
     * const chatUser = await prisma.chatUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatUserUpdateManyArgs>(args: SelectSubset<T, ChatUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatUser.
     * @param {ChatUserUpsertArgs} args - Arguments to update or create a ChatUser.
     * @example
     * // Update or create a ChatUser
     * const chatUser = await prisma.chatUser.upsert({
     *   create: {
     *     // ... data to create a ChatUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatUser we want to update
     *   }
     * })
     */
    upsert<T extends ChatUserUpsertArgs>(args: SelectSubset<T, ChatUserUpsertArgs<ExtArgs>>): Prisma__ChatUserClient<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ChatUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUserCountArgs} args - Arguments to filter ChatUsers to count.
     * @example
     * // Count the number of ChatUsers
     * const count = await prisma.chatUser.count({
     *   where: {
     *     // ... the filter for the ChatUsers we want to count
     *   }
     * })
    **/
    count<T extends ChatUserCountArgs>(
      args?: Subset<T, ChatUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatUserAggregateArgs>(args: Subset<T, ChatUserAggregateArgs>): Prisma.PrismaPromise<GetChatUserAggregateType<T>>

    /**
     * Group by ChatUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatUserGroupByArgs['orderBy'] }
        : { orderBy?: ChatUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatUser model
   */
  readonly fields: ChatUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatUser model
   */ 
  interface ChatUserFieldRefs {
    readonly id: FieldRef<"ChatUser", 'Int'>
    readonly chatId: FieldRef<"ChatUser", 'Int'>
    readonly userId: FieldRef<"ChatUser", 'Int'>
    readonly joinedAt: FieldRef<"ChatUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatUser findUnique
   */
  export type ChatUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserInclude<ExtArgs> | null
    /**
     * Filter, which ChatUser to fetch.
     */
    where: ChatUserWhereUniqueInput
  }

  /**
   * ChatUser findUniqueOrThrow
   */
  export type ChatUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserInclude<ExtArgs> | null
    /**
     * Filter, which ChatUser to fetch.
     */
    where: ChatUserWhereUniqueInput
  }

  /**
   * ChatUser findFirst
   */
  export type ChatUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserInclude<ExtArgs> | null
    /**
     * Filter, which ChatUser to fetch.
     */
    where?: ChatUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatUsers to fetch.
     */
    orderBy?: ChatUserOrderByWithRelationInput | ChatUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatUsers.
     */
    cursor?: ChatUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatUsers.
     */
    distinct?: ChatUserScalarFieldEnum | ChatUserScalarFieldEnum[]
  }

  /**
   * ChatUser findFirstOrThrow
   */
  export type ChatUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserInclude<ExtArgs> | null
    /**
     * Filter, which ChatUser to fetch.
     */
    where?: ChatUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatUsers to fetch.
     */
    orderBy?: ChatUserOrderByWithRelationInput | ChatUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatUsers.
     */
    cursor?: ChatUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatUsers.
     */
    distinct?: ChatUserScalarFieldEnum | ChatUserScalarFieldEnum[]
  }

  /**
   * ChatUser findMany
   */
  export type ChatUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserInclude<ExtArgs> | null
    /**
     * Filter, which ChatUsers to fetch.
     */
    where?: ChatUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatUsers to fetch.
     */
    orderBy?: ChatUserOrderByWithRelationInput | ChatUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatUsers.
     */
    cursor?: ChatUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatUsers.
     */
    skip?: number
    distinct?: ChatUserScalarFieldEnum | ChatUserScalarFieldEnum[]
  }

  /**
   * ChatUser create
   */
  export type ChatUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatUser.
     */
    data: XOR<ChatUserCreateInput, ChatUserUncheckedCreateInput>
  }

  /**
   * ChatUser createMany
   */
  export type ChatUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatUsers.
     */
    data: ChatUserCreateManyInput | ChatUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatUser createManyAndReturn
   */
  export type ChatUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ChatUsers.
     */
    data: ChatUserCreateManyInput | ChatUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatUser update
   */
  export type ChatUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatUser.
     */
    data: XOR<ChatUserUpdateInput, ChatUserUncheckedUpdateInput>
    /**
     * Choose, which ChatUser to update.
     */
    where: ChatUserWhereUniqueInput
  }

  /**
   * ChatUser updateMany
   */
  export type ChatUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatUsers.
     */
    data: XOR<ChatUserUpdateManyMutationInput, ChatUserUncheckedUpdateManyInput>
    /**
     * Filter which ChatUsers to update
     */
    where?: ChatUserWhereInput
  }

  /**
   * ChatUser upsert
   */
  export type ChatUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatUser to update in case it exists.
     */
    where: ChatUserWhereUniqueInput
    /**
     * In case the ChatUser found by the `where` argument doesn't exist, create a new ChatUser with this data.
     */
    create: XOR<ChatUserCreateInput, ChatUserUncheckedCreateInput>
    /**
     * In case the ChatUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUserUpdateInput, ChatUserUncheckedUpdateInput>
  }

  /**
   * ChatUser delete
   */
  export type ChatUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserInclude<ExtArgs> | null
    /**
     * Filter which ChatUser to delete.
     */
    where: ChatUserWhereUniqueInput
  }

  /**
   * ChatUser deleteMany
   */
  export type ChatUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatUsers to delete
     */
    where?: ChatUserWhereInput
  }

  /**
   * ChatUser without action
   */
  export type ChatUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
    chatId: number | null
    userId: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
    chatId: number | null
    userId: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    chatId: number | null
    userId: number | null
    body: string | null
    createdAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    chatId: number | null
    userId: number | null
    body: string | null
    createdAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    chatId: number
    userId: number
    body: number
    createdAt: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
    chatId?: true
    userId?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
    chatId?: true
    userId?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    chatId?: true
    userId?: true
    body?: true
    createdAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    chatId?: true
    userId?: true
    body?: true
    createdAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    chatId?: true
    userId?: true
    body?: true
    createdAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: number
    chatId: number
    userId: number
    body: string
    createdAt: Date
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    userId?: boolean
    body?: boolean
    createdAt?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    userId?: boolean
    body?: boolean
    createdAt?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    chatId?: boolean
    userId?: boolean
    body?: boolean
    createdAt?: boolean
  }

  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      chat: Prisma.$ChatPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chatId: number
      userId: number
      body: string
      createdAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */ 
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'Int'>
    readonly chatId: FieldRef<"Message", 'Int'>
    readonly userId: FieldRef<"Message", 'Int'>
    readonly body: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    userId: number | null
    provider: string | null
    providerId: string | null
    amount: number | null
    currency: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    provider: string | null
    providerId: string | null
    amount: number | null
    currency: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    userId: number
    provider: number
    providerId: number
    amount: number
    currency: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerId?: true
    amount?: true
    currency?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerId?: true
    amount?: true
    currency?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerId?: true
    amount?: true
    currency?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    userId: number
    provider: string
    providerId: string | null
    amount: number
    currency: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      provider: string
      providerId: string | null
      amount: number
      currency: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly userId: FieldRef<"Order", 'Int'>
    readonly provider: FieldRef<"Order", 'String'>
    readonly providerId: FieldRef<"Order", 'String'>
    readonly amount: FieldRef<"Order", 'Float'>
    readonly currency: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model WatchListItem
   */

  export type AggregateWatchListItem = {
    _count: WatchListItemCountAggregateOutputType | null
    _avg: WatchListItemAvgAggregateOutputType | null
    _sum: WatchListItemSumAggregateOutputType | null
    _min: WatchListItemMinAggregateOutputType | null
    _max: WatchListItemMaxAggregateOutputType | null
  }

  export type WatchListItemAvgAggregateOutputType = {
    userId: number | null
    movieId: number | null
  }

  export type WatchListItemSumAggregateOutputType = {
    userId: number | null
    movieId: number | null
  }

  export type WatchListItemMinAggregateOutputType = {
    id: string | null
    userId: number | null
    movieId: number | null
    createdAt: Date | null
  }

  export type WatchListItemMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    movieId: number | null
    createdAt: Date | null
  }

  export type WatchListItemCountAggregateOutputType = {
    id: number
    userId: number
    movieId: number
    createdAt: number
    _all: number
  }


  export type WatchListItemAvgAggregateInputType = {
    userId?: true
    movieId?: true
  }

  export type WatchListItemSumAggregateInputType = {
    userId?: true
    movieId?: true
  }

  export type WatchListItemMinAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    createdAt?: true
  }

  export type WatchListItemMaxAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    createdAt?: true
  }

  export type WatchListItemCountAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    createdAt?: true
    _all?: true
  }

  export type WatchListItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WatchListItem to aggregate.
     */
    where?: WatchListItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchListItems to fetch.
     */
    orderBy?: WatchListItemOrderByWithRelationInput | WatchListItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WatchListItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchListItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WatchListItems
    **/
    _count?: true | WatchListItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WatchListItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WatchListItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WatchListItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WatchListItemMaxAggregateInputType
  }

  export type GetWatchListItemAggregateType<T extends WatchListItemAggregateArgs> = {
        [P in keyof T & keyof AggregateWatchListItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWatchListItem[P]>
      : GetScalarType<T[P], AggregateWatchListItem[P]>
  }




  export type WatchListItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchListItemWhereInput
    orderBy?: WatchListItemOrderByWithAggregationInput | WatchListItemOrderByWithAggregationInput[]
    by: WatchListItemScalarFieldEnum[] | WatchListItemScalarFieldEnum
    having?: WatchListItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WatchListItemCountAggregateInputType | true
    _avg?: WatchListItemAvgAggregateInputType
    _sum?: WatchListItemSumAggregateInputType
    _min?: WatchListItemMinAggregateInputType
    _max?: WatchListItemMaxAggregateInputType
  }

  export type WatchListItemGroupByOutputType = {
    id: string
    userId: number
    movieId: number
    createdAt: Date
    _count: WatchListItemCountAggregateOutputType | null
    _avg: WatchListItemAvgAggregateOutputType | null
    _sum: WatchListItemSumAggregateOutputType | null
    _min: WatchListItemMinAggregateOutputType | null
    _max: WatchListItemMaxAggregateOutputType | null
  }

  type GetWatchListItemGroupByPayload<T extends WatchListItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WatchListItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WatchListItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WatchListItemGroupByOutputType[P]>
            : GetScalarType<T[P], WatchListItemGroupByOutputType[P]>
        }
      >
    >


  export type WatchListItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchListItem"]>

  export type WatchListItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchListItem"]>

  export type WatchListItemSelectScalar = {
    id?: boolean
    userId?: boolean
    movieId?: boolean
    createdAt?: boolean
  }

  export type WatchListItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }
  export type WatchListItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }

  export type $WatchListItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WatchListItem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      movie: Prisma.$MoviePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      movieId: number
      createdAt: Date
    }, ExtArgs["result"]["watchListItem"]>
    composites: {}
  }

  type WatchListItemGetPayload<S extends boolean | null | undefined | WatchListItemDefaultArgs> = $Result.GetResult<Prisma.$WatchListItemPayload, S>

  type WatchListItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WatchListItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WatchListItemCountAggregateInputType | true
    }

  export interface WatchListItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WatchListItem'], meta: { name: 'WatchListItem' } }
    /**
     * Find zero or one WatchListItem that matches the filter.
     * @param {WatchListItemFindUniqueArgs} args - Arguments to find a WatchListItem
     * @example
     * // Get one WatchListItem
     * const watchListItem = await prisma.watchListItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WatchListItemFindUniqueArgs>(args: SelectSubset<T, WatchListItemFindUniqueArgs<ExtArgs>>): Prisma__WatchListItemClient<$Result.GetResult<Prisma.$WatchListItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WatchListItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WatchListItemFindUniqueOrThrowArgs} args - Arguments to find a WatchListItem
     * @example
     * // Get one WatchListItem
     * const watchListItem = await prisma.watchListItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WatchListItemFindUniqueOrThrowArgs>(args: SelectSubset<T, WatchListItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WatchListItemClient<$Result.GetResult<Prisma.$WatchListItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WatchListItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchListItemFindFirstArgs} args - Arguments to find a WatchListItem
     * @example
     * // Get one WatchListItem
     * const watchListItem = await prisma.watchListItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WatchListItemFindFirstArgs>(args?: SelectSubset<T, WatchListItemFindFirstArgs<ExtArgs>>): Prisma__WatchListItemClient<$Result.GetResult<Prisma.$WatchListItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WatchListItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchListItemFindFirstOrThrowArgs} args - Arguments to find a WatchListItem
     * @example
     * // Get one WatchListItem
     * const watchListItem = await prisma.watchListItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WatchListItemFindFirstOrThrowArgs>(args?: SelectSubset<T, WatchListItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__WatchListItemClient<$Result.GetResult<Prisma.$WatchListItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WatchListItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchListItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WatchListItems
     * const watchListItems = await prisma.watchListItem.findMany()
     * 
     * // Get first 10 WatchListItems
     * const watchListItems = await prisma.watchListItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const watchListItemWithIdOnly = await prisma.watchListItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WatchListItemFindManyArgs>(args?: SelectSubset<T, WatchListItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchListItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WatchListItem.
     * @param {WatchListItemCreateArgs} args - Arguments to create a WatchListItem.
     * @example
     * // Create one WatchListItem
     * const WatchListItem = await prisma.watchListItem.create({
     *   data: {
     *     // ... data to create a WatchListItem
     *   }
     * })
     * 
     */
    create<T extends WatchListItemCreateArgs>(args: SelectSubset<T, WatchListItemCreateArgs<ExtArgs>>): Prisma__WatchListItemClient<$Result.GetResult<Prisma.$WatchListItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WatchListItems.
     * @param {WatchListItemCreateManyArgs} args - Arguments to create many WatchListItems.
     * @example
     * // Create many WatchListItems
     * const watchListItem = await prisma.watchListItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WatchListItemCreateManyArgs>(args?: SelectSubset<T, WatchListItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WatchListItems and returns the data saved in the database.
     * @param {WatchListItemCreateManyAndReturnArgs} args - Arguments to create many WatchListItems.
     * @example
     * // Create many WatchListItems
     * const watchListItem = await prisma.watchListItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WatchListItems and only return the `id`
     * const watchListItemWithIdOnly = await prisma.watchListItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WatchListItemCreateManyAndReturnArgs>(args?: SelectSubset<T, WatchListItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchListItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WatchListItem.
     * @param {WatchListItemDeleteArgs} args - Arguments to delete one WatchListItem.
     * @example
     * // Delete one WatchListItem
     * const WatchListItem = await prisma.watchListItem.delete({
     *   where: {
     *     // ... filter to delete one WatchListItem
     *   }
     * })
     * 
     */
    delete<T extends WatchListItemDeleteArgs>(args: SelectSubset<T, WatchListItemDeleteArgs<ExtArgs>>): Prisma__WatchListItemClient<$Result.GetResult<Prisma.$WatchListItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WatchListItem.
     * @param {WatchListItemUpdateArgs} args - Arguments to update one WatchListItem.
     * @example
     * // Update one WatchListItem
     * const watchListItem = await prisma.watchListItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WatchListItemUpdateArgs>(args: SelectSubset<T, WatchListItemUpdateArgs<ExtArgs>>): Prisma__WatchListItemClient<$Result.GetResult<Prisma.$WatchListItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WatchListItems.
     * @param {WatchListItemDeleteManyArgs} args - Arguments to filter WatchListItems to delete.
     * @example
     * // Delete a few WatchListItems
     * const { count } = await prisma.watchListItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WatchListItemDeleteManyArgs>(args?: SelectSubset<T, WatchListItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WatchListItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchListItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WatchListItems
     * const watchListItem = await prisma.watchListItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WatchListItemUpdateManyArgs>(args: SelectSubset<T, WatchListItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WatchListItem.
     * @param {WatchListItemUpsertArgs} args - Arguments to update or create a WatchListItem.
     * @example
     * // Update or create a WatchListItem
     * const watchListItem = await prisma.watchListItem.upsert({
     *   create: {
     *     // ... data to create a WatchListItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WatchListItem we want to update
     *   }
     * })
     */
    upsert<T extends WatchListItemUpsertArgs>(args: SelectSubset<T, WatchListItemUpsertArgs<ExtArgs>>): Prisma__WatchListItemClient<$Result.GetResult<Prisma.$WatchListItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WatchListItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchListItemCountArgs} args - Arguments to filter WatchListItems to count.
     * @example
     * // Count the number of WatchListItems
     * const count = await prisma.watchListItem.count({
     *   where: {
     *     // ... the filter for the WatchListItems we want to count
     *   }
     * })
    **/
    count<T extends WatchListItemCountArgs>(
      args?: Subset<T, WatchListItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WatchListItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WatchListItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchListItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WatchListItemAggregateArgs>(args: Subset<T, WatchListItemAggregateArgs>): Prisma.PrismaPromise<GetWatchListItemAggregateType<T>>

    /**
     * Group by WatchListItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchListItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WatchListItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WatchListItemGroupByArgs['orderBy'] }
        : { orderBy?: WatchListItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WatchListItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWatchListItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WatchListItem model
   */
  readonly fields: WatchListItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WatchListItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WatchListItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    movie<T extends MovieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieDefaultArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WatchListItem model
   */ 
  interface WatchListItemFieldRefs {
    readonly id: FieldRef<"WatchListItem", 'String'>
    readonly userId: FieldRef<"WatchListItem", 'Int'>
    readonly movieId: FieldRef<"WatchListItem", 'Int'>
    readonly createdAt: FieldRef<"WatchListItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WatchListItem findUnique
   */
  export type WatchListItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchListItem
     */
    select?: WatchListItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListItemInclude<ExtArgs> | null
    /**
     * Filter, which WatchListItem to fetch.
     */
    where: WatchListItemWhereUniqueInput
  }

  /**
   * WatchListItem findUniqueOrThrow
   */
  export type WatchListItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchListItem
     */
    select?: WatchListItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListItemInclude<ExtArgs> | null
    /**
     * Filter, which WatchListItem to fetch.
     */
    where: WatchListItemWhereUniqueInput
  }

  /**
   * WatchListItem findFirst
   */
  export type WatchListItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchListItem
     */
    select?: WatchListItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListItemInclude<ExtArgs> | null
    /**
     * Filter, which WatchListItem to fetch.
     */
    where?: WatchListItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchListItems to fetch.
     */
    orderBy?: WatchListItemOrderByWithRelationInput | WatchListItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WatchListItems.
     */
    cursor?: WatchListItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchListItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WatchListItems.
     */
    distinct?: WatchListItemScalarFieldEnum | WatchListItemScalarFieldEnum[]
  }

  /**
   * WatchListItem findFirstOrThrow
   */
  export type WatchListItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchListItem
     */
    select?: WatchListItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListItemInclude<ExtArgs> | null
    /**
     * Filter, which WatchListItem to fetch.
     */
    where?: WatchListItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchListItems to fetch.
     */
    orderBy?: WatchListItemOrderByWithRelationInput | WatchListItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WatchListItems.
     */
    cursor?: WatchListItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchListItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WatchListItems.
     */
    distinct?: WatchListItemScalarFieldEnum | WatchListItemScalarFieldEnum[]
  }

  /**
   * WatchListItem findMany
   */
  export type WatchListItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchListItem
     */
    select?: WatchListItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListItemInclude<ExtArgs> | null
    /**
     * Filter, which WatchListItems to fetch.
     */
    where?: WatchListItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchListItems to fetch.
     */
    orderBy?: WatchListItemOrderByWithRelationInput | WatchListItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WatchListItems.
     */
    cursor?: WatchListItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchListItems.
     */
    skip?: number
    distinct?: WatchListItemScalarFieldEnum | WatchListItemScalarFieldEnum[]
  }

  /**
   * WatchListItem create
   */
  export type WatchListItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchListItem
     */
    select?: WatchListItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListItemInclude<ExtArgs> | null
    /**
     * The data needed to create a WatchListItem.
     */
    data: XOR<WatchListItemCreateInput, WatchListItemUncheckedCreateInput>
  }

  /**
   * WatchListItem createMany
   */
  export type WatchListItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WatchListItems.
     */
    data: WatchListItemCreateManyInput | WatchListItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WatchListItem createManyAndReturn
   */
  export type WatchListItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchListItem
     */
    select?: WatchListItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WatchListItems.
     */
    data: WatchListItemCreateManyInput | WatchListItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WatchListItem update
   */
  export type WatchListItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchListItem
     */
    select?: WatchListItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListItemInclude<ExtArgs> | null
    /**
     * The data needed to update a WatchListItem.
     */
    data: XOR<WatchListItemUpdateInput, WatchListItemUncheckedUpdateInput>
    /**
     * Choose, which WatchListItem to update.
     */
    where: WatchListItemWhereUniqueInput
  }

  /**
   * WatchListItem updateMany
   */
  export type WatchListItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WatchListItems.
     */
    data: XOR<WatchListItemUpdateManyMutationInput, WatchListItemUncheckedUpdateManyInput>
    /**
     * Filter which WatchListItems to update
     */
    where?: WatchListItemWhereInput
  }

  /**
   * WatchListItem upsert
   */
  export type WatchListItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchListItem
     */
    select?: WatchListItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListItemInclude<ExtArgs> | null
    /**
     * The filter to search for the WatchListItem to update in case it exists.
     */
    where: WatchListItemWhereUniqueInput
    /**
     * In case the WatchListItem found by the `where` argument doesn't exist, create a new WatchListItem with this data.
     */
    create: XOR<WatchListItemCreateInput, WatchListItemUncheckedCreateInput>
    /**
     * In case the WatchListItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WatchListItemUpdateInput, WatchListItemUncheckedUpdateInput>
  }

  /**
   * WatchListItem delete
   */
  export type WatchListItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchListItem
     */
    select?: WatchListItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListItemInclude<ExtArgs> | null
    /**
     * Filter which WatchListItem to delete.
     */
    where: WatchListItemWhereUniqueInput
  }

  /**
   * WatchListItem deleteMany
   */
  export type WatchListItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WatchListItems to delete
     */
    where?: WatchListItemWhereInput
  }

  /**
   * WatchListItem without action
   */
  export type WatchListItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchListItem
     */
    select?: WatchListItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListItemInclude<ExtArgs> | null
  }


  /**
   * Model Avatar
   */

  export type AggregateAvatar = {
    _count: AvatarCountAggregateOutputType | null
    _avg: AvatarAvgAggregateOutputType | null
    _sum: AvatarSumAggregateOutputType | null
    _min: AvatarMinAggregateOutputType | null
    _max: AvatarMaxAggregateOutputType | null
  }

  export type AvatarAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    movieId: number | null
  }

  export type AvatarSumAggregateOutputType = {
    id: number | null
    userId: number | null
    movieId: number | null
  }

  export type AvatarMinAggregateOutputType = {
    id: number | null
    url: string | null
    publicId: string | null
    userId: number | null
    movieId: number | null
    createdAt: Date | null
  }

  export type AvatarMaxAggregateOutputType = {
    id: number | null
    url: string | null
    publicId: string | null
    userId: number | null
    movieId: number | null
    createdAt: Date | null
  }

  export type AvatarCountAggregateOutputType = {
    id: number
    url: number
    publicId: number
    userId: number
    movieId: number
    createdAt: number
    _all: number
  }


  export type AvatarAvgAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
  }

  export type AvatarSumAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
  }

  export type AvatarMinAggregateInputType = {
    id?: true
    url?: true
    publicId?: true
    userId?: true
    movieId?: true
    createdAt?: true
  }

  export type AvatarMaxAggregateInputType = {
    id?: true
    url?: true
    publicId?: true
    userId?: true
    movieId?: true
    createdAt?: true
  }

  export type AvatarCountAggregateInputType = {
    id?: true
    url?: true
    publicId?: true
    userId?: true
    movieId?: true
    createdAt?: true
    _all?: true
  }

  export type AvatarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avatar to aggregate.
     */
    where?: AvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Avatars
    **/
    _count?: true | AvatarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvatarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvatarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvatarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvatarMaxAggregateInputType
  }

  export type GetAvatarAggregateType<T extends AvatarAggregateArgs> = {
        [P in keyof T & keyof AggregateAvatar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvatar[P]>
      : GetScalarType<T[P], AggregateAvatar[P]>
  }




  export type AvatarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvatarWhereInput
    orderBy?: AvatarOrderByWithAggregationInput | AvatarOrderByWithAggregationInput[]
    by: AvatarScalarFieldEnum[] | AvatarScalarFieldEnum
    having?: AvatarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvatarCountAggregateInputType | true
    _avg?: AvatarAvgAggregateInputType
    _sum?: AvatarSumAggregateInputType
    _min?: AvatarMinAggregateInputType
    _max?: AvatarMaxAggregateInputType
  }

  export type AvatarGroupByOutputType = {
    id: number
    url: string
    publicId: string
    userId: number | null
    movieId: number | null
    createdAt: Date
    _count: AvatarCountAggregateOutputType | null
    _avg: AvatarAvgAggregateOutputType | null
    _sum: AvatarSumAggregateOutputType | null
    _min: AvatarMinAggregateOutputType | null
    _max: AvatarMaxAggregateOutputType | null
  }

  type GetAvatarGroupByPayload<T extends AvatarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvatarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvatarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvatarGroupByOutputType[P]>
            : GetScalarType<T[P], AvatarGroupByOutputType[P]>
        }
      >
    >


  export type AvatarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    publicId?: boolean
    userId?: boolean
    movieId?: boolean
    createdAt?: boolean
    user?: boolean | Avatar$userArgs<ExtArgs>
  }, ExtArgs["result"]["avatar"]>

  export type AvatarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    publicId?: boolean
    userId?: boolean
    movieId?: boolean
    createdAt?: boolean
    user?: boolean | Avatar$userArgs<ExtArgs>
  }, ExtArgs["result"]["avatar"]>

  export type AvatarSelectScalar = {
    id?: boolean
    url?: boolean
    publicId?: boolean
    userId?: boolean
    movieId?: boolean
    createdAt?: boolean
  }

  export type AvatarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Avatar$userArgs<ExtArgs>
  }
  export type AvatarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Avatar$userArgs<ExtArgs>
  }

  export type $AvatarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Avatar"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      publicId: string
      userId: number | null
      movieId: number | null
      createdAt: Date
    }, ExtArgs["result"]["avatar"]>
    composites: {}
  }

  type AvatarGetPayload<S extends boolean | null | undefined | AvatarDefaultArgs> = $Result.GetResult<Prisma.$AvatarPayload, S>

  type AvatarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AvatarFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AvatarCountAggregateInputType | true
    }

  export interface AvatarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Avatar'], meta: { name: 'Avatar' } }
    /**
     * Find zero or one Avatar that matches the filter.
     * @param {AvatarFindUniqueArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvatarFindUniqueArgs>(args: SelectSubset<T, AvatarFindUniqueArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Avatar that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AvatarFindUniqueOrThrowArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvatarFindUniqueOrThrowArgs>(args: SelectSubset<T, AvatarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Avatar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarFindFirstArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvatarFindFirstArgs>(args?: SelectSubset<T, AvatarFindFirstArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Avatar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarFindFirstOrThrowArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvatarFindFirstOrThrowArgs>(args?: SelectSubset<T, AvatarFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Avatars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avatars
     * const avatars = await prisma.avatar.findMany()
     * 
     * // Get first 10 Avatars
     * const avatars = await prisma.avatar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const avatarWithIdOnly = await prisma.avatar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvatarFindManyArgs>(args?: SelectSubset<T, AvatarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Avatar.
     * @param {AvatarCreateArgs} args - Arguments to create a Avatar.
     * @example
     * // Create one Avatar
     * const Avatar = await prisma.avatar.create({
     *   data: {
     *     // ... data to create a Avatar
     *   }
     * })
     * 
     */
    create<T extends AvatarCreateArgs>(args: SelectSubset<T, AvatarCreateArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Avatars.
     * @param {AvatarCreateManyArgs} args - Arguments to create many Avatars.
     * @example
     * // Create many Avatars
     * const avatar = await prisma.avatar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvatarCreateManyArgs>(args?: SelectSubset<T, AvatarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Avatars and returns the data saved in the database.
     * @param {AvatarCreateManyAndReturnArgs} args - Arguments to create many Avatars.
     * @example
     * // Create many Avatars
     * const avatar = await prisma.avatar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Avatars and only return the `id`
     * const avatarWithIdOnly = await prisma.avatar.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvatarCreateManyAndReturnArgs>(args?: SelectSubset<T, AvatarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Avatar.
     * @param {AvatarDeleteArgs} args - Arguments to delete one Avatar.
     * @example
     * // Delete one Avatar
     * const Avatar = await prisma.avatar.delete({
     *   where: {
     *     // ... filter to delete one Avatar
     *   }
     * })
     * 
     */
    delete<T extends AvatarDeleteArgs>(args: SelectSubset<T, AvatarDeleteArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Avatar.
     * @param {AvatarUpdateArgs} args - Arguments to update one Avatar.
     * @example
     * // Update one Avatar
     * const avatar = await prisma.avatar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvatarUpdateArgs>(args: SelectSubset<T, AvatarUpdateArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Avatars.
     * @param {AvatarDeleteManyArgs} args - Arguments to filter Avatars to delete.
     * @example
     * // Delete a few Avatars
     * const { count } = await prisma.avatar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvatarDeleteManyArgs>(args?: SelectSubset<T, AvatarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avatars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avatars
     * const avatar = await prisma.avatar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvatarUpdateManyArgs>(args: SelectSubset<T, AvatarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Avatar.
     * @param {AvatarUpsertArgs} args - Arguments to update or create a Avatar.
     * @example
     * // Update or create a Avatar
     * const avatar = await prisma.avatar.upsert({
     *   create: {
     *     // ... data to create a Avatar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avatar we want to update
     *   }
     * })
     */
    upsert<T extends AvatarUpsertArgs>(args: SelectSubset<T, AvatarUpsertArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Avatars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarCountArgs} args - Arguments to filter Avatars to count.
     * @example
     * // Count the number of Avatars
     * const count = await prisma.avatar.count({
     *   where: {
     *     // ... the filter for the Avatars we want to count
     *   }
     * })
    **/
    count<T extends AvatarCountArgs>(
      args?: Subset<T, AvatarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvatarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avatar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvatarAggregateArgs>(args: Subset<T, AvatarAggregateArgs>): Prisma.PrismaPromise<GetAvatarAggregateType<T>>

    /**
     * Group by Avatar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvatarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvatarGroupByArgs['orderBy'] }
        : { orderBy?: AvatarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvatarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvatarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Avatar model
   */
  readonly fields: AvatarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Avatar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvatarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Avatar$userArgs<ExtArgs> = {}>(args?: Subset<T, Avatar$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Avatar model
   */ 
  interface AvatarFieldRefs {
    readonly id: FieldRef<"Avatar", 'Int'>
    readonly url: FieldRef<"Avatar", 'String'>
    readonly publicId: FieldRef<"Avatar", 'String'>
    readonly userId: FieldRef<"Avatar", 'Int'>
    readonly movieId: FieldRef<"Avatar", 'Int'>
    readonly createdAt: FieldRef<"Avatar", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Avatar findUnique
   */
  export type AvatarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatar to fetch.
     */
    where: AvatarWhereUniqueInput
  }

  /**
   * Avatar findUniqueOrThrow
   */
  export type AvatarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatar to fetch.
     */
    where: AvatarWhereUniqueInput
  }

  /**
   * Avatar findFirst
   */
  export type AvatarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatar to fetch.
     */
    where?: AvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avatars.
     */
    cursor?: AvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avatars.
     */
    distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[]
  }

  /**
   * Avatar findFirstOrThrow
   */
  export type AvatarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatar to fetch.
     */
    where?: AvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avatars.
     */
    cursor?: AvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avatars.
     */
    distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[]
  }

  /**
   * Avatar findMany
   */
  export type AvatarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatars to fetch.
     */
    where?: AvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Avatars.
     */
    cursor?: AvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[]
  }

  /**
   * Avatar create
   */
  export type AvatarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * The data needed to create a Avatar.
     */
    data: XOR<AvatarCreateInput, AvatarUncheckedCreateInput>
  }

  /**
   * Avatar createMany
   */
  export type AvatarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Avatars.
     */
    data: AvatarCreateManyInput | AvatarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Avatar createManyAndReturn
   */
  export type AvatarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Avatars.
     */
    data: AvatarCreateManyInput | AvatarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avatar update
   */
  export type AvatarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * The data needed to update a Avatar.
     */
    data: XOR<AvatarUpdateInput, AvatarUncheckedUpdateInput>
    /**
     * Choose, which Avatar to update.
     */
    where: AvatarWhereUniqueInput
  }

  /**
   * Avatar updateMany
   */
  export type AvatarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Avatars.
     */
    data: XOR<AvatarUpdateManyMutationInput, AvatarUncheckedUpdateManyInput>
    /**
     * Filter which Avatars to update
     */
    where?: AvatarWhereInput
  }

  /**
   * Avatar upsert
   */
  export type AvatarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * The filter to search for the Avatar to update in case it exists.
     */
    where: AvatarWhereUniqueInput
    /**
     * In case the Avatar found by the `where` argument doesn't exist, create a new Avatar with this data.
     */
    create: XOR<AvatarCreateInput, AvatarUncheckedCreateInput>
    /**
     * In case the Avatar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvatarUpdateInput, AvatarUncheckedUpdateInput>
  }

  /**
   * Avatar delete
   */
  export type AvatarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter which Avatar to delete.
     */
    where: AvatarWhereUniqueInput
  }

  /**
   * Avatar deleteMany
   */
  export type AvatarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avatars to delete
     */
    where?: AvatarWhereInput
  }

  /**
   * Avatar.user
   */
  export type Avatar$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Avatar without action
   */
  export type AvatarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
  }


  /**
   * Model GalleryImage
   */

  export type AggregateGalleryImage = {
    _count: GalleryImageCountAggregateOutputType | null
    _avg: GalleryImageAvgAggregateOutputType | null
    _sum: GalleryImageSumAggregateOutputType | null
    _min: GalleryImageMinAggregateOutputType | null
    _max: GalleryImageMaxAggregateOutputType | null
  }

  export type GalleryImageAvgAggregateOutputType = {
    id: number | null
    movieId: number | null
  }

  export type GalleryImageSumAggregateOutputType = {
    id: number | null
    movieId: number | null
  }

  export type GalleryImageMinAggregateOutputType = {
    id: number | null
    url: string | null
    publicId: string | null
    movieId: number | null
    createdAt: Date | null
  }

  export type GalleryImageMaxAggregateOutputType = {
    id: number | null
    url: string | null
    publicId: string | null
    movieId: number | null
    createdAt: Date | null
  }

  export type GalleryImageCountAggregateOutputType = {
    id: number
    url: number
    publicId: number
    movieId: number
    createdAt: number
    _all: number
  }


  export type GalleryImageAvgAggregateInputType = {
    id?: true
    movieId?: true
  }

  export type GalleryImageSumAggregateInputType = {
    id?: true
    movieId?: true
  }

  export type GalleryImageMinAggregateInputType = {
    id?: true
    url?: true
    publicId?: true
    movieId?: true
    createdAt?: true
  }

  export type GalleryImageMaxAggregateInputType = {
    id?: true
    url?: true
    publicId?: true
    movieId?: true
    createdAt?: true
  }

  export type GalleryImageCountAggregateInputType = {
    id?: true
    url?: true
    publicId?: true
    movieId?: true
    createdAt?: true
    _all?: true
  }

  export type GalleryImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryImage to aggregate.
     */
    where?: GalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryImages to fetch.
     */
    orderBy?: GalleryImageOrderByWithRelationInput | GalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GalleryImages
    **/
    _count?: true | GalleryImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GalleryImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GalleryImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GalleryImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GalleryImageMaxAggregateInputType
  }

  export type GetGalleryImageAggregateType<T extends GalleryImageAggregateArgs> = {
        [P in keyof T & keyof AggregateGalleryImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGalleryImage[P]>
      : GetScalarType<T[P], AggregateGalleryImage[P]>
  }




  export type GalleryImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryImageWhereInput
    orderBy?: GalleryImageOrderByWithAggregationInput | GalleryImageOrderByWithAggregationInput[]
    by: GalleryImageScalarFieldEnum[] | GalleryImageScalarFieldEnum
    having?: GalleryImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GalleryImageCountAggregateInputType | true
    _avg?: GalleryImageAvgAggregateInputType
    _sum?: GalleryImageSumAggregateInputType
    _min?: GalleryImageMinAggregateInputType
    _max?: GalleryImageMaxAggregateInputType
  }

  export type GalleryImageGroupByOutputType = {
    id: number
    url: string
    publicId: string
    movieId: number
    createdAt: Date
    _count: GalleryImageCountAggregateOutputType | null
    _avg: GalleryImageAvgAggregateOutputType | null
    _sum: GalleryImageSumAggregateOutputType | null
    _min: GalleryImageMinAggregateOutputType | null
    _max: GalleryImageMaxAggregateOutputType | null
  }

  type GetGalleryImageGroupByPayload<T extends GalleryImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GalleryImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GalleryImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GalleryImageGroupByOutputType[P]>
            : GetScalarType<T[P], GalleryImageGroupByOutputType[P]>
        }
      >
    >


  export type GalleryImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    publicId?: boolean
    movieId?: boolean
    createdAt?: boolean
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["galleryImage"]>

  export type GalleryImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    publicId?: boolean
    movieId?: boolean
    createdAt?: boolean
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["galleryImage"]>

  export type GalleryImageSelectScalar = {
    id?: boolean
    url?: boolean
    publicId?: boolean
    movieId?: boolean
    createdAt?: boolean
  }

  export type GalleryImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }
  export type GalleryImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }

  export type $GalleryImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GalleryImage"
    objects: {
      movie: Prisma.$MoviePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      publicId: string
      movieId: number
      createdAt: Date
    }, ExtArgs["result"]["galleryImage"]>
    composites: {}
  }

  type GalleryImageGetPayload<S extends boolean | null | undefined | GalleryImageDefaultArgs> = $Result.GetResult<Prisma.$GalleryImagePayload, S>

  type GalleryImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GalleryImageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GalleryImageCountAggregateInputType | true
    }

  export interface GalleryImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GalleryImage'], meta: { name: 'GalleryImage' } }
    /**
     * Find zero or one GalleryImage that matches the filter.
     * @param {GalleryImageFindUniqueArgs} args - Arguments to find a GalleryImage
     * @example
     * // Get one GalleryImage
     * const galleryImage = await prisma.galleryImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GalleryImageFindUniqueArgs>(args: SelectSubset<T, GalleryImageFindUniqueArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one GalleryImage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GalleryImageFindUniqueOrThrowArgs} args - Arguments to find a GalleryImage
     * @example
     * // Get one GalleryImage
     * const galleryImage = await prisma.galleryImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GalleryImageFindUniqueOrThrowArgs>(args: SelectSubset<T, GalleryImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first GalleryImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageFindFirstArgs} args - Arguments to find a GalleryImage
     * @example
     * // Get one GalleryImage
     * const galleryImage = await prisma.galleryImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GalleryImageFindFirstArgs>(args?: SelectSubset<T, GalleryImageFindFirstArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first GalleryImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageFindFirstOrThrowArgs} args - Arguments to find a GalleryImage
     * @example
     * // Get one GalleryImage
     * const galleryImage = await prisma.galleryImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GalleryImageFindFirstOrThrowArgs>(args?: SelectSubset<T, GalleryImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more GalleryImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GalleryImages
     * const galleryImages = await prisma.galleryImage.findMany()
     * 
     * // Get first 10 GalleryImages
     * const galleryImages = await prisma.galleryImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const galleryImageWithIdOnly = await prisma.galleryImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GalleryImageFindManyArgs>(args?: SelectSubset<T, GalleryImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a GalleryImage.
     * @param {GalleryImageCreateArgs} args - Arguments to create a GalleryImage.
     * @example
     * // Create one GalleryImage
     * const GalleryImage = await prisma.galleryImage.create({
     *   data: {
     *     // ... data to create a GalleryImage
     *   }
     * })
     * 
     */
    create<T extends GalleryImageCreateArgs>(args: SelectSubset<T, GalleryImageCreateArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many GalleryImages.
     * @param {GalleryImageCreateManyArgs} args - Arguments to create many GalleryImages.
     * @example
     * // Create many GalleryImages
     * const galleryImage = await prisma.galleryImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GalleryImageCreateManyArgs>(args?: SelectSubset<T, GalleryImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GalleryImages and returns the data saved in the database.
     * @param {GalleryImageCreateManyAndReturnArgs} args - Arguments to create many GalleryImages.
     * @example
     * // Create many GalleryImages
     * const galleryImage = await prisma.galleryImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GalleryImages and only return the `id`
     * const galleryImageWithIdOnly = await prisma.galleryImage.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GalleryImageCreateManyAndReturnArgs>(args?: SelectSubset<T, GalleryImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a GalleryImage.
     * @param {GalleryImageDeleteArgs} args - Arguments to delete one GalleryImage.
     * @example
     * // Delete one GalleryImage
     * const GalleryImage = await prisma.galleryImage.delete({
     *   where: {
     *     // ... filter to delete one GalleryImage
     *   }
     * })
     * 
     */
    delete<T extends GalleryImageDeleteArgs>(args: SelectSubset<T, GalleryImageDeleteArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one GalleryImage.
     * @param {GalleryImageUpdateArgs} args - Arguments to update one GalleryImage.
     * @example
     * // Update one GalleryImage
     * const galleryImage = await prisma.galleryImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GalleryImageUpdateArgs>(args: SelectSubset<T, GalleryImageUpdateArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more GalleryImages.
     * @param {GalleryImageDeleteManyArgs} args - Arguments to filter GalleryImages to delete.
     * @example
     * // Delete a few GalleryImages
     * const { count } = await prisma.galleryImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GalleryImageDeleteManyArgs>(args?: SelectSubset<T, GalleryImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GalleryImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GalleryImages
     * const galleryImage = await prisma.galleryImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GalleryImageUpdateManyArgs>(args: SelectSubset<T, GalleryImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GalleryImage.
     * @param {GalleryImageUpsertArgs} args - Arguments to update or create a GalleryImage.
     * @example
     * // Update or create a GalleryImage
     * const galleryImage = await prisma.galleryImage.upsert({
     *   create: {
     *     // ... data to create a GalleryImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GalleryImage we want to update
     *   }
     * })
     */
    upsert<T extends GalleryImageUpsertArgs>(args: SelectSubset<T, GalleryImageUpsertArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of GalleryImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageCountArgs} args - Arguments to filter GalleryImages to count.
     * @example
     * // Count the number of GalleryImages
     * const count = await prisma.galleryImage.count({
     *   where: {
     *     // ... the filter for the GalleryImages we want to count
     *   }
     * })
    **/
    count<T extends GalleryImageCountArgs>(
      args?: Subset<T, GalleryImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GalleryImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GalleryImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GalleryImageAggregateArgs>(args: Subset<T, GalleryImageAggregateArgs>): Prisma.PrismaPromise<GetGalleryImageAggregateType<T>>

    /**
     * Group by GalleryImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GalleryImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GalleryImageGroupByArgs['orderBy'] }
        : { orderBy?: GalleryImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GalleryImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGalleryImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GalleryImage model
   */
  readonly fields: GalleryImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GalleryImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GalleryImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movie<T extends MovieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieDefaultArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GalleryImage model
   */ 
  interface GalleryImageFieldRefs {
    readonly id: FieldRef<"GalleryImage", 'Int'>
    readonly url: FieldRef<"GalleryImage", 'String'>
    readonly publicId: FieldRef<"GalleryImage", 'String'>
    readonly movieId: FieldRef<"GalleryImage", 'Int'>
    readonly createdAt: FieldRef<"GalleryImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GalleryImage findUnique
   */
  export type GalleryImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * Filter, which GalleryImage to fetch.
     */
    where: GalleryImageWhereUniqueInput
  }

  /**
   * GalleryImage findUniqueOrThrow
   */
  export type GalleryImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * Filter, which GalleryImage to fetch.
     */
    where: GalleryImageWhereUniqueInput
  }

  /**
   * GalleryImage findFirst
   */
  export type GalleryImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * Filter, which GalleryImage to fetch.
     */
    where?: GalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryImages to fetch.
     */
    orderBy?: GalleryImageOrderByWithRelationInput | GalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryImages.
     */
    cursor?: GalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryImages.
     */
    distinct?: GalleryImageScalarFieldEnum | GalleryImageScalarFieldEnum[]
  }

  /**
   * GalleryImage findFirstOrThrow
   */
  export type GalleryImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * Filter, which GalleryImage to fetch.
     */
    where?: GalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryImages to fetch.
     */
    orderBy?: GalleryImageOrderByWithRelationInput | GalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryImages.
     */
    cursor?: GalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryImages.
     */
    distinct?: GalleryImageScalarFieldEnum | GalleryImageScalarFieldEnum[]
  }

  /**
   * GalleryImage findMany
   */
  export type GalleryImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * Filter, which GalleryImages to fetch.
     */
    where?: GalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryImages to fetch.
     */
    orderBy?: GalleryImageOrderByWithRelationInput | GalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GalleryImages.
     */
    cursor?: GalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryImages.
     */
    skip?: number
    distinct?: GalleryImageScalarFieldEnum | GalleryImageScalarFieldEnum[]
  }

  /**
   * GalleryImage create
   */
  export type GalleryImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * The data needed to create a GalleryImage.
     */
    data: XOR<GalleryImageCreateInput, GalleryImageUncheckedCreateInput>
  }

  /**
   * GalleryImage createMany
   */
  export type GalleryImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GalleryImages.
     */
    data: GalleryImageCreateManyInput | GalleryImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GalleryImage createManyAndReturn
   */
  export type GalleryImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many GalleryImages.
     */
    data: GalleryImageCreateManyInput | GalleryImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GalleryImage update
   */
  export type GalleryImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * The data needed to update a GalleryImage.
     */
    data: XOR<GalleryImageUpdateInput, GalleryImageUncheckedUpdateInput>
    /**
     * Choose, which GalleryImage to update.
     */
    where: GalleryImageWhereUniqueInput
  }

  /**
   * GalleryImage updateMany
   */
  export type GalleryImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GalleryImages.
     */
    data: XOR<GalleryImageUpdateManyMutationInput, GalleryImageUncheckedUpdateManyInput>
    /**
     * Filter which GalleryImages to update
     */
    where?: GalleryImageWhereInput
  }

  /**
   * GalleryImage upsert
   */
  export type GalleryImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * The filter to search for the GalleryImage to update in case it exists.
     */
    where: GalleryImageWhereUniqueInput
    /**
     * In case the GalleryImage found by the `where` argument doesn't exist, create a new GalleryImage with this data.
     */
    create: XOR<GalleryImageCreateInput, GalleryImageUncheckedCreateInput>
    /**
     * In case the GalleryImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GalleryImageUpdateInput, GalleryImageUncheckedUpdateInput>
  }

  /**
   * GalleryImage delete
   */
  export type GalleryImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * Filter which GalleryImage to delete.
     */
    where: GalleryImageWhereUniqueInput
  }

  /**
   * GalleryImage deleteMany
   */
  export type GalleryImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryImages to delete
     */
    where?: GalleryImageWhereInput
  }

  /**
   * GalleryImage without action
   */
  export type GalleryImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    movieId: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    userId: number | null
    movieId: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    userId: number | null
    movieId: number | null
    text: string | null
    feedback: $Enums.Recommended | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    movieId: number | null
    text: string | null
    feedback: $Enums.Recommended | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    userId: number
    movieId: number
    text: number
    feedback: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    text?: true
    feedback?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    text?: true
    feedback?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    text?: true
    feedback?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    userId: number
    movieId: number
    text: string
    feedback: $Enums.Recommended
    createdAt: Date
    updatedAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieId?: boolean
    text?: boolean
    feedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieId?: boolean
    text?: boolean
    feedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    userId?: boolean
    movieId?: boolean
    text?: boolean
    feedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      movie: Prisma.$MoviePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      movieId: number
      text: string
      feedback: $Enums.Recommended
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movie<T extends MovieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieDefaultArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */ 
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly userId: FieldRef<"Review", 'Int'>
    readonly movieId: FieldRef<"Review", 'Int'>
    readonly text: FieldRef<"Review", 'String'>
    readonly feedback: FieldRef<"Review", 'Recommended'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    payment: 'payment',
    role: 'role',
    refreshToken: 'refreshToken',
    profileViews: 'profileViews',
    password: 'password',
    isEmailVerified: 'isEmailVerified',
    blocked: 'blocked',
    provider: 'provider',
    providerId: 'providerId',
    googleId: 'googleId',
    githubId: 'githubId',
    discordId: 'discordId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProfileVisitScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    ipHash: 'ipHash',
    viewCount: 'viewCount',
    visitDate: 'visitDate',
    updatedAt: 'updatedAt'
  };

  export type ProfileVisitScalarFieldEnum = (typeof ProfileVisitScalarFieldEnum)[keyof typeof ProfileVisitScalarFieldEnum]


  export const MovieScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    slug: 'slug',
    year: 'year',
    category: 'category',
    published: 'published',
    authorId: 'authorId',
    rating: 'rating',
    avgRating: 'avgRating',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MovieScalarFieldEnum = (typeof MovieScalarFieldEnum)[keyof typeof MovieScalarFieldEnum]


  export const FeedbackScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum]


  export const VerifyResetTokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerifyResetTokenScalarFieldEnum = (typeof VerifyResetTokenScalarFieldEnum)[keyof typeof VerifyResetTokenScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    movieId: 'movieId',
    body: 'body',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const LikeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    movieId: 'movieId',
    createdAt: 'createdAt'
  };

  export type LikeScalarFieldEnum = (typeof LikeScalarFieldEnum)[keyof typeof LikeScalarFieldEnum]


  export const ChatScalarFieldEnum: {
    id: 'id',
    title: 'title',
    isGroup: 'isGroup',
    createdAt: 'createdAt'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const ChatUserScalarFieldEnum: {
    id: 'id',
    chatId: 'chatId',
    userId: 'userId',
    joinedAt: 'joinedAt'
  };

  export type ChatUserScalarFieldEnum = (typeof ChatUserScalarFieldEnum)[keyof typeof ChatUserScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    chatId: 'chatId',
    userId: 'userId',
    body: 'body',
    createdAt: 'createdAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    provider: 'provider',
    providerId: 'providerId',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const WatchListItemScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    movieId: 'movieId',
    createdAt: 'createdAt'
  };

  export type WatchListItemScalarFieldEnum = (typeof WatchListItemScalarFieldEnum)[keyof typeof WatchListItemScalarFieldEnum]


  export const AvatarScalarFieldEnum: {
    id: 'id',
    url: 'url',
    publicId: 'publicId',
    userId: 'userId',
    movieId: 'movieId',
    createdAt: 'createdAt'
  };

  export type AvatarScalarFieldEnum = (typeof AvatarScalarFieldEnum)[keyof typeof AvatarScalarFieldEnum]


  export const GalleryImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    publicId: 'publicId',
    movieId: 'movieId',
    createdAt: 'createdAt'
  };

  export type GalleryImageScalarFieldEnum = (typeof GalleryImageScalarFieldEnum)[keyof typeof GalleryImageScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    movieId: 'movieId',
    text: 'text',
    feedback: 'feedback',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Recommended'
   */
  export type EnumRecommendedFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Recommended'>
    


  /**
   * Reference to a field of type 'Recommended[]'
   */
  export type ListEnumRecommendedFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Recommended[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    payment?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    refreshToken?: StringNullableListFilter<"User">
    profileViews?: IntFilter<"User"> | number
    password?: StringFilter<"User"> | string
    isEmailVerified?: BoolNullableFilter<"User"> | boolean | null
    blocked?: BoolFilter<"User"> | boolean
    provider?: StringNullableFilter<"User"> | string | null
    providerId?: StringNullableFilter<"User"> | string | null
    googleId?: StringNullableFilter<"User"> | string | null
    githubId?: StringNullableFilter<"User"> | string | null
    discordId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    token?: XOR<VerifyResetTokenNullableRelationFilter, VerifyResetTokenWhereInput> | null
    avatar?: XOR<AvatarNullableRelationFilter, AvatarWhereInput> | null
    visits?: ProfileVisitListRelationFilter
    movies?: MovieListRelationFilter
    likes?: LikeListRelationFilter
    comments?: CommentListRelationFilter
    orders?: OrderListRelationFilter
    chats?: ChatUserListRelationFilter
    messages?: MessageListRelationFilter
    watchList?: WatchListItemListRelationFilter
    review?: XOR<ReviewNullableRelationFilter, ReviewWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    payment?: SortOrderInput | SortOrder
    role?: SortOrder
    refreshToken?: SortOrder
    profileViews?: SortOrder
    password?: SortOrder
    isEmailVerified?: SortOrderInput | SortOrder
    blocked?: SortOrder
    provider?: SortOrderInput | SortOrder
    providerId?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    githubId?: SortOrderInput | SortOrder
    discordId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    token?: VerifyResetTokenOrderByWithRelationInput
    avatar?: AvatarOrderByWithRelationInput
    visits?: ProfileVisitOrderByRelationAggregateInput
    movies?: MovieOrderByRelationAggregateInput
    likes?: LikeOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    chats?: ChatUserOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
    watchList?: WatchListItemOrderByRelationAggregateInput
    review?: ReviewOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    googleId?: string
    githubId?: string
    discordId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    payment?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    refreshToken?: StringNullableListFilter<"User">
    profileViews?: IntFilter<"User"> | number
    password?: StringFilter<"User"> | string
    isEmailVerified?: BoolNullableFilter<"User"> | boolean | null
    blocked?: BoolFilter<"User"> | boolean
    provider?: StringNullableFilter<"User"> | string | null
    providerId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    token?: XOR<VerifyResetTokenNullableRelationFilter, VerifyResetTokenWhereInput> | null
    avatar?: XOR<AvatarNullableRelationFilter, AvatarWhereInput> | null
    visits?: ProfileVisitListRelationFilter
    movies?: MovieListRelationFilter
    likes?: LikeListRelationFilter
    comments?: CommentListRelationFilter
    orders?: OrderListRelationFilter
    chats?: ChatUserListRelationFilter
    messages?: MessageListRelationFilter
    watchList?: WatchListItemListRelationFilter
    review?: XOR<ReviewNullableRelationFilter, ReviewWhereInput> | null
  }, "id" | "username" | "email" | "googleId" | "githubId" | "discordId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    payment?: SortOrderInput | SortOrder
    role?: SortOrder
    refreshToken?: SortOrder
    profileViews?: SortOrder
    password?: SortOrder
    isEmailVerified?: SortOrderInput | SortOrder
    blocked?: SortOrder
    provider?: SortOrderInput | SortOrder
    providerId?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    githubId?: SortOrderInput | SortOrder
    discordId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    payment?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    refreshToken?: StringNullableListFilter<"User">
    profileViews?: IntWithAggregatesFilter<"User"> | number
    password?: StringWithAggregatesFilter<"User"> | string
    isEmailVerified?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    blocked?: BoolWithAggregatesFilter<"User"> | boolean
    provider?: StringNullableWithAggregatesFilter<"User"> | string | null
    providerId?: StringNullableWithAggregatesFilter<"User"> | string | null
    googleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    githubId?: StringNullableWithAggregatesFilter<"User"> | string | null
    discordId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProfileVisitWhereInput = {
    AND?: ProfileVisitWhereInput | ProfileVisitWhereInput[]
    OR?: ProfileVisitWhereInput[]
    NOT?: ProfileVisitWhereInput | ProfileVisitWhereInput[]
    id?: IntFilter<"ProfileVisit"> | number
    userId?: IntFilter<"ProfileVisit"> | number
    ipHash?: StringFilter<"ProfileVisit"> | string
    viewCount?: IntFilter<"ProfileVisit"> | number
    visitDate?: DateTimeFilter<"ProfileVisit"> | Date | string
    updatedAt?: DateTimeFilter<"ProfileVisit"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ProfileVisitOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    ipHash?: SortOrder
    viewCount?: SortOrder
    visitDate?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProfileVisitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_ipHash_visitDate?: ProfileVisitUserIdIpHashVisitDateCompoundUniqueInput
    AND?: ProfileVisitWhereInput | ProfileVisitWhereInput[]
    OR?: ProfileVisitWhereInput[]
    NOT?: ProfileVisitWhereInput | ProfileVisitWhereInput[]
    userId?: IntFilter<"ProfileVisit"> | number
    ipHash?: StringFilter<"ProfileVisit"> | string
    viewCount?: IntFilter<"ProfileVisit"> | number
    visitDate?: DateTimeFilter<"ProfileVisit"> | Date | string
    updatedAt?: DateTimeFilter<"ProfileVisit"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId_ipHash_visitDate">

  export type ProfileVisitOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    ipHash?: SortOrder
    viewCount?: SortOrder
    visitDate?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfileVisitCountOrderByAggregateInput
    _avg?: ProfileVisitAvgOrderByAggregateInput
    _max?: ProfileVisitMaxOrderByAggregateInput
    _min?: ProfileVisitMinOrderByAggregateInput
    _sum?: ProfileVisitSumOrderByAggregateInput
  }

  export type ProfileVisitScalarWhereWithAggregatesInput = {
    AND?: ProfileVisitScalarWhereWithAggregatesInput | ProfileVisitScalarWhereWithAggregatesInput[]
    OR?: ProfileVisitScalarWhereWithAggregatesInput[]
    NOT?: ProfileVisitScalarWhereWithAggregatesInput | ProfileVisitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProfileVisit"> | number
    userId?: IntWithAggregatesFilter<"ProfileVisit"> | number
    ipHash?: StringWithAggregatesFilter<"ProfileVisit"> | string
    viewCount?: IntWithAggregatesFilter<"ProfileVisit"> | number
    visitDate?: DateTimeWithAggregatesFilter<"ProfileVisit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProfileVisit"> | Date | string
  }

  export type MovieWhereInput = {
    AND?: MovieWhereInput | MovieWhereInput[]
    OR?: MovieWhereInput[]
    NOT?: MovieWhereInput | MovieWhereInput[]
    id?: IntFilter<"Movie"> | number
    title?: StringFilter<"Movie"> | string
    description?: StringNullableFilter<"Movie"> | string | null
    slug?: StringFilter<"Movie"> | string
    year?: IntNullableFilter<"Movie"> | number | null
    category?: StringNullableListFilter<"Movie">
    published?: BoolFilter<"Movie"> | boolean
    authorId?: IntFilter<"Movie"> | number
    rating?: IntNullableFilter<"Movie"> | number | null
    avgRating?: FloatFilter<"Movie"> | number
    createdAt?: DateTimeFilter<"Movie"> | Date | string
    updatedAt?: DateTimeFilter<"Movie"> | Date | string
    author?: XOR<UserRelationFilter, UserWhereInput>
    galleryImages?: GalleryImageListRelationFilter
    comments?: CommentListRelationFilter
    likes?: LikeListRelationFilter
    watchList?: WatchListItemListRelationFilter
    review?: ReviewListRelationFilter
  }

  export type MovieOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    slug?: SortOrder
    year?: SortOrderInput | SortOrder
    category?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
    rating?: SortOrderInput | SortOrder
    avgRating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: UserOrderByWithRelationInput
    galleryImages?: GalleryImageOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    likes?: LikeOrderByRelationAggregateInput
    watchList?: WatchListItemOrderByRelationAggregateInput
    review?: ReviewOrderByRelationAggregateInput
  }

  export type MovieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: MovieWhereInput | MovieWhereInput[]
    OR?: MovieWhereInput[]
    NOT?: MovieWhereInput | MovieWhereInput[]
    title?: StringFilter<"Movie"> | string
    description?: StringNullableFilter<"Movie"> | string | null
    year?: IntNullableFilter<"Movie"> | number | null
    category?: StringNullableListFilter<"Movie">
    published?: BoolFilter<"Movie"> | boolean
    authorId?: IntFilter<"Movie"> | number
    rating?: IntNullableFilter<"Movie"> | number | null
    avgRating?: FloatFilter<"Movie"> | number
    createdAt?: DateTimeFilter<"Movie"> | Date | string
    updatedAt?: DateTimeFilter<"Movie"> | Date | string
    author?: XOR<UserRelationFilter, UserWhereInput>
    galleryImages?: GalleryImageListRelationFilter
    comments?: CommentListRelationFilter
    likes?: LikeListRelationFilter
    watchList?: WatchListItemListRelationFilter
    review?: ReviewListRelationFilter
  }, "id" | "slug">

  export type MovieOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    slug?: SortOrder
    year?: SortOrderInput | SortOrder
    category?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
    rating?: SortOrderInput | SortOrder
    avgRating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MovieCountOrderByAggregateInput
    _avg?: MovieAvgOrderByAggregateInput
    _max?: MovieMaxOrderByAggregateInput
    _min?: MovieMinOrderByAggregateInput
    _sum?: MovieSumOrderByAggregateInput
  }

  export type MovieScalarWhereWithAggregatesInput = {
    AND?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[]
    OR?: MovieScalarWhereWithAggregatesInput[]
    NOT?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Movie"> | number
    title?: StringWithAggregatesFilter<"Movie"> | string
    description?: StringNullableWithAggregatesFilter<"Movie"> | string | null
    slug?: StringWithAggregatesFilter<"Movie"> | string
    year?: IntNullableWithAggregatesFilter<"Movie"> | number | null
    category?: StringNullableListFilter<"Movie">
    published?: BoolWithAggregatesFilter<"Movie"> | boolean
    authorId?: IntWithAggregatesFilter<"Movie"> | number
    rating?: IntNullableWithAggregatesFilter<"Movie"> | number | null
    avgRating?: FloatWithAggregatesFilter<"Movie"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Movie"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Movie"> | Date | string
  }

  export type FeedbackWhereInput = {
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    id?: IntFilter<"Feedback"> | number
    email?: StringFilter<"Feedback"> | string
    username?: StringFilter<"Feedback"> | string
    message?: StringFilter<"Feedback"> | string
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
  }

  export type FeedbackOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    email?: StringFilter<"Feedback"> | string
    username?: StringFilter<"Feedback"> | string
    message?: StringFilter<"Feedback"> | string
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
  }, "id">

  export type FeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    _count?: FeedbackCountOrderByAggregateInput
    _avg?: FeedbackAvgOrderByAggregateInput
    _max?: FeedbackMaxOrderByAggregateInput
    _min?: FeedbackMinOrderByAggregateInput
    _sum?: FeedbackSumOrderByAggregateInput
  }

  export type FeedbackScalarWhereWithAggregatesInput = {
    AND?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    OR?: FeedbackScalarWhereWithAggregatesInput[]
    NOT?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Feedback"> | number
    email?: StringWithAggregatesFilter<"Feedback"> | string
    username?: StringWithAggregatesFilter<"Feedback"> | string
    message?: StringWithAggregatesFilter<"Feedback"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Feedback"> | Date | string
  }

  export type VerifyResetTokenWhereInput = {
    AND?: VerifyResetTokenWhereInput | VerifyResetTokenWhereInput[]
    OR?: VerifyResetTokenWhereInput[]
    NOT?: VerifyResetTokenWhereInput | VerifyResetTokenWhereInput[]
    id?: IntFilter<"VerifyResetToken"> | number
    userId?: IntFilter<"VerifyResetToken"> | number
    token?: StringFilter<"VerifyResetToken"> | string
    expiresAt?: DateTimeFilter<"VerifyResetToken"> | Date | string
    createdAt?: DateTimeFilter<"VerifyResetToken"> | Date | string
    updatedAt?: DateTimeFilter<"VerifyResetToken"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type VerifyResetTokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type VerifyResetTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    userId_token?: VerifyResetTokenUserIdTokenCompoundUniqueInput
    AND?: VerifyResetTokenWhereInput | VerifyResetTokenWhereInput[]
    OR?: VerifyResetTokenWhereInput[]
    NOT?: VerifyResetTokenWhereInput | VerifyResetTokenWhereInput[]
    token?: StringFilter<"VerifyResetToken"> | string
    expiresAt?: DateTimeFilter<"VerifyResetToken"> | Date | string
    createdAt?: DateTimeFilter<"VerifyResetToken"> | Date | string
    updatedAt?: DateTimeFilter<"VerifyResetToken"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId" | "userId_token">

  export type VerifyResetTokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VerifyResetTokenCountOrderByAggregateInput
    _avg?: VerifyResetTokenAvgOrderByAggregateInput
    _max?: VerifyResetTokenMaxOrderByAggregateInput
    _min?: VerifyResetTokenMinOrderByAggregateInput
    _sum?: VerifyResetTokenSumOrderByAggregateInput
  }

  export type VerifyResetTokenScalarWhereWithAggregatesInput = {
    AND?: VerifyResetTokenScalarWhereWithAggregatesInput | VerifyResetTokenScalarWhereWithAggregatesInput[]
    OR?: VerifyResetTokenScalarWhereWithAggregatesInput[]
    NOT?: VerifyResetTokenScalarWhereWithAggregatesInput | VerifyResetTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VerifyResetToken"> | number
    userId?: IntWithAggregatesFilter<"VerifyResetToken"> | number
    token?: StringWithAggregatesFilter<"VerifyResetToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"VerifyResetToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"VerifyResetToken"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VerifyResetToken"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: IntFilter<"Comment"> | number
    userId?: IntFilter<"Comment"> | number
    movieId?: IntFilter<"Comment"> | number
    body?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    movie?: XOR<MovieRelationFilter, MovieWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    movie?: MovieOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    userId?: IntFilter<"Comment"> | number
    movieId?: IntFilter<"Comment"> | number
    body?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    movie?: XOR<MovieRelationFilter, MovieWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comment"> | number
    userId?: IntWithAggregatesFilter<"Comment"> | number
    movieId?: IntWithAggregatesFilter<"Comment"> | number
    body?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type LikeWhereInput = {
    AND?: LikeWhereInput | LikeWhereInput[]
    OR?: LikeWhereInput[]
    NOT?: LikeWhereInput | LikeWhereInput[]
    id?: IntFilter<"Like"> | number
    userId?: IntFilter<"Like"> | number
    movieId?: IntFilter<"Like"> | number
    createdAt?: DateTimeFilter<"Like"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    movie?: XOR<MovieRelationFilter, MovieWhereInput>
  }

  export type LikeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    movie?: MovieOrderByWithRelationInput
  }

  export type LikeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_movieId?: LikeUserIdMovieIdCompoundUniqueInput
    AND?: LikeWhereInput | LikeWhereInput[]
    OR?: LikeWhereInput[]
    NOT?: LikeWhereInput | LikeWhereInput[]
    userId?: IntFilter<"Like"> | number
    movieId?: IntFilter<"Like"> | number
    createdAt?: DateTimeFilter<"Like"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    movie?: XOR<MovieRelationFilter, MovieWhereInput>
  }, "id" | "userId_movieId">

  export type LikeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    createdAt?: SortOrder
    _count?: LikeCountOrderByAggregateInput
    _avg?: LikeAvgOrderByAggregateInput
    _max?: LikeMaxOrderByAggregateInput
    _min?: LikeMinOrderByAggregateInput
    _sum?: LikeSumOrderByAggregateInput
  }

  export type LikeScalarWhereWithAggregatesInput = {
    AND?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
    OR?: LikeScalarWhereWithAggregatesInput[]
    NOT?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Like"> | number
    userId?: IntWithAggregatesFilter<"Like"> | number
    movieId?: IntWithAggregatesFilter<"Like"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Like"> | Date | string
  }

  export type ChatWhereInput = {
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    id?: IntFilter<"Chat"> | number
    title?: StringNullableFilter<"Chat"> | string | null
    isGroup?: BoolFilter<"Chat"> | boolean
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    users?: ChatUserListRelationFilter
    messages?: MessageListRelationFilter
  }

  export type ChatOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    isGroup?: SortOrder
    createdAt?: SortOrder
    users?: ChatUserOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type ChatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    title?: StringNullableFilter<"Chat"> | string | null
    isGroup?: BoolFilter<"Chat"> | boolean
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    users?: ChatUserListRelationFilter
    messages?: MessageListRelationFilter
  }, "id">

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    isGroup?: SortOrder
    createdAt?: SortOrder
    _count?: ChatCountOrderByAggregateInput
    _avg?: ChatAvgOrderByAggregateInput
    _max?: ChatMaxOrderByAggregateInput
    _min?: ChatMinOrderByAggregateInput
    _sum?: ChatSumOrderByAggregateInput
  }

  export type ChatScalarWhereWithAggregatesInput = {
    AND?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    OR?: ChatScalarWhereWithAggregatesInput[]
    NOT?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Chat"> | number
    title?: StringNullableWithAggregatesFilter<"Chat"> | string | null
    isGroup?: BoolWithAggregatesFilter<"Chat"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
  }

  export type ChatUserWhereInput = {
    AND?: ChatUserWhereInput | ChatUserWhereInput[]
    OR?: ChatUserWhereInput[]
    NOT?: ChatUserWhereInput | ChatUserWhereInput[]
    id?: IntFilter<"ChatUser"> | number
    chatId?: IntFilter<"ChatUser"> | number
    userId?: IntFilter<"ChatUser"> | number
    joinedAt?: DateTimeFilter<"ChatUser"> | Date | string
    chat?: XOR<ChatRelationFilter, ChatWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ChatUserOrderByWithRelationInput = {
    id?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    chat?: ChatOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ChatUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    chatId_userId?: ChatUserChatIdUserIdCompoundUniqueInput
    AND?: ChatUserWhereInput | ChatUserWhereInput[]
    OR?: ChatUserWhereInput[]
    NOT?: ChatUserWhereInput | ChatUserWhereInput[]
    chatId?: IntFilter<"ChatUser"> | number
    userId?: IntFilter<"ChatUser"> | number
    joinedAt?: DateTimeFilter<"ChatUser"> | Date | string
    chat?: XOR<ChatRelationFilter, ChatWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "chatId_userId">

  export type ChatUserOrderByWithAggregationInput = {
    id?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    _count?: ChatUserCountOrderByAggregateInput
    _avg?: ChatUserAvgOrderByAggregateInput
    _max?: ChatUserMaxOrderByAggregateInput
    _min?: ChatUserMinOrderByAggregateInput
    _sum?: ChatUserSumOrderByAggregateInput
  }

  export type ChatUserScalarWhereWithAggregatesInput = {
    AND?: ChatUserScalarWhereWithAggregatesInput | ChatUserScalarWhereWithAggregatesInput[]
    OR?: ChatUserScalarWhereWithAggregatesInput[]
    NOT?: ChatUserScalarWhereWithAggregatesInput | ChatUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatUser"> | number
    chatId?: IntWithAggregatesFilter<"ChatUser"> | number
    userId?: IntWithAggregatesFilter<"ChatUser"> | number
    joinedAt?: DateTimeWithAggregatesFilter<"ChatUser"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: IntFilter<"Message"> | number
    chatId?: IntFilter<"Message"> | number
    userId?: IntFilter<"Message"> | number
    body?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    chat?: XOR<ChatRelationFilter, ChatWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    chat?: ChatOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    chatId?: IntFilter<"Message"> | number
    userId?: IntFilter<"Message"> | number
    body?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    chat?: XOR<ChatRelationFilter, ChatWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Message"> | number
    chatId?: IntWithAggregatesFilter<"Message"> | number
    userId?: IntWithAggregatesFilter<"Message"> | number
    body?: StringWithAggregatesFilter<"Message"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    userId?: IntFilter<"Order"> | number
    provider?: StringFilter<"Order"> | string
    providerId?: StringNullableFilter<"Order"> | string | null
    amount?: FloatFilter<"Order"> | number
    currency?: StringFilter<"Order"> | string
    status?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerId?: SortOrderInput | SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    userId?: IntFilter<"Order"> | number
    provider?: StringFilter<"Order"> | string
    providerId?: StringNullableFilter<"Order"> | string | null
    amount?: FloatFilter<"Order"> | number
    currency?: StringFilter<"Order"> | string
    status?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerId?: SortOrderInput | SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    userId?: IntWithAggregatesFilter<"Order"> | number
    provider?: StringWithAggregatesFilter<"Order"> | string
    providerId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    amount?: FloatWithAggregatesFilter<"Order"> | number
    currency?: StringWithAggregatesFilter<"Order"> | string
    status?: StringWithAggregatesFilter<"Order"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type WatchListItemWhereInput = {
    AND?: WatchListItemWhereInput | WatchListItemWhereInput[]
    OR?: WatchListItemWhereInput[]
    NOT?: WatchListItemWhereInput | WatchListItemWhereInput[]
    id?: StringFilter<"WatchListItem"> | string
    userId?: IntFilter<"WatchListItem"> | number
    movieId?: IntFilter<"WatchListItem"> | number
    createdAt?: DateTimeFilter<"WatchListItem"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    movie?: XOR<MovieRelationFilter, MovieWhereInput>
  }

  export type WatchListItemOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    movie?: MovieOrderByWithRelationInput
  }

  export type WatchListItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_movieId?: WatchListItemUserIdMovieIdCompoundUniqueInput
    AND?: WatchListItemWhereInput | WatchListItemWhereInput[]
    OR?: WatchListItemWhereInput[]
    NOT?: WatchListItemWhereInput | WatchListItemWhereInput[]
    userId?: IntFilter<"WatchListItem"> | number
    movieId?: IntFilter<"WatchListItem"> | number
    createdAt?: DateTimeFilter<"WatchListItem"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    movie?: XOR<MovieRelationFilter, MovieWhereInput>
  }, "id" | "userId_movieId">

  export type WatchListItemOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    createdAt?: SortOrder
    _count?: WatchListItemCountOrderByAggregateInput
    _avg?: WatchListItemAvgOrderByAggregateInput
    _max?: WatchListItemMaxOrderByAggregateInput
    _min?: WatchListItemMinOrderByAggregateInput
    _sum?: WatchListItemSumOrderByAggregateInput
  }

  export type WatchListItemScalarWhereWithAggregatesInput = {
    AND?: WatchListItemScalarWhereWithAggregatesInput | WatchListItemScalarWhereWithAggregatesInput[]
    OR?: WatchListItemScalarWhereWithAggregatesInput[]
    NOT?: WatchListItemScalarWhereWithAggregatesInput | WatchListItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WatchListItem"> | string
    userId?: IntWithAggregatesFilter<"WatchListItem"> | number
    movieId?: IntWithAggregatesFilter<"WatchListItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"WatchListItem"> | Date | string
  }

  export type AvatarWhereInput = {
    AND?: AvatarWhereInput | AvatarWhereInput[]
    OR?: AvatarWhereInput[]
    NOT?: AvatarWhereInput | AvatarWhereInput[]
    id?: IntFilter<"Avatar"> | number
    url?: StringFilter<"Avatar"> | string
    publicId?: StringFilter<"Avatar"> | string
    userId?: IntNullableFilter<"Avatar"> | number | null
    movieId?: IntNullableFilter<"Avatar"> | number | null
    createdAt?: DateTimeFilter<"Avatar"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type AvatarOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    userId?: SortOrderInput | SortOrder
    movieId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AvatarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    movieId?: number
    AND?: AvatarWhereInput | AvatarWhereInput[]
    OR?: AvatarWhereInput[]
    NOT?: AvatarWhereInput | AvatarWhereInput[]
    url?: StringFilter<"Avatar"> | string
    publicId?: StringFilter<"Avatar"> | string
    createdAt?: DateTimeFilter<"Avatar"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id" | "userId" | "movieId">

  export type AvatarOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    userId?: SortOrderInput | SortOrder
    movieId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AvatarCountOrderByAggregateInput
    _avg?: AvatarAvgOrderByAggregateInput
    _max?: AvatarMaxOrderByAggregateInput
    _min?: AvatarMinOrderByAggregateInput
    _sum?: AvatarSumOrderByAggregateInput
  }

  export type AvatarScalarWhereWithAggregatesInput = {
    AND?: AvatarScalarWhereWithAggregatesInput | AvatarScalarWhereWithAggregatesInput[]
    OR?: AvatarScalarWhereWithAggregatesInput[]
    NOT?: AvatarScalarWhereWithAggregatesInput | AvatarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Avatar"> | number
    url?: StringWithAggregatesFilter<"Avatar"> | string
    publicId?: StringWithAggregatesFilter<"Avatar"> | string
    userId?: IntNullableWithAggregatesFilter<"Avatar"> | number | null
    movieId?: IntNullableWithAggregatesFilter<"Avatar"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Avatar"> | Date | string
  }

  export type GalleryImageWhereInput = {
    AND?: GalleryImageWhereInput | GalleryImageWhereInput[]
    OR?: GalleryImageWhereInput[]
    NOT?: GalleryImageWhereInput | GalleryImageWhereInput[]
    id?: IntFilter<"GalleryImage"> | number
    url?: StringFilter<"GalleryImage"> | string
    publicId?: StringFilter<"GalleryImage"> | string
    movieId?: IntFilter<"GalleryImage"> | number
    createdAt?: DateTimeFilter<"GalleryImage"> | Date | string
    movie?: XOR<MovieRelationFilter, MovieWhereInput>
  }

  export type GalleryImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    movieId?: SortOrder
    createdAt?: SortOrder
    movie?: MovieOrderByWithRelationInput
  }

  export type GalleryImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GalleryImageWhereInput | GalleryImageWhereInput[]
    OR?: GalleryImageWhereInput[]
    NOT?: GalleryImageWhereInput | GalleryImageWhereInput[]
    url?: StringFilter<"GalleryImage"> | string
    publicId?: StringFilter<"GalleryImage"> | string
    movieId?: IntFilter<"GalleryImage"> | number
    createdAt?: DateTimeFilter<"GalleryImage"> | Date | string
    movie?: XOR<MovieRelationFilter, MovieWhereInput>
  }, "id">

  export type GalleryImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    movieId?: SortOrder
    createdAt?: SortOrder
    _count?: GalleryImageCountOrderByAggregateInput
    _avg?: GalleryImageAvgOrderByAggregateInput
    _max?: GalleryImageMaxOrderByAggregateInput
    _min?: GalleryImageMinOrderByAggregateInput
    _sum?: GalleryImageSumOrderByAggregateInput
  }

  export type GalleryImageScalarWhereWithAggregatesInput = {
    AND?: GalleryImageScalarWhereWithAggregatesInput | GalleryImageScalarWhereWithAggregatesInput[]
    OR?: GalleryImageScalarWhereWithAggregatesInput[]
    NOT?: GalleryImageScalarWhereWithAggregatesInput | GalleryImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GalleryImage"> | number
    url?: StringWithAggregatesFilter<"GalleryImage"> | string
    publicId?: StringWithAggregatesFilter<"GalleryImage"> | string
    movieId?: IntWithAggregatesFilter<"GalleryImage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"GalleryImage"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    movieId?: IntFilter<"Review"> | number
    text?: StringFilter<"Review"> | string
    feedback?: EnumRecommendedFilter<"Review"> | $Enums.Recommended
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    movie?: XOR<MovieRelationFilter, MovieWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    text?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movie?: MovieOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    movieId?: IntFilter<"Review"> | number
    text?: StringFilter<"Review"> | string
    feedback?: EnumRecommendedFilter<"Review"> | $Enums.Recommended
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    movie?: XOR<MovieRelationFilter, MovieWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    text?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    userId?: IntWithAggregatesFilter<"Review"> | number
    movieId?: IntWithAggregatesFilter<"Review"> | number
    text?: StringWithAggregatesFilter<"Review"> | string
    feedback?: EnumRecommendedWithAggregatesFilter<"Review"> | $Enums.Recommended
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type UserCreateInput = {
    username: string
    email: string
    payment?: string | null
    role?: $Enums.UserRole
    refreshToken?: UserCreaterefreshTokenInput | string[]
    profileViews?: number
    password: string
    isEmailVerified?: boolean | null
    blocked?: boolean
    provider?: string | null
    providerId?: string | null
    googleId?: string | null
    githubId?: string | null
    discordId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    token?: VerifyResetTokenCreateNestedOneWithoutUserInput
    avatar?: AvatarCreateNestedOneWithoutUserInput
    visits?: ProfileVisitCreateNestedManyWithoutUserInput
    movies?: MovieCreateNestedManyWithoutAuthorInput
    likes?: LikeCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    chats?: ChatUserCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutUserInput
    watchList?: WatchListItemCreateNestedManyWithoutUserInput
    review?: ReviewCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    payment?: string | null
    role?: $Enums.UserRole
    refreshToken?: UserCreaterefreshTokenInput | string[]
    profileViews?: number
    password: string
    isEmailVerified?: boolean | null
    blocked?: boolean
    provider?: string | null
    providerId?: string | null
    googleId?: string | null
    githubId?: string | null
    discordId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    token?: VerifyResetTokenUncheckedCreateNestedOneWithoutUserInput
    avatar?: AvatarUncheckedCreateNestedOneWithoutUserInput
    visits?: ProfileVisitUncheckedCreateNestedManyWithoutUserInput
    movies?: MovieUncheckedCreateNestedManyWithoutAuthorInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    chats?: ChatUserUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    watchList?: WatchListItemUncheckedCreateNestedManyWithoutUserInput
    review?: ReviewUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    refreshToken?: UserUpdaterefreshTokenInput | string[]
    profileViews?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blocked?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: VerifyResetTokenUpdateOneWithoutUserNestedInput
    avatar?: AvatarUpdateOneWithoutUserNestedInput
    visits?: ProfileVisitUpdateManyWithoutUserNestedInput
    movies?: MovieUpdateManyWithoutAuthorNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    chats?: ChatUserUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    watchList?: WatchListItemUpdateManyWithoutUserNestedInput
    review?: ReviewUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    refreshToken?: UserUpdaterefreshTokenInput | string[]
    profileViews?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blocked?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: VerifyResetTokenUncheckedUpdateOneWithoutUserNestedInput
    avatar?: AvatarUncheckedUpdateOneWithoutUserNestedInput
    visits?: ProfileVisitUncheckedUpdateManyWithoutUserNestedInput
    movies?: MovieUncheckedUpdateManyWithoutAuthorNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    chats?: ChatUserUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    watchList?: WatchListItemUncheckedUpdateManyWithoutUserNestedInput
    review?: ReviewUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    payment?: string | null
    role?: $Enums.UserRole
    refreshToken?: UserCreaterefreshTokenInput | string[]
    profileViews?: number
    password: string
    isEmailVerified?: boolean | null
    blocked?: boolean
    provider?: string | null
    providerId?: string | null
    googleId?: string | null
    githubId?: string | null
    discordId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    refreshToken?: UserUpdaterefreshTokenInput | string[]
    profileViews?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blocked?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    refreshToken?: UserUpdaterefreshTokenInput | string[]
    profileViews?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blocked?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileVisitCreateInput = {
    ipHash: string
    viewCount?: number
    visitDate?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVisitsInput
  }

  export type ProfileVisitUncheckedCreateInput = {
    id?: number
    userId: number
    ipHash: string
    viewCount?: number
    visitDate?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileVisitUpdateInput = {
    ipHash?: StringFieldUpdateOperationsInput | string
    viewCount?: IntFieldUpdateOperationsInput | number
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVisitsNestedInput
  }

  export type ProfileVisitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    ipHash?: StringFieldUpdateOperationsInput | string
    viewCount?: IntFieldUpdateOperationsInput | number
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileVisitCreateManyInput = {
    id?: number
    userId: number
    ipHash: string
    viewCount?: number
    visitDate?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileVisitUpdateManyMutationInput = {
    ipHash?: StringFieldUpdateOperationsInput | string
    viewCount?: IntFieldUpdateOperationsInput | number
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileVisitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    ipHash?: StringFieldUpdateOperationsInput | string
    viewCount?: IntFieldUpdateOperationsInput | number
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieCreateInput = {
    title: string
    description?: string | null
    slug: string
    year?: number | null
    category?: MovieCreatecategoryInput | string[]
    published?: boolean
    rating?: number | null
    avgRating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutMoviesInput
    galleryImages?: GalleryImageCreateNestedManyWithoutMovieInput
    comments?: CommentCreateNestedManyWithoutMovieInput
    likes?: LikeCreateNestedManyWithoutMovieInput
    watchList?: WatchListItemCreateNestedManyWithoutMovieInput
    review?: ReviewCreateNestedManyWithoutMovieInput
  }

  export type MovieUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    slug: string
    year?: number | null
    category?: MovieCreatecategoryInput | string[]
    published?: boolean
    authorId: number
    rating?: number | null
    avgRating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    galleryImages?: GalleryImageUncheckedCreateNestedManyWithoutMovieInput
    comments?: CommentUncheckedCreateNestedManyWithoutMovieInput
    likes?: LikeUncheckedCreateNestedManyWithoutMovieInput
    watchList?: WatchListItemUncheckedCreateNestedManyWithoutMovieInput
    review?: ReviewUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    category?: MovieUpdatecategoryInput | string[]
    published?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutMoviesNestedInput
    galleryImages?: GalleryImageUpdateManyWithoutMovieNestedInput
    comments?: CommentUpdateManyWithoutMovieNestedInput
    likes?: LikeUpdateManyWithoutMovieNestedInput
    watchList?: WatchListItemUpdateManyWithoutMovieNestedInput
    review?: ReviewUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    category?: MovieUpdatecategoryInput | string[]
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    galleryImages?: GalleryImageUncheckedUpdateManyWithoutMovieNestedInput
    comments?: CommentUncheckedUpdateManyWithoutMovieNestedInput
    likes?: LikeUncheckedUpdateManyWithoutMovieNestedInput
    watchList?: WatchListItemUncheckedUpdateManyWithoutMovieNestedInput
    review?: ReviewUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type MovieCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    slug: string
    year?: number | null
    category?: MovieCreatecategoryInput | string[]
    published?: boolean
    authorId: number
    rating?: number | null
    avgRating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovieUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    category?: MovieUpdatecategoryInput | string[]
    published?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    category?: MovieUpdatecategoryInput | string[]
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateInput = {
    email: string
    username: string
    message: string
    createdAt?: Date | string
  }

  export type FeedbackUncheckedCreateInput = {
    id?: number
    email: string
    username: string
    message: string
    createdAt?: Date | string
  }

  export type FeedbackUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateManyInput = {
    id?: number
    email: string
    username: string
    message: string
    createdAt?: Date | string
  }

  export type FeedbackUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerifyResetTokenCreateInput = {
    token: string
    expiresAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTokenInput
  }

  export type VerifyResetTokenUncheckedCreateInput = {
    id?: number
    userId: number
    token: string
    expiresAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerifyResetTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTokenNestedInput
  }

  export type VerifyResetTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerifyResetTokenCreateManyInput = {
    id?: number
    userId: number
    token: string
    expiresAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerifyResetTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerifyResetTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
    movie: MovieCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    userId: number
    movieId: number
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateInput = {
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    movie?: MovieUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: number
    userId: number
    movieId: number
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeCreateInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLikesInput
    movie: MovieCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateInput = {
    id?: number
    userId: number
    movieId: number
    createdAt?: Date | string
  }

  export type LikeUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
    movie?: MovieUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeCreateManyInput = {
    id?: number
    userId: number
    movieId: number
    createdAt?: Date | string
  }

  export type LikeUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCreateInput = {
    title?: string | null
    isGroup?: boolean
    createdAt?: Date | string
    users?: ChatUserCreateNestedManyWithoutChatInput
    messages?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateInput = {
    id?: number
    title?: string | null
    isGroup?: boolean
    createdAt?: Date | string
    users?: ChatUserUncheckedCreateNestedManyWithoutChatInput
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: ChatUserUpdateManyWithoutChatNestedInput
    messages?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: ChatUserUncheckedUpdateManyWithoutChatNestedInput
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatCreateManyInput = {
    id?: number
    title?: string | null
    isGroup?: boolean
    createdAt?: Date | string
  }

  export type ChatUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUserCreateInput = {
    joinedAt?: Date | string
    chat: ChatCreateNestedOneWithoutUsersInput
    user: UserCreateNestedOneWithoutChatsInput
  }

  export type ChatUserUncheckedCreateInput = {
    id?: number
    chatId: number
    userId: number
    joinedAt?: Date | string
  }

  export type ChatUserUpdateInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutUsersNestedInput
    user?: UserUpdateOneRequiredWithoutChatsNestedInput
  }

  export type ChatUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUserCreateManyInput = {
    id?: number
    chatId: number
    userId: number
    joinedAt?: Date | string
  }

  export type ChatUserUpdateManyMutationInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    body: string
    createdAt?: Date | string
    chat: ChatCreateNestedOneWithoutMessagesInput
    user: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: number
    chatId: number
    userId: number
    body: string
    createdAt?: Date | string
  }

  export type MessageUpdateInput = {
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: number
    chatId: number
    userId: number
    body: string
    createdAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    provider: string
    providerId?: string | null
    amount: number
    currency?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    userId: number
    provider: string
    providerId?: string | null
    amount: number
    currency?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateInput = {
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyInput = {
    id?: number
    userId: number
    provider: string
    providerId?: string | null
    amount: number
    currency?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchListItemCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWatchListInput
    movie: MovieCreateNestedOneWithoutWatchListInput
  }

  export type WatchListItemUncheckedCreateInput = {
    id?: string
    userId: number
    movieId: number
    createdAt?: Date | string
  }

  export type WatchListItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWatchListNestedInput
    movie?: MovieUpdateOneRequiredWithoutWatchListNestedInput
  }

  export type WatchListItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchListItemCreateManyInput = {
    id?: string
    userId: number
    movieId: number
    createdAt?: Date | string
  }

  export type WatchListItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchListItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvatarCreateInput = {
    url: string
    publicId: string
    movieId?: number | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutAvatarInput
  }

  export type AvatarUncheckedCreateInput = {
    id?: number
    url: string
    publicId: string
    userId?: number | null
    movieId?: number | null
    createdAt?: Date | string
  }

  export type AvatarUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    movieId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutAvatarNestedInput
  }

  export type AvatarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    movieId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvatarCreateManyInput = {
    id?: number
    url: string
    publicId: string
    userId?: number | null
    movieId?: number | null
    createdAt?: Date | string
  }

  export type AvatarUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    movieId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvatarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    movieId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryImageCreateInput = {
    url: string
    publicId: string
    createdAt?: Date | string
    movie: MovieCreateNestedOneWithoutGalleryImagesInput
  }

  export type GalleryImageUncheckedCreateInput = {
    id?: number
    url: string
    publicId: string
    movieId: number
    createdAt?: Date | string
  }

  export type GalleryImageUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUpdateOneRequiredWithoutGalleryImagesNestedInput
  }

  export type GalleryImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    movieId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryImageCreateManyInput = {
    id?: number
    url: string
    publicId: string
    movieId: number
    createdAt?: Date | string
  }

  export type GalleryImageUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    movieId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    text: string
    feedback: $Enums.Recommended
    createdAt?: Date | string
    updatedAt?: Date | string
    movie: MovieCreateNestedOneWithoutReviewInput
    user: UserCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    userId: number
    movieId: number
    text: string
    feedback: $Enums.Recommended
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    feedback?: EnumRecommendedFieldUpdateOperationsInput | $Enums.Recommended
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUpdateOneRequiredWithoutReviewNestedInput
    user?: UserUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    feedback?: EnumRecommendedFieldUpdateOperationsInput | $Enums.Recommended
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: number
    userId: number
    movieId: number
    text: string
    feedback: $Enums.Recommended
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    feedback?: EnumRecommendedFieldUpdateOperationsInput | $Enums.Recommended
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    feedback?: EnumRecommendedFieldUpdateOperationsInput | $Enums.Recommended
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VerifyResetTokenNullableRelationFilter = {
    is?: VerifyResetTokenWhereInput | null
    isNot?: VerifyResetTokenWhereInput | null
  }

  export type AvatarNullableRelationFilter = {
    is?: AvatarWhereInput | null
    isNot?: AvatarWhereInput | null
  }

  export type ProfileVisitListRelationFilter = {
    every?: ProfileVisitWhereInput
    some?: ProfileVisitWhereInput
    none?: ProfileVisitWhereInput
  }

  export type MovieListRelationFilter = {
    every?: MovieWhereInput
    some?: MovieWhereInput
    none?: MovieWhereInput
  }

  export type LikeListRelationFilter = {
    every?: LikeWhereInput
    some?: LikeWhereInput
    none?: LikeWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type ChatUserListRelationFilter = {
    every?: ChatUserWhereInput
    some?: ChatUserWhereInput
    none?: ChatUserWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type WatchListItemListRelationFilter = {
    every?: WatchListItemWhereInput
    some?: WatchListItemWhereInput
    none?: WatchListItemWhereInput
  }

  export type ReviewNullableRelationFilter = {
    is?: ReviewWhereInput | null
    isNot?: ReviewWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProfileVisitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovieOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WatchListItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    payment?: SortOrder
    role?: SortOrder
    refreshToken?: SortOrder
    profileViews?: SortOrder
    password?: SortOrder
    isEmailVerified?: SortOrder
    blocked?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    googleId?: SortOrder
    githubId?: SortOrder
    discordId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    profileViews?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    payment?: SortOrder
    role?: SortOrder
    profileViews?: SortOrder
    password?: SortOrder
    isEmailVerified?: SortOrder
    blocked?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    googleId?: SortOrder
    githubId?: SortOrder
    discordId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    payment?: SortOrder
    role?: SortOrder
    profileViews?: SortOrder
    password?: SortOrder
    isEmailVerified?: SortOrder
    blocked?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    googleId?: SortOrder
    githubId?: SortOrder
    discordId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    profileViews?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProfileVisitUserIdIpHashVisitDateCompoundUniqueInput = {
    userId: number
    ipHash: string
    visitDate: Date | string
  }

  export type ProfileVisitCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ipHash?: SortOrder
    viewCount?: SortOrder
    visitDate?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileVisitAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    viewCount?: SortOrder
  }

  export type ProfileVisitMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ipHash?: SortOrder
    viewCount?: SortOrder
    visitDate?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileVisitMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ipHash?: SortOrder
    viewCount?: SortOrder
    visitDate?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileVisitSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    viewCount?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type GalleryImageListRelationFilter = {
    every?: GalleryImageWhereInput
    some?: GalleryImageWhereInput
    none?: GalleryImageWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type GalleryImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovieCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    year?: SortOrder
    category?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
    rating?: SortOrder
    avgRating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MovieAvgOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    authorId?: SortOrder
    rating?: SortOrder
    avgRating?: SortOrder
  }

  export type MovieMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    year?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
    rating?: SortOrder
    avgRating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MovieMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    year?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
    rating?: SortOrder
    avgRating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MovieSumOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    authorId?: SortOrder
    rating?: SortOrder
    avgRating?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VerifyResetTokenUserIdTokenCompoundUniqueInput = {
    userId: number
    token: string
  }

  export type VerifyResetTokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerifyResetTokenAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type VerifyResetTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerifyResetTokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerifyResetTokenSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type MovieRelationFilter = {
    is?: MovieWhereInput
    isNot?: MovieWhereInput
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
  }

  export type LikeUserIdMovieIdCompoundUniqueInput = {
    userId: number
    movieId: number
  }

  export type LikeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    createdAt?: SortOrder
  }

  export type LikeAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
  }

  export type LikeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    createdAt?: SortOrder
  }

  export type LikeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    createdAt?: SortOrder
  }

  export type LikeSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
  }

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    isGroup?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChatMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    isGroup?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    isGroup?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChatRelationFilter = {
    is?: ChatWhereInput
    isNot?: ChatWhereInput
  }

  export type ChatUserChatIdUserIdCompoundUniqueInput = {
    chatId: number
    userId: number
  }

  export type ChatUserCountOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
  }

  export type ChatUserAvgOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
  }

  export type ChatUserMaxOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
  }

  export type ChatUserMinOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
  }

  export type ChatUserSumOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type WatchListItemUserIdMovieIdCompoundUniqueInput = {
    userId: number
    movieId: number
  }

  export type WatchListItemCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    createdAt?: SortOrder
  }

  export type WatchListItemAvgOrderByAggregateInput = {
    userId?: SortOrder
    movieId?: SortOrder
  }

  export type WatchListItemMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    createdAt?: SortOrder
  }

  export type WatchListItemMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    createdAt?: SortOrder
  }

  export type WatchListItemSumOrderByAggregateInput = {
    userId?: SortOrder
    movieId?: SortOrder
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AvatarCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    createdAt?: SortOrder
  }

  export type AvatarAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
  }

  export type AvatarMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    createdAt?: SortOrder
  }

  export type AvatarMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    createdAt?: SortOrder
  }

  export type AvatarSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
  }

  export type GalleryImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    movieId?: SortOrder
    createdAt?: SortOrder
  }

  export type GalleryImageAvgOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
  }

  export type GalleryImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    movieId?: SortOrder
    createdAt?: SortOrder
  }

  export type GalleryImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    movieId?: SortOrder
    createdAt?: SortOrder
  }

  export type GalleryImageSumOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
  }

  export type EnumRecommendedFilter<$PrismaModel = never> = {
    equals?: $Enums.Recommended | EnumRecommendedFieldRefInput<$PrismaModel>
    in?: $Enums.Recommended[] | ListEnumRecommendedFieldRefInput<$PrismaModel>
    notIn?: $Enums.Recommended[] | ListEnumRecommendedFieldRefInput<$PrismaModel>
    not?: NestedEnumRecommendedFilter<$PrismaModel> | $Enums.Recommended
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    text?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    text?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    text?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
  }

  export type EnumRecommendedWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Recommended | EnumRecommendedFieldRefInput<$PrismaModel>
    in?: $Enums.Recommended[] | ListEnumRecommendedFieldRefInput<$PrismaModel>
    notIn?: $Enums.Recommended[] | ListEnumRecommendedFieldRefInput<$PrismaModel>
    not?: NestedEnumRecommendedWithAggregatesFilter<$PrismaModel> | $Enums.Recommended
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecommendedFilter<$PrismaModel>
    _max?: NestedEnumRecommendedFilter<$PrismaModel>
  }

  export type UserCreaterefreshTokenInput = {
    set: string[]
  }

  export type VerifyResetTokenCreateNestedOneWithoutUserInput = {
    create?: XOR<VerifyResetTokenCreateWithoutUserInput, VerifyResetTokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: VerifyResetTokenCreateOrConnectWithoutUserInput
    connect?: VerifyResetTokenWhereUniqueInput
  }

  export type AvatarCreateNestedOneWithoutUserInput = {
    create?: XOR<AvatarCreateWithoutUserInput, AvatarUncheckedCreateWithoutUserInput>
    connectOrCreate?: AvatarCreateOrConnectWithoutUserInput
    connect?: AvatarWhereUniqueInput
  }

  export type ProfileVisitCreateNestedManyWithoutUserInput = {
    create?: XOR<ProfileVisitCreateWithoutUserInput, ProfileVisitUncheckedCreateWithoutUserInput> | ProfileVisitCreateWithoutUserInput[] | ProfileVisitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfileVisitCreateOrConnectWithoutUserInput | ProfileVisitCreateOrConnectWithoutUserInput[]
    createMany?: ProfileVisitCreateManyUserInputEnvelope
    connect?: ProfileVisitWhereUniqueInput | ProfileVisitWhereUniqueInput[]
  }

  export type MovieCreateNestedManyWithoutAuthorInput = {
    create?: XOR<MovieCreateWithoutAuthorInput, MovieUncheckedCreateWithoutAuthorInput> | MovieCreateWithoutAuthorInput[] | MovieUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutAuthorInput | MovieCreateOrConnectWithoutAuthorInput[]
    createMany?: MovieCreateManyAuthorInputEnvelope
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
  }

  export type LikeCreateNestedManyWithoutUserInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ChatUserCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatUserCreateWithoutUserInput, ChatUserUncheckedCreateWithoutUserInput> | ChatUserCreateWithoutUserInput[] | ChatUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatUserCreateOrConnectWithoutUserInput | ChatUserCreateOrConnectWithoutUserInput[]
    createMany?: ChatUserCreateManyUserInputEnvelope
    connect?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type WatchListItemCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchListItemCreateWithoutUserInput, WatchListItemUncheckedCreateWithoutUserInput> | WatchListItemCreateWithoutUserInput[] | WatchListItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchListItemCreateOrConnectWithoutUserInput | WatchListItemCreateOrConnectWithoutUserInput[]
    createMany?: WatchListItemCreateManyUserInputEnvelope
    connect?: WatchListItemWhereUniqueInput | WatchListItemWhereUniqueInput[]
  }

  export type ReviewCreateNestedOneWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput
    connect?: ReviewWhereUniqueInput
  }

  export type VerifyResetTokenUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<VerifyResetTokenCreateWithoutUserInput, VerifyResetTokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: VerifyResetTokenCreateOrConnectWithoutUserInput
    connect?: VerifyResetTokenWhereUniqueInput
  }

  export type AvatarUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AvatarCreateWithoutUserInput, AvatarUncheckedCreateWithoutUserInput>
    connectOrCreate?: AvatarCreateOrConnectWithoutUserInput
    connect?: AvatarWhereUniqueInput
  }

  export type ProfileVisitUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProfileVisitCreateWithoutUserInput, ProfileVisitUncheckedCreateWithoutUserInput> | ProfileVisitCreateWithoutUserInput[] | ProfileVisitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfileVisitCreateOrConnectWithoutUserInput | ProfileVisitCreateOrConnectWithoutUserInput[]
    createMany?: ProfileVisitCreateManyUserInputEnvelope
    connect?: ProfileVisitWhereUniqueInput | ProfileVisitWhereUniqueInput[]
  }

  export type MovieUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<MovieCreateWithoutAuthorInput, MovieUncheckedCreateWithoutAuthorInput> | MovieCreateWithoutAuthorInput[] | MovieUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutAuthorInput | MovieCreateOrConnectWithoutAuthorInput[]
    createMany?: MovieCreateManyAuthorInputEnvelope
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
  }

  export type LikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ChatUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatUserCreateWithoutUserInput, ChatUserUncheckedCreateWithoutUserInput> | ChatUserCreateWithoutUserInput[] | ChatUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatUserCreateOrConnectWithoutUserInput | ChatUserCreateOrConnectWithoutUserInput[]
    createMany?: ChatUserCreateManyUserInputEnvelope
    connect?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type WatchListItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchListItemCreateWithoutUserInput, WatchListItemUncheckedCreateWithoutUserInput> | WatchListItemCreateWithoutUserInput[] | WatchListItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchListItemCreateOrConnectWithoutUserInput | WatchListItemCreateOrConnectWithoutUserInput[]
    createMany?: WatchListItemCreateManyUserInputEnvelope
    connect?: WatchListItemWhereUniqueInput | WatchListItemWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput
    connect?: ReviewWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type UserUpdaterefreshTokenInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VerifyResetTokenUpdateOneWithoutUserNestedInput = {
    create?: XOR<VerifyResetTokenCreateWithoutUserInput, VerifyResetTokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: VerifyResetTokenCreateOrConnectWithoutUserInput
    upsert?: VerifyResetTokenUpsertWithoutUserInput
    disconnect?: VerifyResetTokenWhereInput | boolean
    delete?: VerifyResetTokenWhereInput | boolean
    connect?: VerifyResetTokenWhereUniqueInput
    update?: XOR<XOR<VerifyResetTokenUpdateToOneWithWhereWithoutUserInput, VerifyResetTokenUpdateWithoutUserInput>, VerifyResetTokenUncheckedUpdateWithoutUserInput>
  }

  export type AvatarUpdateOneWithoutUserNestedInput = {
    create?: XOR<AvatarCreateWithoutUserInput, AvatarUncheckedCreateWithoutUserInput>
    connectOrCreate?: AvatarCreateOrConnectWithoutUserInput
    upsert?: AvatarUpsertWithoutUserInput
    disconnect?: AvatarWhereInput | boolean
    delete?: AvatarWhereInput | boolean
    connect?: AvatarWhereUniqueInput
    update?: XOR<XOR<AvatarUpdateToOneWithWhereWithoutUserInput, AvatarUpdateWithoutUserInput>, AvatarUncheckedUpdateWithoutUserInput>
  }

  export type ProfileVisitUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProfileVisitCreateWithoutUserInput, ProfileVisitUncheckedCreateWithoutUserInput> | ProfileVisitCreateWithoutUserInput[] | ProfileVisitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfileVisitCreateOrConnectWithoutUserInput | ProfileVisitCreateOrConnectWithoutUserInput[]
    upsert?: ProfileVisitUpsertWithWhereUniqueWithoutUserInput | ProfileVisitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProfileVisitCreateManyUserInputEnvelope
    set?: ProfileVisitWhereUniqueInput | ProfileVisitWhereUniqueInput[]
    disconnect?: ProfileVisitWhereUniqueInput | ProfileVisitWhereUniqueInput[]
    delete?: ProfileVisitWhereUniqueInput | ProfileVisitWhereUniqueInput[]
    connect?: ProfileVisitWhereUniqueInput | ProfileVisitWhereUniqueInput[]
    update?: ProfileVisitUpdateWithWhereUniqueWithoutUserInput | ProfileVisitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProfileVisitUpdateManyWithWhereWithoutUserInput | ProfileVisitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProfileVisitScalarWhereInput | ProfileVisitScalarWhereInput[]
  }

  export type MovieUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<MovieCreateWithoutAuthorInput, MovieUncheckedCreateWithoutAuthorInput> | MovieCreateWithoutAuthorInput[] | MovieUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutAuthorInput | MovieCreateOrConnectWithoutAuthorInput[]
    upsert?: MovieUpsertWithWhereUniqueWithoutAuthorInput | MovieUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: MovieCreateManyAuthorInputEnvelope
    set?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    disconnect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    delete?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    update?: MovieUpdateWithWhereUniqueWithoutAuthorInput | MovieUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: MovieUpdateManyWithWhereWithoutAuthorInput | MovieUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: MovieScalarWhereInput | MovieScalarWhereInput[]
  }

  export type LikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutUserInput | LikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutUserInput | LikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutUserInput | LikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ChatUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatUserCreateWithoutUserInput, ChatUserUncheckedCreateWithoutUserInput> | ChatUserCreateWithoutUserInput[] | ChatUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatUserCreateOrConnectWithoutUserInput | ChatUserCreateOrConnectWithoutUserInput[]
    upsert?: ChatUserUpsertWithWhereUniqueWithoutUserInput | ChatUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatUserCreateManyUserInputEnvelope
    set?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    disconnect?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    delete?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    connect?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    update?: ChatUserUpdateWithWhereUniqueWithoutUserInput | ChatUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatUserUpdateManyWithWhereWithoutUserInput | ChatUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatUserScalarWhereInput | ChatUserScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutUserInput | MessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutUserInput | MessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutUserInput | MessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type WatchListItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchListItemCreateWithoutUserInput, WatchListItemUncheckedCreateWithoutUserInput> | WatchListItemCreateWithoutUserInput[] | WatchListItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchListItemCreateOrConnectWithoutUserInput | WatchListItemCreateOrConnectWithoutUserInput[]
    upsert?: WatchListItemUpsertWithWhereUniqueWithoutUserInput | WatchListItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchListItemCreateManyUserInputEnvelope
    set?: WatchListItemWhereUniqueInput | WatchListItemWhereUniqueInput[]
    disconnect?: WatchListItemWhereUniqueInput | WatchListItemWhereUniqueInput[]
    delete?: WatchListItemWhereUniqueInput | WatchListItemWhereUniqueInput[]
    connect?: WatchListItemWhereUniqueInput | WatchListItemWhereUniqueInput[]
    update?: WatchListItemUpdateWithWhereUniqueWithoutUserInput | WatchListItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchListItemUpdateManyWithWhereWithoutUserInput | WatchListItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchListItemScalarWhereInput | WatchListItemScalarWhereInput[]
  }

  export type ReviewUpdateOneWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput
    upsert?: ReviewUpsertWithoutUserInput
    disconnect?: ReviewWhereInput | boolean
    delete?: ReviewWhereInput | boolean
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutUserInput, ReviewUpdateWithoutUserInput>, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type VerifyResetTokenUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<VerifyResetTokenCreateWithoutUserInput, VerifyResetTokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: VerifyResetTokenCreateOrConnectWithoutUserInput
    upsert?: VerifyResetTokenUpsertWithoutUserInput
    disconnect?: VerifyResetTokenWhereInput | boolean
    delete?: VerifyResetTokenWhereInput | boolean
    connect?: VerifyResetTokenWhereUniqueInput
    update?: XOR<XOR<VerifyResetTokenUpdateToOneWithWhereWithoutUserInput, VerifyResetTokenUpdateWithoutUserInput>, VerifyResetTokenUncheckedUpdateWithoutUserInput>
  }

  export type AvatarUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AvatarCreateWithoutUserInput, AvatarUncheckedCreateWithoutUserInput>
    connectOrCreate?: AvatarCreateOrConnectWithoutUserInput
    upsert?: AvatarUpsertWithoutUserInput
    disconnect?: AvatarWhereInput | boolean
    delete?: AvatarWhereInput | boolean
    connect?: AvatarWhereUniqueInput
    update?: XOR<XOR<AvatarUpdateToOneWithWhereWithoutUserInput, AvatarUpdateWithoutUserInput>, AvatarUncheckedUpdateWithoutUserInput>
  }

  export type ProfileVisitUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProfileVisitCreateWithoutUserInput, ProfileVisitUncheckedCreateWithoutUserInput> | ProfileVisitCreateWithoutUserInput[] | ProfileVisitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfileVisitCreateOrConnectWithoutUserInput | ProfileVisitCreateOrConnectWithoutUserInput[]
    upsert?: ProfileVisitUpsertWithWhereUniqueWithoutUserInput | ProfileVisitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProfileVisitCreateManyUserInputEnvelope
    set?: ProfileVisitWhereUniqueInput | ProfileVisitWhereUniqueInput[]
    disconnect?: ProfileVisitWhereUniqueInput | ProfileVisitWhereUniqueInput[]
    delete?: ProfileVisitWhereUniqueInput | ProfileVisitWhereUniqueInput[]
    connect?: ProfileVisitWhereUniqueInput | ProfileVisitWhereUniqueInput[]
    update?: ProfileVisitUpdateWithWhereUniqueWithoutUserInput | ProfileVisitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProfileVisitUpdateManyWithWhereWithoutUserInput | ProfileVisitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProfileVisitScalarWhereInput | ProfileVisitScalarWhereInput[]
  }

  export type MovieUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<MovieCreateWithoutAuthorInput, MovieUncheckedCreateWithoutAuthorInput> | MovieCreateWithoutAuthorInput[] | MovieUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutAuthorInput | MovieCreateOrConnectWithoutAuthorInput[]
    upsert?: MovieUpsertWithWhereUniqueWithoutAuthorInput | MovieUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: MovieCreateManyAuthorInputEnvelope
    set?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    disconnect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    delete?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    update?: MovieUpdateWithWhereUniqueWithoutAuthorInput | MovieUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: MovieUpdateManyWithWhereWithoutAuthorInput | MovieUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: MovieScalarWhereInput | MovieScalarWhereInput[]
  }

  export type LikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutUserInput | LikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutUserInput | LikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutUserInput | LikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ChatUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatUserCreateWithoutUserInput, ChatUserUncheckedCreateWithoutUserInput> | ChatUserCreateWithoutUserInput[] | ChatUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatUserCreateOrConnectWithoutUserInput | ChatUserCreateOrConnectWithoutUserInput[]
    upsert?: ChatUserUpsertWithWhereUniqueWithoutUserInput | ChatUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatUserCreateManyUserInputEnvelope
    set?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    disconnect?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    delete?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    connect?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    update?: ChatUserUpdateWithWhereUniqueWithoutUserInput | ChatUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatUserUpdateManyWithWhereWithoutUserInput | ChatUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatUserScalarWhereInput | ChatUserScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutUserInput | MessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutUserInput | MessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutUserInput | MessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type WatchListItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchListItemCreateWithoutUserInput, WatchListItemUncheckedCreateWithoutUserInput> | WatchListItemCreateWithoutUserInput[] | WatchListItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchListItemCreateOrConnectWithoutUserInput | WatchListItemCreateOrConnectWithoutUserInput[]
    upsert?: WatchListItemUpsertWithWhereUniqueWithoutUserInput | WatchListItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchListItemCreateManyUserInputEnvelope
    set?: WatchListItemWhereUniqueInput | WatchListItemWhereUniqueInput[]
    disconnect?: WatchListItemWhereUniqueInput | WatchListItemWhereUniqueInput[]
    delete?: WatchListItemWhereUniqueInput | WatchListItemWhereUniqueInput[]
    connect?: WatchListItemWhereUniqueInput | WatchListItemWhereUniqueInput[]
    update?: WatchListItemUpdateWithWhereUniqueWithoutUserInput | WatchListItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchListItemUpdateManyWithWhereWithoutUserInput | WatchListItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchListItemScalarWhereInput | WatchListItemScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput
    upsert?: ReviewUpsertWithoutUserInput
    disconnect?: ReviewWhereInput | boolean
    delete?: ReviewWhereInput | boolean
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutUserInput, ReviewUpdateWithoutUserInput>, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutVisitsInput = {
    create?: XOR<UserCreateWithoutVisitsInput, UserUncheckedCreateWithoutVisitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVisitsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutVisitsNestedInput = {
    create?: XOR<UserCreateWithoutVisitsInput, UserUncheckedCreateWithoutVisitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVisitsInput
    upsert?: UserUpsertWithoutVisitsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVisitsInput, UserUpdateWithoutVisitsInput>, UserUncheckedUpdateWithoutVisitsInput>
  }

  export type MovieCreatecategoryInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutMoviesInput = {
    create?: XOR<UserCreateWithoutMoviesInput, UserUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMoviesInput
    connect?: UserWhereUniqueInput
  }

  export type GalleryImageCreateNestedManyWithoutMovieInput = {
    create?: XOR<GalleryImageCreateWithoutMovieInput, GalleryImageUncheckedCreateWithoutMovieInput> | GalleryImageCreateWithoutMovieInput[] | GalleryImageUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: GalleryImageCreateOrConnectWithoutMovieInput | GalleryImageCreateOrConnectWithoutMovieInput[]
    createMany?: GalleryImageCreateManyMovieInputEnvelope
    connect?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutMovieInput = {
    create?: XOR<CommentCreateWithoutMovieInput, CommentUncheckedCreateWithoutMovieInput> | CommentCreateWithoutMovieInput[] | CommentUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutMovieInput | CommentCreateOrConnectWithoutMovieInput[]
    createMany?: CommentCreateManyMovieInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type LikeCreateNestedManyWithoutMovieInput = {
    create?: XOR<LikeCreateWithoutMovieInput, LikeUncheckedCreateWithoutMovieInput> | LikeCreateWithoutMovieInput[] | LikeUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutMovieInput | LikeCreateOrConnectWithoutMovieInput[]
    createMany?: LikeCreateManyMovieInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type WatchListItemCreateNestedManyWithoutMovieInput = {
    create?: XOR<WatchListItemCreateWithoutMovieInput, WatchListItemUncheckedCreateWithoutMovieInput> | WatchListItemCreateWithoutMovieInput[] | WatchListItemUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: WatchListItemCreateOrConnectWithoutMovieInput | WatchListItemCreateOrConnectWithoutMovieInput[]
    createMany?: WatchListItemCreateManyMovieInputEnvelope
    connect?: WatchListItemWhereUniqueInput | WatchListItemWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutMovieInput = {
    create?: XOR<ReviewCreateWithoutMovieInput, ReviewUncheckedCreateWithoutMovieInput> | ReviewCreateWithoutMovieInput[] | ReviewUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutMovieInput | ReviewCreateOrConnectWithoutMovieInput[]
    createMany?: ReviewCreateManyMovieInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type GalleryImageUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<GalleryImageCreateWithoutMovieInput, GalleryImageUncheckedCreateWithoutMovieInput> | GalleryImageCreateWithoutMovieInput[] | GalleryImageUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: GalleryImageCreateOrConnectWithoutMovieInput | GalleryImageCreateOrConnectWithoutMovieInput[]
    createMany?: GalleryImageCreateManyMovieInputEnvelope
    connect?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<CommentCreateWithoutMovieInput, CommentUncheckedCreateWithoutMovieInput> | CommentCreateWithoutMovieInput[] | CommentUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutMovieInput | CommentCreateOrConnectWithoutMovieInput[]
    createMany?: CommentCreateManyMovieInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type LikeUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<LikeCreateWithoutMovieInput, LikeUncheckedCreateWithoutMovieInput> | LikeCreateWithoutMovieInput[] | LikeUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutMovieInput | LikeCreateOrConnectWithoutMovieInput[]
    createMany?: LikeCreateManyMovieInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type WatchListItemUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<WatchListItemCreateWithoutMovieInput, WatchListItemUncheckedCreateWithoutMovieInput> | WatchListItemCreateWithoutMovieInput[] | WatchListItemUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: WatchListItemCreateOrConnectWithoutMovieInput | WatchListItemCreateOrConnectWithoutMovieInput[]
    createMany?: WatchListItemCreateManyMovieInputEnvelope
    connect?: WatchListItemWhereUniqueInput | WatchListItemWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<ReviewCreateWithoutMovieInput, ReviewUncheckedCreateWithoutMovieInput> | ReviewCreateWithoutMovieInput[] | ReviewUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutMovieInput | ReviewCreateOrConnectWithoutMovieInput[]
    createMany?: ReviewCreateManyMovieInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MovieUpdatecategoryInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutMoviesNestedInput = {
    create?: XOR<UserCreateWithoutMoviesInput, UserUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMoviesInput
    upsert?: UserUpsertWithoutMoviesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMoviesInput, UserUpdateWithoutMoviesInput>, UserUncheckedUpdateWithoutMoviesInput>
  }

  export type GalleryImageUpdateManyWithoutMovieNestedInput = {
    create?: XOR<GalleryImageCreateWithoutMovieInput, GalleryImageUncheckedCreateWithoutMovieInput> | GalleryImageCreateWithoutMovieInput[] | GalleryImageUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: GalleryImageCreateOrConnectWithoutMovieInput | GalleryImageCreateOrConnectWithoutMovieInput[]
    upsert?: GalleryImageUpsertWithWhereUniqueWithoutMovieInput | GalleryImageUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: GalleryImageCreateManyMovieInputEnvelope
    set?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    disconnect?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    delete?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    connect?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    update?: GalleryImageUpdateWithWhereUniqueWithoutMovieInput | GalleryImageUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: GalleryImageUpdateManyWithWhereWithoutMovieInput | GalleryImageUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: GalleryImageScalarWhereInput | GalleryImageScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutMovieNestedInput = {
    create?: XOR<CommentCreateWithoutMovieInput, CommentUncheckedCreateWithoutMovieInput> | CommentCreateWithoutMovieInput[] | CommentUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutMovieInput | CommentCreateOrConnectWithoutMovieInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutMovieInput | CommentUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: CommentCreateManyMovieInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutMovieInput | CommentUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutMovieInput | CommentUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type LikeUpdateManyWithoutMovieNestedInput = {
    create?: XOR<LikeCreateWithoutMovieInput, LikeUncheckedCreateWithoutMovieInput> | LikeCreateWithoutMovieInput[] | LikeUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutMovieInput | LikeCreateOrConnectWithoutMovieInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutMovieInput | LikeUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: LikeCreateManyMovieInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutMovieInput | LikeUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutMovieInput | LikeUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type WatchListItemUpdateManyWithoutMovieNestedInput = {
    create?: XOR<WatchListItemCreateWithoutMovieInput, WatchListItemUncheckedCreateWithoutMovieInput> | WatchListItemCreateWithoutMovieInput[] | WatchListItemUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: WatchListItemCreateOrConnectWithoutMovieInput | WatchListItemCreateOrConnectWithoutMovieInput[]
    upsert?: WatchListItemUpsertWithWhereUniqueWithoutMovieInput | WatchListItemUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: WatchListItemCreateManyMovieInputEnvelope
    set?: WatchListItemWhereUniqueInput | WatchListItemWhereUniqueInput[]
    disconnect?: WatchListItemWhereUniqueInput | WatchListItemWhereUniqueInput[]
    delete?: WatchListItemWhereUniqueInput | WatchListItemWhereUniqueInput[]
    connect?: WatchListItemWhereUniqueInput | WatchListItemWhereUniqueInput[]
    update?: WatchListItemUpdateWithWhereUniqueWithoutMovieInput | WatchListItemUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: WatchListItemUpdateManyWithWhereWithoutMovieInput | WatchListItemUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: WatchListItemScalarWhereInput | WatchListItemScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutMovieNestedInput = {
    create?: XOR<ReviewCreateWithoutMovieInput, ReviewUncheckedCreateWithoutMovieInput> | ReviewCreateWithoutMovieInput[] | ReviewUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutMovieInput | ReviewCreateOrConnectWithoutMovieInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutMovieInput | ReviewUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: ReviewCreateManyMovieInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutMovieInput | ReviewUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutMovieInput | ReviewUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type GalleryImageUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<GalleryImageCreateWithoutMovieInput, GalleryImageUncheckedCreateWithoutMovieInput> | GalleryImageCreateWithoutMovieInput[] | GalleryImageUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: GalleryImageCreateOrConnectWithoutMovieInput | GalleryImageCreateOrConnectWithoutMovieInput[]
    upsert?: GalleryImageUpsertWithWhereUniqueWithoutMovieInput | GalleryImageUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: GalleryImageCreateManyMovieInputEnvelope
    set?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    disconnect?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    delete?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    connect?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    update?: GalleryImageUpdateWithWhereUniqueWithoutMovieInput | GalleryImageUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: GalleryImageUpdateManyWithWhereWithoutMovieInput | GalleryImageUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: GalleryImageScalarWhereInput | GalleryImageScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<CommentCreateWithoutMovieInput, CommentUncheckedCreateWithoutMovieInput> | CommentCreateWithoutMovieInput[] | CommentUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutMovieInput | CommentCreateOrConnectWithoutMovieInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutMovieInput | CommentUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: CommentCreateManyMovieInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutMovieInput | CommentUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutMovieInput | CommentUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type LikeUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<LikeCreateWithoutMovieInput, LikeUncheckedCreateWithoutMovieInput> | LikeCreateWithoutMovieInput[] | LikeUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutMovieInput | LikeCreateOrConnectWithoutMovieInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutMovieInput | LikeUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: LikeCreateManyMovieInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutMovieInput | LikeUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutMovieInput | LikeUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type WatchListItemUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<WatchListItemCreateWithoutMovieInput, WatchListItemUncheckedCreateWithoutMovieInput> | WatchListItemCreateWithoutMovieInput[] | WatchListItemUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: WatchListItemCreateOrConnectWithoutMovieInput | WatchListItemCreateOrConnectWithoutMovieInput[]
    upsert?: WatchListItemUpsertWithWhereUniqueWithoutMovieInput | WatchListItemUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: WatchListItemCreateManyMovieInputEnvelope
    set?: WatchListItemWhereUniqueInput | WatchListItemWhereUniqueInput[]
    disconnect?: WatchListItemWhereUniqueInput | WatchListItemWhereUniqueInput[]
    delete?: WatchListItemWhereUniqueInput | WatchListItemWhereUniqueInput[]
    connect?: WatchListItemWhereUniqueInput | WatchListItemWhereUniqueInput[]
    update?: WatchListItemUpdateWithWhereUniqueWithoutMovieInput | WatchListItemUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: WatchListItemUpdateManyWithWhereWithoutMovieInput | WatchListItemUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: WatchListItemScalarWhereInput | WatchListItemScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<ReviewCreateWithoutMovieInput, ReviewUncheckedCreateWithoutMovieInput> | ReviewCreateWithoutMovieInput[] | ReviewUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutMovieInput | ReviewCreateOrConnectWithoutMovieInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutMovieInput | ReviewUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: ReviewCreateManyMovieInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutMovieInput | ReviewUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutMovieInput | ReviewUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTokenInput = {
    create?: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokenInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTokenNestedInput = {
    create?: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokenInput
    upsert?: UserUpsertWithoutTokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTokenInput, UserUpdateWithoutTokenInput>, UserUncheckedUpdateWithoutTokenInput>
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type MovieCreateNestedOneWithoutCommentsInput = {
    create?: XOR<MovieCreateWithoutCommentsInput, MovieUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutCommentsInput
    connect?: MovieWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type MovieUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<MovieCreateWithoutCommentsInput, MovieUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutCommentsInput
    upsert?: MovieUpsertWithoutCommentsInput
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutCommentsInput, MovieUpdateWithoutCommentsInput>, MovieUncheckedUpdateWithoutCommentsInput>
  }

  export type UserCreateNestedOneWithoutLikesInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    connect?: UserWhereUniqueInput
  }

  export type MovieCreateNestedOneWithoutLikesInput = {
    create?: XOR<MovieCreateWithoutLikesInput, MovieUncheckedCreateWithoutLikesInput>
    connectOrCreate?: MovieCreateOrConnectWithoutLikesInput
    connect?: MovieWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    upsert?: UserUpsertWithoutLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikesInput, UserUpdateWithoutLikesInput>, UserUncheckedUpdateWithoutLikesInput>
  }

  export type MovieUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<MovieCreateWithoutLikesInput, MovieUncheckedCreateWithoutLikesInput>
    connectOrCreate?: MovieCreateOrConnectWithoutLikesInput
    upsert?: MovieUpsertWithoutLikesInput
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutLikesInput, MovieUpdateWithoutLikesInput>, MovieUncheckedUpdateWithoutLikesInput>
  }

  export type ChatUserCreateNestedManyWithoutChatInput = {
    create?: XOR<ChatUserCreateWithoutChatInput, ChatUserUncheckedCreateWithoutChatInput> | ChatUserCreateWithoutChatInput[] | ChatUserUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatUserCreateOrConnectWithoutChatInput | ChatUserCreateOrConnectWithoutChatInput[]
    createMany?: ChatUserCreateManyChatInputEnvelope
    connect?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ChatUserUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<ChatUserCreateWithoutChatInput, ChatUserUncheckedCreateWithoutChatInput> | ChatUserCreateWithoutChatInput[] | ChatUserUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatUserCreateOrConnectWithoutChatInput | ChatUserCreateOrConnectWithoutChatInput[]
    createMany?: ChatUserCreateManyChatInputEnvelope
    connect?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ChatUserUpdateManyWithoutChatNestedInput = {
    create?: XOR<ChatUserCreateWithoutChatInput, ChatUserUncheckedCreateWithoutChatInput> | ChatUserCreateWithoutChatInput[] | ChatUserUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatUserCreateOrConnectWithoutChatInput | ChatUserCreateOrConnectWithoutChatInput[]
    upsert?: ChatUserUpsertWithWhereUniqueWithoutChatInput | ChatUserUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: ChatUserCreateManyChatInputEnvelope
    set?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    disconnect?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    delete?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    connect?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    update?: ChatUserUpdateWithWhereUniqueWithoutChatInput | ChatUserUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: ChatUserUpdateManyWithWhereWithoutChatInput | ChatUserUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: ChatUserScalarWhereInput | ChatUserScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ChatUserUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<ChatUserCreateWithoutChatInput, ChatUserUncheckedCreateWithoutChatInput> | ChatUserCreateWithoutChatInput[] | ChatUserUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatUserCreateOrConnectWithoutChatInput | ChatUserCreateOrConnectWithoutChatInput[]
    upsert?: ChatUserUpsertWithWhereUniqueWithoutChatInput | ChatUserUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: ChatUserCreateManyChatInputEnvelope
    set?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    disconnect?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    delete?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    connect?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    update?: ChatUserUpdateWithWhereUniqueWithoutChatInput | ChatUserUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: ChatUserUpdateManyWithWhereWithoutChatInput | ChatUserUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: ChatUserScalarWhereInput | ChatUserScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ChatCreateNestedOneWithoutUsersInput = {
    create?: XOR<ChatCreateWithoutUsersInput, ChatUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ChatCreateOrConnectWithoutUsersInput
    connect?: ChatWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChatsInput = {
    create?: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatsInput
    connect?: UserWhereUniqueInput
  }

  export type ChatUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<ChatCreateWithoutUsersInput, ChatUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ChatCreateOrConnectWithoutUsersInput
    upsert?: ChatUpsertWithoutUsersInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutUsersInput, ChatUpdateWithoutUsersInput>, ChatUncheckedUpdateWithoutUsersInput>
  }

  export type UserUpdateOneRequiredWithoutChatsNestedInput = {
    create?: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatsInput
    upsert?: UserUpsertWithoutChatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatsInput, UserUpdateWithoutChatsInput>, UserUncheckedUpdateWithoutChatsInput>
  }

  export type ChatCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    connect?: ChatWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type ChatUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    upsert?: ChatUpsertWithoutMessagesInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutMessagesInput, ChatUpdateWithoutMessagesInput>, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesInput, UserUpdateWithoutMessagesInput>, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserCreateNestedOneWithoutWatchListInput = {
    create?: XOR<UserCreateWithoutWatchListInput, UserUncheckedCreateWithoutWatchListInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchListInput
    connect?: UserWhereUniqueInput
  }

  export type MovieCreateNestedOneWithoutWatchListInput = {
    create?: XOR<MovieCreateWithoutWatchListInput, MovieUncheckedCreateWithoutWatchListInput>
    connectOrCreate?: MovieCreateOrConnectWithoutWatchListInput
    connect?: MovieWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWatchListNestedInput = {
    create?: XOR<UserCreateWithoutWatchListInput, UserUncheckedCreateWithoutWatchListInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchListInput
    upsert?: UserUpsertWithoutWatchListInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWatchListInput, UserUpdateWithoutWatchListInput>, UserUncheckedUpdateWithoutWatchListInput>
  }

  export type MovieUpdateOneRequiredWithoutWatchListNestedInput = {
    create?: XOR<MovieCreateWithoutWatchListInput, MovieUncheckedCreateWithoutWatchListInput>
    connectOrCreate?: MovieCreateOrConnectWithoutWatchListInput
    upsert?: MovieUpsertWithoutWatchListInput
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutWatchListInput, MovieUpdateWithoutWatchListInput>, MovieUncheckedUpdateWithoutWatchListInput>
  }

  export type UserCreateNestedOneWithoutAvatarInput = {
    create?: XOR<UserCreateWithoutAvatarInput, UserUncheckedCreateWithoutAvatarInput>
    connectOrCreate?: UserCreateOrConnectWithoutAvatarInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutAvatarNestedInput = {
    create?: XOR<UserCreateWithoutAvatarInput, UserUncheckedCreateWithoutAvatarInput>
    connectOrCreate?: UserCreateOrConnectWithoutAvatarInput
    upsert?: UserUpsertWithoutAvatarInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAvatarInput, UserUpdateWithoutAvatarInput>, UserUncheckedUpdateWithoutAvatarInput>
  }

  export type MovieCreateNestedOneWithoutGalleryImagesInput = {
    create?: XOR<MovieCreateWithoutGalleryImagesInput, MovieUncheckedCreateWithoutGalleryImagesInput>
    connectOrCreate?: MovieCreateOrConnectWithoutGalleryImagesInput
    connect?: MovieWhereUniqueInput
  }

  export type MovieUpdateOneRequiredWithoutGalleryImagesNestedInput = {
    create?: XOR<MovieCreateWithoutGalleryImagesInput, MovieUncheckedCreateWithoutGalleryImagesInput>
    connectOrCreate?: MovieCreateOrConnectWithoutGalleryImagesInput
    upsert?: MovieUpsertWithoutGalleryImagesInput
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutGalleryImagesInput, MovieUpdateWithoutGalleryImagesInput>, MovieUncheckedUpdateWithoutGalleryImagesInput>
  }

  export type MovieCreateNestedOneWithoutReviewInput = {
    create?: XOR<MovieCreateWithoutReviewInput, MovieUncheckedCreateWithoutReviewInput>
    connectOrCreate?: MovieCreateOrConnectWithoutReviewInput
    connect?: MovieWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewInput = {
    create?: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewInput
    connect?: UserWhereUniqueInput
  }

  export type EnumRecommendedFieldUpdateOperationsInput = {
    set?: $Enums.Recommended
  }

  export type MovieUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<MovieCreateWithoutReviewInput, MovieUncheckedCreateWithoutReviewInput>
    connectOrCreate?: MovieCreateOrConnectWithoutReviewInput
    upsert?: MovieUpsertWithoutReviewInput
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutReviewInput, MovieUpdateWithoutReviewInput>, MovieUncheckedUpdateWithoutReviewInput>
  }

  export type UserUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewInput
    upsert?: UserUpsertWithoutReviewInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewInput, UserUpdateWithoutReviewInput>, UserUncheckedUpdateWithoutReviewInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumRecommendedFilter<$PrismaModel = never> = {
    equals?: $Enums.Recommended | EnumRecommendedFieldRefInput<$PrismaModel>
    in?: $Enums.Recommended[] | ListEnumRecommendedFieldRefInput<$PrismaModel>
    notIn?: $Enums.Recommended[] | ListEnumRecommendedFieldRefInput<$PrismaModel>
    not?: NestedEnumRecommendedFilter<$PrismaModel> | $Enums.Recommended
  }

  export type NestedEnumRecommendedWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Recommended | EnumRecommendedFieldRefInput<$PrismaModel>
    in?: $Enums.Recommended[] | ListEnumRecommendedFieldRefInput<$PrismaModel>
    notIn?: $Enums.Recommended[] | ListEnumRecommendedFieldRefInput<$PrismaModel>
    not?: NestedEnumRecommendedWithAggregatesFilter<$PrismaModel> | $Enums.Recommended
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecommendedFilter<$PrismaModel>
    _max?: NestedEnumRecommendedFilter<$PrismaModel>
  }

  export type VerifyResetTokenCreateWithoutUserInput = {
    token: string
    expiresAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerifyResetTokenUncheckedCreateWithoutUserInput = {
    id?: number
    token: string
    expiresAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerifyResetTokenCreateOrConnectWithoutUserInput = {
    where: VerifyResetTokenWhereUniqueInput
    create: XOR<VerifyResetTokenCreateWithoutUserInput, VerifyResetTokenUncheckedCreateWithoutUserInput>
  }

  export type AvatarCreateWithoutUserInput = {
    url: string
    publicId: string
    movieId?: number | null
    createdAt?: Date | string
  }

  export type AvatarUncheckedCreateWithoutUserInput = {
    id?: number
    url: string
    publicId: string
    movieId?: number | null
    createdAt?: Date | string
  }

  export type AvatarCreateOrConnectWithoutUserInput = {
    where: AvatarWhereUniqueInput
    create: XOR<AvatarCreateWithoutUserInput, AvatarUncheckedCreateWithoutUserInput>
  }

  export type ProfileVisitCreateWithoutUserInput = {
    ipHash: string
    viewCount?: number
    visitDate?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileVisitUncheckedCreateWithoutUserInput = {
    id?: number
    ipHash: string
    viewCount?: number
    visitDate?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileVisitCreateOrConnectWithoutUserInput = {
    where: ProfileVisitWhereUniqueInput
    create: XOR<ProfileVisitCreateWithoutUserInput, ProfileVisitUncheckedCreateWithoutUserInput>
  }

  export type ProfileVisitCreateManyUserInputEnvelope = {
    data: ProfileVisitCreateManyUserInput | ProfileVisitCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MovieCreateWithoutAuthorInput = {
    title: string
    description?: string | null
    slug: string
    year?: number | null
    category?: MovieCreatecategoryInput | string[]
    published?: boolean
    rating?: number | null
    avgRating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    galleryImages?: GalleryImageCreateNestedManyWithoutMovieInput
    comments?: CommentCreateNestedManyWithoutMovieInput
    likes?: LikeCreateNestedManyWithoutMovieInput
    watchList?: WatchListItemCreateNestedManyWithoutMovieInput
    review?: ReviewCreateNestedManyWithoutMovieInput
  }

  export type MovieUncheckedCreateWithoutAuthorInput = {
    id?: number
    title: string
    description?: string | null
    slug: string
    year?: number | null
    category?: MovieCreatecategoryInput | string[]
    published?: boolean
    rating?: number | null
    avgRating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    galleryImages?: GalleryImageUncheckedCreateNestedManyWithoutMovieInput
    comments?: CommentUncheckedCreateNestedManyWithoutMovieInput
    likes?: LikeUncheckedCreateNestedManyWithoutMovieInput
    watchList?: WatchListItemUncheckedCreateNestedManyWithoutMovieInput
    review?: ReviewUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieCreateOrConnectWithoutAuthorInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutAuthorInput, MovieUncheckedCreateWithoutAuthorInput>
  }

  export type MovieCreateManyAuthorInputEnvelope = {
    data: MovieCreateManyAuthorInput | MovieCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type LikeCreateWithoutUserInput = {
    createdAt?: Date | string
    movie: MovieCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateWithoutUserInput = {
    id?: number
    movieId: number
    createdAt?: Date | string
  }

  export type LikeCreateOrConnectWithoutUserInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
  }

  export type LikeCreateManyUserInputEnvelope = {
    data: LikeCreateManyUserInput | LikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    movie: MovieCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: number
    movieId: number
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutUserInput = {
    provider: string
    providerId?: string | null
    amount: number
    currency?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: number
    provider: string
    providerId?: string | null
    amount: number
    currency?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatUserCreateWithoutUserInput = {
    joinedAt?: Date | string
    chat: ChatCreateNestedOneWithoutUsersInput
  }

  export type ChatUserUncheckedCreateWithoutUserInput = {
    id?: number
    chatId: number
    joinedAt?: Date | string
  }

  export type ChatUserCreateOrConnectWithoutUserInput = {
    where: ChatUserWhereUniqueInput
    create: XOR<ChatUserCreateWithoutUserInput, ChatUserUncheckedCreateWithoutUserInput>
  }

  export type ChatUserCreateManyUserInputEnvelope = {
    data: ChatUserCreateManyUserInput | ChatUserCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutUserInput = {
    body: string
    createdAt?: Date | string
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutUserInput = {
    id?: number
    chatId: number
    body: string
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutUserInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput>
  }

  export type MessageCreateManyUserInputEnvelope = {
    data: MessageCreateManyUserInput | MessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WatchListItemCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    movie: MovieCreateNestedOneWithoutWatchListInput
  }

  export type WatchListItemUncheckedCreateWithoutUserInput = {
    id?: string
    movieId: number
    createdAt?: Date | string
  }

  export type WatchListItemCreateOrConnectWithoutUserInput = {
    where: WatchListItemWhereUniqueInput
    create: XOR<WatchListItemCreateWithoutUserInput, WatchListItemUncheckedCreateWithoutUserInput>
  }

  export type WatchListItemCreateManyUserInputEnvelope = {
    data: WatchListItemCreateManyUserInput | WatchListItemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutUserInput = {
    text: string
    feedback: $Enums.Recommended
    createdAt?: Date | string
    updatedAt?: Date | string
    movie: MovieCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: number
    movieId: number
    text: string
    feedback: $Enums.Recommended
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type VerifyResetTokenUpsertWithoutUserInput = {
    update: XOR<VerifyResetTokenUpdateWithoutUserInput, VerifyResetTokenUncheckedUpdateWithoutUserInput>
    create: XOR<VerifyResetTokenCreateWithoutUserInput, VerifyResetTokenUncheckedCreateWithoutUserInput>
    where?: VerifyResetTokenWhereInput
  }

  export type VerifyResetTokenUpdateToOneWithWhereWithoutUserInput = {
    where?: VerifyResetTokenWhereInput
    data: XOR<VerifyResetTokenUpdateWithoutUserInput, VerifyResetTokenUncheckedUpdateWithoutUserInput>
  }

  export type VerifyResetTokenUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerifyResetTokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvatarUpsertWithoutUserInput = {
    update: XOR<AvatarUpdateWithoutUserInput, AvatarUncheckedUpdateWithoutUserInput>
    create: XOR<AvatarCreateWithoutUserInput, AvatarUncheckedCreateWithoutUserInput>
    where?: AvatarWhereInput
  }

  export type AvatarUpdateToOneWithWhereWithoutUserInput = {
    where?: AvatarWhereInput
    data: XOR<AvatarUpdateWithoutUserInput, AvatarUncheckedUpdateWithoutUserInput>
  }

  export type AvatarUpdateWithoutUserInput = {
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    movieId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvatarUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    movieId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileVisitUpsertWithWhereUniqueWithoutUserInput = {
    where: ProfileVisitWhereUniqueInput
    update: XOR<ProfileVisitUpdateWithoutUserInput, ProfileVisitUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileVisitCreateWithoutUserInput, ProfileVisitUncheckedCreateWithoutUserInput>
  }

  export type ProfileVisitUpdateWithWhereUniqueWithoutUserInput = {
    where: ProfileVisitWhereUniqueInput
    data: XOR<ProfileVisitUpdateWithoutUserInput, ProfileVisitUncheckedUpdateWithoutUserInput>
  }

  export type ProfileVisitUpdateManyWithWhereWithoutUserInput = {
    where: ProfileVisitScalarWhereInput
    data: XOR<ProfileVisitUpdateManyMutationInput, ProfileVisitUncheckedUpdateManyWithoutUserInput>
  }

  export type ProfileVisitScalarWhereInput = {
    AND?: ProfileVisitScalarWhereInput | ProfileVisitScalarWhereInput[]
    OR?: ProfileVisitScalarWhereInput[]
    NOT?: ProfileVisitScalarWhereInput | ProfileVisitScalarWhereInput[]
    id?: IntFilter<"ProfileVisit"> | number
    userId?: IntFilter<"ProfileVisit"> | number
    ipHash?: StringFilter<"ProfileVisit"> | string
    viewCount?: IntFilter<"ProfileVisit"> | number
    visitDate?: DateTimeFilter<"ProfileVisit"> | Date | string
    updatedAt?: DateTimeFilter<"ProfileVisit"> | Date | string
  }

  export type MovieUpsertWithWhereUniqueWithoutAuthorInput = {
    where: MovieWhereUniqueInput
    update: XOR<MovieUpdateWithoutAuthorInput, MovieUncheckedUpdateWithoutAuthorInput>
    create: XOR<MovieCreateWithoutAuthorInput, MovieUncheckedCreateWithoutAuthorInput>
  }

  export type MovieUpdateWithWhereUniqueWithoutAuthorInput = {
    where: MovieWhereUniqueInput
    data: XOR<MovieUpdateWithoutAuthorInput, MovieUncheckedUpdateWithoutAuthorInput>
  }

  export type MovieUpdateManyWithWhereWithoutAuthorInput = {
    where: MovieScalarWhereInput
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyWithoutAuthorInput>
  }

  export type MovieScalarWhereInput = {
    AND?: MovieScalarWhereInput | MovieScalarWhereInput[]
    OR?: MovieScalarWhereInput[]
    NOT?: MovieScalarWhereInput | MovieScalarWhereInput[]
    id?: IntFilter<"Movie"> | number
    title?: StringFilter<"Movie"> | string
    description?: StringNullableFilter<"Movie"> | string | null
    slug?: StringFilter<"Movie"> | string
    year?: IntNullableFilter<"Movie"> | number | null
    category?: StringNullableListFilter<"Movie">
    published?: BoolFilter<"Movie"> | boolean
    authorId?: IntFilter<"Movie"> | number
    rating?: IntNullableFilter<"Movie"> | number | null
    avgRating?: FloatFilter<"Movie"> | number
    createdAt?: DateTimeFilter<"Movie"> | Date | string
    updatedAt?: DateTimeFilter<"Movie"> | Date | string
  }

  export type LikeUpsertWithWhereUniqueWithoutUserInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutUserInput, LikeUncheckedUpdateWithoutUserInput>
    create: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutUserInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutUserInput, LikeUncheckedUpdateWithoutUserInput>
  }

  export type LikeUpdateManyWithWhereWithoutUserInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutUserInput>
  }

  export type LikeScalarWhereInput = {
    AND?: LikeScalarWhereInput | LikeScalarWhereInput[]
    OR?: LikeScalarWhereInput[]
    NOT?: LikeScalarWhereInput | LikeScalarWhereInput[]
    id?: IntFilter<"Like"> | number
    userId?: IntFilter<"Like"> | number
    movieId?: IntFilter<"Like"> | number
    createdAt?: DateTimeFilter<"Like"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: IntFilter<"Comment"> | number
    userId?: IntFilter<"Comment"> | number
    movieId?: IntFilter<"Comment"> | number
    body?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    userId?: IntFilter<"Order"> | number
    provider?: StringFilter<"Order"> | string
    providerId?: StringNullableFilter<"Order"> | string | null
    amount?: FloatFilter<"Order"> | number
    currency?: StringFilter<"Order"> | string
    status?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type ChatUserUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatUserWhereUniqueInput
    update: XOR<ChatUserUpdateWithoutUserInput, ChatUserUncheckedUpdateWithoutUserInput>
    create: XOR<ChatUserCreateWithoutUserInput, ChatUserUncheckedCreateWithoutUserInput>
  }

  export type ChatUserUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatUserWhereUniqueInput
    data: XOR<ChatUserUpdateWithoutUserInput, ChatUserUncheckedUpdateWithoutUserInput>
  }

  export type ChatUserUpdateManyWithWhereWithoutUserInput = {
    where: ChatUserScalarWhereInput
    data: XOR<ChatUserUpdateManyMutationInput, ChatUserUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatUserScalarWhereInput = {
    AND?: ChatUserScalarWhereInput | ChatUserScalarWhereInput[]
    OR?: ChatUserScalarWhereInput[]
    NOT?: ChatUserScalarWhereInput | ChatUserScalarWhereInput[]
    id?: IntFilter<"ChatUser"> | number
    chatId?: IntFilter<"ChatUser"> | number
    userId?: IntFilter<"ChatUser"> | number
    joinedAt?: DateTimeFilter<"ChatUser"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutUserInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutUserInput, MessageUncheckedUpdateWithoutUserInput>
    create: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutUserInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutUserInput, MessageUncheckedUpdateWithoutUserInput>
  }

  export type MessageUpdateManyWithWhereWithoutUserInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutUserInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: IntFilter<"Message"> | number
    chatId?: IntFilter<"Message"> | number
    userId?: IntFilter<"Message"> | number
    body?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type WatchListItemUpsertWithWhereUniqueWithoutUserInput = {
    where: WatchListItemWhereUniqueInput
    update: XOR<WatchListItemUpdateWithoutUserInput, WatchListItemUncheckedUpdateWithoutUserInput>
    create: XOR<WatchListItemCreateWithoutUserInput, WatchListItemUncheckedCreateWithoutUserInput>
  }

  export type WatchListItemUpdateWithWhereUniqueWithoutUserInput = {
    where: WatchListItemWhereUniqueInput
    data: XOR<WatchListItemUpdateWithoutUserInput, WatchListItemUncheckedUpdateWithoutUserInput>
  }

  export type WatchListItemUpdateManyWithWhereWithoutUserInput = {
    where: WatchListItemScalarWhereInput
    data: XOR<WatchListItemUpdateManyMutationInput, WatchListItemUncheckedUpdateManyWithoutUserInput>
  }

  export type WatchListItemScalarWhereInput = {
    AND?: WatchListItemScalarWhereInput | WatchListItemScalarWhereInput[]
    OR?: WatchListItemScalarWhereInput[]
    NOT?: WatchListItemScalarWhereInput | WatchListItemScalarWhereInput[]
    id?: StringFilter<"WatchListItem"> | string
    userId?: IntFilter<"WatchListItem"> | number
    movieId?: IntFilter<"WatchListItem"> | number
    createdAt?: DateTimeFilter<"WatchListItem"> | Date | string
  }

  export type ReviewUpsertWithoutUserInput = {
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutUserInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateWithoutUserInput = {
    text?: StringFieldUpdateOperationsInput | string
    feedback?: EnumRecommendedFieldUpdateOperationsInput | $Enums.Recommended
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    feedback?: EnumRecommendedFieldUpdateOperationsInput | $Enums.Recommended
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutVisitsInput = {
    username: string
    email: string
    payment?: string | null
    role?: $Enums.UserRole
    refreshToken?: UserCreaterefreshTokenInput | string[]
    profileViews?: number
    password: string
    isEmailVerified?: boolean | null
    blocked?: boolean
    provider?: string | null
    providerId?: string | null
    googleId?: string | null
    githubId?: string | null
    discordId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    token?: VerifyResetTokenCreateNestedOneWithoutUserInput
    avatar?: AvatarCreateNestedOneWithoutUserInput
    movies?: MovieCreateNestedManyWithoutAuthorInput
    likes?: LikeCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    chats?: ChatUserCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutUserInput
    watchList?: WatchListItemCreateNestedManyWithoutUserInput
    review?: ReviewCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVisitsInput = {
    id?: number
    username: string
    email: string
    payment?: string | null
    role?: $Enums.UserRole
    refreshToken?: UserCreaterefreshTokenInput | string[]
    profileViews?: number
    password: string
    isEmailVerified?: boolean | null
    blocked?: boolean
    provider?: string | null
    providerId?: string | null
    googleId?: string | null
    githubId?: string | null
    discordId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    token?: VerifyResetTokenUncheckedCreateNestedOneWithoutUserInput
    avatar?: AvatarUncheckedCreateNestedOneWithoutUserInput
    movies?: MovieUncheckedCreateNestedManyWithoutAuthorInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    chats?: ChatUserUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    watchList?: WatchListItemUncheckedCreateNestedManyWithoutUserInput
    review?: ReviewUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVisitsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVisitsInput, UserUncheckedCreateWithoutVisitsInput>
  }

  export type UserUpsertWithoutVisitsInput = {
    update: XOR<UserUpdateWithoutVisitsInput, UserUncheckedUpdateWithoutVisitsInput>
    create: XOR<UserCreateWithoutVisitsInput, UserUncheckedCreateWithoutVisitsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVisitsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVisitsInput, UserUncheckedUpdateWithoutVisitsInput>
  }

  export type UserUpdateWithoutVisitsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    refreshToken?: UserUpdaterefreshTokenInput | string[]
    profileViews?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blocked?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: VerifyResetTokenUpdateOneWithoutUserNestedInput
    avatar?: AvatarUpdateOneWithoutUserNestedInput
    movies?: MovieUpdateManyWithoutAuthorNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    chats?: ChatUserUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    watchList?: WatchListItemUpdateManyWithoutUserNestedInput
    review?: ReviewUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVisitsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    refreshToken?: UserUpdaterefreshTokenInput | string[]
    profileViews?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blocked?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: VerifyResetTokenUncheckedUpdateOneWithoutUserNestedInput
    avatar?: AvatarUncheckedUpdateOneWithoutUserNestedInput
    movies?: MovieUncheckedUpdateManyWithoutAuthorNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    chats?: ChatUserUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    watchList?: WatchListItemUncheckedUpdateManyWithoutUserNestedInput
    review?: ReviewUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutMoviesInput = {
    username: string
    email: string
    payment?: string | null
    role?: $Enums.UserRole
    refreshToken?: UserCreaterefreshTokenInput | string[]
    profileViews?: number
    password: string
    isEmailVerified?: boolean | null
    blocked?: boolean
    provider?: string | null
    providerId?: string | null
    googleId?: string | null
    githubId?: string | null
    discordId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    token?: VerifyResetTokenCreateNestedOneWithoutUserInput
    avatar?: AvatarCreateNestedOneWithoutUserInput
    visits?: ProfileVisitCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    chats?: ChatUserCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutUserInput
    watchList?: WatchListItemCreateNestedManyWithoutUserInput
    review?: ReviewCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMoviesInput = {
    id?: number
    username: string
    email: string
    payment?: string | null
    role?: $Enums.UserRole
    refreshToken?: UserCreaterefreshTokenInput | string[]
    profileViews?: number
    password: string
    isEmailVerified?: boolean | null
    blocked?: boolean
    provider?: string | null
    providerId?: string | null
    googleId?: string | null
    githubId?: string | null
    discordId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    token?: VerifyResetTokenUncheckedCreateNestedOneWithoutUserInput
    avatar?: AvatarUncheckedCreateNestedOneWithoutUserInput
    visits?: ProfileVisitUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    chats?: ChatUserUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    watchList?: WatchListItemUncheckedCreateNestedManyWithoutUserInput
    review?: ReviewUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMoviesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMoviesInput, UserUncheckedCreateWithoutMoviesInput>
  }

  export type GalleryImageCreateWithoutMovieInput = {
    url: string
    publicId: string
    createdAt?: Date | string
  }

  export type GalleryImageUncheckedCreateWithoutMovieInput = {
    id?: number
    url: string
    publicId: string
    createdAt?: Date | string
  }

  export type GalleryImageCreateOrConnectWithoutMovieInput = {
    where: GalleryImageWhereUniqueInput
    create: XOR<GalleryImageCreateWithoutMovieInput, GalleryImageUncheckedCreateWithoutMovieInput>
  }

  export type GalleryImageCreateManyMovieInputEnvelope = {
    data: GalleryImageCreateManyMovieInput | GalleryImageCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutMovieInput = {
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutMovieInput = {
    id?: number
    userId: number
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutMovieInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutMovieInput, CommentUncheckedCreateWithoutMovieInput>
  }

  export type CommentCreateManyMovieInputEnvelope = {
    data: CommentCreateManyMovieInput | CommentCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type LikeCreateWithoutMovieInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateWithoutMovieInput = {
    id?: number
    userId: number
    createdAt?: Date | string
  }

  export type LikeCreateOrConnectWithoutMovieInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutMovieInput, LikeUncheckedCreateWithoutMovieInput>
  }

  export type LikeCreateManyMovieInputEnvelope = {
    data: LikeCreateManyMovieInput | LikeCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type WatchListItemCreateWithoutMovieInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWatchListInput
  }

  export type WatchListItemUncheckedCreateWithoutMovieInput = {
    id?: string
    userId: number
    createdAt?: Date | string
  }

  export type WatchListItemCreateOrConnectWithoutMovieInput = {
    where: WatchListItemWhereUniqueInput
    create: XOR<WatchListItemCreateWithoutMovieInput, WatchListItemUncheckedCreateWithoutMovieInput>
  }

  export type WatchListItemCreateManyMovieInputEnvelope = {
    data: WatchListItemCreateManyMovieInput | WatchListItemCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutMovieInput = {
    text: string
    feedback: $Enums.Recommended
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutMovieInput = {
    id?: number
    userId: number
    text: string
    feedback: $Enums.Recommended
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutMovieInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutMovieInput, ReviewUncheckedCreateWithoutMovieInput>
  }

  export type ReviewCreateManyMovieInputEnvelope = {
    data: ReviewCreateManyMovieInput | ReviewCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMoviesInput = {
    update: XOR<UserUpdateWithoutMoviesInput, UserUncheckedUpdateWithoutMoviesInput>
    create: XOR<UserCreateWithoutMoviesInput, UserUncheckedCreateWithoutMoviesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMoviesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMoviesInput, UserUncheckedUpdateWithoutMoviesInput>
  }

  export type UserUpdateWithoutMoviesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    refreshToken?: UserUpdaterefreshTokenInput | string[]
    profileViews?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blocked?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: VerifyResetTokenUpdateOneWithoutUserNestedInput
    avatar?: AvatarUpdateOneWithoutUserNestedInput
    visits?: ProfileVisitUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    chats?: ChatUserUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    watchList?: WatchListItemUpdateManyWithoutUserNestedInput
    review?: ReviewUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMoviesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    refreshToken?: UserUpdaterefreshTokenInput | string[]
    profileViews?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blocked?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: VerifyResetTokenUncheckedUpdateOneWithoutUserNestedInput
    avatar?: AvatarUncheckedUpdateOneWithoutUserNestedInput
    visits?: ProfileVisitUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    chats?: ChatUserUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    watchList?: WatchListItemUncheckedUpdateManyWithoutUserNestedInput
    review?: ReviewUncheckedUpdateOneWithoutUserNestedInput
  }

  export type GalleryImageUpsertWithWhereUniqueWithoutMovieInput = {
    where: GalleryImageWhereUniqueInput
    update: XOR<GalleryImageUpdateWithoutMovieInput, GalleryImageUncheckedUpdateWithoutMovieInput>
    create: XOR<GalleryImageCreateWithoutMovieInput, GalleryImageUncheckedCreateWithoutMovieInput>
  }

  export type GalleryImageUpdateWithWhereUniqueWithoutMovieInput = {
    where: GalleryImageWhereUniqueInput
    data: XOR<GalleryImageUpdateWithoutMovieInput, GalleryImageUncheckedUpdateWithoutMovieInput>
  }

  export type GalleryImageUpdateManyWithWhereWithoutMovieInput = {
    where: GalleryImageScalarWhereInput
    data: XOR<GalleryImageUpdateManyMutationInput, GalleryImageUncheckedUpdateManyWithoutMovieInput>
  }

  export type GalleryImageScalarWhereInput = {
    AND?: GalleryImageScalarWhereInput | GalleryImageScalarWhereInput[]
    OR?: GalleryImageScalarWhereInput[]
    NOT?: GalleryImageScalarWhereInput | GalleryImageScalarWhereInput[]
    id?: IntFilter<"GalleryImage"> | number
    url?: StringFilter<"GalleryImage"> | string
    publicId?: StringFilter<"GalleryImage"> | string
    movieId?: IntFilter<"GalleryImage"> | number
    createdAt?: DateTimeFilter<"GalleryImage"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutMovieInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutMovieInput, CommentUncheckedUpdateWithoutMovieInput>
    create: XOR<CommentCreateWithoutMovieInput, CommentUncheckedCreateWithoutMovieInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutMovieInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutMovieInput, CommentUncheckedUpdateWithoutMovieInput>
  }

  export type CommentUpdateManyWithWhereWithoutMovieInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutMovieInput>
  }

  export type LikeUpsertWithWhereUniqueWithoutMovieInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutMovieInput, LikeUncheckedUpdateWithoutMovieInput>
    create: XOR<LikeCreateWithoutMovieInput, LikeUncheckedCreateWithoutMovieInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutMovieInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutMovieInput, LikeUncheckedUpdateWithoutMovieInput>
  }

  export type LikeUpdateManyWithWhereWithoutMovieInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutMovieInput>
  }

  export type WatchListItemUpsertWithWhereUniqueWithoutMovieInput = {
    where: WatchListItemWhereUniqueInput
    update: XOR<WatchListItemUpdateWithoutMovieInput, WatchListItemUncheckedUpdateWithoutMovieInput>
    create: XOR<WatchListItemCreateWithoutMovieInput, WatchListItemUncheckedCreateWithoutMovieInput>
  }

  export type WatchListItemUpdateWithWhereUniqueWithoutMovieInput = {
    where: WatchListItemWhereUniqueInput
    data: XOR<WatchListItemUpdateWithoutMovieInput, WatchListItemUncheckedUpdateWithoutMovieInput>
  }

  export type WatchListItemUpdateManyWithWhereWithoutMovieInput = {
    where: WatchListItemScalarWhereInput
    data: XOR<WatchListItemUpdateManyMutationInput, WatchListItemUncheckedUpdateManyWithoutMovieInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutMovieInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutMovieInput, ReviewUncheckedUpdateWithoutMovieInput>
    create: XOR<ReviewCreateWithoutMovieInput, ReviewUncheckedCreateWithoutMovieInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutMovieInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutMovieInput, ReviewUncheckedUpdateWithoutMovieInput>
  }

  export type ReviewUpdateManyWithWhereWithoutMovieInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutMovieInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    movieId?: IntFilter<"Review"> | number
    text?: StringFilter<"Review"> | string
    feedback?: EnumRecommendedFilter<"Review"> | $Enums.Recommended
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type UserCreateWithoutTokenInput = {
    username: string
    email: string
    payment?: string | null
    role?: $Enums.UserRole
    refreshToken?: UserCreaterefreshTokenInput | string[]
    profileViews?: number
    password: string
    isEmailVerified?: boolean | null
    blocked?: boolean
    provider?: string | null
    providerId?: string | null
    googleId?: string | null
    githubId?: string | null
    discordId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    avatar?: AvatarCreateNestedOneWithoutUserInput
    visits?: ProfileVisitCreateNestedManyWithoutUserInput
    movies?: MovieCreateNestedManyWithoutAuthorInput
    likes?: LikeCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    chats?: ChatUserCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutUserInput
    watchList?: WatchListItemCreateNestedManyWithoutUserInput
    review?: ReviewCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTokenInput = {
    id?: number
    username: string
    email: string
    payment?: string | null
    role?: $Enums.UserRole
    refreshToken?: UserCreaterefreshTokenInput | string[]
    profileViews?: number
    password: string
    isEmailVerified?: boolean | null
    blocked?: boolean
    provider?: string | null
    providerId?: string | null
    googleId?: string | null
    githubId?: string | null
    discordId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    avatar?: AvatarUncheckedCreateNestedOneWithoutUserInput
    visits?: ProfileVisitUncheckedCreateNestedManyWithoutUserInput
    movies?: MovieUncheckedCreateNestedManyWithoutAuthorInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    chats?: ChatUserUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    watchList?: WatchListItemUncheckedCreateNestedManyWithoutUserInput
    review?: ReviewUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
  }

  export type UserUpsertWithoutTokenInput = {
    update: XOR<UserUpdateWithoutTokenInput, UserUncheckedUpdateWithoutTokenInput>
    create: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTokenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTokenInput, UserUncheckedUpdateWithoutTokenInput>
  }

  export type UserUpdateWithoutTokenInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    refreshToken?: UserUpdaterefreshTokenInput | string[]
    profileViews?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blocked?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: AvatarUpdateOneWithoutUserNestedInput
    visits?: ProfileVisitUpdateManyWithoutUserNestedInput
    movies?: MovieUpdateManyWithoutAuthorNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    chats?: ChatUserUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    watchList?: WatchListItemUpdateManyWithoutUserNestedInput
    review?: ReviewUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    refreshToken?: UserUpdaterefreshTokenInput | string[]
    profileViews?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blocked?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: AvatarUncheckedUpdateOneWithoutUserNestedInput
    visits?: ProfileVisitUncheckedUpdateManyWithoutUserNestedInput
    movies?: MovieUncheckedUpdateManyWithoutAuthorNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    chats?: ChatUserUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    watchList?: WatchListItemUncheckedUpdateManyWithoutUserNestedInput
    review?: ReviewUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutCommentsInput = {
    username: string
    email: string
    payment?: string | null
    role?: $Enums.UserRole
    refreshToken?: UserCreaterefreshTokenInput | string[]
    profileViews?: number
    password: string
    isEmailVerified?: boolean | null
    blocked?: boolean
    provider?: string | null
    providerId?: string | null
    googleId?: string | null
    githubId?: string | null
    discordId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    token?: VerifyResetTokenCreateNestedOneWithoutUserInput
    avatar?: AvatarCreateNestedOneWithoutUserInput
    visits?: ProfileVisitCreateNestedManyWithoutUserInput
    movies?: MovieCreateNestedManyWithoutAuthorInput
    likes?: LikeCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    chats?: ChatUserCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutUserInput
    watchList?: WatchListItemCreateNestedManyWithoutUserInput
    review?: ReviewCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: number
    username: string
    email: string
    payment?: string | null
    role?: $Enums.UserRole
    refreshToken?: UserCreaterefreshTokenInput | string[]
    profileViews?: number
    password: string
    isEmailVerified?: boolean | null
    blocked?: boolean
    provider?: string | null
    providerId?: string | null
    googleId?: string | null
    githubId?: string | null
    discordId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    token?: VerifyResetTokenUncheckedCreateNestedOneWithoutUserInput
    avatar?: AvatarUncheckedCreateNestedOneWithoutUserInput
    visits?: ProfileVisitUncheckedCreateNestedManyWithoutUserInput
    movies?: MovieUncheckedCreateNestedManyWithoutAuthorInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    chats?: ChatUserUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    watchList?: WatchListItemUncheckedCreateNestedManyWithoutUserInput
    review?: ReviewUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type MovieCreateWithoutCommentsInput = {
    title: string
    description?: string | null
    slug: string
    year?: number | null
    category?: MovieCreatecategoryInput | string[]
    published?: boolean
    rating?: number | null
    avgRating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutMoviesInput
    galleryImages?: GalleryImageCreateNestedManyWithoutMovieInput
    likes?: LikeCreateNestedManyWithoutMovieInput
    watchList?: WatchListItemCreateNestedManyWithoutMovieInput
    review?: ReviewCreateNestedManyWithoutMovieInput
  }

  export type MovieUncheckedCreateWithoutCommentsInput = {
    id?: number
    title: string
    description?: string | null
    slug: string
    year?: number | null
    category?: MovieCreatecategoryInput | string[]
    published?: boolean
    authorId: number
    rating?: number | null
    avgRating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    galleryImages?: GalleryImageUncheckedCreateNestedManyWithoutMovieInput
    likes?: LikeUncheckedCreateNestedManyWithoutMovieInput
    watchList?: WatchListItemUncheckedCreateNestedManyWithoutMovieInput
    review?: ReviewUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieCreateOrConnectWithoutCommentsInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutCommentsInput, MovieUncheckedCreateWithoutCommentsInput>
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    refreshToken?: UserUpdaterefreshTokenInput | string[]
    profileViews?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blocked?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: VerifyResetTokenUpdateOneWithoutUserNestedInput
    avatar?: AvatarUpdateOneWithoutUserNestedInput
    visits?: ProfileVisitUpdateManyWithoutUserNestedInput
    movies?: MovieUpdateManyWithoutAuthorNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    chats?: ChatUserUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    watchList?: WatchListItemUpdateManyWithoutUserNestedInput
    review?: ReviewUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    refreshToken?: UserUpdaterefreshTokenInput | string[]
    profileViews?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blocked?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: VerifyResetTokenUncheckedUpdateOneWithoutUserNestedInput
    avatar?: AvatarUncheckedUpdateOneWithoutUserNestedInput
    visits?: ProfileVisitUncheckedUpdateManyWithoutUserNestedInput
    movies?: MovieUncheckedUpdateManyWithoutAuthorNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    chats?: ChatUserUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    watchList?: WatchListItemUncheckedUpdateManyWithoutUserNestedInput
    review?: ReviewUncheckedUpdateOneWithoutUserNestedInput
  }

  export type MovieUpsertWithoutCommentsInput = {
    update: XOR<MovieUpdateWithoutCommentsInput, MovieUncheckedUpdateWithoutCommentsInput>
    create: XOR<MovieCreateWithoutCommentsInput, MovieUncheckedCreateWithoutCommentsInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutCommentsInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutCommentsInput, MovieUncheckedUpdateWithoutCommentsInput>
  }

  export type MovieUpdateWithoutCommentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    category?: MovieUpdatecategoryInput | string[]
    published?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutMoviesNestedInput
    galleryImages?: GalleryImageUpdateManyWithoutMovieNestedInput
    likes?: LikeUpdateManyWithoutMovieNestedInput
    watchList?: WatchListItemUpdateManyWithoutMovieNestedInput
    review?: ReviewUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    category?: MovieUpdatecategoryInput | string[]
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    galleryImages?: GalleryImageUncheckedUpdateManyWithoutMovieNestedInput
    likes?: LikeUncheckedUpdateManyWithoutMovieNestedInput
    watchList?: WatchListItemUncheckedUpdateManyWithoutMovieNestedInput
    review?: ReviewUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type UserCreateWithoutLikesInput = {
    username: string
    email: string
    payment?: string | null
    role?: $Enums.UserRole
    refreshToken?: UserCreaterefreshTokenInput | string[]
    profileViews?: number
    password: string
    isEmailVerified?: boolean | null
    blocked?: boolean
    provider?: string | null
    providerId?: string | null
    googleId?: string | null
    githubId?: string | null
    discordId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    token?: VerifyResetTokenCreateNestedOneWithoutUserInput
    avatar?: AvatarCreateNestedOneWithoutUserInput
    visits?: ProfileVisitCreateNestedManyWithoutUserInput
    movies?: MovieCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    chats?: ChatUserCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutUserInput
    watchList?: WatchListItemCreateNestedManyWithoutUserInput
    review?: ReviewCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikesInput = {
    id?: number
    username: string
    email: string
    payment?: string | null
    role?: $Enums.UserRole
    refreshToken?: UserCreaterefreshTokenInput | string[]
    profileViews?: number
    password: string
    isEmailVerified?: boolean | null
    blocked?: boolean
    provider?: string | null
    providerId?: string | null
    googleId?: string | null
    githubId?: string | null
    discordId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    token?: VerifyResetTokenUncheckedCreateNestedOneWithoutUserInput
    avatar?: AvatarUncheckedCreateNestedOneWithoutUserInput
    visits?: ProfileVisitUncheckedCreateNestedManyWithoutUserInput
    movies?: MovieUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    chats?: ChatUserUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    watchList?: WatchListItemUncheckedCreateNestedManyWithoutUserInput
    review?: ReviewUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
  }

  export type MovieCreateWithoutLikesInput = {
    title: string
    description?: string | null
    slug: string
    year?: number | null
    category?: MovieCreatecategoryInput | string[]
    published?: boolean
    rating?: number | null
    avgRating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutMoviesInput
    galleryImages?: GalleryImageCreateNestedManyWithoutMovieInput
    comments?: CommentCreateNestedManyWithoutMovieInput
    watchList?: WatchListItemCreateNestedManyWithoutMovieInput
    review?: ReviewCreateNestedManyWithoutMovieInput
  }

  export type MovieUncheckedCreateWithoutLikesInput = {
    id?: number
    title: string
    description?: string | null
    slug: string
    year?: number | null
    category?: MovieCreatecategoryInput | string[]
    published?: boolean
    authorId: number
    rating?: number | null
    avgRating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    galleryImages?: GalleryImageUncheckedCreateNestedManyWithoutMovieInput
    comments?: CommentUncheckedCreateNestedManyWithoutMovieInput
    watchList?: WatchListItemUncheckedCreateNestedManyWithoutMovieInput
    review?: ReviewUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieCreateOrConnectWithoutLikesInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutLikesInput, MovieUncheckedCreateWithoutLikesInput>
  }

  export type UserUpsertWithoutLikesInput = {
    update: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateWithoutLikesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    refreshToken?: UserUpdaterefreshTokenInput | string[]
    profileViews?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blocked?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: VerifyResetTokenUpdateOneWithoutUserNestedInput
    avatar?: AvatarUpdateOneWithoutUserNestedInput
    visits?: ProfileVisitUpdateManyWithoutUserNestedInput
    movies?: MovieUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    chats?: ChatUserUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    watchList?: WatchListItemUpdateManyWithoutUserNestedInput
    review?: ReviewUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    refreshToken?: UserUpdaterefreshTokenInput | string[]
    profileViews?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blocked?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: VerifyResetTokenUncheckedUpdateOneWithoutUserNestedInput
    avatar?: AvatarUncheckedUpdateOneWithoutUserNestedInput
    visits?: ProfileVisitUncheckedUpdateManyWithoutUserNestedInput
    movies?: MovieUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    chats?: ChatUserUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    watchList?: WatchListItemUncheckedUpdateManyWithoutUserNestedInput
    review?: ReviewUncheckedUpdateOneWithoutUserNestedInput
  }

  export type MovieUpsertWithoutLikesInput = {
    update: XOR<MovieUpdateWithoutLikesInput, MovieUncheckedUpdateWithoutLikesInput>
    create: XOR<MovieCreateWithoutLikesInput, MovieUncheckedCreateWithoutLikesInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutLikesInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutLikesInput, MovieUncheckedUpdateWithoutLikesInput>
  }

  export type MovieUpdateWithoutLikesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    category?: MovieUpdatecategoryInput | string[]
    published?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutMoviesNestedInput
    galleryImages?: GalleryImageUpdateManyWithoutMovieNestedInput
    comments?: CommentUpdateManyWithoutMovieNestedInput
    watchList?: WatchListItemUpdateManyWithoutMovieNestedInput
    review?: ReviewUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    category?: MovieUpdatecategoryInput | string[]
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    galleryImages?: GalleryImageUncheckedUpdateManyWithoutMovieNestedInput
    comments?: CommentUncheckedUpdateManyWithoutMovieNestedInput
    watchList?: WatchListItemUncheckedUpdateManyWithoutMovieNestedInput
    review?: ReviewUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type ChatUserCreateWithoutChatInput = {
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutChatsInput
  }

  export type ChatUserUncheckedCreateWithoutChatInput = {
    id?: number
    userId: number
    joinedAt?: Date | string
  }

  export type ChatUserCreateOrConnectWithoutChatInput = {
    where: ChatUserWhereUniqueInput
    create: XOR<ChatUserCreateWithoutChatInput, ChatUserUncheckedCreateWithoutChatInput>
  }

  export type ChatUserCreateManyChatInputEnvelope = {
    data: ChatUserCreateManyChatInput | ChatUserCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutChatInput = {
    body: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutChatInput = {
    id?: number
    userId: number
    body: string
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutChatInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageCreateManyChatInputEnvelope = {
    data: MessageCreateManyChatInput | MessageCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type ChatUserUpsertWithWhereUniqueWithoutChatInput = {
    where: ChatUserWhereUniqueInput
    update: XOR<ChatUserUpdateWithoutChatInput, ChatUserUncheckedUpdateWithoutChatInput>
    create: XOR<ChatUserCreateWithoutChatInput, ChatUserUncheckedCreateWithoutChatInput>
  }

  export type ChatUserUpdateWithWhereUniqueWithoutChatInput = {
    where: ChatUserWhereUniqueInput
    data: XOR<ChatUserUpdateWithoutChatInput, ChatUserUncheckedUpdateWithoutChatInput>
  }

  export type ChatUserUpdateManyWithWhereWithoutChatInput = {
    where: ChatUserScalarWhereInput
    data: XOR<ChatUserUpdateManyMutationInput, ChatUserUncheckedUpdateManyWithoutChatInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
  }

  export type MessageUpdateManyWithWhereWithoutChatInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutChatInput>
  }

  export type ChatCreateWithoutUsersInput = {
    title?: string | null
    isGroup?: boolean
    createdAt?: Date | string
    messages?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutUsersInput = {
    id?: number
    title?: string | null
    isGroup?: boolean
    createdAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutUsersInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutUsersInput, ChatUncheckedCreateWithoutUsersInput>
  }

  export type UserCreateWithoutChatsInput = {
    username: string
    email: string
    payment?: string | null
    role?: $Enums.UserRole
    refreshToken?: UserCreaterefreshTokenInput | string[]
    profileViews?: number
    password: string
    isEmailVerified?: boolean | null
    blocked?: boolean
    provider?: string | null
    providerId?: string | null
    googleId?: string | null
    githubId?: string | null
    discordId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    token?: VerifyResetTokenCreateNestedOneWithoutUserInput
    avatar?: AvatarCreateNestedOneWithoutUserInput
    visits?: ProfileVisitCreateNestedManyWithoutUserInput
    movies?: MovieCreateNestedManyWithoutAuthorInput
    likes?: LikeCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutUserInput
    watchList?: WatchListItemCreateNestedManyWithoutUserInput
    review?: ReviewCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatsInput = {
    id?: number
    username: string
    email: string
    payment?: string | null
    role?: $Enums.UserRole
    refreshToken?: UserCreaterefreshTokenInput | string[]
    profileViews?: number
    password: string
    isEmailVerified?: boolean | null
    blocked?: boolean
    provider?: string | null
    providerId?: string | null
    googleId?: string | null
    githubId?: string | null
    discordId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    token?: VerifyResetTokenUncheckedCreateNestedOneWithoutUserInput
    avatar?: AvatarUncheckedCreateNestedOneWithoutUserInput
    visits?: ProfileVisitUncheckedCreateNestedManyWithoutUserInput
    movies?: MovieUncheckedCreateNestedManyWithoutAuthorInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    watchList?: WatchListItemUncheckedCreateNestedManyWithoutUserInput
    review?: ReviewUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput>
  }

  export type ChatUpsertWithoutUsersInput = {
    update: XOR<ChatUpdateWithoutUsersInput, ChatUncheckedUpdateWithoutUsersInput>
    create: XOR<ChatCreateWithoutUsersInput, ChatUncheckedCreateWithoutUsersInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutUsersInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutUsersInput, ChatUncheckedUpdateWithoutUsersInput>
  }

  export type ChatUpdateWithoutUsersInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type UserUpsertWithoutChatsInput = {
    update: XOR<UserUpdateWithoutChatsInput, UserUncheckedUpdateWithoutChatsInput>
    create: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatsInput, UserUncheckedUpdateWithoutChatsInput>
  }

  export type UserUpdateWithoutChatsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    refreshToken?: UserUpdaterefreshTokenInput | string[]
    profileViews?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blocked?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: VerifyResetTokenUpdateOneWithoutUserNestedInput
    avatar?: AvatarUpdateOneWithoutUserNestedInput
    visits?: ProfileVisitUpdateManyWithoutUserNestedInput
    movies?: MovieUpdateManyWithoutAuthorNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    watchList?: WatchListItemUpdateManyWithoutUserNestedInput
    review?: ReviewUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    refreshToken?: UserUpdaterefreshTokenInput | string[]
    profileViews?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blocked?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: VerifyResetTokenUncheckedUpdateOneWithoutUserNestedInput
    avatar?: AvatarUncheckedUpdateOneWithoutUserNestedInput
    visits?: ProfileVisitUncheckedUpdateManyWithoutUserNestedInput
    movies?: MovieUncheckedUpdateManyWithoutAuthorNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    watchList?: WatchListItemUncheckedUpdateManyWithoutUserNestedInput
    review?: ReviewUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ChatCreateWithoutMessagesInput = {
    title?: string | null
    isGroup?: boolean
    createdAt?: Date | string
    users?: ChatUserCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutMessagesInput = {
    id?: number
    title?: string | null
    isGroup?: boolean
    createdAt?: Date | string
    users?: ChatUserUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutMessagesInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
  }

  export type UserCreateWithoutMessagesInput = {
    username: string
    email: string
    payment?: string | null
    role?: $Enums.UserRole
    refreshToken?: UserCreaterefreshTokenInput | string[]
    profileViews?: number
    password: string
    isEmailVerified?: boolean | null
    blocked?: boolean
    provider?: string | null
    providerId?: string | null
    googleId?: string | null
    githubId?: string | null
    discordId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    token?: VerifyResetTokenCreateNestedOneWithoutUserInput
    avatar?: AvatarCreateNestedOneWithoutUserInput
    visits?: ProfileVisitCreateNestedManyWithoutUserInput
    movies?: MovieCreateNestedManyWithoutAuthorInput
    likes?: LikeCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    chats?: ChatUserCreateNestedManyWithoutUserInput
    watchList?: WatchListItemCreateNestedManyWithoutUserInput
    review?: ReviewCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: number
    username: string
    email: string
    payment?: string | null
    role?: $Enums.UserRole
    refreshToken?: UserCreaterefreshTokenInput | string[]
    profileViews?: number
    password: string
    isEmailVerified?: boolean | null
    blocked?: boolean
    provider?: string | null
    providerId?: string | null
    googleId?: string | null
    githubId?: string | null
    discordId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    token?: VerifyResetTokenUncheckedCreateNestedOneWithoutUserInput
    avatar?: AvatarUncheckedCreateNestedOneWithoutUserInput
    visits?: ProfileVisitUncheckedCreateNestedManyWithoutUserInput
    movies?: MovieUncheckedCreateNestedManyWithoutAuthorInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    chats?: ChatUserUncheckedCreateNestedManyWithoutUserInput
    watchList?: WatchListItemUncheckedCreateNestedManyWithoutUserInput
    review?: ReviewUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type ChatUpsertWithoutMessagesInput = {
    update: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatUpdateWithoutMessagesInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: ChatUserUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: ChatUserUncheckedUpdateManyWithoutChatNestedInput
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    refreshToken?: UserUpdaterefreshTokenInput | string[]
    profileViews?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blocked?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: VerifyResetTokenUpdateOneWithoutUserNestedInput
    avatar?: AvatarUpdateOneWithoutUserNestedInput
    visits?: ProfileVisitUpdateManyWithoutUserNestedInput
    movies?: MovieUpdateManyWithoutAuthorNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    chats?: ChatUserUpdateManyWithoutUserNestedInput
    watchList?: WatchListItemUpdateManyWithoutUserNestedInput
    review?: ReviewUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    refreshToken?: UserUpdaterefreshTokenInput | string[]
    profileViews?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blocked?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: VerifyResetTokenUncheckedUpdateOneWithoutUserNestedInput
    avatar?: AvatarUncheckedUpdateOneWithoutUserNestedInput
    visits?: ProfileVisitUncheckedUpdateManyWithoutUserNestedInput
    movies?: MovieUncheckedUpdateManyWithoutAuthorNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    chats?: ChatUserUncheckedUpdateManyWithoutUserNestedInput
    watchList?: WatchListItemUncheckedUpdateManyWithoutUserNestedInput
    review?: ReviewUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutOrdersInput = {
    username: string
    email: string
    payment?: string | null
    role?: $Enums.UserRole
    refreshToken?: UserCreaterefreshTokenInput | string[]
    profileViews?: number
    password: string
    isEmailVerified?: boolean | null
    blocked?: boolean
    provider?: string | null
    providerId?: string | null
    googleId?: string | null
    githubId?: string | null
    discordId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    token?: VerifyResetTokenCreateNestedOneWithoutUserInput
    avatar?: AvatarCreateNestedOneWithoutUserInput
    visits?: ProfileVisitCreateNestedManyWithoutUserInput
    movies?: MovieCreateNestedManyWithoutAuthorInput
    likes?: LikeCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    chats?: ChatUserCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutUserInput
    watchList?: WatchListItemCreateNestedManyWithoutUserInput
    review?: ReviewCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: number
    username: string
    email: string
    payment?: string | null
    role?: $Enums.UserRole
    refreshToken?: UserCreaterefreshTokenInput | string[]
    profileViews?: number
    password: string
    isEmailVerified?: boolean | null
    blocked?: boolean
    provider?: string | null
    providerId?: string | null
    googleId?: string | null
    githubId?: string | null
    discordId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    token?: VerifyResetTokenUncheckedCreateNestedOneWithoutUserInput
    avatar?: AvatarUncheckedCreateNestedOneWithoutUserInput
    visits?: ProfileVisitUncheckedCreateNestedManyWithoutUserInput
    movies?: MovieUncheckedCreateNestedManyWithoutAuthorInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    chats?: ChatUserUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    watchList?: WatchListItemUncheckedCreateNestedManyWithoutUserInput
    review?: ReviewUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    refreshToken?: UserUpdaterefreshTokenInput | string[]
    profileViews?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blocked?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: VerifyResetTokenUpdateOneWithoutUserNestedInput
    avatar?: AvatarUpdateOneWithoutUserNestedInput
    visits?: ProfileVisitUpdateManyWithoutUserNestedInput
    movies?: MovieUpdateManyWithoutAuthorNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    chats?: ChatUserUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    watchList?: WatchListItemUpdateManyWithoutUserNestedInput
    review?: ReviewUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    refreshToken?: UserUpdaterefreshTokenInput | string[]
    profileViews?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blocked?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: VerifyResetTokenUncheckedUpdateOneWithoutUserNestedInput
    avatar?: AvatarUncheckedUpdateOneWithoutUserNestedInput
    visits?: ProfileVisitUncheckedUpdateManyWithoutUserNestedInput
    movies?: MovieUncheckedUpdateManyWithoutAuthorNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    chats?: ChatUserUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    watchList?: WatchListItemUncheckedUpdateManyWithoutUserNestedInput
    review?: ReviewUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutWatchListInput = {
    username: string
    email: string
    payment?: string | null
    role?: $Enums.UserRole
    refreshToken?: UserCreaterefreshTokenInput | string[]
    profileViews?: number
    password: string
    isEmailVerified?: boolean | null
    blocked?: boolean
    provider?: string | null
    providerId?: string | null
    googleId?: string | null
    githubId?: string | null
    discordId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    token?: VerifyResetTokenCreateNestedOneWithoutUserInput
    avatar?: AvatarCreateNestedOneWithoutUserInput
    visits?: ProfileVisitCreateNestedManyWithoutUserInput
    movies?: MovieCreateNestedManyWithoutAuthorInput
    likes?: LikeCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    chats?: ChatUserCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutUserInput
    review?: ReviewCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWatchListInput = {
    id?: number
    username: string
    email: string
    payment?: string | null
    role?: $Enums.UserRole
    refreshToken?: UserCreaterefreshTokenInput | string[]
    profileViews?: number
    password: string
    isEmailVerified?: boolean | null
    blocked?: boolean
    provider?: string | null
    providerId?: string | null
    googleId?: string | null
    githubId?: string | null
    discordId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    token?: VerifyResetTokenUncheckedCreateNestedOneWithoutUserInput
    avatar?: AvatarUncheckedCreateNestedOneWithoutUserInput
    visits?: ProfileVisitUncheckedCreateNestedManyWithoutUserInput
    movies?: MovieUncheckedCreateNestedManyWithoutAuthorInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    chats?: ChatUserUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    review?: ReviewUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWatchListInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWatchListInput, UserUncheckedCreateWithoutWatchListInput>
  }

  export type MovieCreateWithoutWatchListInput = {
    title: string
    description?: string | null
    slug: string
    year?: number | null
    category?: MovieCreatecategoryInput | string[]
    published?: boolean
    rating?: number | null
    avgRating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutMoviesInput
    galleryImages?: GalleryImageCreateNestedManyWithoutMovieInput
    comments?: CommentCreateNestedManyWithoutMovieInput
    likes?: LikeCreateNestedManyWithoutMovieInput
    review?: ReviewCreateNestedManyWithoutMovieInput
  }

  export type MovieUncheckedCreateWithoutWatchListInput = {
    id?: number
    title: string
    description?: string | null
    slug: string
    year?: number | null
    category?: MovieCreatecategoryInput | string[]
    published?: boolean
    authorId: number
    rating?: number | null
    avgRating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    galleryImages?: GalleryImageUncheckedCreateNestedManyWithoutMovieInput
    comments?: CommentUncheckedCreateNestedManyWithoutMovieInput
    likes?: LikeUncheckedCreateNestedManyWithoutMovieInput
    review?: ReviewUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieCreateOrConnectWithoutWatchListInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutWatchListInput, MovieUncheckedCreateWithoutWatchListInput>
  }

  export type UserUpsertWithoutWatchListInput = {
    update: XOR<UserUpdateWithoutWatchListInput, UserUncheckedUpdateWithoutWatchListInput>
    create: XOR<UserCreateWithoutWatchListInput, UserUncheckedCreateWithoutWatchListInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWatchListInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWatchListInput, UserUncheckedUpdateWithoutWatchListInput>
  }

  export type UserUpdateWithoutWatchListInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    refreshToken?: UserUpdaterefreshTokenInput | string[]
    profileViews?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blocked?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: VerifyResetTokenUpdateOneWithoutUserNestedInput
    avatar?: AvatarUpdateOneWithoutUserNestedInput
    visits?: ProfileVisitUpdateManyWithoutUserNestedInput
    movies?: MovieUpdateManyWithoutAuthorNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    chats?: ChatUserUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    review?: ReviewUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWatchListInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    refreshToken?: UserUpdaterefreshTokenInput | string[]
    profileViews?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blocked?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: VerifyResetTokenUncheckedUpdateOneWithoutUserNestedInput
    avatar?: AvatarUncheckedUpdateOneWithoutUserNestedInput
    visits?: ProfileVisitUncheckedUpdateManyWithoutUserNestedInput
    movies?: MovieUncheckedUpdateManyWithoutAuthorNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    chats?: ChatUserUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    review?: ReviewUncheckedUpdateOneWithoutUserNestedInput
  }

  export type MovieUpsertWithoutWatchListInput = {
    update: XOR<MovieUpdateWithoutWatchListInput, MovieUncheckedUpdateWithoutWatchListInput>
    create: XOR<MovieCreateWithoutWatchListInput, MovieUncheckedCreateWithoutWatchListInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutWatchListInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutWatchListInput, MovieUncheckedUpdateWithoutWatchListInput>
  }

  export type MovieUpdateWithoutWatchListInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    category?: MovieUpdatecategoryInput | string[]
    published?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutMoviesNestedInput
    galleryImages?: GalleryImageUpdateManyWithoutMovieNestedInput
    comments?: CommentUpdateManyWithoutMovieNestedInput
    likes?: LikeUpdateManyWithoutMovieNestedInput
    review?: ReviewUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateWithoutWatchListInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    category?: MovieUpdatecategoryInput | string[]
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    galleryImages?: GalleryImageUncheckedUpdateManyWithoutMovieNestedInput
    comments?: CommentUncheckedUpdateManyWithoutMovieNestedInput
    likes?: LikeUncheckedUpdateManyWithoutMovieNestedInput
    review?: ReviewUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type UserCreateWithoutAvatarInput = {
    username: string
    email: string
    payment?: string | null
    role?: $Enums.UserRole
    refreshToken?: UserCreaterefreshTokenInput | string[]
    profileViews?: number
    password: string
    isEmailVerified?: boolean | null
    blocked?: boolean
    provider?: string | null
    providerId?: string | null
    googleId?: string | null
    githubId?: string | null
    discordId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    token?: VerifyResetTokenCreateNestedOneWithoutUserInput
    visits?: ProfileVisitCreateNestedManyWithoutUserInput
    movies?: MovieCreateNestedManyWithoutAuthorInput
    likes?: LikeCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    chats?: ChatUserCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutUserInput
    watchList?: WatchListItemCreateNestedManyWithoutUserInput
    review?: ReviewCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAvatarInput = {
    id?: number
    username: string
    email: string
    payment?: string | null
    role?: $Enums.UserRole
    refreshToken?: UserCreaterefreshTokenInput | string[]
    profileViews?: number
    password: string
    isEmailVerified?: boolean | null
    blocked?: boolean
    provider?: string | null
    providerId?: string | null
    googleId?: string | null
    githubId?: string | null
    discordId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    token?: VerifyResetTokenUncheckedCreateNestedOneWithoutUserInput
    visits?: ProfileVisitUncheckedCreateNestedManyWithoutUserInput
    movies?: MovieUncheckedCreateNestedManyWithoutAuthorInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    chats?: ChatUserUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    watchList?: WatchListItemUncheckedCreateNestedManyWithoutUserInput
    review?: ReviewUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAvatarInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAvatarInput, UserUncheckedCreateWithoutAvatarInput>
  }

  export type UserUpsertWithoutAvatarInput = {
    update: XOR<UserUpdateWithoutAvatarInput, UserUncheckedUpdateWithoutAvatarInput>
    create: XOR<UserCreateWithoutAvatarInput, UserUncheckedCreateWithoutAvatarInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAvatarInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAvatarInput, UserUncheckedUpdateWithoutAvatarInput>
  }

  export type UserUpdateWithoutAvatarInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    refreshToken?: UserUpdaterefreshTokenInput | string[]
    profileViews?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blocked?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: VerifyResetTokenUpdateOneWithoutUserNestedInput
    visits?: ProfileVisitUpdateManyWithoutUserNestedInput
    movies?: MovieUpdateManyWithoutAuthorNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    chats?: ChatUserUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    watchList?: WatchListItemUpdateManyWithoutUserNestedInput
    review?: ReviewUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAvatarInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    refreshToken?: UserUpdaterefreshTokenInput | string[]
    profileViews?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blocked?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: VerifyResetTokenUncheckedUpdateOneWithoutUserNestedInput
    visits?: ProfileVisitUncheckedUpdateManyWithoutUserNestedInput
    movies?: MovieUncheckedUpdateManyWithoutAuthorNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    chats?: ChatUserUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    watchList?: WatchListItemUncheckedUpdateManyWithoutUserNestedInput
    review?: ReviewUncheckedUpdateOneWithoutUserNestedInput
  }

  export type MovieCreateWithoutGalleryImagesInput = {
    title: string
    description?: string | null
    slug: string
    year?: number | null
    category?: MovieCreatecategoryInput | string[]
    published?: boolean
    rating?: number | null
    avgRating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutMoviesInput
    comments?: CommentCreateNestedManyWithoutMovieInput
    likes?: LikeCreateNestedManyWithoutMovieInput
    watchList?: WatchListItemCreateNestedManyWithoutMovieInput
    review?: ReviewCreateNestedManyWithoutMovieInput
  }

  export type MovieUncheckedCreateWithoutGalleryImagesInput = {
    id?: number
    title: string
    description?: string | null
    slug: string
    year?: number | null
    category?: MovieCreatecategoryInput | string[]
    published?: boolean
    authorId: number
    rating?: number | null
    avgRating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutMovieInput
    likes?: LikeUncheckedCreateNestedManyWithoutMovieInput
    watchList?: WatchListItemUncheckedCreateNestedManyWithoutMovieInput
    review?: ReviewUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieCreateOrConnectWithoutGalleryImagesInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutGalleryImagesInput, MovieUncheckedCreateWithoutGalleryImagesInput>
  }

  export type MovieUpsertWithoutGalleryImagesInput = {
    update: XOR<MovieUpdateWithoutGalleryImagesInput, MovieUncheckedUpdateWithoutGalleryImagesInput>
    create: XOR<MovieCreateWithoutGalleryImagesInput, MovieUncheckedCreateWithoutGalleryImagesInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutGalleryImagesInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutGalleryImagesInput, MovieUncheckedUpdateWithoutGalleryImagesInput>
  }

  export type MovieUpdateWithoutGalleryImagesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    category?: MovieUpdatecategoryInput | string[]
    published?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutMoviesNestedInput
    comments?: CommentUpdateManyWithoutMovieNestedInput
    likes?: LikeUpdateManyWithoutMovieNestedInput
    watchList?: WatchListItemUpdateManyWithoutMovieNestedInput
    review?: ReviewUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateWithoutGalleryImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    category?: MovieUpdatecategoryInput | string[]
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutMovieNestedInput
    likes?: LikeUncheckedUpdateManyWithoutMovieNestedInput
    watchList?: WatchListItemUncheckedUpdateManyWithoutMovieNestedInput
    review?: ReviewUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type MovieCreateWithoutReviewInput = {
    title: string
    description?: string | null
    slug: string
    year?: number | null
    category?: MovieCreatecategoryInput | string[]
    published?: boolean
    rating?: number | null
    avgRating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutMoviesInput
    galleryImages?: GalleryImageCreateNestedManyWithoutMovieInput
    comments?: CommentCreateNestedManyWithoutMovieInput
    likes?: LikeCreateNestedManyWithoutMovieInput
    watchList?: WatchListItemCreateNestedManyWithoutMovieInput
  }

  export type MovieUncheckedCreateWithoutReviewInput = {
    id?: number
    title: string
    description?: string | null
    slug: string
    year?: number | null
    category?: MovieCreatecategoryInput | string[]
    published?: boolean
    authorId: number
    rating?: number | null
    avgRating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    galleryImages?: GalleryImageUncheckedCreateNestedManyWithoutMovieInput
    comments?: CommentUncheckedCreateNestedManyWithoutMovieInput
    likes?: LikeUncheckedCreateNestedManyWithoutMovieInput
    watchList?: WatchListItemUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieCreateOrConnectWithoutReviewInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutReviewInput, MovieUncheckedCreateWithoutReviewInput>
  }

  export type UserCreateWithoutReviewInput = {
    username: string
    email: string
    payment?: string | null
    role?: $Enums.UserRole
    refreshToken?: UserCreaterefreshTokenInput | string[]
    profileViews?: number
    password: string
    isEmailVerified?: boolean | null
    blocked?: boolean
    provider?: string | null
    providerId?: string | null
    googleId?: string | null
    githubId?: string | null
    discordId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    token?: VerifyResetTokenCreateNestedOneWithoutUserInput
    avatar?: AvatarCreateNestedOneWithoutUserInput
    visits?: ProfileVisitCreateNestedManyWithoutUserInput
    movies?: MovieCreateNestedManyWithoutAuthorInput
    likes?: LikeCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    chats?: ChatUserCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutUserInput
    watchList?: WatchListItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewInput = {
    id?: number
    username: string
    email: string
    payment?: string | null
    role?: $Enums.UserRole
    refreshToken?: UserCreaterefreshTokenInput | string[]
    profileViews?: number
    password: string
    isEmailVerified?: boolean | null
    blocked?: boolean
    provider?: string | null
    providerId?: string | null
    googleId?: string | null
    githubId?: string | null
    discordId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    token?: VerifyResetTokenUncheckedCreateNestedOneWithoutUserInput
    avatar?: AvatarUncheckedCreateNestedOneWithoutUserInput
    visits?: ProfileVisitUncheckedCreateNestedManyWithoutUserInput
    movies?: MovieUncheckedCreateNestedManyWithoutAuthorInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    chats?: ChatUserUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    watchList?: WatchListItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
  }

  export type MovieUpsertWithoutReviewInput = {
    update: XOR<MovieUpdateWithoutReviewInput, MovieUncheckedUpdateWithoutReviewInput>
    create: XOR<MovieCreateWithoutReviewInput, MovieUncheckedCreateWithoutReviewInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutReviewInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutReviewInput, MovieUncheckedUpdateWithoutReviewInput>
  }

  export type MovieUpdateWithoutReviewInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    category?: MovieUpdatecategoryInput | string[]
    published?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutMoviesNestedInput
    galleryImages?: GalleryImageUpdateManyWithoutMovieNestedInput
    comments?: CommentUpdateManyWithoutMovieNestedInput
    likes?: LikeUpdateManyWithoutMovieNestedInput
    watchList?: WatchListItemUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    category?: MovieUpdatecategoryInput | string[]
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    galleryImages?: GalleryImageUncheckedUpdateManyWithoutMovieNestedInput
    comments?: CommentUncheckedUpdateManyWithoutMovieNestedInput
    likes?: LikeUncheckedUpdateManyWithoutMovieNestedInput
    watchList?: WatchListItemUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type UserUpsertWithoutReviewInput = {
    update: XOR<UserUpdateWithoutReviewInput, UserUncheckedUpdateWithoutReviewInput>
    create: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewInput, UserUncheckedUpdateWithoutReviewInput>
  }

  export type UserUpdateWithoutReviewInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    refreshToken?: UserUpdaterefreshTokenInput | string[]
    profileViews?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blocked?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: VerifyResetTokenUpdateOneWithoutUserNestedInput
    avatar?: AvatarUpdateOneWithoutUserNestedInput
    visits?: ProfileVisitUpdateManyWithoutUserNestedInput
    movies?: MovieUpdateManyWithoutAuthorNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    chats?: ChatUserUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    watchList?: WatchListItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    refreshToken?: UserUpdaterefreshTokenInput | string[]
    profileViews?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blocked?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: VerifyResetTokenUncheckedUpdateOneWithoutUserNestedInput
    avatar?: AvatarUncheckedUpdateOneWithoutUserNestedInput
    visits?: ProfileVisitUncheckedUpdateManyWithoutUserNestedInput
    movies?: MovieUncheckedUpdateManyWithoutAuthorNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    chats?: ChatUserUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    watchList?: WatchListItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProfileVisitCreateManyUserInput = {
    id?: number
    ipHash: string
    viewCount?: number
    visitDate?: Date | string
    updatedAt?: Date | string
  }

  export type MovieCreateManyAuthorInput = {
    id?: number
    title: string
    description?: string | null
    slug: string
    year?: number | null
    category?: MovieCreatecategoryInput | string[]
    published?: boolean
    rating?: number | null
    avgRating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikeCreateManyUserInput = {
    id?: number
    movieId: number
    createdAt?: Date | string
  }

  export type CommentCreateManyUserInput = {
    id?: number
    movieId: number
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateManyUserInput = {
    id?: number
    provider: string
    providerId?: string | null
    amount: number
    currency?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatUserCreateManyUserInput = {
    id?: number
    chatId: number
    joinedAt?: Date | string
  }

  export type MessageCreateManyUserInput = {
    id?: number
    chatId: number
    body: string
    createdAt?: Date | string
  }

  export type WatchListItemCreateManyUserInput = {
    id?: string
    movieId: number
    createdAt?: Date | string
  }

  export type ProfileVisitUpdateWithoutUserInput = {
    ipHash?: StringFieldUpdateOperationsInput | string
    viewCount?: IntFieldUpdateOperationsInput | number
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileVisitUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    ipHash?: StringFieldUpdateOperationsInput | string
    viewCount?: IntFieldUpdateOperationsInput | number
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileVisitUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    ipHash?: StringFieldUpdateOperationsInput | string
    viewCount?: IntFieldUpdateOperationsInput | number
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    category?: MovieUpdatecategoryInput | string[]
    published?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    galleryImages?: GalleryImageUpdateManyWithoutMovieNestedInput
    comments?: CommentUpdateManyWithoutMovieNestedInput
    likes?: LikeUpdateManyWithoutMovieNestedInput
    watchList?: WatchListItemUpdateManyWithoutMovieNestedInput
    review?: ReviewUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    category?: MovieUpdatecategoryInput | string[]
    published?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    galleryImages?: GalleryImageUncheckedUpdateManyWithoutMovieNestedInput
    comments?: CommentUncheckedUpdateManyWithoutMovieNestedInput
    likes?: LikeUncheckedUpdateManyWithoutMovieNestedInput
    watchList?: WatchListItemUncheckedUpdateManyWithoutMovieNestedInput
    review?: ReviewUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    category?: MovieUpdatecategoryInput | string[]
    published?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutUserInput = {
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutUserInput = {
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUserUpdateWithoutUserInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutUsersNestedInput
  }

  export type ChatUserUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUserUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutUserInput = {
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatId?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatId?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchListItemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUpdateOneRequiredWithoutWatchListNestedInput
  }

  export type WatchListItemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    movieId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchListItemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    movieId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryImageCreateManyMovieInput = {
    id?: number
    url: string
    publicId: string
    createdAt?: Date | string
  }

  export type CommentCreateManyMovieInput = {
    id?: number
    userId: number
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikeCreateManyMovieInput = {
    id?: number
    userId: number
    createdAt?: Date | string
  }

  export type WatchListItemCreateManyMovieInput = {
    id?: string
    userId: number
    createdAt?: Date | string
  }

  export type ReviewCreateManyMovieInput = {
    id?: number
    userId: number
    text: string
    feedback: $Enums.Recommended
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleryImageUpdateWithoutMovieInput = {
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryImageUncheckedUpdateWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryImageUncheckedUpdateManyWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutMovieInput = {
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUpdateWithoutMovieInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchListItemUpdateWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWatchListNestedInput
  }

  export type WatchListItemUncheckedUpdateWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchListItemUncheckedUpdateManyWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutMovieInput = {
    text?: StringFieldUpdateOperationsInput | string
    feedback?: EnumRecommendedFieldUpdateOperationsInput | $Enums.Recommended
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    feedback?: EnumRecommendedFieldUpdateOperationsInput | $Enums.Recommended
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    feedback?: EnumRecommendedFieldUpdateOperationsInput | $Enums.Recommended
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUserCreateManyChatInput = {
    id?: number
    userId: number
    joinedAt?: Date | string
  }

  export type MessageCreateManyChatInput = {
    id?: number
    userId: number
    body: string
    createdAt?: Date | string
  }

  export type ChatUserUpdateWithoutChatInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatsNestedInput
  }

  export type ChatUserUncheckedUpdateWithoutChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUserUncheckedUpdateManyWithoutChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutChatInput = {
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MovieCountOutputTypeDefaultArgs instead
     */
    export type MovieCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MovieCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatCountOutputTypeDefaultArgs instead
     */
    export type ChatCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProfileVisitDefaultArgs instead
     */
    export type ProfileVisitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProfileVisitDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MovieDefaultArgs instead
     */
    export type MovieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MovieDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FeedbackDefaultArgs instead
     */
    export type FeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FeedbackDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VerifyResetTokenDefaultArgs instead
     */
    export type VerifyResetTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VerifyResetTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommentDefaultArgs instead
     */
    export type CommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LikeDefaultArgs instead
     */
    export type LikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LikeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatDefaultArgs instead
     */
    export type ChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatUserDefaultArgs instead
     */
    export type ChatUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatUserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MessageDefaultArgs instead
     */
    export type MessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MessageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderDefaultArgs instead
     */
    export type OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WatchListItemDefaultArgs instead
     */
    export type WatchListItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WatchListItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AvatarDefaultArgs instead
     */
    export type AvatarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AvatarDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GalleryImageDefaultArgs instead
     */
    export type GalleryImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GalleryImageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReviewDefaultArgs instead
     */
    export type ReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReviewDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}