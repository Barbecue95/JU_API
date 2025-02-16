import express from "express";
import { PORT } from "./config/env";
import router from "./routers/products";
import swaggerDocs from "./utils/swagger";

const app = express();

app.use("/api/products", router);

app.listen(PORT, () => {
  swaggerDocs(app, Number(PORT || 0));
  console.log(`Server is listening on ${PORT}`);
});
