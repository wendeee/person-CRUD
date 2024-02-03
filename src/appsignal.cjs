const { Appsignal } = require("@appsignal/nodejs");

new Appsignal({
  active: true,
  name: "techbytes",
  // Your app's AppSignal Push API key. We don't recommend committing this key.
  // Set the Push API key using a system environment variable.
  // pushApiKey: process.env.APPSIGNAL_PUSH_API_KEY,
  pushApiKey: "adfe8e5e-00d4-413f-8e5d-762581a1e8cf",
});
