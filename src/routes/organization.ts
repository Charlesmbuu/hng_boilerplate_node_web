import { Router } from "express";
import { create, getAll, getById, addUser } from "../controllers/organization";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Organization
 *   description: API endpoints for managing organizations
 */

/**
 * @swagger
 * /api/organizations:
 *   post:
 *     summary: Create a new organization
 *     tags: [Organization]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Organization created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 message:
 *                   type: string
 *                   example: Organization created successfully
 *                 data:
 *                   $ref: '#/components/schemas/Organization'
 *       '400':
 *         description: Bad request - validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Bad request
 *                 message:
 *                   type: string
 *                   example: Client error
 *                 statusCode:
 *                   type: number
 *                   example: 400
 */
router.post("/", create);

/**
 * @swagger
 * /api/organizations:
 *   get:
 *     summary: Get all organizations belonging to the logged-in user
 *     tags: [Organization]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Successful retrieval of user's organizations
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 message:
 *                   type: string
 *                   example: Organizations retrieved successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     organizations:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/Organization'
 *       '401':
 *         description: Unauthorized - user is not logged in or token is invalid
 */
router.get("/", getAll);

/**
 * @swagger
 * /api/organizations/{orgId}:
 *   get:
 *     summary: Get details of a single organization (By Id)
 *     tags: [Organization]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: orgId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful retrieval of organization details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 message:
 *                   type: string
 *                   example: Organization details retrieved successfully
 *                 data:
 *                   $ref: '#/components/schemas/Organization'
 *       '401':
 *         description: Unauthorized - user is not logged in or token is invalid
 */
router.get("/:orgId", getById);

/**
 * @swagger
 * /api/organizations/{orgId}/users:
 *   post:
 *     summary: Add a user to an organization
 *     tags: [Organization]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: orgId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: User ID to add to the organization
 *     responses:
 *       '200':
 *         description: User added to organization successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 message:
 *                   type: string
 *                   example: User added to organization successfully
 *       '401':
 *         description: Unauthorized - user is not logged in or token is invalid
 */
router.post("/:orgId/users", addUser);

export default router;
