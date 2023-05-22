import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AuthRoute from "./Routes/AuthRoute.js";
import UserRoute from "./Routes/UserRoute.js";
import PostRoute from "./Routes/PostRoute.js";
import UploadRoute from "./Routes/UploadRoute.js"
import cors from "cors"

dotenv.config({ path: "./config/config.env" });
const app = express();
app.use(cors())

//to serve images for public
app.use(express.static("public"))
app.use('/images', express.static("images"))

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

mongoose
  .connect(process.env.LOCAL_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`connected to database`))
  .catch((error) => console.log(error));

// routes
app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
app.use("/post", PostRoute);
app.use("/upload", UploadRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is working on port ${process.env.PORT}`);
});
