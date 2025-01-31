// Type definitions for pem-jwk 1.5
// Project: https://github.com/dannycoates/pem-jwk
// Definitions by: Alessio Paccoia <https://github.com/alessiopcc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface RSA_JWK {
  kty: string;
  n: string;
  e: string;
  d?: string | undefined;
  p?: string | undefined;
  q?: string | undefined;
  dp?: string | undefined;
  dq?: string | undefined;
  qi?: string | undefined;
}

export function pem2jwk(rsa_pem: string): RSA_JWK;
export function jwk2pem(rsa_jwk: RSA_JWK): string;
