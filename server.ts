// eslint-disable-next-line unicorn/import-style
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { APP_BASE_HREF } from "@angular/common";
import { CommonEngine } from "@angular/ssr";
import FastifyExpress from "@fastify/express";
import express from "express";
import Fastify from "fastify";

import bootstrap from "./src/main.server";

// The Express app is exported so that it can be used by serverless Functions.
export async function app() {
  const server = express();
  const serverDistributionFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistributionFolder = resolve(
    serverDistributionFolder,
    "../browser",
  );
  const indexHtml = join(serverDistributionFolder, "index.server.html");

  const commonEngine = new CommonEngine();

  server.set("view engine", "html");
  server.set("views", browserDistributionFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get(
    "**",
    express.static(browserDistributionFolder, {
      maxAge: "1y",
      index: "index.html",
    }),
  );

  // All regular routes use the Angular engine
  server.get("**", (request, response, next) => {
    const { protocol, originalUrl, baseUrl, headers } = request;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistributionFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => response.send(html))
      .catch((error) => next(error));
  });

  const fastify = Fastify();
  await fastify.register(FastifyExpress);
  fastify.use(server);

  return fastify;
}

function run(): void {
  // biome-ignore lint/complexity/useLiteralKeys: <explanation>
  const port = process.env["PORT"] || 4000;

  // Start up the Node server
  const server = app();
  server.then((fastify) =>
    fastify.listen(port, () => {
      console.log(`Node Express server listening on http://localhost:${port}`);
    }),
  );
}

run();
