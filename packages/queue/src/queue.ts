import { Queue } from "bullmq";

export const jobQueue = new Queue("bestpick-queue", {
  connection: {
    host: "localhost",
    port: 6379,
  },
});