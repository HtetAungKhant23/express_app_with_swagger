const url = "https://express-app-with-swagger.vercel.app";
// const url = "http://localhost:2000";

export const options = {
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
  apis: ["./routes*/*.js"],
};
