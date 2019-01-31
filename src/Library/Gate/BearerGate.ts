import { config, ContextInterface, Response } from 'stix';
import { AbstractGate } from 'stix-gates';
import jsonwebtoken from 'jsonwebtoken';
import { SecurityConfig, SecurityScheme } from '../SecurityConfig';

export const configKey = 'bearer';

export class BearerGate extends AbstractGate {
  @config('security')
  private config: SecurityConfig;

  public passThrough(ctx: ContextInterface): Response | void {
    const bearerScheme: SecurityScheme = this.config.schemes[configKey];
    const Authorization: string = ctx.headers.Authorization;

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
