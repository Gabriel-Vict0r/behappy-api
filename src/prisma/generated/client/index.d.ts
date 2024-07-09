
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
 * Model admin
 * 
 */
export type admin = $Result.DefaultSelection<Prisma.$adminPayload>
/**
 * Model location
 * 
 */
export type location = $Result.DefaultSelection<Prisma.$locationPayload>
/**
 * Model orphanage
 * 
 */
export type orphanage = $Result.DefaultSelection<Prisma.$orphanagePayload>
/**
 * Model picture
 * 
 */
export type picture = $Result.DefaultSelection<Prisma.$picturePayload>
/**
 * Model hours
 * 
 */
export type hours = $Result.DefaultSelection<Prisma.$hoursPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.adminDelegate<ExtArgs>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.locationDelegate<ExtArgs>;

  /**
   * `prisma.orphanage`: Exposes CRUD operations for the **orphanage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orphanages
    * const orphanages = await prisma.orphanage.findMany()
    * ```
    */
  get orphanage(): Prisma.orphanageDelegate<ExtArgs>;

  /**
   * `prisma.picture`: Exposes CRUD operations for the **picture** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pictures
    * const pictures = await prisma.picture.findMany()
    * ```
    */
  get picture(): Prisma.pictureDelegate<ExtArgs>;

  /**
   * `prisma.hours`: Exposes CRUD operations for the **hours** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hours
    * const hours = await prisma.hours.findMany()
    * ```
    */
  get hours(): Prisma.hoursDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.15.1
   * Query Engine version: 5675a3182f972f1a8f31d16eee6abf4fd54910e3
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
    admin: 'admin',
    location: 'location',
    orphanage: 'orphanage',
    picture: 'picture',
    hours: 'hours'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'admin' | 'location' | 'orphanage' | 'picture' | 'hours'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      admin: {
        payload: Prisma.$adminPayload<ExtArgs>
        fields: Prisma.adminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findFirst: {
            args: Prisma.adminFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findMany: {
            args: Prisma.adminFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          create: {
            args: Prisma.adminCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          createMany: {
            args: Prisma.adminCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.adminCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          delete: {
            args: Prisma.adminDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          update: {
            args: Prisma.adminUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          deleteMany: {
            args: Prisma.adminDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.adminUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.adminUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.adminGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminCountArgs<ExtArgs>,
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      location: {
        payload: Prisma.$locationPayload<ExtArgs>
        fields: Prisma.locationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.locationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$locationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.locationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$locationPayload>
          }
          findFirst: {
            args: Prisma.locationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$locationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.locationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$locationPayload>
          }
          findMany: {
            args: Prisma.locationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$locationPayload>[]
          }
          create: {
            args: Prisma.locationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$locationPayload>
          }
          createMany: {
            args: Prisma.locationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.locationCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$locationPayload>[]
          }
          delete: {
            args: Prisma.locationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$locationPayload>
          }
          update: {
            args: Prisma.locationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$locationPayload>
          }
          deleteMany: {
            args: Prisma.locationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.locationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.locationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$locationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.locationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.locationCountArgs<ExtArgs>,
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      orphanage: {
        payload: Prisma.$orphanagePayload<ExtArgs>
        fields: Prisma.orphanageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.orphanageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$orphanagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.orphanageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$orphanagePayload>
          }
          findFirst: {
            args: Prisma.orphanageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$orphanagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.orphanageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$orphanagePayload>
          }
          findMany: {
            args: Prisma.orphanageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$orphanagePayload>[]
          }
          create: {
            args: Prisma.orphanageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$orphanagePayload>
          }
          createMany: {
            args: Prisma.orphanageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.orphanageCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$orphanagePayload>[]
          }
          delete: {
            args: Prisma.orphanageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$orphanagePayload>
          }
          update: {
            args: Prisma.orphanageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$orphanagePayload>
          }
          deleteMany: {
            args: Prisma.orphanageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.orphanageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.orphanageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$orphanagePayload>
          }
          aggregate: {
            args: Prisma.OrphanageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrphanage>
          }
          groupBy: {
            args: Prisma.orphanageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrphanageGroupByOutputType>[]
          }
          count: {
            args: Prisma.orphanageCountArgs<ExtArgs>,
            result: $Utils.Optional<OrphanageCountAggregateOutputType> | number
          }
        }
      }
      picture: {
        payload: Prisma.$picturePayload<ExtArgs>
        fields: Prisma.pictureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pictureFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$picturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pictureFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$picturePayload>
          }
          findFirst: {
            args: Prisma.pictureFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$picturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pictureFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$picturePayload>
          }
          findMany: {
            args: Prisma.pictureFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$picturePayload>[]
          }
          create: {
            args: Prisma.pictureCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$picturePayload>
          }
          createMany: {
            args: Prisma.pictureCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pictureCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$picturePayload>[]
          }
          delete: {
            args: Prisma.pictureDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$picturePayload>
          }
          update: {
            args: Prisma.pictureUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$picturePayload>
          }
          deleteMany: {
            args: Prisma.pictureDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.pictureUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.pictureUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$picturePayload>
          }
          aggregate: {
            args: Prisma.PictureAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePicture>
          }
          groupBy: {
            args: Prisma.pictureGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PictureGroupByOutputType>[]
          }
          count: {
            args: Prisma.pictureCountArgs<ExtArgs>,
            result: $Utils.Optional<PictureCountAggregateOutputType> | number
          }
        }
      }
      hours: {
        payload: Prisma.$hoursPayload<ExtArgs>
        fields: Prisma.hoursFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hoursFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$hoursPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hoursFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$hoursPayload>
          }
          findFirst: {
            args: Prisma.hoursFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$hoursPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hoursFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$hoursPayload>
          }
          findMany: {
            args: Prisma.hoursFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$hoursPayload>[]
          }
          create: {
            args: Prisma.hoursCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$hoursPayload>
          }
          createMany: {
            args: Prisma.hoursCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.hoursCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$hoursPayload>[]
          }
          delete: {
            args: Prisma.hoursDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$hoursPayload>
          }
          update: {
            args: Prisma.hoursUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$hoursPayload>
          }
          deleteMany: {
            args: Prisma.hoursDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.hoursUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.hoursUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$hoursPayload>
          }
          aggregate: {
            args: Prisma.HoursAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHours>
          }
          groupBy: {
            args: Prisma.hoursGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HoursGroupByOutputType>[]
          }
          count: {
            args: Prisma.hoursCountArgs<ExtArgs>,
            result: $Utils.Optional<HoursCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    orphanage: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orphanage?: boolean | LocationCountOutputTypeCountOrphanageArgs
  }

  // Custom InputTypes
  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountOrphanageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orphanageWhereInput
  }


  /**
   * Count Type OrphanageCountOutputType
   */

  export type OrphanageCountOutputType = {
    hours: number
    pictures: number
  }

  export type OrphanageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hours?: boolean | OrphanageCountOutputTypeCountHoursArgs
    pictures?: boolean | OrphanageCountOutputTypeCountPicturesArgs
  }

  // Custom InputTypes
  /**
   * OrphanageCountOutputType without action
   */
  export type OrphanageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrphanageCountOutputType
     */
    select?: OrphanageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrphanageCountOutputType without action
   */
  export type OrphanageCountOutputTypeCountHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hoursWhereInput
  }

  /**
   * OrphanageCountOutputType without action
   */
  export type OrphanageCountOutputTypeCountPicturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pictureWhereInput
  }


  /**
   * Models
   */

  /**
   * Model admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin to aggregate.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type adminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminWhereInput
    orderBy?: adminOrderByWithAggregationInput | adminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: adminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends adminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type adminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["admin"]>

  export type adminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["admin"]>

  export type adminSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }


  export type $adminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type adminGetPayload<S extends boolean | null | undefined | adminDefaultArgs> = $Result.GetResult<Prisma.$adminPayload, S>

  type adminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<adminFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface adminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin'], meta: { name: 'admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {adminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends adminFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, adminFindUniqueArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {adminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends adminFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, adminFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends adminFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, adminFindFirstArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends adminFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, adminFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends adminFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, adminFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Admin.
     * @param {adminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
    **/
    create<T extends adminCreateArgs<ExtArgs>>(
      args: SelectSubset<T, adminCreateArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Admins.
     * @param {adminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends adminCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, adminCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {adminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends adminCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, adminCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Admin.
     * @param {adminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
    **/
    delete<T extends adminDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, adminDeleteArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Admin.
     * @param {adminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends adminUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, adminUpdateArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Admins.
     * @param {adminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends adminDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, adminDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends adminUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, adminUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {adminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
    **/
    upsert<T extends adminUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, adminUpsertArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminCountArgs>(
      args?: Subset<T, adminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminGroupByArgs} args - Group by arguments.
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
      T extends adminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminGroupByArgs['orderBy'] }
        : { orderBy?: adminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, adminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin model
   */
  readonly fields: adminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the admin model
   */ 
  interface adminFieldRefs {
    readonly id: FieldRef<"admin", 'Int'>
    readonly name: FieldRef<"admin", 'String'>
    readonly email: FieldRef<"admin", 'String'>
    readonly password: FieldRef<"admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * admin findUnique
   */
  export type adminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findUniqueOrThrow
   */
  export type adminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findFirst
   */
  export type adminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findFirstOrThrow
   */
  export type adminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findMany
   */
  export type adminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin create
   */
  export type adminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * The data needed to create a admin.
     */
    data: XOR<adminCreateInput, adminUncheckedCreateInput>
  }

  /**
   * admin createMany
   */
  export type adminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin createManyAndReturn
   */
  export type adminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin update
   */
  export type adminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * The data needed to update a admin.
     */
    data: XOR<adminUpdateInput, adminUncheckedUpdateInput>
    /**
     * Choose, which admin to update.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin updateMany
   */
  export type adminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
  }

  /**
   * admin upsert
   */
  export type adminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * The filter to search for the admin to update in case it exists.
     */
    where: adminWhereUniqueInput
    /**
     * In case the admin found by the `where` argument doesn't exist, create a new admin with this data.
     */
    create: XOR<adminCreateInput, adminUncheckedCreateInput>
    /**
     * In case the admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminUpdateInput, adminUncheckedUpdateInput>
  }

  /**
   * admin delete
   */
  export type adminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Filter which admin to delete.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin deleteMany
   */
  export type adminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to delete
     */
    where?: adminWhereInput
  }

  /**
   * admin without action
   */
  export type adminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
  }


  /**
   * Model location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationAvgAggregateOutputType = {
    id: number | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type LocationSumAggregateOutputType = {
    id: number | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type LocationMinAggregateOutputType = {
    id: number | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type LocationMaxAggregateOutputType = {
    id: number | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    latitude: number
    longitude: number
    _all: number
  }


  export type LocationAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type LocationSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type LocationMinAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which location to aggregate.
     */
    where?: locationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of locations to fetch.
     */
    orderBy?: locationOrderByWithRelationInput | locationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: locationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type locationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: locationWhereInput
    orderBy?: locationOrderByWithAggregationInput | locationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: locationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _avg?: LocationAvgAggregateInputType
    _sum?: LocationSumAggregateInputType
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: number
    latitude: Decimal
    longitude: Decimal
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends locationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type locationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    latitude?: boolean
    longitude?: boolean
    orphanage?: boolean | location$orphanageArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type locationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    latitude?: boolean
    longitude?: boolean
  }, ExtArgs["result"]["location"]>

  export type locationSelectScalar = {
    id?: boolean
    latitude?: boolean
    longitude?: boolean
  }

  export type locationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orphanage?: boolean | location$orphanageArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type locationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $locationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "location"
    objects: {
      orphanage: Prisma.$orphanagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      latitude: Prisma.Decimal
      longitude: Prisma.Decimal
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type locationGetPayload<S extends boolean | null | undefined | locationDefaultArgs> = $Result.GetResult<Prisma.$locationPayload, S>

  type locationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<locationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface locationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['location'], meta: { name: 'location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {locationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends locationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, locationFindUniqueArgs<ExtArgs>>
    ): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {locationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends locationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, locationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends locationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, locationFindFirstArgs<ExtArgs>>
    ): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends locationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, locationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends locationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, locationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Location.
     * @param {locationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
    **/
    create<T extends locationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, locationCreateArgs<ExtArgs>>
    ): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Locations.
     * @param {locationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends locationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, locationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {locationCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends locationCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, locationCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Location.
     * @param {locationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
    **/
    delete<T extends locationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, locationDeleteArgs<ExtArgs>>
    ): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Location.
     * @param {locationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends locationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, locationUpdateArgs<ExtArgs>>
    ): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Locations.
     * @param {locationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends locationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, locationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends locationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, locationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Location.
     * @param {locationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
    **/
    upsert<T extends locationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, locationUpsertArgs<ExtArgs>>
    ): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends locationCountArgs>(
      args?: Subset<T, locationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationGroupByArgs} args - Group by arguments.
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
      T extends locationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: locationGroupByArgs['orderBy'] }
        : { orderBy?: locationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, locationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the location model
   */
  readonly fields: locationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__locationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    orphanage<T extends location$orphanageArgs<ExtArgs> = {}>(args?: Subset<T, location$orphanageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orphanagePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the location model
   */ 
  interface locationFieldRefs {
    readonly id: FieldRef<"location", 'Int'>
    readonly latitude: FieldRef<"location", 'Decimal'>
    readonly longitude: FieldRef<"location", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * location findUnique
   */
  export type locationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationInclude<ExtArgs> | null
    /**
     * Filter, which location to fetch.
     */
    where: locationWhereUniqueInput
  }

  /**
   * location findUniqueOrThrow
   */
  export type locationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationInclude<ExtArgs> | null
    /**
     * Filter, which location to fetch.
     */
    where: locationWhereUniqueInput
  }

  /**
   * location findFirst
   */
  export type locationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationInclude<ExtArgs> | null
    /**
     * Filter, which location to fetch.
     */
    where?: locationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of locations to fetch.
     */
    orderBy?: locationOrderByWithRelationInput | locationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for locations.
     */
    cursor?: locationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * location findFirstOrThrow
   */
  export type locationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationInclude<ExtArgs> | null
    /**
     * Filter, which location to fetch.
     */
    where?: locationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of locations to fetch.
     */
    orderBy?: locationOrderByWithRelationInput | locationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for locations.
     */
    cursor?: locationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * location findMany
   */
  export type locationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationInclude<ExtArgs> | null
    /**
     * Filter, which locations to fetch.
     */
    where?: locationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of locations to fetch.
     */
    orderBy?: locationOrderByWithRelationInput | locationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing locations.
     */
    cursor?: locationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * location create
   */
  export type locationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationInclude<ExtArgs> | null
    /**
     * The data needed to create a location.
     */
    data: XOR<locationCreateInput, locationUncheckedCreateInput>
  }

  /**
   * location createMany
   */
  export type locationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many locations.
     */
    data: locationCreateManyInput | locationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * location createManyAndReturn
   */
  export type locationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many locations.
     */
    data: locationCreateManyInput | locationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * location update
   */
  export type locationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationInclude<ExtArgs> | null
    /**
     * The data needed to update a location.
     */
    data: XOR<locationUpdateInput, locationUncheckedUpdateInput>
    /**
     * Choose, which location to update.
     */
    where: locationWhereUniqueInput
  }

  /**
   * location updateMany
   */
  export type locationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update locations.
     */
    data: XOR<locationUpdateManyMutationInput, locationUncheckedUpdateManyInput>
    /**
     * Filter which locations to update
     */
    where?: locationWhereInput
  }

  /**
   * location upsert
   */
  export type locationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationInclude<ExtArgs> | null
    /**
     * The filter to search for the location to update in case it exists.
     */
    where: locationWhereUniqueInput
    /**
     * In case the location found by the `where` argument doesn't exist, create a new location with this data.
     */
    create: XOR<locationCreateInput, locationUncheckedCreateInput>
    /**
     * In case the location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<locationUpdateInput, locationUncheckedUpdateInput>
  }

  /**
   * location delete
   */
  export type locationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationInclude<ExtArgs> | null
    /**
     * Filter which location to delete.
     */
    where: locationWhereUniqueInput
  }

  /**
   * location deleteMany
   */
  export type locationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which locations to delete
     */
    where?: locationWhereInput
  }

  /**
   * location.orphanage
   */
  export type location$orphanageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orphanage
     */
    select?: orphanageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orphanageInclude<ExtArgs> | null
    where?: orphanageWhereInput
    orderBy?: orphanageOrderByWithRelationInput | orphanageOrderByWithRelationInput[]
    cursor?: orphanageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrphanageScalarFieldEnum | OrphanageScalarFieldEnum[]
  }

  /**
   * location without action
   */
  export type locationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationInclude<ExtArgs> | null
  }


  /**
   * Model orphanage
   */

  export type AggregateOrphanage = {
    _count: OrphanageCountAggregateOutputType | null
    _avg: OrphanageAvgAggregateOutputType | null
    _sum: OrphanageSumAggregateOutputType | null
    _min: OrphanageMinAggregateOutputType | null
    _max: OrphanageMaxAggregateOutputType | null
  }

  export type OrphanageAvgAggregateOutputType = {
    id: number | null
    id_location: number | null
  }

  export type OrphanageSumAggregateOutputType = {
    id: number | null
    id_location: number | null
  }

  export type OrphanageMinAggregateOutputType = {
    id: number | null
    name: string | null
    about: string | null
    instructions: string | null
    acept_weekend: boolean | null
    acepted: boolean | null
    id_location: number | null
    phone: string | null
    deletedAt: Date | null
  }

  export type OrphanageMaxAggregateOutputType = {
    id: number | null
    name: string | null
    about: string | null
    instructions: string | null
    acept_weekend: boolean | null
    acepted: boolean | null
    id_location: number | null
    phone: string | null
    deletedAt: Date | null
  }

  export type OrphanageCountAggregateOutputType = {
    id: number
    name: number
    about: number
    instructions: number
    acept_weekend: number
    acepted: number
    id_location: number
    phone: number
    deletedAt: number
    _all: number
  }


  export type OrphanageAvgAggregateInputType = {
    id?: true
    id_location?: true
  }

  export type OrphanageSumAggregateInputType = {
    id?: true
    id_location?: true
  }

  export type OrphanageMinAggregateInputType = {
    id?: true
    name?: true
    about?: true
    instructions?: true
    acept_weekend?: true
    acepted?: true
    id_location?: true
    phone?: true
    deletedAt?: true
  }

  export type OrphanageMaxAggregateInputType = {
    id?: true
    name?: true
    about?: true
    instructions?: true
    acept_weekend?: true
    acepted?: true
    id_location?: true
    phone?: true
    deletedAt?: true
  }

  export type OrphanageCountAggregateInputType = {
    id?: true
    name?: true
    about?: true
    instructions?: true
    acept_weekend?: true
    acepted?: true
    id_location?: true
    phone?: true
    deletedAt?: true
    _all?: true
  }

  export type OrphanageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orphanage to aggregate.
     */
    where?: orphanageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orphanages to fetch.
     */
    orderBy?: orphanageOrderByWithRelationInput | orphanageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: orphanageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orphanages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orphanages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orphanages
    **/
    _count?: true | OrphanageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrphanageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrphanageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrphanageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrphanageMaxAggregateInputType
  }

  export type GetOrphanageAggregateType<T extends OrphanageAggregateArgs> = {
        [P in keyof T & keyof AggregateOrphanage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrphanage[P]>
      : GetScalarType<T[P], AggregateOrphanage[P]>
  }




  export type orphanageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orphanageWhereInput
    orderBy?: orphanageOrderByWithAggregationInput | orphanageOrderByWithAggregationInput[]
    by: OrphanageScalarFieldEnum[] | OrphanageScalarFieldEnum
    having?: orphanageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrphanageCountAggregateInputType | true
    _avg?: OrphanageAvgAggregateInputType
    _sum?: OrphanageSumAggregateInputType
    _min?: OrphanageMinAggregateInputType
    _max?: OrphanageMaxAggregateInputType
  }

  export type OrphanageGroupByOutputType = {
    id: number
    name: string
    about: string
    instructions: string
    acept_weekend: boolean
    acepted: boolean
    id_location: number
    phone: string
    deletedAt: Date | null
    _count: OrphanageCountAggregateOutputType | null
    _avg: OrphanageAvgAggregateOutputType | null
    _sum: OrphanageSumAggregateOutputType | null
    _min: OrphanageMinAggregateOutputType | null
    _max: OrphanageMaxAggregateOutputType | null
  }

  type GetOrphanageGroupByPayload<T extends orphanageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrphanageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrphanageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrphanageGroupByOutputType[P]>
            : GetScalarType<T[P], OrphanageGroupByOutputType[P]>
        }
      >
    >


  export type orphanageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    about?: boolean
    instructions?: boolean
    acept_weekend?: boolean
    acepted?: boolean
    id_location?: boolean
    phone?: boolean
    deletedAt?: boolean
    hours?: boolean | orphanage$hoursArgs<ExtArgs>
    location?: boolean | locationDefaultArgs<ExtArgs>
    pictures?: boolean | orphanage$picturesArgs<ExtArgs>
    _count?: boolean | OrphanageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orphanage"]>

  export type orphanageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    about?: boolean
    instructions?: boolean
    acept_weekend?: boolean
    acepted?: boolean
    id_location?: boolean
    phone?: boolean
    deletedAt?: boolean
    location?: boolean | locationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orphanage"]>

  export type orphanageSelectScalar = {
    id?: boolean
    name?: boolean
    about?: boolean
    instructions?: boolean
    acept_weekend?: boolean
    acepted?: boolean
    id_location?: boolean
    phone?: boolean
    deletedAt?: boolean
  }

  export type orphanageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hours?: boolean | orphanage$hoursArgs<ExtArgs>
    location?: boolean | locationDefaultArgs<ExtArgs>
    pictures?: boolean | orphanage$picturesArgs<ExtArgs>
    _count?: boolean | OrphanageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type orphanageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | locationDefaultArgs<ExtArgs>
  }

  export type $orphanagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orphanage"
    objects: {
      hours: Prisma.$hoursPayload<ExtArgs>[]
      location: Prisma.$locationPayload<ExtArgs>
      pictures: Prisma.$picturePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      about: string
      instructions: string
      acept_weekend: boolean
      acepted: boolean
      id_location: number
      phone: string
      deletedAt: Date | null
    }, ExtArgs["result"]["orphanage"]>
    composites: {}
  }

  type orphanageGetPayload<S extends boolean | null | undefined | orphanageDefaultArgs> = $Result.GetResult<Prisma.$orphanagePayload, S>

  type orphanageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<orphanageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrphanageCountAggregateInputType | true
    }

  export interface orphanageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orphanage'], meta: { name: 'orphanage' } }
    /**
     * Find zero or one Orphanage that matches the filter.
     * @param {orphanageFindUniqueArgs} args - Arguments to find a Orphanage
     * @example
     * // Get one Orphanage
     * const orphanage = await prisma.orphanage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends orphanageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, orphanageFindUniqueArgs<ExtArgs>>
    ): Prisma__orphanageClient<$Result.GetResult<Prisma.$orphanagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Orphanage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {orphanageFindUniqueOrThrowArgs} args - Arguments to find a Orphanage
     * @example
     * // Get one Orphanage
     * const orphanage = await prisma.orphanage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends orphanageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, orphanageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__orphanageClient<$Result.GetResult<Prisma.$orphanagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Orphanage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orphanageFindFirstArgs} args - Arguments to find a Orphanage
     * @example
     * // Get one Orphanage
     * const orphanage = await prisma.orphanage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends orphanageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, orphanageFindFirstArgs<ExtArgs>>
    ): Prisma__orphanageClient<$Result.GetResult<Prisma.$orphanagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Orphanage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orphanageFindFirstOrThrowArgs} args - Arguments to find a Orphanage
     * @example
     * // Get one Orphanage
     * const orphanage = await prisma.orphanage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends orphanageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, orphanageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__orphanageClient<$Result.GetResult<Prisma.$orphanagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Orphanages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orphanageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orphanages
     * const orphanages = await prisma.orphanage.findMany()
     * 
     * // Get first 10 Orphanages
     * const orphanages = await prisma.orphanage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orphanageWithIdOnly = await prisma.orphanage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends orphanageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, orphanageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orphanagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Orphanage.
     * @param {orphanageCreateArgs} args - Arguments to create a Orphanage.
     * @example
     * // Create one Orphanage
     * const Orphanage = await prisma.orphanage.create({
     *   data: {
     *     // ... data to create a Orphanage
     *   }
     * })
     * 
    **/
    create<T extends orphanageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, orphanageCreateArgs<ExtArgs>>
    ): Prisma__orphanageClient<$Result.GetResult<Prisma.$orphanagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Orphanages.
     * @param {orphanageCreateManyArgs} args - Arguments to create many Orphanages.
     * @example
     * // Create many Orphanages
     * const orphanage = await prisma.orphanage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends orphanageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, orphanageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orphanages and returns the data saved in the database.
     * @param {orphanageCreateManyAndReturnArgs} args - Arguments to create many Orphanages.
     * @example
     * // Create many Orphanages
     * const orphanage = await prisma.orphanage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orphanages and only return the `id`
     * const orphanageWithIdOnly = await prisma.orphanage.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends orphanageCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, orphanageCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orphanagePayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Orphanage.
     * @param {orphanageDeleteArgs} args - Arguments to delete one Orphanage.
     * @example
     * // Delete one Orphanage
     * const Orphanage = await prisma.orphanage.delete({
     *   where: {
     *     // ... filter to delete one Orphanage
     *   }
     * })
     * 
    **/
    delete<T extends orphanageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, orphanageDeleteArgs<ExtArgs>>
    ): Prisma__orphanageClient<$Result.GetResult<Prisma.$orphanagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Orphanage.
     * @param {orphanageUpdateArgs} args - Arguments to update one Orphanage.
     * @example
     * // Update one Orphanage
     * const orphanage = await prisma.orphanage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends orphanageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, orphanageUpdateArgs<ExtArgs>>
    ): Prisma__orphanageClient<$Result.GetResult<Prisma.$orphanagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Orphanages.
     * @param {orphanageDeleteManyArgs} args - Arguments to filter Orphanages to delete.
     * @example
     * // Delete a few Orphanages
     * const { count } = await prisma.orphanage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends orphanageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, orphanageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orphanages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orphanageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orphanages
     * const orphanage = await prisma.orphanage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends orphanageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, orphanageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orphanage.
     * @param {orphanageUpsertArgs} args - Arguments to update or create a Orphanage.
     * @example
     * // Update or create a Orphanage
     * const orphanage = await prisma.orphanage.upsert({
     *   create: {
     *     // ... data to create a Orphanage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orphanage we want to update
     *   }
     * })
    **/
    upsert<T extends orphanageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, orphanageUpsertArgs<ExtArgs>>
    ): Prisma__orphanageClient<$Result.GetResult<Prisma.$orphanagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Orphanages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orphanageCountArgs} args - Arguments to filter Orphanages to count.
     * @example
     * // Count the number of Orphanages
     * const count = await prisma.orphanage.count({
     *   where: {
     *     // ... the filter for the Orphanages we want to count
     *   }
     * })
    **/
    count<T extends orphanageCountArgs>(
      args?: Subset<T, orphanageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrphanageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orphanage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrphanageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrphanageAggregateArgs>(args: Subset<T, OrphanageAggregateArgs>): Prisma.PrismaPromise<GetOrphanageAggregateType<T>>

    /**
     * Group by Orphanage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orphanageGroupByArgs} args - Group by arguments.
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
      T extends orphanageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: orphanageGroupByArgs['orderBy'] }
        : { orderBy?: orphanageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, orphanageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrphanageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orphanage model
   */
  readonly fields: orphanageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orphanage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__orphanageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    hours<T extends orphanage$hoursArgs<ExtArgs> = {}>(args?: Subset<T, orphanage$hoursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hoursPayload<ExtArgs>, T, 'findMany'> | Null>;

    location<T extends locationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, locationDefaultArgs<ExtArgs>>): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    pictures<T extends orphanage$picturesArgs<ExtArgs> = {}>(args?: Subset<T, orphanage$picturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$picturePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the orphanage model
   */ 
  interface orphanageFieldRefs {
    readonly id: FieldRef<"orphanage", 'Int'>
    readonly name: FieldRef<"orphanage", 'String'>
    readonly about: FieldRef<"orphanage", 'String'>
    readonly instructions: FieldRef<"orphanage", 'String'>
    readonly acept_weekend: FieldRef<"orphanage", 'Boolean'>
    readonly acepted: FieldRef<"orphanage", 'Boolean'>
    readonly id_location: FieldRef<"orphanage", 'Int'>
    readonly phone: FieldRef<"orphanage", 'String'>
    readonly deletedAt: FieldRef<"orphanage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * orphanage findUnique
   */
  export type orphanageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orphanage
     */
    select?: orphanageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orphanageInclude<ExtArgs> | null
    /**
     * Filter, which orphanage to fetch.
     */
    where: orphanageWhereUniqueInput
  }

  /**
   * orphanage findUniqueOrThrow
   */
  export type orphanageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orphanage
     */
    select?: orphanageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orphanageInclude<ExtArgs> | null
    /**
     * Filter, which orphanage to fetch.
     */
    where: orphanageWhereUniqueInput
  }

  /**
   * orphanage findFirst
   */
  export type orphanageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orphanage
     */
    select?: orphanageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orphanageInclude<ExtArgs> | null
    /**
     * Filter, which orphanage to fetch.
     */
    where?: orphanageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orphanages to fetch.
     */
    orderBy?: orphanageOrderByWithRelationInput | orphanageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orphanages.
     */
    cursor?: orphanageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orphanages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orphanages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orphanages.
     */
    distinct?: OrphanageScalarFieldEnum | OrphanageScalarFieldEnum[]
  }

  /**
   * orphanage findFirstOrThrow
   */
  export type orphanageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orphanage
     */
    select?: orphanageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orphanageInclude<ExtArgs> | null
    /**
     * Filter, which orphanage to fetch.
     */
    where?: orphanageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orphanages to fetch.
     */
    orderBy?: orphanageOrderByWithRelationInput | orphanageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orphanages.
     */
    cursor?: orphanageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orphanages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orphanages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orphanages.
     */
    distinct?: OrphanageScalarFieldEnum | OrphanageScalarFieldEnum[]
  }

  /**
   * orphanage findMany
   */
  export type orphanageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orphanage
     */
    select?: orphanageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orphanageInclude<ExtArgs> | null
    /**
     * Filter, which orphanages to fetch.
     */
    where?: orphanageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orphanages to fetch.
     */
    orderBy?: orphanageOrderByWithRelationInput | orphanageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orphanages.
     */
    cursor?: orphanageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orphanages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orphanages.
     */
    skip?: number
    distinct?: OrphanageScalarFieldEnum | OrphanageScalarFieldEnum[]
  }

  /**
   * orphanage create
   */
  export type orphanageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orphanage
     */
    select?: orphanageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orphanageInclude<ExtArgs> | null
    /**
     * The data needed to create a orphanage.
     */
    data: XOR<orphanageCreateInput, orphanageUncheckedCreateInput>
  }

  /**
   * orphanage createMany
   */
  export type orphanageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orphanages.
     */
    data: orphanageCreateManyInput | orphanageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orphanage createManyAndReturn
   */
  export type orphanageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orphanage
     */
    select?: orphanageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many orphanages.
     */
    data: orphanageCreateManyInput | orphanageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orphanageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * orphanage update
   */
  export type orphanageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orphanage
     */
    select?: orphanageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orphanageInclude<ExtArgs> | null
    /**
     * The data needed to update a orphanage.
     */
    data: XOR<orphanageUpdateInput, orphanageUncheckedUpdateInput>
    /**
     * Choose, which orphanage to update.
     */
    where: orphanageWhereUniqueInput
  }

  /**
   * orphanage updateMany
   */
  export type orphanageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orphanages.
     */
    data: XOR<orphanageUpdateManyMutationInput, orphanageUncheckedUpdateManyInput>
    /**
     * Filter which orphanages to update
     */
    where?: orphanageWhereInput
  }

  /**
   * orphanage upsert
   */
  export type orphanageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orphanage
     */
    select?: orphanageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orphanageInclude<ExtArgs> | null
    /**
     * The filter to search for the orphanage to update in case it exists.
     */
    where: orphanageWhereUniqueInput
    /**
     * In case the orphanage found by the `where` argument doesn't exist, create a new orphanage with this data.
     */
    create: XOR<orphanageCreateInput, orphanageUncheckedCreateInput>
    /**
     * In case the orphanage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<orphanageUpdateInput, orphanageUncheckedUpdateInput>
  }

  /**
   * orphanage delete
   */
  export type orphanageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orphanage
     */
    select?: orphanageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orphanageInclude<ExtArgs> | null
    /**
     * Filter which orphanage to delete.
     */
    where: orphanageWhereUniqueInput
  }

  /**
   * orphanage deleteMany
   */
  export type orphanageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orphanages to delete
     */
    where?: orphanageWhereInput
  }

  /**
   * orphanage.hours
   */
  export type orphanage$hoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hours
     */
    select?: hoursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hoursInclude<ExtArgs> | null
    where?: hoursWhereInput
    orderBy?: hoursOrderByWithRelationInput | hoursOrderByWithRelationInput[]
    cursor?: hoursWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HoursScalarFieldEnum | HoursScalarFieldEnum[]
  }

  /**
   * orphanage.pictures
   */
  export type orphanage$picturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the picture
     */
    select?: pictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pictureInclude<ExtArgs> | null
    where?: pictureWhereInput
    orderBy?: pictureOrderByWithRelationInput | pictureOrderByWithRelationInput[]
    cursor?: pictureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[]
  }

  /**
   * orphanage without action
   */
  export type orphanageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orphanage
     */
    select?: orphanageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orphanageInclude<ExtArgs> | null
  }


  /**
   * Model picture
   */

  export type AggregatePicture = {
    _count: PictureCountAggregateOutputType | null
    _avg: PictureAvgAggregateOutputType | null
    _sum: PictureSumAggregateOutputType | null
    _min: PictureMinAggregateOutputType | null
    _max: PictureMaxAggregateOutputType | null
  }

  export type PictureAvgAggregateOutputType = {
    id: number | null
    id_orphanage: number | null
  }

  export type PictureSumAggregateOutputType = {
    id: number | null
    id_orphanage: number | null
  }

  export type PictureMinAggregateOutputType = {
    id: number | null
    url: string | null
    id_orphanage: number | null
  }

  export type PictureMaxAggregateOutputType = {
    id: number | null
    url: string | null
    id_orphanage: number | null
  }

  export type PictureCountAggregateOutputType = {
    id: number
    url: number
    id_orphanage: number
    _all: number
  }


  export type PictureAvgAggregateInputType = {
    id?: true
    id_orphanage?: true
  }

  export type PictureSumAggregateInputType = {
    id?: true
    id_orphanage?: true
  }

  export type PictureMinAggregateInputType = {
    id?: true
    url?: true
    id_orphanage?: true
  }

  export type PictureMaxAggregateInputType = {
    id?: true
    url?: true
    id_orphanage?: true
  }

  export type PictureCountAggregateInputType = {
    id?: true
    url?: true
    id_orphanage?: true
    _all?: true
  }

  export type PictureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which picture to aggregate.
     */
    where?: pictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pictures to fetch.
     */
    orderBy?: pictureOrderByWithRelationInput | pictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pictures
    **/
    _count?: true | PictureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PictureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PictureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PictureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PictureMaxAggregateInputType
  }

  export type GetPictureAggregateType<T extends PictureAggregateArgs> = {
        [P in keyof T & keyof AggregatePicture]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePicture[P]>
      : GetScalarType<T[P], AggregatePicture[P]>
  }




  export type pictureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pictureWhereInput
    orderBy?: pictureOrderByWithAggregationInput | pictureOrderByWithAggregationInput[]
    by: PictureScalarFieldEnum[] | PictureScalarFieldEnum
    having?: pictureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PictureCountAggregateInputType | true
    _avg?: PictureAvgAggregateInputType
    _sum?: PictureSumAggregateInputType
    _min?: PictureMinAggregateInputType
    _max?: PictureMaxAggregateInputType
  }

  export type PictureGroupByOutputType = {
    id: number
    url: string
    id_orphanage: number
    _count: PictureCountAggregateOutputType | null
    _avg: PictureAvgAggregateOutputType | null
    _sum: PictureSumAggregateOutputType | null
    _min: PictureMinAggregateOutputType | null
    _max: PictureMaxAggregateOutputType | null
  }

  type GetPictureGroupByPayload<T extends pictureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PictureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PictureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PictureGroupByOutputType[P]>
            : GetScalarType<T[P], PictureGroupByOutputType[P]>
        }
      >
    >


  export type pictureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    id_orphanage?: boolean
    orphanage?: boolean | orphanageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["picture"]>

  export type pictureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    id_orphanage?: boolean
    orphanage?: boolean | orphanageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["picture"]>

  export type pictureSelectScalar = {
    id?: boolean
    url?: boolean
    id_orphanage?: boolean
  }

  export type pictureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orphanage?: boolean | orphanageDefaultArgs<ExtArgs>
  }
  export type pictureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orphanage?: boolean | orphanageDefaultArgs<ExtArgs>
  }

  export type $picturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "picture"
    objects: {
      orphanage: Prisma.$orphanagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      id_orphanage: number
    }, ExtArgs["result"]["picture"]>
    composites: {}
  }

  type pictureGetPayload<S extends boolean | null | undefined | pictureDefaultArgs> = $Result.GetResult<Prisma.$picturePayload, S>

  type pictureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<pictureFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PictureCountAggregateInputType | true
    }

  export interface pictureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['picture'], meta: { name: 'picture' } }
    /**
     * Find zero or one Picture that matches the filter.
     * @param {pictureFindUniqueArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends pictureFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, pictureFindUniqueArgs<ExtArgs>>
    ): Prisma__pictureClient<$Result.GetResult<Prisma.$picturePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Picture that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {pictureFindUniqueOrThrowArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends pictureFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, pictureFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__pictureClient<$Result.GetResult<Prisma.$picturePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Picture that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pictureFindFirstArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends pictureFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, pictureFindFirstArgs<ExtArgs>>
    ): Prisma__pictureClient<$Result.GetResult<Prisma.$picturePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Picture that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pictureFindFirstOrThrowArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends pictureFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, pictureFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__pictureClient<$Result.GetResult<Prisma.$picturePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Pictures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pictureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pictures
     * const pictures = await prisma.picture.findMany()
     * 
     * // Get first 10 Pictures
     * const pictures = await prisma.picture.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pictureWithIdOnly = await prisma.picture.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends pictureFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, pictureFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$picturePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Picture.
     * @param {pictureCreateArgs} args - Arguments to create a Picture.
     * @example
     * // Create one Picture
     * const Picture = await prisma.picture.create({
     *   data: {
     *     // ... data to create a Picture
     *   }
     * })
     * 
    **/
    create<T extends pictureCreateArgs<ExtArgs>>(
      args: SelectSubset<T, pictureCreateArgs<ExtArgs>>
    ): Prisma__pictureClient<$Result.GetResult<Prisma.$picturePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Pictures.
     * @param {pictureCreateManyArgs} args - Arguments to create many Pictures.
     * @example
     * // Create many Pictures
     * const picture = await prisma.picture.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends pictureCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, pictureCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pictures and returns the data saved in the database.
     * @param {pictureCreateManyAndReturnArgs} args - Arguments to create many Pictures.
     * @example
     * // Create many Pictures
     * const picture = await prisma.picture.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pictures and only return the `id`
     * const pictureWithIdOnly = await prisma.picture.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends pictureCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, pictureCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$picturePayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Picture.
     * @param {pictureDeleteArgs} args - Arguments to delete one Picture.
     * @example
     * // Delete one Picture
     * const Picture = await prisma.picture.delete({
     *   where: {
     *     // ... filter to delete one Picture
     *   }
     * })
     * 
    **/
    delete<T extends pictureDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, pictureDeleteArgs<ExtArgs>>
    ): Prisma__pictureClient<$Result.GetResult<Prisma.$picturePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Picture.
     * @param {pictureUpdateArgs} args - Arguments to update one Picture.
     * @example
     * // Update one Picture
     * const picture = await prisma.picture.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends pictureUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, pictureUpdateArgs<ExtArgs>>
    ): Prisma__pictureClient<$Result.GetResult<Prisma.$picturePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Pictures.
     * @param {pictureDeleteManyArgs} args - Arguments to filter Pictures to delete.
     * @example
     * // Delete a few Pictures
     * const { count } = await prisma.picture.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends pictureDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, pictureDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pictures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pictureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pictures
     * const picture = await prisma.picture.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends pictureUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, pictureUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Picture.
     * @param {pictureUpsertArgs} args - Arguments to update or create a Picture.
     * @example
     * // Update or create a Picture
     * const picture = await prisma.picture.upsert({
     *   create: {
     *     // ... data to create a Picture
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Picture we want to update
     *   }
     * })
    **/
    upsert<T extends pictureUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, pictureUpsertArgs<ExtArgs>>
    ): Prisma__pictureClient<$Result.GetResult<Prisma.$picturePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Pictures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pictureCountArgs} args - Arguments to filter Pictures to count.
     * @example
     * // Count the number of Pictures
     * const count = await prisma.picture.count({
     *   where: {
     *     // ... the filter for the Pictures we want to count
     *   }
     * })
    **/
    count<T extends pictureCountArgs>(
      args?: Subset<T, pictureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PictureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Picture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PictureAggregateArgs>(args: Subset<T, PictureAggregateArgs>): Prisma.PrismaPromise<GetPictureAggregateType<T>>

    /**
     * Group by Picture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pictureGroupByArgs} args - Group by arguments.
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
      T extends pictureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pictureGroupByArgs['orderBy'] }
        : { orderBy?: pictureGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pictureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPictureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the picture model
   */
  readonly fields: pictureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for picture.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pictureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    orphanage<T extends orphanageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, orphanageDefaultArgs<ExtArgs>>): Prisma__orphanageClient<$Result.GetResult<Prisma.$orphanagePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the picture model
   */ 
  interface pictureFieldRefs {
    readonly id: FieldRef<"picture", 'Int'>
    readonly url: FieldRef<"picture", 'String'>
    readonly id_orphanage: FieldRef<"picture", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * picture findUnique
   */
  export type pictureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the picture
     */
    select?: pictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pictureInclude<ExtArgs> | null
    /**
     * Filter, which picture to fetch.
     */
    where: pictureWhereUniqueInput
  }

  /**
   * picture findUniqueOrThrow
   */
  export type pictureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the picture
     */
    select?: pictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pictureInclude<ExtArgs> | null
    /**
     * Filter, which picture to fetch.
     */
    where: pictureWhereUniqueInput
  }

  /**
   * picture findFirst
   */
  export type pictureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the picture
     */
    select?: pictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pictureInclude<ExtArgs> | null
    /**
     * Filter, which picture to fetch.
     */
    where?: pictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pictures to fetch.
     */
    orderBy?: pictureOrderByWithRelationInput | pictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pictures.
     */
    cursor?: pictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pictures.
     */
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[]
  }

  /**
   * picture findFirstOrThrow
   */
  export type pictureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the picture
     */
    select?: pictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pictureInclude<ExtArgs> | null
    /**
     * Filter, which picture to fetch.
     */
    where?: pictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pictures to fetch.
     */
    orderBy?: pictureOrderByWithRelationInput | pictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pictures.
     */
    cursor?: pictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pictures.
     */
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[]
  }

  /**
   * picture findMany
   */
  export type pictureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the picture
     */
    select?: pictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pictureInclude<ExtArgs> | null
    /**
     * Filter, which pictures to fetch.
     */
    where?: pictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pictures to fetch.
     */
    orderBy?: pictureOrderByWithRelationInput | pictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pictures.
     */
    cursor?: pictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pictures.
     */
    skip?: number
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[]
  }

  /**
   * picture create
   */
  export type pictureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the picture
     */
    select?: pictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pictureInclude<ExtArgs> | null
    /**
     * The data needed to create a picture.
     */
    data: XOR<pictureCreateInput, pictureUncheckedCreateInput>
  }

  /**
   * picture createMany
   */
  export type pictureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pictures.
     */
    data: pictureCreateManyInput | pictureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * picture createManyAndReturn
   */
  export type pictureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the picture
     */
    select?: pictureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many pictures.
     */
    data: pictureCreateManyInput | pictureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pictureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * picture update
   */
  export type pictureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the picture
     */
    select?: pictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pictureInclude<ExtArgs> | null
    /**
     * The data needed to update a picture.
     */
    data: XOR<pictureUpdateInput, pictureUncheckedUpdateInput>
    /**
     * Choose, which picture to update.
     */
    where: pictureWhereUniqueInput
  }

  /**
   * picture updateMany
   */
  export type pictureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pictures.
     */
    data: XOR<pictureUpdateManyMutationInput, pictureUncheckedUpdateManyInput>
    /**
     * Filter which pictures to update
     */
    where?: pictureWhereInput
  }

  /**
   * picture upsert
   */
  export type pictureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the picture
     */
    select?: pictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pictureInclude<ExtArgs> | null
    /**
     * The filter to search for the picture to update in case it exists.
     */
    where: pictureWhereUniqueInput
    /**
     * In case the picture found by the `where` argument doesn't exist, create a new picture with this data.
     */
    create: XOR<pictureCreateInput, pictureUncheckedCreateInput>
    /**
     * In case the picture was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pictureUpdateInput, pictureUncheckedUpdateInput>
  }

  /**
   * picture delete
   */
  export type pictureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the picture
     */
    select?: pictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pictureInclude<ExtArgs> | null
    /**
     * Filter which picture to delete.
     */
    where: pictureWhereUniqueInput
  }

  /**
   * picture deleteMany
   */
  export type pictureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pictures to delete
     */
    where?: pictureWhereInput
  }

  /**
   * picture without action
   */
  export type pictureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the picture
     */
    select?: pictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pictureInclude<ExtArgs> | null
  }


  /**
   * Model hours
   */

  export type AggregateHours = {
    _count: HoursCountAggregateOutputType | null
    _avg: HoursAvgAggregateOutputType | null
    _sum: HoursSumAggregateOutputType | null
    _min: HoursMinAggregateOutputType | null
    _max: HoursMaxAggregateOutputType | null
  }

  export type HoursAvgAggregateOutputType = {
    id: number | null
    id_orphanage: number | null
  }

  export type HoursSumAggregateOutputType = {
    id: number | null
    id_orphanage: number | null
  }

  export type HoursMinAggregateOutputType = {
    id: number | null
    id_orphanage: number | null
    final_hour: string | null
    initial_hour: string | null
  }

  export type HoursMaxAggregateOutputType = {
    id: number | null
    id_orphanage: number | null
    final_hour: string | null
    initial_hour: string | null
  }

  export type HoursCountAggregateOutputType = {
    id: number
    id_orphanage: number
    final_hour: number
    initial_hour: number
    _all: number
  }


  export type HoursAvgAggregateInputType = {
    id?: true
    id_orphanage?: true
  }

  export type HoursSumAggregateInputType = {
    id?: true
    id_orphanage?: true
  }

  export type HoursMinAggregateInputType = {
    id?: true
    id_orphanage?: true
    final_hour?: true
    initial_hour?: true
  }

  export type HoursMaxAggregateInputType = {
    id?: true
    id_orphanage?: true
    final_hour?: true
    initial_hour?: true
  }

  export type HoursCountAggregateInputType = {
    id?: true
    id_orphanage?: true
    final_hour?: true
    initial_hour?: true
    _all?: true
  }

  export type HoursAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hours to aggregate.
     */
    where?: hoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hours to fetch.
     */
    orderBy?: hoursOrderByWithRelationInput | hoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hours
    **/
    _count?: true | HoursCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HoursAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HoursSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HoursMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HoursMaxAggregateInputType
  }

  export type GetHoursAggregateType<T extends HoursAggregateArgs> = {
        [P in keyof T & keyof AggregateHours]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHours[P]>
      : GetScalarType<T[P], AggregateHours[P]>
  }




  export type hoursGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hoursWhereInput
    orderBy?: hoursOrderByWithAggregationInput | hoursOrderByWithAggregationInput[]
    by: HoursScalarFieldEnum[] | HoursScalarFieldEnum
    having?: hoursScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HoursCountAggregateInputType | true
    _avg?: HoursAvgAggregateInputType
    _sum?: HoursSumAggregateInputType
    _min?: HoursMinAggregateInputType
    _max?: HoursMaxAggregateInputType
  }

  export type HoursGroupByOutputType = {
    id: number
    id_orphanage: number
    final_hour: string
    initial_hour: string
    _count: HoursCountAggregateOutputType | null
    _avg: HoursAvgAggregateOutputType | null
    _sum: HoursSumAggregateOutputType | null
    _min: HoursMinAggregateOutputType | null
    _max: HoursMaxAggregateOutputType | null
  }

  type GetHoursGroupByPayload<T extends hoursGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HoursGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HoursGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HoursGroupByOutputType[P]>
            : GetScalarType<T[P], HoursGroupByOutputType[P]>
        }
      >
    >


  export type hoursSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_orphanage?: boolean
    final_hour?: boolean
    initial_hour?: boolean
    orphanage?: boolean | orphanageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hours"]>

  export type hoursSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_orphanage?: boolean
    final_hour?: boolean
    initial_hour?: boolean
    orphanage?: boolean | orphanageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hours"]>

  export type hoursSelectScalar = {
    id?: boolean
    id_orphanage?: boolean
    final_hour?: boolean
    initial_hour?: boolean
  }

  export type hoursInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orphanage?: boolean | orphanageDefaultArgs<ExtArgs>
  }
  export type hoursIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orphanage?: boolean | orphanageDefaultArgs<ExtArgs>
  }

  export type $hoursPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hours"
    objects: {
      orphanage: Prisma.$orphanagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_orphanage: number
      final_hour: string
      initial_hour: string
    }, ExtArgs["result"]["hours"]>
    composites: {}
  }

  type hoursGetPayload<S extends boolean | null | undefined | hoursDefaultArgs> = $Result.GetResult<Prisma.$hoursPayload, S>

  type hoursCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<hoursFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HoursCountAggregateInputType | true
    }

  export interface hoursDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hours'], meta: { name: 'hours' } }
    /**
     * Find zero or one Hours that matches the filter.
     * @param {hoursFindUniqueArgs} args - Arguments to find a Hours
     * @example
     * // Get one Hours
     * const hours = await prisma.hours.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends hoursFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, hoursFindUniqueArgs<ExtArgs>>
    ): Prisma__hoursClient<$Result.GetResult<Prisma.$hoursPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Hours that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {hoursFindUniqueOrThrowArgs} args - Arguments to find a Hours
     * @example
     * // Get one Hours
     * const hours = await prisma.hours.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends hoursFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, hoursFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__hoursClient<$Result.GetResult<Prisma.$hoursPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Hours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hoursFindFirstArgs} args - Arguments to find a Hours
     * @example
     * // Get one Hours
     * const hours = await prisma.hours.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends hoursFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, hoursFindFirstArgs<ExtArgs>>
    ): Prisma__hoursClient<$Result.GetResult<Prisma.$hoursPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Hours that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hoursFindFirstOrThrowArgs} args - Arguments to find a Hours
     * @example
     * // Get one Hours
     * const hours = await prisma.hours.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends hoursFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, hoursFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__hoursClient<$Result.GetResult<Prisma.$hoursPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Hours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hoursFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hours
     * const hours = await prisma.hours.findMany()
     * 
     * // Get first 10 Hours
     * const hours = await prisma.hours.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hoursWithIdOnly = await prisma.hours.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends hoursFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, hoursFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hoursPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Hours.
     * @param {hoursCreateArgs} args - Arguments to create a Hours.
     * @example
     * // Create one Hours
     * const Hours = await prisma.hours.create({
     *   data: {
     *     // ... data to create a Hours
     *   }
     * })
     * 
    **/
    create<T extends hoursCreateArgs<ExtArgs>>(
      args: SelectSubset<T, hoursCreateArgs<ExtArgs>>
    ): Prisma__hoursClient<$Result.GetResult<Prisma.$hoursPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Hours.
     * @param {hoursCreateManyArgs} args - Arguments to create many Hours.
     * @example
     * // Create many Hours
     * const hours = await prisma.hours.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends hoursCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, hoursCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hours and returns the data saved in the database.
     * @param {hoursCreateManyAndReturnArgs} args - Arguments to create many Hours.
     * @example
     * // Create many Hours
     * const hours = await prisma.hours.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hours and only return the `id`
     * const hoursWithIdOnly = await prisma.hours.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends hoursCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, hoursCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hoursPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Hours.
     * @param {hoursDeleteArgs} args - Arguments to delete one Hours.
     * @example
     * // Delete one Hours
     * const Hours = await prisma.hours.delete({
     *   where: {
     *     // ... filter to delete one Hours
     *   }
     * })
     * 
    **/
    delete<T extends hoursDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, hoursDeleteArgs<ExtArgs>>
    ): Prisma__hoursClient<$Result.GetResult<Prisma.$hoursPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Hours.
     * @param {hoursUpdateArgs} args - Arguments to update one Hours.
     * @example
     * // Update one Hours
     * const hours = await prisma.hours.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends hoursUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, hoursUpdateArgs<ExtArgs>>
    ): Prisma__hoursClient<$Result.GetResult<Prisma.$hoursPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Hours.
     * @param {hoursDeleteManyArgs} args - Arguments to filter Hours to delete.
     * @example
     * // Delete a few Hours
     * const { count } = await prisma.hours.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends hoursDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, hoursDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hoursUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hours
     * const hours = await prisma.hours.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends hoursUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, hoursUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hours.
     * @param {hoursUpsertArgs} args - Arguments to update or create a Hours.
     * @example
     * // Update or create a Hours
     * const hours = await prisma.hours.upsert({
     *   create: {
     *     // ... data to create a Hours
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hours we want to update
     *   }
     * })
    **/
    upsert<T extends hoursUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, hoursUpsertArgs<ExtArgs>>
    ): Prisma__hoursClient<$Result.GetResult<Prisma.$hoursPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Hours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hoursCountArgs} args - Arguments to filter Hours to count.
     * @example
     * // Count the number of Hours
     * const count = await prisma.hours.count({
     *   where: {
     *     // ... the filter for the Hours we want to count
     *   }
     * })
    **/
    count<T extends hoursCountArgs>(
      args?: Subset<T, hoursCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HoursCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoursAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HoursAggregateArgs>(args: Subset<T, HoursAggregateArgs>): Prisma.PrismaPromise<GetHoursAggregateType<T>>

    /**
     * Group by Hours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hoursGroupByArgs} args - Group by arguments.
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
      T extends hoursGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hoursGroupByArgs['orderBy'] }
        : { orderBy?: hoursGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, hoursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHoursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hours model
   */
  readonly fields: hoursFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hours.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hoursClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    orphanage<T extends orphanageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, orphanageDefaultArgs<ExtArgs>>): Prisma__orphanageClient<$Result.GetResult<Prisma.$orphanagePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the hours model
   */ 
  interface hoursFieldRefs {
    readonly id: FieldRef<"hours", 'Int'>
    readonly id_orphanage: FieldRef<"hours", 'Int'>
    readonly final_hour: FieldRef<"hours", 'String'>
    readonly initial_hour: FieldRef<"hours", 'String'>
  }
    

  // Custom InputTypes
  /**
   * hours findUnique
   */
  export type hoursFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hours
     */
    select?: hoursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hoursInclude<ExtArgs> | null
    /**
     * Filter, which hours to fetch.
     */
    where: hoursWhereUniqueInput
  }

  /**
   * hours findUniqueOrThrow
   */
  export type hoursFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hours
     */
    select?: hoursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hoursInclude<ExtArgs> | null
    /**
     * Filter, which hours to fetch.
     */
    where: hoursWhereUniqueInput
  }

  /**
   * hours findFirst
   */
  export type hoursFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hours
     */
    select?: hoursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hoursInclude<ExtArgs> | null
    /**
     * Filter, which hours to fetch.
     */
    where?: hoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hours to fetch.
     */
    orderBy?: hoursOrderByWithRelationInput | hoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hours.
     */
    cursor?: hoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hours.
     */
    distinct?: HoursScalarFieldEnum | HoursScalarFieldEnum[]
  }

  /**
   * hours findFirstOrThrow
   */
  export type hoursFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hours
     */
    select?: hoursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hoursInclude<ExtArgs> | null
    /**
     * Filter, which hours to fetch.
     */
    where?: hoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hours to fetch.
     */
    orderBy?: hoursOrderByWithRelationInput | hoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hours.
     */
    cursor?: hoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hours.
     */
    distinct?: HoursScalarFieldEnum | HoursScalarFieldEnum[]
  }

  /**
   * hours findMany
   */
  export type hoursFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hours
     */
    select?: hoursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hoursInclude<ExtArgs> | null
    /**
     * Filter, which hours to fetch.
     */
    where?: hoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hours to fetch.
     */
    orderBy?: hoursOrderByWithRelationInput | hoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hours.
     */
    cursor?: hoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hours.
     */
    skip?: number
    distinct?: HoursScalarFieldEnum | HoursScalarFieldEnum[]
  }

  /**
   * hours create
   */
  export type hoursCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hours
     */
    select?: hoursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hoursInclude<ExtArgs> | null
    /**
     * The data needed to create a hours.
     */
    data: XOR<hoursCreateInput, hoursUncheckedCreateInput>
  }

  /**
   * hours createMany
   */
  export type hoursCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hours.
     */
    data: hoursCreateManyInput | hoursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hours createManyAndReturn
   */
  export type hoursCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hours
     */
    select?: hoursSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many hours.
     */
    data: hoursCreateManyInput | hoursCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hoursIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * hours update
   */
  export type hoursUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hours
     */
    select?: hoursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hoursInclude<ExtArgs> | null
    /**
     * The data needed to update a hours.
     */
    data: XOR<hoursUpdateInput, hoursUncheckedUpdateInput>
    /**
     * Choose, which hours to update.
     */
    where: hoursWhereUniqueInput
  }

  /**
   * hours updateMany
   */
  export type hoursUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hours.
     */
    data: XOR<hoursUpdateManyMutationInput, hoursUncheckedUpdateManyInput>
    /**
     * Filter which hours to update
     */
    where?: hoursWhereInput
  }

  /**
   * hours upsert
   */
  export type hoursUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hours
     */
    select?: hoursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hoursInclude<ExtArgs> | null
    /**
     * The filter to search for the hours to update in case it exists.
     */
    where: hoursWhereUniqueInput
    /**
     * In case the hours found by the `where` argument doesn't exist, create a new hours with this data.
     */
    create: XOR<hoursCreateInput, hoursUncheckedCreateInput>
    /**
     * In case the hours was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hoursUpdateInput, hoursUncheckedUpdateInput>
  }

  /**
   * hours delete
   */
  export type hoursDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hours
     */
    select?: hoursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hoursInclude<ExtArgs> | null
    /**
     * Filter which hours to delete.
     */
    where: hoursWhereUniqueInput
  }

  /**
   * hours deleteMany
   */
  export type hoursDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hours to delete
     */
    where?: hoursWhereInput
  }

  /**
   * hours without action
   */
  export type hoursDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hours
     */
    select?: hoursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hoursInclude<ExtArgs> | null
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


  export const AdminScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    latitude: 'latitude',
    longitude: 'longitude'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const OrphanageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    about: 'about',
    instructions: 'instructions',
    acept_weekend: 'acept_weekend',
    acepted: 'acepted',
    id_location: 'id_location',
    phone: 'phone',
    deletedAt: 'deletedAt'
  };

  export type OrphanageScalarFieldEnum = (typeof OrphanageScalarFieldEnum)[keyof typeof OrphanageScalarFieldEnum]


  export const PictureScalarFieldEnum: {
    id: 'id',
    url: 'url',
    id_orphanage: 'id_orphanage'
  };

  export type PictureScalarFieldEnum = (typeof PictureScalarFieldEnum)[keyof typeof PictureScalarFieldEnum]


  export const HoursScalarFieldEnum: {
    id: 'id',
    id_orphanage: 'id_orphanage',
    final_hour: 'final_hour',
    initial_hour: 'initial_hour'
  };

  export type HoursScalarFieldEnum = (typeof HoursScalarFieldEnum)[keyof typeof HoursScalarFieldEnum]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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
   * Deep Input Types
   */


  export type adminWhereInput = {
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    id?: IntFilter<"admin"> | number
    name?: StringFilter<"admin"> | string
    email?: StringFilter<"admin"> | string
    password?: StringFilter<"admin"> | string
  }

  export type adminOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type adminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    name?: StringFilter<"admin"> | string
    password?: StringFilter<"admin"> | string
  }, "id" | "email">

  export type adminOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: adminCountOrderByAggregateInput
    _avg?: adminAvgOrderByAggregateInput
    _max?: adminMaxOrderByAggregateInput
    _min?: adminMinOrderByAggregateInput
    _sum?: adminSumOrderByAggregateInput
  }

  export type adminScalarWhereWithAggregatesInput = {
    AND?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    OR?: adminScalarWhereWithAggregatesInput[]
    NOT?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"admin"> | number
    name?: StringWithAggregatesFilter<"admin"> | string
    email?: StringWithAggregatesFilter<"admin"> | string
    password?: StringWithAggregatesFilter<"admin"> | string
  }

  export type locationWhereInput = {
    AND?: locationWhereInput | locationWhereInput[]
    OR?: locationWhereInput[]
    NOT?: locationWhereInput | locationWhereInput[]
    id?: IntFilter<"location"> | number
    latitude?: DecimalFilter<"location"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"location"> | Decimal | DecimalJsLike | number | string
    orphanage?: OrphanageListRelationFilter
  }

  export type locationOrderByWithRelationInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    orphanage?: orphanageOrderByRelationAggregateInput
  }

  export type locationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: locationWhereInput | locationWhereInput[]
    OR?: locationWhereInput[]
    NOT?: locationWhereInput | locationWhereInput[]
    latitude?: DecimalFilter<"location"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"location"> | Decimal | DecimalJsLike | number | string
    orphanage?: OrphanageListRelationFilter
  }, "id">

  export type locationOrderByWithAggregationInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    _count?: locationCountOrderByAggregateInput
    _avg?: locationAvgOrderByAggregateInput
    _max?: locationMaxOrderByAggregateInput
    _min?: locationMinOrderByAggregateInput
    _sum?: locationSumOrderByAggregateInput
  }

  export type locationScalarWhereWithAggregatesInput = {
    AND?: locationScalarWhereWithAggregatesInput | locationScalarWhereWithAggregatesInput[]
    OR?: locationScalarWhereWithAggregatesInput[]
    NOT?: locationScalarWhereWithAggregatesInput | locationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"location"> | number
    latitude?: DecimalWithAggregatesFilter<"location"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalWithAggregatesFilter<"location"> | Decimal | DecimalJsLike | number | string
  }

  export type orphanageWhereInput = {
    AND?: orphanageWhereInput | orphanageWhereInput[]
    OR?: orphanageWhereInput[]
    NOT?: orphanageWhereInput | orphanageWhereInput[]
    id?: IntFilter<"orphanage"> | number
    name?: StringFilter<"orphanage"> | string
    about?: StringFilter<"orphanage"> | string
    instructions?: StringFilter<"orphanage"> | string
    acept_weekend?: BoolFilter<"orphanage"> | boolean
    acepted?: BoolFilter<"orphanage"> | boolean
    id_location?: IntFilter<"orphanage"> | number
    phone?: StringFilter<"orphanage"> | string
    deletedAt?: DateTimeNullableFilter<"orphanage"> | Date | string | null
    hours?: HoursListRelationFilter
    location?: XOR<LocationRelationFilter, locationWhereInput>
    pictures?: PictureListRelationFilter
  }

  export type orphanageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    about?: SortOrder
    instructions?: SortOrder
    acept_weekend?: SortOrder
    acepted?: SortOrder
    id_location?: SortOrder
    phone?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    hours?: hoursOrderByRelationAggregateInput
    location?: locationOrderByWithRelationInput
    pictures?: pictureOrderByRelationAggregateInput
  }

  export type orphanageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: orphanageWhereInput | orphanageWhereInput[]
    OR?: orphanageWhereInput[]
    NOT?: orphanageWhereInput | orphanageWhereInput[]
    name?: StringFilter<"orphanage"> | string
    about?: StringFilter<"orphanage"> | string
    instructions?: StringFilter<"orphanage"> | string
    acept_weekend?: BoolFilter<"orphanage"> | boolean
    acepted?: BoolFilter<"orphanage"> | boolean
    id_location?: IntFilter<"orphanage"> | number
    phone?: StringFilter<"orphanage"> | string
    deletedAt?: DateTimeNullableFilter<"orphanage"> | Date | string | null
    hours?: HoursListRelationFilter
    location?: XOR<LocationRelationFilter, locationWhereInput>
    pictures?: PictureListRelationFilter
  }, "id">

  export type orphanageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    about?: SortOrder
    instructions?: SortOrder
    acept_weekend?: SortOrder
    acepted?: SortOrder
    id_location?: SortOrder
    phone?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: orphanageCountOrderByAggregateInput
    _avg?: orphanageAvgOrderByAggregateInput
    _max?: orphanageMaxOrderByAggregateInput
    _min?: orphanageMinOrderByAggregateInput
    _sum?: orphanageSumOrderByAggregateInput
  }

  export type orphanageScalarWhereWithAggregatesInput = {
    AND?: orphanageScalarWhereWithAggregatesInput | orphanageScalarWhereWithAggregatesInput[]
    OR?: orphanageScalarWhereWithAggregatesInput[]
    NOT?: orphanageScalarWhereWithAggregatesInput | orphanageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"orphanage"> | number
    name?: StringWithAggregatesFilter<"orphanage"> | string
    about?: StringWithAggregatesFilter<"orphanage"> | string
    instructions?: StringWithAggregatesFilter<"orphanage"> | string
    acept_weekend?: BoolWithAggregatesFilter<"orphanage"> | boolean
    acepted?: BoolWithAggregatesFilter<"orphanage"> | boolean
    id_location?: IntWithAggregatesFilter<"orphanage"> | number
    phone?: StringWithAggregatesFilter<"orphanage"> | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"orphanage"> | Date | string | null
  }

  export type pictureWhereInput = {
    AND?: pictureWhereInput | pictureWhereInput[]
    OR?: pictureWhereInput[]
    NOT?: pictureWhereInput | pictureWhereInput[]
    id?: IntFilter<"picture"> | number
    url?: StringFilter<"picture"> | string
    id_orphanage?: IntFilter<"picture"> | number
    orphanage?: XOR<OrphanageRelationFilter, orphanageWhereInput>
  }

  export type pictureOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    id_orphanage?: SortOrder
    orphanage?: orphanageOrderByWithRelationInput
  }

  export type pictureWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: pictureWhereInput | pictureWhereInput[]
    OR?: pictureWhereInput[]
    NOT?: pictureWhereInput | pictureWhereInput[]
    url?: StringFilter<"picture"> | string
    id_orphanage?: IntFilter<"picture"> | number
    orphanage?: XOR<OrphanageRelationFilter, orphanageWhereInput>
  }, "id">

  export type pictureOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    id_orphanage?: SortOrder
    _count?: pictureCountOrderByAggregateInput
    _avg?: pictureAvgOrderByAggregateInput
    _max?: pictureMaxOrderByAggregateInput
    _min?: pictureMinOrderByAggregateInput
    _sum?: pictureSumOrderByAggregateInput
  }

  export type pictureScalarWhereWithAggregatesInput = {
    AND?: pictureScalarWhereWithAggregatesInput | pictureScalarWhereWithAggregatesInput[]
    OR?: pictureScalarWhereWithAggregatesInput[]
    NOT?: pictureScalarWhereWithAggregatesInput | pictureScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"picture"> | number
    url?: StringWithAggregatesFilter<"picture"> | string
    id_orphanage?: IntWithAggregatesFilter<"picture"> | number
  }

  export type hoursWhereInput = {
    AND?: hoursWhereInput | hoursWhereInput[]
    OR?: hoursWhereInput[]
    NOT?: hoursWhereInput | hoursWhereInput[]
    id?: IntFilter<"hours"> | number
    id_orphanage?: IntFilter<"hours"> | number
    final_hour?: StringFilter<"hours"> | string
    initial_hour?: StringFilter<"hours"> | string
    orphanage?: XOR<OrphanageRelationFilter, orphanageWhereInput>
  }

  export type hoursOrderByWithRelationInput = {
    id?: SortOrder
    id_orphanage?: SortOrder
    final_hour?: SortOrder
    initial_hour?: SortOrder
    orphanage?: orphanageOrderByWithRelationInput
  }

  export type hoursWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: hoursWhereInput | hoursWhereInput[]
    OR?: hoursWhereInput[]
    NOT?: hoursWhereInput | hoursWhereInput[]
    id_orphanage?: IntFilter<"hours"> | number
    final_hour?: StringFilter<"hours"> | string
    initial_hour?: StringFilter<"hours"> | string
    orphanage?: XOR<OrphanageRelationFilter, orphanageWhereInput>
  }, "id">

  export type hoursOrderByWithAggregationInput = {
    id?: SortOrder
    id_orphanage?: SortOrder
    final_hour?: SortOrder
    initial_hour?: SortOrder
    _count?: hoursCountOrderByAggregateInput
    _avg?: hoursAvgOrderByAggregateInput
    _max?: hoursMaxOrderByAggregateInput
    _min?: hoursMinOrderByAggregateInput
    _sum?: hoursSumOrderByAggregateInput
  }

  export type hoursScalarWhereWithAggregatesInput = {
    AND?: hoursScalarWhereWithAggregatesInput | hoursScalarWhereWithAggregatesInput[]
    OR?: hoursScalarWhereWithAggregatesInput[]
    NOT?: hoursScalarWhereWithAggregatesInput | hoursScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"hours"> | number
    id_orphanage?: IntWithAggregatesFilter<"hours"> | number
    final_hour?: StringWithAggregatesFilter<"hours"> | string
    initial_hour?: StringWithAggregatesFilter<"hours"> | string
  }

  export type adminCreateInput = {
    name: string
    email: string
    password: string
  }

  export type adminUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
  }

  export type adminUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type adminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type adminCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
  }

  export type adminUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type adminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type locationCreateInput = {
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    orphanage?: orphanageCreateNestedManyWithoutLocationInput
  }

  export type locationUncheckedCreateInput = {
    id?: number
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    orphanage?: orphanageUncheckedCreateNestedManyWithoutLocationInput
  }

  export type locationUpdateInput = {
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    orphanage?: orphanageUpdateManyWithoutLocationNestedInput
  }

  export type locationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    orphanage?: orphanageUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type locationCreateManyInput = {
    id?: number
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
  }

  export type locationUpdateManyMutationInput = {
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type locationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type orphanageCreateInput = {
    name: string
    about: string
    instructions: string
    acept_weekend: boolean
    acepted?: boolean
    phone?: string
    deletedAt?: Date | string | null
    hours?: hoursCreateNestedManyWithoutOrphanageInput
    location: locationCreateNestedOneWithoutOrphanageInput
    pictures?: pictureCreateNestedManyWithoutOrphanageInput
  }

  export type orphanageUncheckedCreateInput = {
    id?: number
    name: string
    about: string
    instructions: string
    acept_weekend: boolean
    acepted?: boolean
    id_location: number
    phone?: string
    deletedAt?: Date | string | null
    hours?: hoursUncheckedCreateNestedManyWithoutOrphanageInput
    pictures?: pictureUncheckedCreateNestedManyWithoutOrphanageInput
  }

  export type orphanageUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    acept_weekend?: BoolFieldUpdateOperationsInput | boolean
    acepted?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hours?: hoursUpdateManyWithoutOrphanageNestedInput
    location?: locationUpdateOneRequiredWithoutOrphanageNestedInput
    pictures?: pictureUpdateManyWithoutOrphanageNestedInput
  }

  export type orphanageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    acept_weekend?: BoolFieldUpdateOperationsInput | boolean
    acepted?: BoolFieldUpdateOperationsInput | boolean
    id_location?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hours?: hoursUncheckedUpdateManyWithoutOrphanageNestedInput
    pictures?: pictureUncheckedUpdateManyWithoutOrphanageNestedInput
  }

  export type orphanageCreateManyInput = {
    id?: number
    name: string
    about: string
    instructions: string
    acept_weekend: boolean
    acepted?: boolean
    id_location: number
    phone?: string
    deletedAt?: Date | string | null
  }

  export type orphanageUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    acept_weekend?: BoolFieldUpdateOperationsInput | boolean
    acepted?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type orphanageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    acept_weekend?: BoolFieldUpdateOperationsInput | boolean
    acepted?: BoolFieldUpdateOperationsInput | boolean
    id_location?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pictureCreateInput = {
    url: string
    orphanage: orphanageCreateNestedOneWithoutPicturesInput
  }

  export type pictureUncheckedCreateInput = {
    id?: number
    url: string
    id_orphanage: number
  }

  export type pictureUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    orphanage?: orphanageUpdateOneRequiredWithoutPicturesNestedInput
  }

  export type pictureUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    id_orphanage?: IntFieldUpdateOperationsInput | number
  }

  export type pictureCreateManyInput = {
    id?: number
    url: string
    id_orphanage: number
  }

  export type pictureUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type pictureUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    id_orphanage?: IntFieldUpdateOperationsInput | number
  }

  export type hoursCreateInput = {
    final_hour: string
    initial_hour: string
    orphanage: orphanageCreateNestedOneWithoutHoursInput
  }

  export type hoursUncheckedCreateInput = {
    id?: number
    id_orphanage: number
    final_hour: string
    initial_hour: string
  }

  export type hoursUpdateInput = {
    final_hour?: StringFieldUpdateOperationsInput | string
    initial_hour?: StringFieldUpdateOperationsInput | string
    orphanage?: orphanageUpdateOneRequiredWithoutHoursNestedInput
  }

  export type hoursUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_orphanage?: IntFieldUpdateOperationsInput | number
    final_hour?: StringFieldUpdateOperationsInput | string
    initial_hour?: StringFieldUpdateOperationsInput | string
  }

  export type hoursCreateManyInput = {
    id?: number
    id_orphanage: number
    final_hour: string
    initial_hour: string
  }

  export type hoursUpdateManyMutationInput = {
    final_hour?: StringFieldUpdateOperationsInput | string
    initial_hour?: StringFieldUpdateOperationsInput | string
  }

  export type hoursUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_orphanage?: IntFieldUpdateOperationsInput | number
    final_hour?: StringFieldUpdateOperationsInput | string
    initial_hour?: StringFieldUpdateOperationsInput | string
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

  export type adminCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type adminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type adminMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type adminMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type adminSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type OrphanageListRelationFilter = {
    every?: orphanageWhereInput
    some?: orphanageWhereInput
    none?: orphanageWhereInput
  }

  export type orphanageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type locationCountOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type locationAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type locationMaxOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type locationMinOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type locationSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type HoursListRelationFilter = {
    every?: hoursWhereInput
    some?: hoursWhereInput
    none?: hoursWhereInput
  }

  export type LocationRelationFilter = {
    is?: locationWhereInput
    isNot?: locationWhereInput
  }

  export type PictureListRelationFilter = {
    every?: pictureWhereInput
    some?: pictureWhereInput
    none?: pictureWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type hoursOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pictureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type orphanageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    about?: SortOrder
    instructions?: SortOrder
    acept_weekend?: SortOrder
    acepted?: SortOrder
    id_location?: SortOrder
    phone?: SortOrder
    deletedAt?: SortOrder
  }

  export type orphanageAvgOrderByAggregateInput = {
    id?: SortOrder
    id_location?: SortOrder
  }

  export type orphanageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    about?: SortOrder
    instructions?: SortOrder
    acept_weekend?: SortOrder
    acepted?: SortOrder
    id_location?: SortOrder
    phone?: SortOrder
    deletedAt?: SortOrder
  }

  export type orphanageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    about?: SortOrder
    instructions?: SortOrder
    acept_weekend?: SortOrder
    acepted?: SortOrder
    id_location?: SortOrder
    phone?: SortOrder
    deletedAt?: SortOrder
  }

  export type orphanageSumOrderByAggregateInput = {
    id?: SortOrder
    id_location?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type OrphanageRelationFilter = {
    is?: orphanageWhereInput
    isNot?: orphanageWhereInput
  }

  export type pictureCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    id_orphanage?: SortOrder
  }

  export type pictureAvgOrderByAggregateInput = {
    id?: SortOrder
    id_orphanage?: SortOrder
  }

  export type pictureMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    id_orphanage?: SortOrder
  }

  export type pictureMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    id_orphanage?: SortOrder
  }

  export type pictureSumOrderByAggregateInput = {
    id?: SortOrder
    id_orphanage?: SortOrder
  }

  export type hoursCountOrderByAggregateInput = {
    id?: SortOrder
    id_orphanage?: SortOrder
    final_hour?: SortOrder
    initial_hour?: SortOrder
  }

  export type hoursAvgOrderByAggregateInput = {
    id?: SortOrder
    id_orphanage?: SortOrder
  }

  export type hoursMaxOrderByAggregateInput = {
    id?: SortOrder
    id_orphanage?: SortOrder
    final_hour?: SortOrder
    initial_hour?: SortOrder
  }

  export type hoursMinOrderByAggregateInput = {
    id?: SortOrder
    id_orphanage?: SortOrder
    final_hour?: SortOrder
    initial_hour?: SortOrder
  }

  export type hoursSumOrderByAggregateInput = {
    id?: SortOrder
    id_orphanage?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type orphanageCreateNestedManyWithoutLocationInput = {
    create?: XOR<orphanageCreateWithoutLocationInput, orphanageUncheckedCreateWithoutLocationInput> | orphanageCreateWithoutLocationInput[] | orphanageUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: orphanageCreateOrConnectWithoutLocationInput | orphanageCreateOrConnectWithoutLocationInput[]
    createMany?: orphanageCreateManyLocationInputEnvelope
    connect?: orphanageWhereUniqueInput | orphanageWhereUniqueInput[]
  }

  export type orphanageUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<orphanageCreateWithoutLocationInput, orphanageUncheckedCreateWithoutLocationInput> | orphanageCreateWithoutLocationInput[] | orphanageUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: orphanageCreateOrConnectWithoutLocationInput | orphanageCreateOrConnectWithoutLocationInput[]
    createMany?: orphanageCreateManyLocationInputEnvelope
    connect?: orphanageWhereUniqueInput | orphanageWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type orphanageUpdateManyWithoutLocationNestedInput = {
    create?: XOR<orphanageCreateWithoutLocationInput, orphanageUncheckedCreateWithoutLocationInput> | orphanageCreateWithoutLocationInput[] | orphanageUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: orphanageCreateOrConnectWithoutLocationInput | orphanageCreateOrConnectWithoutLocationInput[]
    upsert?: orphanageUpsertWithWhereUniqueWithoutLocationInput | orphanageUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: orphanageCreateManyLocationInputEnvelope
    set?: orphanageWhereUniqueInput | orphanageWhereUniqueInput[]
    disconnect?: orphanageWhereUniqueInput | orphanageWhereUniqueInput[]
    delete?: orphanageWhereUniqueInput | orphanageWhereUniqueInput[]
    connect?: orphanageWhereUniqueInput | orphanageWhereUniqueInput[]
    update?: orphanageUpdateWithWhereUniqueWithoutLocationInput | orphanageUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: orphanageUpdateManyWithWhereWithoutLocationInput | orphanageUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: orphanageScalarWhereInput | orphanageScalarWhereInput[]
  }

  export type orphanageUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<orphanageCreateWithoutLocationInput, orphanageUncheckedCreateWithoutLocationInput> | orphanageCreateWithoutLocationInput[] | orphanageUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: orphanageCreateOrConnectWithoutLocationInput | orphanageCreateOrConnectWithoutLocationInput[]
    upsert?: orphanageUpsertWithWhereUniqueWithoutLocationInput | orphanageUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: orphanageCreateManyLocationInputEnvelope
    set?: orphanageWhereUniqueInput | orphanageWhereUniqueInput[]
    disconnect?: orphanageWhereUniqueInput | orphanageWhereUniqueInput[]
    delete?: orphanageWhereUniqueInput | orphanageWhereUniqueInput[]
    connect?: orphanageWhereUniqueInput | orphanageWhereUniqueInput[]
    update?: orphanageUpdateWithWhereUniqueWithoutLocationInput | orphanageUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: orphanageUpdateManyWithWhereWithoutLocationInput | orphanageUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: orphanageScalarWhereInput | orphanageScalarWhereInput[]
  }

  export type hoursCreateNestedManyWithoutOrphanageInput = {
    create?: XOR<hoursCreateWithoutOrphanageInput, hoursUncheckedCreateWithoutOrphanageInput> | hoursCreateWithoutOrphanageInput[] | hoursUncheckedCreateWithoutOrphanageInput[]
    connectOrCreate?: hoursCreateOrConnectWithoutOrphanageInput | hoursCreateOrConnectWithoutOrphanageInput[]
    createMany?: hoursCreateManyOrphanageInputEnvelope
    connect?: hoursWhereUniqueInput | hoursWhereUniqueInput[]
  }

  export type locationCreateNestedOneWithoutOrphanageInput = {
    create?: XOR<locationCreateWithoutOrphanageInput, locationUncheckedCreateWithoutOrphanageInput>
    connectOrCreate?: locationCreateOrConnectWithoutOrphanageInput
    connect?: locationWhereUniqueInput
  }

  export type pictureCreateNestedManyWithoutOrphanageInput = {
    create?: XOR<pictureCreateWithoutOrphanageInput, pictureUncheckedCreateWithoutOrphanageInput> | pictureCreateWithoutOrphanageInput[] | pictureUncheckedCreateWithoutOrphanageInput[]
    connectOrCreate?: pictureCreateOrConnectWithoutOrphanageInput | pictureCreateOrConnectWithoutOrphanageInput[]
    createMany?: pictureCreateManyOrphanageInputEnvelope
    connect?: pictureWhereUniqueInput | pictureWhereUniqueInput[]
  }

  export type hoursUncheckedCreateNestedManyWithoutOrphanageInput = {
    create?: XOR<hoursCreateWithoutOrphanageInput, hoursUncheckedCreateWithoutOrphanageInput> | hoursCreateWithoutOrphanageInput[] | hoursUncheckedCreateWithoutOrphanageInput[]
    connectOrCreate?: hoursCreateOrConnectWithoutOrphanageInput | hoursCreateOrConnectWithoutOrphanageInput[]
    createMany?: hoursCreateManyOrphanageInputEnvelope
    connect?: hoursWhereUniqueInput | hoursWhereUniqueInput[]
  }

  export type pictureUncheckedCreateNestedManyWithoutOrphanageInput = {
    create?: XOR<pictureCreateWithoutOrphanageInput, pictureUncheckedCreateWithoutOrphanageInput> | pictureCreateWithoutOrphanageInput[] | pictureUncheckedCreateWithoutOrphanageInput[]
    connectOrCreate?: pictureCreateOrConnectWithoutOrphanageInput | pictureCreateOrConnectWithoutOrphanageInput[]
    createMany?: pictureCreateManyOrphanageInputEnvelope
    connect?: pictureWhereUniqueInput | pictureWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type hoursUpdateManyWithoutOrphanageNestedInput = {
    create?: XOR<hoursCreateWithoutOrphanageInput, hoursUncheckedCreateWithoutOrphanageInput> | hoursCreateWithoutOrphanageInput[] | hoursUncheckedCreateWithoutOrphanageInput[]
    connectOrCreate?: hoursCreateOrConnectWithoutOrphanageInput | hoursCreateOrConnectWithoutOrphanageInput[]
    upsert?: hoursUpsertWithWhereUniqueWithoutOrphanageInput | hoursUpsertWithWhereUniqueWithoutOrphanageInput[]
    createMany?: hoursCreateManyOrphanageInputEnvelope
    set?: hoursWhereUniqueInput | hoursWhereUniqueInput[]
    disconnect?: hoursWhereUniqueInput | hoursWhereUniqueInput[]
    delete?: hoursWhereUniqueInput | hoursWhereUniqueInput[]
    connect?: hoursWhereUniqueInput | hoursWhereUniqueInput[]
    update?: hoursUpdateWithWhereUniqueWithoutOrphanageInput | hoursUpdateWithWhereUniqueWithoutOrphanageInput[]
    updateMany?: hoursUpdateManyWithWhereWithoutOrphanageInput | hoursUpdateManyWithWhereWithoutOrphanageInput[]
    deleteMany?: hoursScalarWhereInput | hoursScalarWhereInput[]
  }

  export type locationUpdateOneRequiredWithoutOrphanageNestedInput = {
    create?: XOR<locationCreateWithoutOrphanageInput, locationUncheckedCreateWithoutOrphanageInput>
    connectOrCreate?: locationCreateOrConnectWithoutOrphanageInput
    upsert?: locationUpsertWithoutOrphanageInput
    connect?: locationWhereUniqueInput
    update?: XOR<XOR<locationUpdateToOneWithWhereWithoutOrphanageInput, locationUpdateWithoutOrphanageInput>, locationUncheckedUpdateWithoutOrphanageInput>
  }

  export type pictureUpdateManyWithoutOrphanageNestedInput = {
    create?: XOR<pictureCreateWithoutOrphanageInput, pictureUncheckedCreateWithoutOrphanageInput> | pictureCreateWithoutOrphanageInput[] | pictureUncheckedCreateWithoutOrphanageInput[]
    connectOrCreate?: pictureCreateOrConnectWithoutOrphanageInput | pictureCreateOrConnectWithoutOrphanageInput[]
    upsert?: pictureUpsertWithWhereUniqueWithoutOrphanageInput | pictureUpsertWithWhereUniqueWithoutOrphanageInput[]
    createMany?: pictureCreateManyOrphanageInputEnvelope
    set?: pictureWhereUniqueInput | pictureWhereUniqueInput[]
    disconnect?: pictureWhereUniqueInput | pictureWhereUniqueInput[]
    delete?: pictureWhereUniqueInput | pictureWhereUniqueInput[]
    connect?: pictureWhereUniqueInput | pictureWhereUniqueInput[]
    update?: pictureUpdateWithWhereUniqueWithoutOrphanageInput | pictureUpdateWithWhereUniqueWithoutOrphanageInput[]
    updateMany?: pictureUpdateManyWithWhereWithoutOrphanageInput | pictureUpdateManyWithWhereWithoutOrphanageInput[]
    deleteMany?: pictureScalarWhereInput | pictureScalarWhereInput[]
  }

  export type hoursUncheckedUpdateManyWithoutOrphanageNestedInput = {
    create?: XOR<hoursCreateWithoutOrphanageInput, hoursUncheckedCreateWithoutOrphanageInput> | hoursCreateWithoutOrphanageInput[] | hoursUncheckedCreateWithoutOrphanageInput[]
    connectOrCreate?: hoursCreateOrConnectWithoutOrphanageInput | hoursCreateOrConnectWithoutOrphanageInput[]
    upsert?: hoursUpsertWithWhereUniqueWithoutOrphanageInput | hoursUpsertWithWhereUniqueWithoutOrphanageInput[]
    createMany?: hoursCreateManyOrphanageInputEnvelope
    set?: hoursWhereUniqueInput | hoursWhereUniqueInput[]
    disconnect?: hoursWhereUniqueInput | hoursWhereUniqueInput[]
    delete?: hoursWhereUniqueInput | hoursWhereUniqueInput[]
    connect?: hoursWhereUniqueInput | hoursWhereUniqueInput[]
    update?: hoursUpdateWithWhereUniqueWithoutOrphanageInput | hoursUpdateWithWhereUniqueWithoutOrphanageInput[]
    updateMany?: hoursUpdateManyWithWhereWithoutOrphanageInput | hoursUpdateManyWithWhereWithoutOrphanageInput[]
    deleteMany?: hoursScalarWhereInput | hoursScalarWhereInput[]
  }

  export type pictureUncheckedUpdateManyWithoutOrphanageNestedInput = {
    create?: XOR<pictureCreateWithoutOrphanageInput, pictureUncheckedCreateWithoutOrphanageInput> | pictureCreateWithoutOrphanageInput[] | pictureUncheckedCreateWithoutOrphanageInput[]
    connectOrCreate?: pictureCreateOrConnectWithoutOrphanageInput | pictureCreateOrConnectWithoutOrphanageInput[]
    upsert?: pictureUpsertWithWhereUniqueWithoutOrphanageInput | pictureUpsertWithWhereUniqueWithoutOrphanageInput[]
    createMany?: pictureCreateManyOrphanageInputEnvelope
    set?: pictureWhereUniqueInput | pictureWhereUniqueInput[]
    disconnect?: pictureWhereUniqueInput | pictureWhereUniqueInput[]
    delete?: pictureWhereUniqueInput | pictureWhereUniqueInput[]
    connect?: pictureWhereUniqueInput | pictureWhereUniqueInput[]
    update?: pictureUpdateWithWhereUniqueWithoutOrphanageInput | pictureUpdateWithWhereUniqueWithoutOrphanageInput[]
    updateMany?: pictureUpdateManyWithWhereWithoutOrphanageInput | pictureUpdateManyWithWhereWithoutOrphanageInput[]
    deleteMany?: pictureScalarWhereInput | pictureScalarWhereInput[]
  }

  export type orphanageCreateNestedOneWithoutPicturesInput = {
    create?: XOR<orphanageCreateWithoutPicturesInput, orphanageUncheckedCreateWithoutPicturesInput>
    connectOrCreate?: orphanageCreateOrConnectWithoutPicturesInput
    connect?: orphanageWhereUniqueInput
  }

  export type orphanageUpdateOneRequiredWithoutPicturesNestedInput = {
    create?: XOR<orphanageCreateWithoutPicturesInput, orphanageUncheckedCreateWithoutPicturesInput>
    connectOrCreate?: orphanageCreateOrConnectWithoutPicturesInput
    upsert?: orphanageUpsertWithoutPicturesInput
    connect?: orphanageWhereUniqueInput
    update?: XOR<XOR<orphanageUpdateToOneWithWhereWithoutPicturesInput, orphanageUpdateWithoutPicturesInput>, orphanageUncheckedUpdateWithoutPicturesInput>
  }

  export type orphanageCreateNestedOneWithoutHoursInput = {
    create?: XOR<orphanageCreateWithoutHoursInput, orphanageUncheckedCreateWithoutHoursInput>
    connectOrCreate?: orphanageCreateOrConnectWithoutHoursInput
    connect?: orphanageWhereUniqueInput
  }

  export type orphanageUpdateOneRequiredWithoutHoursNestedInput = {
    create?: XOR<orphanageCreateWithoutHoursInput, orphanageUncheckedCreateWithoutHoursInput>
    connectOrCreate?: orphanageCreateOrConnectWithoutHoursInput
    upsert?: orphanageUpsertWithoutHoursInput
    connect?: orphanageWhereUniqueInput
    update?: XOR<XOR<orphanageUpdateToOneWithWhereWithoutHoursInput, orphanageUpdateWithoutHoursInput>, orphanageUncheckedUpdateWithoutHoursInput>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type orphanageCreateWithoutLocationInput = {
    name: string
    about: string
    instructions: string
    acept_weekend: boolean
    acepted?: boolean
    phone?: string
    deletedAt?: Date | string | null
    hours?: hoursCreateNestedManyWithoutOrphanageInput
    pictures?: pictureCreateNestedManyWithoutOrphanageInput
  }

  export type orphanageUncheckedCreateWithoutLocationInput = {
    id?: number
    name: string
    about: string
    instructions: string
    acept_weekend: boolean
    acepted?: boolean
    phone?: string
    deletedAt?: Date | string | null
    hours?: hoursUncheckedCreateNestedManyWithoutOrphanageInput
    pictures?: pictureUncheckedCreateNestedManyWithoutOrphanageInput
  }

  export type orphanageCreateOrConnectWithoutLocationInput = {
    where: orphanageWhereUniqueInput
    create: XOR<orphanageCreateWithoutLocationInput, orphanageUncheckedCreateWithoutLocationInput>
  }

  export type orphanageCreateManyLocationInputEnvelope = {
    data: orphanageCreateManyLocationInput | orphanageCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type orphanageUpsertWithWhereUniqueWithoutLocationInput = {
    where: orphanageWhereUniqueInput
    update: XOR<orphanageUpdateWithoutLocationInput, orphanageUncheckedUpdateWithoutLocationInput>
    create: XOR<orphanageCreateWithoutLocationInput, orphanageUncheckedCreateWithoutLocationInput>
  }

  export type orphanageUpdateWithWhereUniqueWithoutLocationInput = {
    where: orphanageWhereUniqueInput
    data: XOR<orphanageUpdateWithoutLocationInput, orphanageUncheckedUpdateWithoutLocationInput>
  }

  export type orphanageUpdateManyWithWhereWithoutLocationInput = {
    where: orphanageScalarWhereInput
    data: XOR<orphanageUpdateManyMutationInput, orphanageUncheckedUpdateManyWithoutLocationInput>
  }

  export type orphanageScalarWhereInput = {
    AND?: orphanageScalarWhereInput | orphanageScalarWhereInput[]
    OR?: orphanageScalarWhereInput[]
    NOT?: orphanageScalarWhereInput | orphanageScalarWhereInput[]
    id?: IntFilter<"orphanage"> | number
    name?: StringFilter<"orphanage"> | string
    about?: StringFilter<"orphanage"> | string
    instructions?: StringFilter<"orphanage"> | string
    acept_weekend?: BoolFilter<"orphanage"> | boolean
    acepted?: BoolFilter<"orphanage"> | boolean
    id_location?: IntFilter<"orphanage"> | number
    phone?: StringFilter<"orphanage"> | string
    deletedAt?: DateTimeNullableFilter<"orphanage"> | Date | string | null
  }

  export type hoursCreateWithoutOrphanageInput = {
    final_hour: string
    initial_hour: string
  }

  export type hoursUncheckedCreateWithoutOrphanageInput = {
    id?: number
    final_hour: string
    initial_hour: string
  }

  export type hoursCreateOrConnectWithoutOrphanageInput = {
    where: hoursWhereUniqueInput
    create: XOR<hoursCreateWithoutOrphanageInput, hoursUncheckedCreateWithoutOrphanageInput>
  }

  export type hoursCreateManyOrphanageInputEnvelope = {
    data: hoursCreateManyOrphanageInput | hoursCreateManyOrphanageInput[]
    skipDuplicates?: boolean
  }

  export type locationCreateWithoutOrphanageInput = {
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
  }

  export type locationUncheckedCreateWithoutOrphanageInput = {
    id?: number
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
  }

  export type locationCreateOrConnectWithoutOrphanageInput = {
    where: locationWhereUniqueInput
    create: XOR<locationCreateWithoutOrphanageInput, locationUncheckedCreateWithoutOrphanageInput>
  }

  export type pictureCreateWithoutOrphanageInput = {
    url: string
  }

  export type pictureUncheckedCreateWithoutOrphanageInput = {
    id?: number
    url: string
  }

  export type pictureCreateOrConnectWithoutOrphanageInput = {
    where: pictureWhereUniqueInput
    create: XOR<pictureCreateWithoutOrphanageInput, pictureUncheckedCreateWithoutOrphanageInput>
  }

  export type pictureCreateManyOrphanageInputEnvelope = {
    data: pictureCreateManyOrphanageInput | pictureCreateManyOrphanageInput[]
    skipDuplicates?: boolean
  }

  export type hoursUpsertWithWhereUniqueWithoutOrphanageInput = {
    where: hoursWhereUniqueInput
    update: XOR<hoursUpdateWithoutOrphanageInput, hoursUncheckedUpdateWithoutOrphanageInput>
    create: XOR<hoursCreateWithoutOrphanageInput, hoursUncheckedCreateWithoutOrphanageInput>
  }

  export type hoursUpdateWithWhereUniqueWithoutOrphanageInput = {
    where: hoursWhereUniqueInput
    data: XOR<hoursUpdateWithoutOrphanageInput, hoursUncheckedUpdateWithoutOrphanageInput>
  }

  export type hoursUpdateManyWithWhereWithoutOrphanageInput = {
    where: hoursScalarWhereInput
    data: XOR<hoursUpdateManyMutationInput, hoursUncheckedUpdateManyWithoutOrphanageInput>
  }

  export type hoursScalarWhereInput = {
    AND?: hoursScalarWhereInput | hoursScalarWhereInput[]
    OR?: hoursScalarWhereInput[]
    NOT?: hoursScalarWhereInput | hoursScalarWhereInput[]
    id?: IntFilter<"hours"> | number
    id_orphanage?: IntFilter<"hours"> | number
    final_hour?: StringFilter<"hours"> | string
    initial_hour?: StringFilter<"hours"> | string
  }

  export type locationUpsertWithoutOrphanageInput = {
    update: XOR<locationUpdateWithoutOrphanageInput, locationUncheckedUpdateWithoutOrphanageInput>
    create: XOR<locationCreateWithoutOrphanageInput, locationUncheckedCreateWithoutOrphanageInput>
    where?: locationWhereInput
  }

  export type locationUpdateToOneWithWhereWithoutOrphanageInput = {
    where?: locationWhereInput
    data: XOR<locationUpdateWithoutOrphanageInput, locationUncheckedUpdateWithoutOrphanageInput>
  }

  export type locationUpdateWithoutOrphanageInput = {
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type locationUncheckedUpdateWithoutOrphanageInput = {
    id?: IntFieldUpdateOperationsInput | number
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type pictureUpsertWithWhereUniqueWithoutOrphanageInput = {
    where: pictureWhereUniqueInput
    update: XOR<pictureUpdateWithoutOrphanageInput, pictureUncheckedUpdateWithoutOrphanageInput>
    create: XOR<pictureCreateWithoutOrphanageInput, pictureUncheckedCreateWithoutOrphanageInput>
  }

  export type pictureUpdateWithWhereUniqueWithoutOrphanageInput = {
    where: pictureWhereUniqueInput
    data: XOR<pictureUpdateWithoutOrphanageInput, pictureUncheckedUpdateWithoutOrphanageInput>
  }

  export type pictureUpdateManyWithWhereWithoutOrphanageInput = {
    where: pictureScalarWhereInput
    data: XOR<pictureUpdateManyMutationInput, pictureUncheckedUpdateManyWithoutOrphanageInput>
  }

  export type pictureScalarWhereInput = {
    AND?: pictureScalarWhereInput | pictureScalarWhereInput[]
    OR?: pictureScalarWhereInput[]
    NOT?: pictureScalarWhereInput | pictureScalarWhereInput[]
    id?: IntFilter<"picture"> | number
    url?: StringFilter<"picture"> | string
    id_orphanage?: IntFilter<"picture"> | number
  }

  export type orphanageCreateWithoutPicturesInput = {
    name: string
    about: string
    instructions: string
    acept_weekend: boolean
    acepted?: boolean
    phone?: string
    deletedAt?: Date | string | null
    hours?: hoursCreateNestedManyWithoutOrphanageInput
    location: locationCreateNestedOneWithoutOrphanageInput
  }

  export type orphanageUncheckedCreateWithoutPicturesInput = {
    id?: number
    name: string
    about: string
    instructions: string
    acept_weekend: boolean
    acepted?: boolean
    id_location: number
    phone?: string
    deletedAt?: Date | string | null
    hours?: hoursUncheckedCreateNestedManyWithoutOrphanageInput
  }

  export type orphanageCreateOrConnectWithoutPicturesInput = {
    where: orphanageWhereUniqueInput
    create: XOR<orphanageCreateWithoutPicturesInput, orphanageUncheckedCreateWithoutPicturesInput>
  }

  export type orphanageUpsertWithoutPicturesInput = {
    update: XOR<orphanageUpdateWithoutPicturesInput, orphanageUncheckedUpdateWithoutPicturesInput>
    create: XOR<orphanageCreateWithoutPicturesInput, orphanageUncheckedCreateWithoutPicturesInput>
    where?: orphanageWhereInput
  }

  export type orphanageUpdateToOneWithWhereWithoutPicturesInput = {
    where?: orphanageWhereInput
    data: XOR<orphanageUpdateWithoutPicturesInput, orphanageUncheckedUpdateWithoutPicturesInput>
  }

  export type orphanageUpdateWithoutPicturesInput = {
    name?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    acept_weekend?: BoolFieldUpdateOperationsInput | boolean
    acepted?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hours?: hoursUpdateManyWithoutOrphanageNestedInput
    location?: locationUpdateOneRequiredWithoutOrphanageNestedInput
  }

  export type orphanageUncheckedUpdateWithoutPicturesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    acept_weekend?: BoolFieldUpdateOperationsInput | boolean
    acepted?: BoolFieldUpdateOperationsInput | boolean
    id_location?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hours?: hoursUncheckedUpdateManyWithoutOrphanageNestedInput
  }

  export type orphanageCreateWithoutHoursInput = {
    name: string
    about: string
    instructions: string
    acept_weekend: boolean
    acepted?: boolean
    phone?: string
    deletedAt?: Date | string | null
    location: locationCreateNestedOneWithoutOrphanageInput
    pictures?: pictureCreateNestedManyWithoutOrphanageInput
  }

  export type orphanageUncheckedCreateWithoutHoursInput = {
    id?: number
    name: string
    about: string
    instructions: string
    acept_weekend: boolean
    acepted?: boolean
    id_location: number
    phone?: string
    deletedAt?: Date | string | null
    pictures?: pictureUncheckedCreateNestedManyWithoutOrphanageInput
  }

  export type orphanageCreateOrConnectWithoutHoursInput = {
    where: orphanageWhereUniqueInput
    create: XOR<orphanageCreateWithoutHoursInput, orphanageUncheckedCreateWithoutHoursInput>
  }

  export type orphanageUpsertWithoutHoursInput = {
    update: XOR<orphanageUpdateWithoutHoursInput, orphanageUncheckedUpdateWithoutHoursInput>
    create: XOR<orphanageCreateWithoutHoursInput, orphanageUncheckedCreateWithoutHoursInput>
    where?: orphanageWhereInput
  }

  export type orphanageUpdateToOneWithWhereWithoutHoursInput = {
    where?: orphanageWhereInput
    data: XOR<orphanageUpdateWithoutHoursInput, orphanageUncheckedUpdateWithoutHoursInput>
  }

  export type orphanageUpdateWithoutHoursInput = {
    name?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    acept_weekend?: BoolFieldUpdateOperationsInput | boolean
    acepted?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: locationUpdateOneRequiredWithoutOrphanageNestedInput
    pictures?: pictureUpdateManyWithoutOrphanageNestedInput
  }

  export type orphanageUncheckedUpdateWithoutHoursInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    acept_weekend?: BoolFieldUpdateOperationsInput | boolean
    acepted?: BoolFieldUpdateOperationsInput | boolean
    id_location?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pictures?: pictureUncheckedUpdateManyWithoutOrphanageNestedInput
  }

  export type orphanageCreateManyLocationInput = {
    id?: number
    name: string
    about: string
    instructions: string
    acept_weekend: boolean
    acepted?: boolean
    phone?: string
    deletedAt?: Date | string | null
  }

  export type orphanageUpdateWithoutLocationInput = {
    name?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    acept_weekend?: BoolFieldUpdateOperationsInput | boolean
    acepted?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hours?: hoursUpdateManyWithoutOrphanageNestedInput
    pictures?: pictureUpdateManyWithoutOrphanageNestedInput
  }

  export type orphanageUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    acept_weekend?: BoolFieldUpdateOperationsInput | boolean
    acepted?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hours?: hoursUncheckedUpdateManyWithoutOrphanageNestedInput
    pictures?: pictureUncheckedUpdateManyWithoutOrphanageNestedInput
  }

  export type orphanageUncheckedUpdateManyWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    acept_weekend?: BoolFieldUpdateOperationsInput | boolean
    acepted?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hoursCreateManyOrphanageInput = {
    id?: number
    final_hour: string
    initial_hour: string
  }

  export type pictureCreateManyOrphanageInput = {
    id?: number
    url: string
  }

  export type hoursUpdateWithoutOrphanageInput = {
    final_hour?: StringFieldUpdateOperationsInput | string
    initial_hour?: StringFieldUpdateOperationsInput | string
  }

  export type hoursUncheckedUpdateWithoutOrphanageInput = {
    id?: IntFieldUpdateOperationsInput | number
    final_hour?: StringFieldUpdateOperationsInput | string
    initial_hour?: StringFieldUpdateOperationsInput | string
  }

  export type hoursUncheckedUpdateManyWithoutOrphanageInput = {
    id?: IntFieldUpdateOperationsInput | number
    final_hour?: StringFieldUpdateOperationsInput | string
    initial_hour?: StringFieldUpdateOperationsInput | string
  }

  export type pictureUpdateWithoutOrphanageInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type pictureUncheckedUpdateWithoutOrphanageInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type pictureUncheckedUpdateManyWithoutOrphanageInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use LocationCountOutputTypeDefaultArgs instead
     */
    export type LocationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LocationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrphanageCountOutputTypeDefaultArgs instead
     */
    export type OrphanageCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrphanageCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use adminDefaultArgs instead
     */
    export type adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = adminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use locationDefaultArgs instead
     */
    export type locationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = locationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use orphanageDefaultArgs instead
     */
    export type orphanageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = orphanageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use pictureDefaultArgs instead
     */
    export type pictureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = pictureDefaultArgs<ExtArgs>
    /**
     * @deprecated Use hoursDefaultArgs instead
     */
    export type hoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = hoursDefaultArgs<ExtArgs>

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