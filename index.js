import cors from "cors";
import express from "express";
import router from "./routes/index.js";

export class App {
  constructor() {
    this.app = express();
    this.version = "/api";
    this.env = process.env.NODE_ENV;
    this.port = 4900;
  }

  middlewares() {
    this.app.use(
      cors({
        origin: "*",
        methods: ["GET", "POST"],
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

  async run() {
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
