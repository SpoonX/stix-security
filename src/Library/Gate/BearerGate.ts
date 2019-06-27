import { config, ContextInterface, Response } from 'stix';
import jsonwebtoken from 'jsonwebtoken';
import { SecurityConfig, SecurityScheme } from '../SecurityConfig';
import { SecurityGate } from './SecurityGate';

export const configKey = 'bearer';

export class BearerGate extends SecurityGate {
  @config('security')
  private config: SecurityConfig;

  public static getConfigKey(): string {
    return configKey;
  }

  public passThrough(ctx: ContextInterface): Response | void {
    return this.validate(ctx);
  }

  public validate(ctx: ContextInterface) {
    const bearerScheme: SecurityScheme = this.config.schemes[configKey];
    const Authorization: string = ctx.headers.authorization;

    if (!Authorization) {
      return this.unauthorizedResponse('missing_auth_header');
    }

    try {
      const [, token] = Authorization.split(' ');

      ctx.state.authorization = { token, payload: jsonwebtoken.verify(token, bearerScheme.options.secret) };
    } catch (error) {
      return this.unauthorizedResponse(error.message);
    }
  }
}
