import dotenv from 'dotenv';

import { getFileInfoFromPath } from '@wpv/utils/file';

import type { DotenvConfigOptions } from 'dotenv';

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

/**
 * @description 环境配置参数开头
 */
export const envPrefix = 'WPV_';

/**
 * @description 环境配置
 */
export const envConfig: Record<any, any> = {};

const dotenvConfigOptions = (): DotenvConfigOptions => ({
  encoding: 'utf8',
  debug: false,
  override: true,
});

/**
 * @description 获取环境配置
 */
export const getEnvConfig = (options: DotenvConfigOptions = {}) => {
  const { path } = options;

  if (!path || Object.keys(envConfig).length > 0) return envConfig;

  const { fileDir } = getFileInfoFromPath(path);

  const envConfigCommonRet = dotenv.config({
    ...dotenvConfigOptions(),
    path: `${fileDir}/.env`,
  });
  if (envConfigCommonRet.error) {
    throw envConfigCommonRet.error;
  }

  const envConfigModeRet = dotenv.config({
    ...dotenvConfigOptions(),
    ...options,
  });
  if (envConfigModeRet.error) {
    throw envConfigModeRet.error;
  }

  const envConfigRet = { ...envConfigCommonRet.parsed, ...envConfigModeRet.parsed };
  for (const key of Object.keys(envConfigRet)) {
    if (!key.startsWith(envPrefix)) return;

    let value: any = envConfigRet[key];
    if (value === 'true') {
      value = true;
    } else if (value === 'false') {
      value = false;
    } else if (key === `${envPrefix}SERVER_PORT`) {
      value = Number(value);
    } else if (key === `${envPrefix}SERVER_PROXY`) {
      try {
        value = JSON.parse(value.replace(/'/g, '"'));
      } catch (error) {
        value = '';
      }
    }
    envConfig[key] = value;
  }

  return envConfig;
};
