import { Express } from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'desafio-prep2025.1',
      version: '1.0.0',
      description: 'API que preenche templates e formata posts com base em contexto e tonalidade',
    },
  },
  apis: ['./src/routes.ts'],
};

const specs = swaggerJSDoc(options);

export { swaggerUi, specs };
