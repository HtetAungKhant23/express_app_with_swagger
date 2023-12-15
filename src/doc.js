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
