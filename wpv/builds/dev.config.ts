import { merge } from 'webpack-merge';

import devConfigDef from '@wpv/builds/dev.config';
import { getDevProxy, pathResolve } from '@wpv/builds/util';
import { getEnvConfig } from '@wpv/builds/env';

import baseConfig from '@wpv/core/builds/base.config';

import type { Configuration } from 'webpack';

const envConfig = getEnvConfig({
  path: pathResolve(`./envs/.env.${process.env.ENV_MODE}`),
});

const devConfig: Configuration = merge(devConfigDef, baseConfig, {
  devServer: {
    port: '7800',
    proxy: getDevProxy(envConfig.WPV_SERVER_PROXY),
    static: {
      directory: pathResolve('./public'),
      publicPath: envConfig.WPV_BASE_PATH,
    },
  },
});

export default devConfig;
