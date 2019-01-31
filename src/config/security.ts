import { SecurityConfig } from '../Library';

export const security: SecurityConfig = {
  schemes: {
    bearer: {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      options: {
        secret: '',
      },
    },
  },
};
