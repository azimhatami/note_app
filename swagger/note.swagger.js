/**
 * @swagger
 * tags:
 *  name: Notes
 *  description: Note management operations
 */

/**
 * @swagger
 * components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *      description: Enter your JWT token in the format 'Bearer {token}'
 *  schemas:
 *    Note:
 *      type: object
 *      required:
 *        - title
 *        - content
 *      properties:
 *        title:
 *          type: string
 *          example: My First Note
 *        content:
 *          type: string
 *          example: This is the content of my note
 *        tags:
 *          type: array
 *          items:
 *            type: string
 *          example: ["personal", "important"]
 *        isPinned:
 *          type: boolean
 *          default: false
 *          example: true
 */

/**
 * @swagger
 * /add-note:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    summary: Create a new note
 *    tags: [Notes]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Note'
 *    responses:
 *      201:
 *        description: Note created successfully
 *      400:
 *        description: Invalid input
 *
 */

/**
 * @swagger
 * /notes:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    summary: Get all notes
 *    tags: [Notes]
 *    responses:
 *      200:
 *        description: List of all notes
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Note'
 */

/**
 * @swagger
 * /notes/{noteId}:
 *  get:
 *    summary: Get a note by ID
 *    tags: [Notes]
 *    parameters:
 *      - in: path
 *        name: noteId
 *        schema:
 *          type: string
 *        required: true
 *        description: Note ID
 *    responses:
 *      200:
 *        description: Note found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Note'
 *      404:
 *        description: Note not found
 */

/**
 * @swagger
 * /update-note/{noteId}:
 *  put:
 *    security:
 *      - bearerAuth: []
 *    summary: Update a note
 *    tags: [Notes]
 *    parameters:
 *      - in: path
 *        name: noteId
 *        schema:
 *          type: string
 *        required: true
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Note'
 *    responses:
 *      200:
 *        description: Note updated
 *      404:
 *        description: Note not found
 */

/**
 * @swagger
 * /delete-note/{noteId}:
 *  delete:
 *    security:
 *      - bearerAuth: []
 *    summary: Delete a note
 *    tags: [Notes]
 *    parameters:
 *      - in: path
 *        name: noteId
 *        schema:
 *          type: string
 *        required: true
 *    responses:
 *      200:
 *        description: Note deleted
 *      404:
 *        description: Note not found
 */
