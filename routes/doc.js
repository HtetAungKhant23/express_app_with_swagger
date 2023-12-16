import express from "express";

const docRouter = express.Router();

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

/**
 * @swagger
 * components:
 *   schemas:
 *     Heros:
 *       type: object
 *       required:
 *         - name
 *         - localized_name
 *         - primary_attr
 *         - attack_type
 *         - roles
 *         - legs
 *         - imageUrl
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the hero
 *         name:
 *           type: string
 *           description: The name of hero
 *         localized_name:
 *           type: string
 *           description: The localized name of hero
 *         primary_attr:
 *           type: boolean
 *           description: Primary attribute of hero
 *         attack_type:
 *           type: string
 *           description: Attack type of hero
 *         roles:
 *           type: string[]
 *           description: Roles of hero
 *         legs:
 *           type: string
 *           description: Number of legs of hero
 *         imageUrl:
 *           type: string
 *           description: Image Url of hero
 *       example:
 *             "id": 5
 *             "name": "npc_dota_hero_crystal_maiden"
 *             "localized_name": "Crystal Maiden"
 *             "primary_attr": "int"
 *             "attack_type": "Ranged"
 *             "roles": ["Support", "Disabler", "Nuker"]
 *             "legs": 2
 *             "imageUrl": "https://liquipedia.net//commons/images/thumb/d/dc/Crystal_Maiden_Large.png/125px-Crystal_Maiden_Large.png"
 */

/**
 * @swagger
 * /api/heros:
 *   get:
 *     summary: Lists all the heros
 *     tags: [Heros]
 *     responses:
 *       200:
 *         description: The list of the heros
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Heros'
 * /api/heros/{id}:
 *   get:
 *     summary: Get the hero by id
 *     tags: [Heros]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The hero id
 *     responses:
 *       200:
 *         description: The hero response by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Heros'
 *       404:
 *         description: The hero was not found
 */

docRouter.get("/", (req, res, next) => {
  console.log("work");
  res.send(data);
});

export default docRouter;
