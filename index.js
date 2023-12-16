import swaggerUI from "swagger-ui-express";
import express from "express";
import swaggerJsDoc from "swagger-jsdoc";
import docRouter from "./routes/doc.js";

const url = "https://express-app-with-swagger.vercel.app";
// const url = "http://localhost:2000";

const app = express();
app.use(express.json());

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0.0",
      description: "A simple Express Library API",
      termsOfService: "http://example.com/terms/",
      contact: {
        name: "API Support",
        url: "http://www.exmaple.com/support",
        email: "support@example.com",
      },
    },
    servers: [
      {
        url,
        description: "My API Documentation",
      },
    ],
  },
  // This is to call all the file
  apis: ["routes/*.js"],
};

const specs = swaggerJsDoc(options);

const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.0.0/swagger-ui.min.css";

app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(specs, { customCssUrl: CSS_URL })
);

app.get("/", (req, res, next) => {
  console.log("please");

  // res.redirect("http://localhost:3000/api-docs");
  res.redirect(`${url}/api-docs`);
});

app.use("/api/heros", docRouter);

// app.get("/api/heros", (req, res, next) => {
//   console.log("work");
//   res.send(data);
// });

app.listen(2000, () => {
  console.log("server started");
});
