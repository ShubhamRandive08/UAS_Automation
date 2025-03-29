// All API Testing code can present here

import { test, request } from "@playwright/test";

test.describe("API testing", async () => {
  let reqContext2;
  test.beforeAll("Before All", async () => {
    reqContext2 = await request.newContext({
      baseURL: "http://localhost:3000",
    });
  });
  test("API request GET practice", async ({ request }) => {
    const res = await request.get("http://localhost:3000/studData"); // This is the 1st method the fire the api request with base URL
    console.log(await res.json());
  });

  test("API call", async () => {
    const reqContext = await request.newContext({
      // This is method 2nd to fire request with base URL separeted
      baseURL: "http://localhost:3000",
      extraHTTPHeaders : {
        'Content-Type' : 'application/json'
      }
    });

    const res1 = await reqContext.get("/studData");
    console.log(await res1.json());
  });
});
