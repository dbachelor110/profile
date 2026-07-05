export function parse(str: string, options?: any) {
  const obj: any = {};
  if (!str) return obj;
  const pairs = str.split(';');
  for (const pair of pairs) {
    const eqIdx = pair.indexOf('=');
    if (eqIdx === -1) continue;
    const key = pair.substring(0, eqIdx).trim();
    let val = pair.substring(eqIdx + 1).trim();
    if (val.startsWith('"') && val.endsWith('"')) {
      val = val.substring(1, val.length - 1);
    }
    if (obj[key] === undefined) {
      try {
        obj[key] = options?.decode ? options.decode(val) : decodeURIComponent(val);
      } catch {
        obj[key] = val;
      }
    }
  }
  return obj;
}

export const parseCookie = parse;

export function serialize(name: string, val: string, options?: any) {
  let str = name + '=' + (options?.encode ? options.encode(val) : encodeURIComponent(val));
  if (options) {
    if (options.maxAge !== undefined) {
      str += '; Max-Age=' + Math.floor(options.maxAge);
    }
    if (options.domain) {
      str += '; Domain=' + options.domain;
    }
    if (options.path) {
      str += '; Path=' + options.path;
    }
    if (options.expires) {
      str += '; Expires=' + options.expires.toUTCString();
    }
    if (options.httpOnly) {
      str += '; HttpOnly';
    }
    if (options.secure) {
      str += '; Secure';
    }
    if (options.sameSite) {
      const sameSite = typeof options.sameSite === 'string' 
        ? options.sameSite.toLowerCase() 
        : options.sameSite;
      switch (sameSite) {
        case true:
          str += '; SameSite=Strict';
          break;
        case 'lax':
          str += '; SameSite=Lax';
          break;
        case 'strict':
          str += '; SameSite=Strict';
          break;
        case 'none':
          str += '; SameSite=None';
          break;
      }
    }
  }
  return str;
}

export const stringifyCookie = serialize;
export const stringifySetCookie = serialize;

export function parseSetCookie(str: string, options?: any) {
  return [];
}
