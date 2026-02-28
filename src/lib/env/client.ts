import z from "zod";

async function getServerEnv() {
  const { load } = await import("@std/dotenv");
  const denoenv = Deno.env.toObject();
  const envfile = await load({
    envPath: ".env",
  });
  const envlocal = await load({
    envPath: ".env.local",
  });
  return {
    ...envfile,
    ...envlocal,
    ...denoenv,
  };
}

export const ClientEnvironmentSchema = z.object({
  VITE_BETTER_AUTH_URL: z.string(),
  VITE_DISCORD_CLIENT_ID: z.string(),
});

const env = ClientEnvironmentSchema.parse(
  import.meta.env ?? (await getServerEnv()),
);

export default env;
