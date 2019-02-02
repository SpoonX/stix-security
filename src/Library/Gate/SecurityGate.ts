import { AbstractGate } from 'stix-gates';

export abstract class SecurityGate extends AbstractGate {
  public static getConfigKey(): string {
    return 'not_implemented';
  }
}
