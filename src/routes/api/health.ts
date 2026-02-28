import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/health")({
  server: {
    handlers: {
      GET: () =>
        new Response(JSON.stringify({ status: "ok" }), {
          headers: {
            "Content-Type": "application/json",
          },
          status: 200,
        }),
    },
  },
});
