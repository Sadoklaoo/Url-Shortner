import express from "express";
import routes from "./routes";
import http from "http";
import mongoose from "mongoose";
import { config } from "./config/config";
import Logging from "./library/Logging";

// Connect mongoose
mongoose.Promise = global.Promise;
mongoose
  .connect(config.mongo.url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    useFindAndModify: false,
  })
  .then(() => {
    Logging.info("Database Connected");
    startServer();
  })
  .catch((error) => {
    Logging.error("Unable to connect : ");
    Logging.error(error);
  });

/** Only Start Server if Mongoose Connects */
export default function startServer() {
  // Create a new express application instance
  const app = express();

  /** Log the request */
  app.use((req, res, next) => {
    /** Log the req */
    Logging.info(
      `Incomming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`
    );

    res.on("finish", () => {
      /** Log the res */
      Logging.info(
        `Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`
      );
    });

    next();
  });

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  /** Rules of our API */
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

    if (req.method == "OPTIONS") {
      res.header(
        "Access-Control-Allow-Methods",
        "PUT, POST, PATCH, DELETE, GET"
      );
      return res.status(200).json({});
    }

    next();
  });

  /** Set all routes from routes folder **/
  app.use("/", routes);

  /** Error handling */
  app.use((req, res) => {
    const error = "Not found";

    Logging.error(error);

    res.status(404).json({
      message: error,
    });
  });

  http
    .createServer(app)
    .listen(config.server.port, () =>
      Logging.info(`Server is running on port ${config.server.port}`)
    );

  return app;
}
