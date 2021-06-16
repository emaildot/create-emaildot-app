let mode = 'production';

if (import.meta && import.meta.env && import.meta.env.MODE) {
  mode = import.meta.env.MODE;
}

export const isProd = mode !== 'development';

export const kebabize = (str) =>
  str.replace(
    /[A-Z]+(?![a-z])|[A-Z]/g,
    ($, ofs) => (ofs ? '-' : '') + $.toLowerCase(),
  );
