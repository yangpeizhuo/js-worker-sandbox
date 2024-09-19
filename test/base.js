import { WorkerSandbox } from "../src/core.js";

const ws = new WorkerSandbox({
  script: `
addEventListener("fetch", (event) => {
  console.log(event.request.url);
  event.respondWith(new Response("Hello WorkerSandbox!"));
});`,
});

const res = await ws.dispatchFetch("http://localhost:8000/");
console.log(await res.text());
await ws.dispose();
