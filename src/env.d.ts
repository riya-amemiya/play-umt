// eslint-disable-next-line unicorn/prevent-abbreviations
declare interface Env {
  readonly FIREBASE_PROJECT_ID: string;
  readonly FIREBASE_APP_ID: string;
  readonly FIREBASE_STORAGE_BUCKET: string;
  readonly FIREBASE_API_KEY: string;
  readonly FIREBASE_AUTH_DOMAIN: string;
  readonly FIREBASE_MESSAGING_SENDER_ID: string;
  readonly FIREBASE_MEASUREMENT_ID: string;
}

declare interface ImportMeta {
  readonly env: Env;
}

declare const _NGX_ENV_: Env;

declare namespace NodeJS {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface ProcessEnvironment extends Env {}
}
