import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from 'express'

const options: swaggerJsDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "API documentation for human resources manage system",
    },
    servers: [
      {
        url: "http://localhost:18888/api",
      }
    ],
  },
  apis: ["./src/swagger_docs.ts"],
}
const swaggerSpec = swaggerJsDoc(options);
export const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("Swagger docs available at http://localhost:18888/api-docs");
};