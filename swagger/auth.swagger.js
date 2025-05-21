/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: User registration and login with JWT authentication
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     RegisterUser:
 *       type: object
 *       required:
 *         - phone
 *       properties:
 *         name:
 *           type: string
 *           example: "Ali"
 *         family:
 *           type: string
 *           example: "Rezaei"
 *         email:
 *           type: string
 *           example: "ali@example.com"
 *         phone:
 *           type: string
 *           example: "09123456789"
 *
 *     LoginUser:
 *       type: object
 *       required:
 *         - phone
 *       properties:
 *         phone:
 *           type: string
 *           example: "09123456789"
 *
 *     AuthResponse:
 *       type: object
 *       properties:
 *         token:
 *           type: string
 *           description: JWT access token
 *           example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *         user:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *               example: "6649e327cfe4f9ec342012d3"
 *             phone:
 *               type: string
 *               example: "09123456789"
 *             role:
 *               type: string
 *               enum: [admin, manager, user]
 *               example: "user"
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user and receive a JWT token
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterUser'
 *     responses:
 *       201:
 *         description: Registration successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       400:
 *         description: Phone number is required
 *       409:
 *         description: Phone number already exists
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login with phone number and receive a JWT token
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginUser'
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       400:
 *         description: Phone number is required
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */

