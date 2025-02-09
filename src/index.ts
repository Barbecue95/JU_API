import express from "express";
import router from "./routers/products";

const app = express();

app.use("/api/products", router);

const port = 5000;

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
