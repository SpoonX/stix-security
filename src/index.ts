import * as config from './config';
import { ConfigType, ModuleInterface } from 'stix';

export class Security implements ModuleInterface {
  public getServerConfig (): ConfigType {
    return config;
  }
}

export * from './Library';
