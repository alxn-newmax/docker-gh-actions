import cors from "cors";
import express from "express";
import router from "./routes/index.js";
import { openConnection } from "./database/connection.js";
import { Redis } from "ioredis";

export class App {
  constructor() {
    this.app = express();
    this.version = "/api";
    this.env = process.env.NODE_ENV;
    this.port = parseInt(process.env.PORT, 10) || 5500;
    // this.redisPort = parseInt(process.env.REDIS_PORT, 10) || 6379;
  }

  middlewares() {
    this.app.use(
      cors({
        origin: "*",
        methods: ["GET", "POST", "DELETE", "PUT"],
        // allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
        credentials: true,
      })
    );
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  routes() {
    this.app.get("/", function (req, res) {
      res.sendFile("index.html", {
        root: "./views",
      });
    });
    this.app.use(this.version, router);
  }

  async redis() {
    const port = parseInt(process.env.REDIS_PORT, 10) || 6379;
    const redistConfig =
      process.env.NODE_ENV === "development"
        ? { port }
        : { host: "newmax-redis" };

    const redisClient = new Redis(redistConfig);
    redisClient.set("1sdf", "sdfsdf");
    return redisClient;
  }

  async run() {
    // await openConnection();
    const serverInfo = `Server is running on port: ${this.port}`;
    this.app.listen(this.port, () => console.info(serverInfo));
  }

  async main() {
    this.redis();
    this.middlewares();
    this.routes();
    await this.run();
  }
}

const app = new App();
await app.main();
// export const redisClient = await app.redis();
