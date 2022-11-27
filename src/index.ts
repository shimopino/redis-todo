import Redis from "ioredis";

const client = new Redis({
  host: "localhost",
  port: 6379,
});

const main = async () => {
  await client.set("sampleKey", "hello world");

  const sampleKey = await client.get("sampleKey");

  console.log({ sampleKey });

  await client.del("sampleKey");

  return;
};

main();
