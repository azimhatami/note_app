/**
 * @swagger
 * tags:
 *  name: Authentication
 *  description: User authentication and authorization
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Register:
 *      type: object
 *      properties:
 *        fullName:
 *          type: string
 *          example: Ali Mohseni
 *        email:
 *          type: string
 *          example: test@gmail.com
 *        password:
 *          type: string
 *          example: testpass1
 *    Login:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *          example: test@gmail.com
 *        password:
 *          type: string
 *          example: testpass1
 */

/**
 * @swagger
 *
 * /auth/register:
 *  post:
 *    summary: Register user
 *    tags:
 *      - Authentication
 *    requestBody:
 *      content:
 *        application/x-www-form-urlencoded:
 *          schema:
 *            $ref: '#/components/schemas/Register'
 *
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Register'
 *    responses:
 *      201:
 *        description: User created successfully
 */

/**
 * @swagger
 *
 * /auth/login:
 *  post:
 *    summary: Login user
 *    tags:
 *      - Authentication
 *    requestBody:
 *      content:
 *        application/x-www-form-urlencoded:
 *          schema:
 *            $ref: '#/components/schemas/Login'
 *
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Login'
 *    responses:
 *      200:
 *        description: User login successful
 */
