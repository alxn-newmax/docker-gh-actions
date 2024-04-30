import cors from "cors";
import redis from "redis";
import express from "express";
import router from "./routes/index.js";
import { openConnection } from "./database/connection.js";

export class App {
  constructor() {
    this.app = express();
    this.version = "/api";
    this.env = process.env.NODE_ENV;
    this.port = parseInt(process.env.PORT, 10) || 5500;
    this.redisPort = parseInt(process.env.REDIS_PORT, 10) || 6379;
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
    const client = redis.createClient(this.redisPort);
    await client.connect();
    return client;
  }

  async run() {
    // await openConnection();
    const serverInfo = `Server is running on port: ${this.port}`;
    this.app.listen(this.port, () => console.info(serverInfo));
  }

  async main() {
    this.middlewares();
    this.routes();
    await this.run();
  }
}

const app = new App();
await app.main();
// export const redisClient = await app.redis();
