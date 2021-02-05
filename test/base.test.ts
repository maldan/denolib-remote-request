import { assertEquals } from "https://deno.land/std@0.85.0/testing/asserts.ts";

import { RemoteRequest } from "./../mod.ts";

// Simple name and function, compact form, but not configurable
Deno.test("hello world #1", async () => {
  await RemoteRequest.get(
    "https://developer.mozilla.org/en-US/docs/Web/API/Body/text",
  );

  const x = 1 + 2;
  assertEquals(x, 3);
});
