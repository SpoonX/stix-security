# Stix-security

> This module currently only offers a bearer authentication gate.

[![Slack Status](https://spoonx-slack.herokuapp.com/badge.svg)](https://spoonx-slack.herokuapp.com)

A [stix](https://github.com/SpoonX/stix) module that provides gates for default authentication/security methods.

## Installation

1. `yarn add stix-security`
2. Add to your `config/modules.ts`.
	```ts
   	import { Security } from 'stix-security';

	export const modules = [
	  /* ... */
     Security,
   ];
	```
3. ~~Storm~~ Use the gates.

## Usage

Simply import the desired gate and add it in your config. See the examples below. More info on gates can be found [in the docs](https://stixjs.io/docs/modules/stix-gates/gates-usage).

## Available gates

Each gate implements support for a specific authentication method.

### BearerGate

The BearerGate is for basic header auth using a Bearer.

```
Authorization: Bearer some.jwt.here
```

This gate:

- Verifies that the header exists
- Verifies the header is properly formatted
- Verifies that the token is valid

If these checks fail the request will be denied (unauthorized).

The payload and token will be set on and accessible from:

- `ctx.state.authorization`.

### Configuration

The only required configuration value for this gate is `secret` used to validate the JWT.

```ts
import { SecurityConfig } from 'stix-security';

export const security: SecurityConfig = {
  schemes: {
    bearer: {
      options: {
        secret: 'A SECRET HERE',
      },
    },
  },
};
```

### Example

```ts
import { GateManagerConfigType } from 'stix-gates';
import { BearerGate } from 'stix-security';

export const gate: GateManagerConfigType = {
  rules: new Map<any, any>([
    [ SomeController, { someAction: BearerGate } ],
  ]),
};
```

## Todo

The following gates still have to be built.

- basic
- apiKey
- openIdConnect
- oauth2

## License

MIT
