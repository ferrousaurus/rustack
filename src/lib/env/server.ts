import z from "zod";
import { ClientEnvironmentSchema } from "./client.ts";
import { load } from "@std/dotenv";

const denoenv = Deno.env.toObject();

const envfile = await load({
  envPath: ".env",
});

const envlocal = await load({
  envPath: ".env.local",
});

const ServerEnvironmentSchema = ClientEnvironmentSchema.extend({
  BETTER_AUTH_SECRET: z.string(),
  DISCORD_CLIENT_SECRET: z.string(),
  DATABASE_URL: z.string(),
});

const env = ServerEnvironmentSchema.parse({
  ...envfile,
  ...envlocal,
  ...denoenv,
});

export default env;
