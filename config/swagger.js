const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');


function swaggerConfig(app) {
  const swaggerDocument = swaggerJsDoc({
    swaggerDefinition: {
      openapi: '3.0.4',
      info: {
        title: 'Note App',
        version: '1.0.0',
        description: 'API documentation',
        contact: {
          name: 'Azim Hatami',
          email: 'azimhatami.dev@gmail.com'
        }
      }
    },
    apis: ['swagger/*.swagger.js']
  });

  const swagger = swaggerUi.setup(swaggerDocument, {});
  app.use('/docs', swaggerUi.serve, swagger)
}


module.exports = swaggerConfig
