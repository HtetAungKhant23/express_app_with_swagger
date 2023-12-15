const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const data = [
  {
    id: 1,
    name: "npc_dota_hero_antimage",
    localized_name: "Anti-Mage",
    primary_attr: "agi",
    attack_type: "Melee",
    roles: ["Carry", "Escape", "Nuker"],
    legs: 2,
    imageUrl:
      "https://liquipedia.net//commons/images/thumb/7/70/Anti-Mage_Large.png/125px-Anti-Mage_Large.png",
  },
  {
    id: 2,
    name: "npc_dota_hero_axe",
    localized_name: "Axe",
    primary_attr: "str",
    attack_type: "Melee",
    roles: ["Initiator", "Durable", "Disabler", "Carry"],
    legs: 2,
    imageUrl:
      "https://liquipedia.net//commons/images/thumb/a/a1/Axe_Large.png/125px-Axe_Large.png",
  },
  {
    id: 3,
    name: "npc_dota_hero_bane",
    localized_name: "Bane",
    primary_attr: "all",
    attack_type: "Ranged",
    roles: ["Support", "Disabler", "Nuker", "Durable"],
    legs: 4,
    imageUrl:
      "https://liquipedia.net//commons/images/thumb/7/72/Bane_Large.png/125px-Bane_Large.png",
  },
  {
    id: 4,
    name: "npc_dota_hero_bloodseeker",
    localized_name: "Bloodseeker",
    primary_attr: "agi",
    attack_type: "Melee",
    roles: ["Carry", "Disabler", "Nuker", "Initiator"],
    legs: 2,
    imageUrl:
      "https://liquipedia.net//commons/images/thumb/a/a6/Bloodseeker_Large.png/125px-Bloodseeker_Large.png",
  },
  {
    id: 5,
    name: "npc_dota_hero_crystal_maiden",
    localized_name: "Crystal Maiden",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Support", "Disabler", "Nuker"],
    legs: 2,
    imageUrl:
      "https://liquipedia.net//commons/images/thumb/d/dc/Crystal_Maiden_Large.png/125px-Crystal_Maiden_Large.png",
  },
];

const app = express();
app.use(express.json());

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Dota2 Heros API",
      version: "0.1.0",
      description: "Dota 2 heros api by Florject",
    },
    servers: [
      {
        url: "https://expressappwithswagger-production.up.railway.app",
        // url: "http://localhost:3000",
      },
    ],
  },
  apis: ["*.js"],
};

const specs = swaggerJsdoc(options);

const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.0.0/swagger-ui.min.css";

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { customCssUrl: CSS_URL })
);

app.get("/", (req, res, next) => {
  // res.redirect("http://localhost:3000/api-docs");
  // res.redirect(
  //   "https://expressappwithswagger-production.up.railway.app/api-docs"
  // );
  res.send("Hay");
});

app.get("/api/heros", (req, res, next) => {
  res.send(data);
});

app.listen(3000, () => {
  console.log("server started");
});

module.exports = app;
