import { Polly } from "@pollyjs/core";
import { setupPolly } from "setup-polly-jest";
import NodeHttpAdapter from "@pollyjs/adapter-node-http";
import FSPersister from "@pollyjs/persister-fs";

Polly.register(NodeHttpAdapter);
Polly.register(FSPersister);

let context = setupPolly({
  adapters: ["node-http"],
  mode: "replay",
  logging: false,
  recordIfMissing: false,
  expiryStrategy: "warn",
  // https://netflix.github.io/pollyjs/#/configuration?id=matchrequestsby
  matchRequestsBy: {
    method: true,
    headers: {
      exclude: ["user-agent"]
    },
    body: true,
    order: true,
    url: {
      protocol: true,
      username: true,
      password: true,
      hostname: true,
      port: true,
      pathname: false,
      query: true,
      hash: false
    }
  },
  persister: "fs",
  persisterOptions: {
    fs: {
      recordingsDir: "./test/__recordings__"
    }
  }
});
