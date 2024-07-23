import fs from "node:fs";

// eslint-disable-next-line @typescript-eslint/no-require-imports, unicorn/prefer-module
const appVersion = require("../../package.json").version;
// eslint-disable-next-line @typescript-eslint/no-require-imports, unicorn/prefer-module
require("dotenv").config({
  path: "src/environments/.env",
});
const setEnvironment = () => {
  const writeFile = fs.writeFile;
  // Configure Angular `environment.ts` file path
  const targetPath = "./src/environments/environment.ts";
  // Load node modules

  // `environment.ts` file structure
  const environmentConfigFile = `export const environment = {
    projectId: "${
      // biome-ignore lint/complexity/useLiteralKeys: <explanation>
      process.env["FIREBASE_PROJECT_ID"]
    }",
    appId: "${
      // biome-ignore lint/complexity/useLiteralKeys: <explanation>
      process.env["FIREBASE_APP_ID"]
    }",
    storageBucket: "${
      // biome-ignore lint/complexity/useLiteralKeys: <explanation>
      process.env["FIREBASE_STORAGE_BUCKET"]
    }",
    apiKey: "${
      // biome-ignore lint/complexity/useLiteralKeys: <explanation>
      process.env["FIREBASE_API_KEY"]
    }",
    authDomain: "${
      // biome-ignore lint/complexity/useLiteralKeys: <explanation>
      process.env["FIREBASE_AUTH_DOMAIN"]
    }",
    messagingSenderId: "${
      // biome-ignore lint/complexity/useLiteralKeys: <explanation>
      process.env["FIREBASE_MESSAGING_SENDER_ID"]
    }",
    measurementId: "${
      // biome-ignore lint/complexity/useLiteralKeys: <explanation>
      process.env["FIREBASE_MEASUREMENT_ID"]
    }",
    appVersion: '${appVersion}',
    production: ${
      // biome-ignore lint/complexity/useLiteralKeys: <explanation>
      process.env["NODE_ENV"] === "production"
    },
};
`;
  console.log(
    "The file `environment.ts` will be written with the following content: \n",
  );
  writeFile(targetPath, environmentConfigFile, (error) => {
    if (error) {
      console.error(error);
      throw error;
    }
    console.log(
      `Angular environment.ts file generated correctly at ${targetPath} \n`,
    );
  });
};

setEnvironment();
