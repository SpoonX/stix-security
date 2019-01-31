import  { SecuritySchemeObject } from 'openapi3-ts';

export type SecurityScheme = SecuritySchemeObject & Partial<{ options: BearerOptions }>;

export interface SecurityConfig {
  schemes: {
    [securityScheme: string]: SecurityScheme;
  };
}

export interface BearerOptions {
  secret: string;
}

