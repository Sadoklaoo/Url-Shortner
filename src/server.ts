import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes";
import path from "path";


// Create a new express application instance
const app = express();


// Call midlewares
app.use(cors());
app.use(bodyParser.json());

// Set views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');



//Set all routes from routes folder
app.use("/", routes);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started on port 3000!");
});