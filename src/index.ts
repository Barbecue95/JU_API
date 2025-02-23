import express from "express";
import { PORT } from "./config/env";
import routes from "./routers";
import swaggerDocs from "./utils/swagger";
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from "cors";


dotenv.config();

const app = express();
// ✅ Enable CORS
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from frontend (update as needed)
    credentials: true, // Allow cookies & authentication headers
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  })
);

// ✅ Enable JSON & Cookie Parsing
app.use(express.json());
app.use(cookieParser());

app.use("/api", routes);

swaggerDocs(app, Number(PORT || 0));

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
