import express from "express";
import router from "./routers/products";
import swaggerDocs from "./utils/swagger";

const app = express();

app.use("/api/products", router);

const port = 5000;

app.listen(port, () => {
  swaggerDocs(app, port);
  console.log(`Server is listening on ${port}`);
});
