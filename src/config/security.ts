import { SecurityConfig } from '../Library';

export const security: SecurityConfig = {
  schemes: {
    bearer: {
      scheme: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
      options: {
        secret: '',
      },
    },
  },
};
