import { assertEquals } from "jsr:@std/assert";
import keys from "./keys.ts";

Deno.test("keys - empty object returns empty array", () => {
  assertEquals(keys({}), []);
});

Deno.test("keys - single key", () => {
  assertEquals(keys({ a: 1 }), ["a"]);
});

Deno.test("keys - multiple keys", () => {
  const result = keys({ a: 1, b: 2, c: 3 });
  assertEquals(result.sort(), ["a", "b", "c"]);
});

Deno.test("keys - preserves string key types", () => {
  const obj = { foo: "bar", baz: 42 };
  const result: (keyof typeof obj)[] = keys(obj);
  assertEquals(result.sort(), ["baz", "foo"]);
});
