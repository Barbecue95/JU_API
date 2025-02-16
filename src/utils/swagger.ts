import { Express, Request, Response } from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import { version } from "../../package.json";
import log from "./logger";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "JU API Docs",
      description: "Swagger Documentation for JU_Admin authorized by Justom",
      version,
      servers: ["http://localhost:5000"],
    },
    schemes: ["/juAPI"],
    components: {
      securitySchemas: {
        bearerAuth: {
          type: "http",
          scheme: "barer",
          barerFormat: "JWT",
        },
      },
      security: [
        {
          barerAuth: [],
        },
      ],
    },
  },
  apis: ["./src/routers/*.ts", "./src/schemas/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

function swaggerDocs(app: Express, port: Number) {
  // Swagger page
  app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

  // Docs in JSON format
  app.get("docs.json", (req: Request, res: Response) => {
    res.setHeader("Content-type", "application/json");
    res.send(swaggerSpec);
  });

  log.info(`Docs available at http://localhost:${port}/docs`);
}

export default swaggerDocs;
