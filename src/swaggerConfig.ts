import swaggerJsdoc from 'swagger-jsdoc';
// import swaggerUi from 'swagger-ui-express';

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'ALIGHT CHALLENGE API',
            version: '1.0.0',
            description: 'API documentation for the Alight HR platform challenge',
        },
        servers: [
            {
                url: `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 4000}`,
                description: 'Development server',
            },
        ],
    },
    apis: [
        './src/routes/*.ts',
        './src/routes/v1/*.ts'
    ], // Path to the API docs
};

const specs = swaggerJsdoc(options);
export default specs;
