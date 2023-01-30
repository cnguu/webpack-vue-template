import { merge } from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import baseConfigDef from '@wpv/builds/base.config';
import { pathResolve, getHtmlWebpackPluginOptions } from '@wpv/builds/util';
import { getEnvConfig } from '@wpv/builds/env';

import type { Configuration } from 'webpack';

const envConfig = getEnvConfig({
  path: pathResolve(`./envs/.env.${process.env.ENV_MODE}`),
});

const baseConfig: Configuration = merge(baseConfigDef, {
  entry: pathResolve('./src/main.ts'),
  output: {
    path: pathResolve('./builds/dist'),
    publicPath: envConfig.WPV_BASE_PATH,
  },
  plugins: [
    new HtmlWebpackPlugin({
      ...getHtmlWebpackPluginOptions(),
      template: pathResolve('./index.html'),
      publicPath: envConfig.WPV_BASE_PATH,
    }),
  ],
});

export default baseConfig;
