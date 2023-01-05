/**
 * @description 是否是开发环境
 */
export const isDevMode = () => {
  return process.env.NODE_ENV === 'development';
};

/**
 * @description 是否是生产环境
 */
export const isProdMode = () => {
  return process.env.NODE_ENV === 'production';
};
